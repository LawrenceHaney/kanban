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
    <div v-if="moveMode" >
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div v-for="list in lists" :key="list.id">
        <button class="dropdown-item" @click="moveTask(list.id)">{{list.title}}</button>
      </div>
      </div>
      <button @click="toggleMove">cancel</button>
  </div>
    </div>
    <div v-else @click="toggleMove()">
      <button>toggle move</button>
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
    moveMode: false,
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
  toggleMove(){
    this.moveMode = !this.moveMode
  },
  moveTask(newId){
    this.newTask.listId = this.taskProp.listId
    this.newTask.newId = newId
    this.newTask.id = this.taskProp.id
    console.log(this.newTask)
    this.$store.dispatch("moveTask", this.newTask)
    this.toggleMove()
  }
},
mounted(){
  this.$store.dispatch("getComments", this.taskProp.id)
},
computed:{
  comments(){
    return this.$store.state.comments[this.taskProp.id]
  },
  lists(){
    return this.$store.state.lists
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