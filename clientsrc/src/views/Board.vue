<template>
  <div class="board container-fluid">
    <div v-if="board.title">
      <div v-if="!editMode" class="row justify-content-between align-items-center text-dark bg-faded pt-2 mb-2">
        <div class="d-flex">
          <h1 class="mx-2">{{board.title}}</h1>
          <i class="fa fa-pencil-alt align-self-center icon-pop" @click="toggleEdit" aria-hidden="true"></i>
        </div>
        <i class="fa fa-times align-self-start mr-3 icon-pop" @click="deleteBoard" aria-hidden="true"></i>
      </div>
      <div v-if="editMode" class="row justify-content-between align-items-center text-dark bg-faded pt-2 mb-2">
        <div class="mb-4">
          <i class="fa fa-undo align-self-center icon-pop ml-2" @click="toggleEdit" aria-hidden="true"></i>
          <input class="mx-1" type="text" :placeholder="board.title" v-model="newBoard.title" required />
          <i class="fas fa-save align-self-center icon-pop" @click="editBoard"></i>
        </div>
      </div>
      <!-- List form -->
      <div class="row justify-content-center">
        <form @submit.prevent="addList">
          <input type="text" placeholder="Board Title" v-model="newList.title" required />
          <button type="submit" class="btn btn-success">Create List</button>
        </form>
      </div>
      <!-- List components -->
      <div class="row">
        <list-component v-for="list in lists" :key="list.id" :listProp="list" />
      </div>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
  import listComponent from "../components/listComponent.vue";
  export default {
    name: "board",
    mounted() {
      this.$store.dispatch("setActiveBoard", this.$route.params.boardId)
      this.$store.dispatch("getLists", this.$route.params.boardId)
    },
    data() {
      return {
        newList: {
          title: "",
          creatorEmail: this.$auth.userInfo.email,
        },
        newBoard: {
          title: "",
          id: this.$route.params.boardId,
          creatorEmail: this.$auth.userInfo.email,
        },
        editMode: false,
        listProp: {}
      }
    },
    computed: {
      board() {
        return this.$store.state.activeBoard;
      },
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      addList() {
        this.$store.dispatch("addList", this.newList);
        this.newList = {
          title: "",
          creatorEmail: this.$auth.userInfo.email,
        };
      },
      toggleEdit() {
        this.editMode = !this.editMode
      },
      editBoard() {
        if (this.newBoard.title) {
          this.$store.dispatch("editBoard", this.newBoard)
          this.toggleEdit()
        } else window.alert("Field cannot be empty")
      },
      deleteBoard() {
        if (window.confirm("Are you sure you want to delete this board?")) {
          this.$store.dispatch("deleteBoard", this.$route.params.boardId)
        }
      }
    },
    components: {
      listComponent
    },
    props: ["boardId"]
  };
</script>