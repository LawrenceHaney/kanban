<template>
  <div class="boards container-fluid">
    <div class="row justify-content-around">
    <div class="col-3 bg-primary p-4 my-4 content-shadow pop">
      <h1 class="card-title">Add a new board</h1>
    <form @submit.prevent="addBoard" class="row justify-content-center">
      <input type="text" placeholder="title" v-model="newBoard.title" required  class="col-10 m-1"/>
      <textarea type="text" placeholder="description" v-model="newBoard.description" class="col-10 m-1"/>
      <button type="submit" class="btn btn-outline-dark m-1">Create Board</button>
    </form>
      </div>
      <div class="col-7 card bg-success my-4 content-shadow">

    <div v-for="board in boards" :key="board.id" class="row justify-content-around my-2">
      <router-link :to="{name: 'board', params: {boardId: board.id}}" class="btn btn-primary justify-content-between col-10 my-2pop">
        <div class="row">
          <div class="col-3 border-right">
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
        <button type="button" class="btn btn-danger" @click="deleteBoard(board.id)">Delete</button>
          </div> 
          </div>
      </router-link>
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