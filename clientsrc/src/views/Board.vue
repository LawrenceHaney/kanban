<template>
  <div class="board container-fluid mt-2">
    <div v-if="board.title">
      <div v-if="!editMode" class="row justify-content-between">
        <h1>{{board.title}}</h1>
        <div>
          <button type="button" class="btn btn-primary" @click="toggleEdit">Edit</button>
          <button type="button" class="btn btn-danger" @click="deleteBoard">Delete</button>
        </div>
      </div>
      <div v-if="editMode" class="row justify-content-between">
        <input type="text" :placeholder="board.title" v-model="newBoard.title" required />
        <div>
          <button type="button" class="btn btn-primary" @click="editBoard">Save</button>
          <button type="button" class="btn btn-danger" @click="toggleEdit">Cancel</button>
        </div>
      </div>
      <!-- List form -->
      <div class="row justify-content-center">
        <form @submit.prevent="addList">
          <input type="text" placeholder="title" v-model="newList.title" required />
          <button type="submit">Create List</button>
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
      this.$store.dispatch("getLists", this.newList.boardId)
    },
    data() {
      return {
        newList: {
          title: "",
          boardId: this.$store.state.activeBoard.id,
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
        console.log(this.newList);
        this.$store.dispatch("addList", this.newList);
        this.newList.title = { title: "" };
      },
      toggleEdit() {
        this.editMode = !this.editMode
      },
      editBoard() {
        this.$store.dispatch("editBoard", this.newBoard)
        this.toggleEdit()
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