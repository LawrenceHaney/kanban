<template>
  <div class="card col-10 my-1 py-1 bg-dark text-light">
    <div v-if="!editMode" class="row justify-content-between px-2">
      <h4 class="card-title">{{taskProp.title}} </h4>
      <div class="d-flex align-items-center">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Move to
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div v-for="list in lists" :key="list.id">
              <button class="dropdown-item" @click="moveTask(list.id)">{{list.title}}</button>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-light" @click="toggleEdit">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteTask">Delete</button>
      </div>
    </div>
    <div v-if="editMode" class="row justify-content-between px-1">
      <input v-model="newTask.title" :placeholder="taskProp.title" class="card-title" />
      <div>
        <button type="button" class="btn btn-light" @click="editTask">Save</button>
        <button type="button" class="btn btn-danger" @click="toggleEdit">Cancel</button>
      </div>
    </div>
    <comment-component class="row" v-for="comment in comments" :key="comment.id" :commentProp="comment" />
    <form @submit.prevent="addComment" class="mt-5 mb-1">
      <input class="col-12" type="text" placeholder="New Comment" v-model="newComment.title" required />
      <button class="btn btn-secondary mt-1" type="submit">Create Comment</button>
    </form>
  </div>
</template>

<script>
  import commentComponent from "./commentComponent.vue"
  export default {
    name: "task",
    data() {
      return {
        newComment: {},
        newTask: {},
        editMode: false,
        moveMode: false,
      }
    },
    methods: {
      addComment() {
        this.newComment.taskId = this.taskProp.id
        this.$store.dispatch("addComment", this.newComment)
        this.newComment = {}
      },
      editTask() {
        this.newTask.listId = this.taskProp.listId
        this.newTask.id = this.taskProp.id
        this.$store.dispatch("editTask", this.newTask)
        this.toggleEdit()
      },
      deleteTask() {
        this.$store.dispatch("deleteTask", this.taskProp)
      },
      toggleEdit() {
        this.editMode = !this.editMode
      },
      toggleMove() {
        this.moveMode = !this.moveMode
      },
      moveTask(newId) {
        this.newTask.listId = this.taskProp.listId
        this.newTask.newId = newId
        this.newTask.id = this.taskProp.id
        console.log(this.newTask)
        this.$store.dispatch("moveTask", this.newTask)
        this.toggleMove()
      }
    },
    mounted() {
      this.$store.dispatch("getComments", this.taskProp.id)
    },
    computed: {
      comments() {
        return this.$store.state.comments[this.taskProp.id]
      },
      lists() {
        return this.$store.state.lists
      }
    },
    props: ["taskProp"],
    components: {
      commentComponent
    },

  }
</script>

<style>

</style>