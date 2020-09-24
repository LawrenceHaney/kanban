<template>
  <div class="board container-fluid">
    <div v-if="board.title">
      <div v-if="!editMode"
        class="row justify-content-between align-items-center text-dark bg-faded py-2 mb-3 content-shadow-lite">
        <div class="d-flex fade-in">
          <i class="fa fa-pencil-alt align-self-center icon-pop ml-2" @click="toggleEdit" aria-hidden="true"></i>
          <h1 class="mx-2 fjalla">{{board.title}}</h1>
        </div>
        <!-- List form -->
        <div class="justify-content-center mt-2 fade-in">
          <form @submit.prevent="addList">
            <div class="input-group mb-3">
              <input type="text" class="form-control bg-light" v-model="newList.title" placeholder="New List">
              <div class="input-group-append">
                <button class="btn btn-secondary" type="submit">Create List</button>
              </div>
            </div>
          </form>
        </div>
        <i class="fa fa-times align-self-start mr-3 icon-pop fade-in" @click="deleteBoard" aria-hidden="true"></i>
      </div>
      <div v-if="editMode" class="row justify-content-between align-items-center text-dark bg-faded pt-2">
        <div class="mt-2 mb-3 d-flex">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-secondary" @click="toggleEdit" type="button"><i
                  class="fa fa-undo align-self-center" aria-hidden="true"></i></button>
            </div>
            <input type="text" class="form-control bg-light" v-model="newBoard.title" placeholder="New Title">
            <div class="input-group-append">
              <button class="btn btn-secondary" @click="editBoard" type="button"><i
                  class="fas fa-save align-self-center"></i></button>
            </div>
          </div>
        </div>

      </div>


      <!-- List components -->
      <div class="row fade-in justify-content-around">
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
          title: this.$store.state.activeBoard.title,
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
        Swal.fire({
          title: 'Are you sure you want to delete this board?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: 'var(--danger)',
          cancelButtonColor: 'var(--success)',
          confirmButtonText: 'Yes, delete it!',
          background: 'var(--lighttransparent)'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteBoard", this.$route.params.boardId)
            Swal.fire({
              title: 'Deleted!',
              text: 'Your board has been deleted.',
              confirmButtonText: 'OK',
              background: 'var(--lighttransparent)',
              icon: 'success'
            })
          }
        })
      }
    },
    components: {
      listComponent
    },
    props: ["boardId"]
  };
</script>