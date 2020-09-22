<template>
  <div class="card">
    <div v-if="!editMode">
      <h4 class="card-title">{{taskProp.title}} </h4>
      <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Edit</button>
      <button type="button" class="btn btn-outline-danger" @click="deleteTask">Delete</button>
    </div>
    <div v-else>
      <input v-model="newTask.title" :placeholder="taskProp.title"  class= "card-title" />
      <button type="button" class="btn btn-outline-danger" @click="editTask">Save</button>
      <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Cancel</button>
    </div>
    <h1>Comments</h1>
    <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment"/>
        <form @submit.prevent="addComment">
          <input type="text" placeholder="title" v-model="newComment.title" required />
          <button type="submit">Create Comment</button>
        </form>
  </div>
</template>

<script>
import commentComponent from "./commentComponent.vue"
export default {
  name:"task",
data(){
  return{
    newComment: {},
    newTask: {},
    editMode: false,
  }
},
methods:{
  addComment(){
  this.newComment.taskId = this.taskProp.id
   this.$store.dispatch("addComment", this.newComment)
   this.newComment = {}
  },
  editTask(){
    this.newTask.listId = this.taskProp.listId
    this.newTask.id = this.taskProp.id
    this.$store.dispatch("editTask", this.newTask)
    this.toggleEdit()
  },
  deleteTask(){
    this.$store.dispatch("deleteTask", this.taskProp)
  },
  toggleEdit(){
    this.editMode = !this.editMode
  },
},
mounted(){
  this.$store.dispatch("getComments", this.taskProp.id)
},
computed:{
  comments(){
    return this.$store.state.comments[this.taskProp.id]
  }
},
  props: ["taskProp"],
components:{
  commentComponent
},

}
</script>

<style>

</style>