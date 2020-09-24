<template>
  <div :id="taskProp.id" class="card col-12 my-1 py-1 darken-bg content-shadow-lite2" @dragstart="drag($event)">
    <div v-if="!editMode" class="row justify-content-between px-2">
      <div class="d-flex justify-content-between">
        <i class="fa fa-pencil-alt mt-2 mx-1 icon-pop text-pop" @click="toggleEdit" aria-hidden="true"></i>
        <h4 class="card-title comorant text-pop">{{taskProp.title}} </h4>
      </div>
      <i class="fa fa-times align-self-start  icon-pop text-pop" @click="deleteTask" aria-hidden="true"></i>
    </div>
    <div v-if="editMode" class="row justify-content-between px-1">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-secondary" @click="toggleEdit" type="button"><i class="fa fa-undo align-self-center"
              aria-hidden="true"></i></button>
        </div>
        <input type="text" class="form-control bg-light" v-model="newTask.title" placeholder="New Title">
        <div class="input-group-append">
          <button class="btn btn-secondary" @click="editTask" type="button"><i
              class="fas fa-save align-self-center"></i></button>
        </div>
      </div>
    </div>

    <comment-component class="row" v-for="comment in comments" :key="comment.id" :commentProp="comment" />
    <form @submit.prevent="addComment" class="mt-3 mb-1">
      <div class="input-group mt-3">
        <input type="text" class="form-control bg-light" v-model="newComment.title" placeholder="New Comment">
        <div class="input-group-append">
          <button class="btn btn-secondary" type="submit"><i class="fa fa-plus" aria-hidden="true"></i></button>
        </div>
      </div>
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
        newTask: { title: this.taskProp.title },
        editMode: false,
        moveMode: false,
      }
    },
    methods: {
      addComment() {
        this.newComment.taskId = this.taskProp.id
        this.newComment.boardId = this.taskProp.boardId
        this.$store.dispatch("addComment", this.newComment)
        this.newComment = {}
      },
      editTask() {
        if (this.newTask.title) {
          this.newTask.listId = this.taskProp.listId
          this.newTask.id = this.taskProp.id
          this.$store.dispatch("editTask", this.newTask)
          this.toggleEdit()
        } else window.alert("Field cannot be empty")
      },
      deleteTask() {
        if (window.confirm("Are you sure you want to delete this task?")) {
          this.$store.dispatch("deleteTask", this.taskProp)
        }
      },
      toggleEdit() {
        this.editMode = !this.editMode
      },
      toggleMove() {
        this.moveMode = !this.moveMode
      },
      //legacy move
      // moveTask(newId) {
      //   this.newTask.listId = this.taskProp.listId
      //   this.newTask.newId = newId
      //   this.newTask.id = this.taskProp.id
      //   this.$store.dispatch("moveTask", this.newTask)
      //   this.toggleMove()
      // },
      drag(ev) {
      ev.dataTransfer.setData("text", JSON.stringify(this.taskProp));
      console.log(ev)
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