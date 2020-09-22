<template>
  <div class="boards container-fluid">
    <div class="row justify-content-around">
    <div class="col-3 bg-primary p-4 my-4">
      <h1 class="card-title">Add a new board</h1>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
      </div>
      <div class="col-7 card bg-warning my-4">

    <div v-for="board in boards" :key="board.id" class="row justify-content-around">
      <card class="bg-primary p-3 col-10 my-1">
      <router-link :to="{name: 'board', params: {boardId: board.id}}" class="btn btn-secondary justify-content-between row">
        <div class="row">
          <div class="col-3 bg-sucess">
          <p>
          {{board.creator.name}}
          </p>
          <img :src="board.creator.picture" alt="" class="profile">
          
          </div>
          <div class="col-9">

          <h4>
          {{board.title}} 
          </h4>
          <h6>
          {{board.description}}
          </h6>
          </div> 
          </div>
        <button type="button" class="btn btn-danger" @click="deleteBoard(board.id)">Delete</button>
      </router-link>
      
      </card>
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
        if (window.confirm("Are you sure you want to delete this board?")) {
          this.$store.dispatch("deleteBoard", id)
        }
      }
    }
  };
</script>