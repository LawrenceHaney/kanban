<template>
  <div class="boards container-fluid">
    <div class="row justify-content-around">
      <div class="col-12 col-lg-3 darken-bg p-4 my-4 content-shadow pop">
        <h1 class="card-title text-pop fade-in fjalla">Add a new board</h1>
        <form @submit.prevent="addBoard" class="row justify-content-center fade-in">
          <input type="text" placeholder="title" v-model="newBoard.title" required class="col-10 m-1" />
          <textarea type="text" placeholder="description" v-model="newBoard.description" class="col-10 m-1" />
          <button type="submit" class="btn btn-outline-light m-1 fade-in">Create Board</button>
    </form>
      </div>
      <div class="col-12 col-lg-10 card darken-bg my-4 content-shadow">

    <div v-for="board in boards" :key="board.id" class="row justify-content-around my-2">
      <div class="justify-content-between col-10 my-2 pop fade-in p-2 text-pop">
        <div class="row darken-bg">
          <div class="col-3 d-none d-lg-block profile-box p-3">
          <img :src="board.creator.picture" alt="" class="profile my-1">
          <p class="nixie">
          {{board.creator.name}}
          </p>
          
          </div>
            <div class="col-12 col-lg-9 d-flex flex-column justify-content-around text-pop">
              <router-link :to="{name: 'board', params: {boardId: board.id}}">
              <h1 class="fjalla">
              {{board.title}} 
              </h1>
              <h4 class="comorant">
              {{board.description}}
              </h4>
            </router-link> 
              <button type="button" class="btn btn-danger" @click="deleteBoard(board.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "boards",
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(id) {
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
            this.$store.dispatch("deleteBoard", id)
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
    }
  };
</script>