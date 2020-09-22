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
        <form @submit.prevent="addComment">
          <input type="text" placeholder="title" v-model="newCom.title" required />
          <button type="submit">Create Comment</button>
        </form>
  </div>
</template>

<script>
export default {
data(){
  return{
    newCom: {},
    newTask: {},
    editMode: false,
  }
},
methods:{
  addComment(){
    
  },
  editTask(){

  },
  deleteTask(){
    this.$store.dispatch("deleteTask", this.taskProp)
  },
  toggleEdit(){
    this.editMode = !this.editMode
  },
},

  props: ["taskProp"],
}
</script>

<style>

</style>