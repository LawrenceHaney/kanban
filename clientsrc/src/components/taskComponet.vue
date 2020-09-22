<template>
  <div class="card">
    <h6 class="card-title">{{taskProp.title}}</h6>
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
    newCom: {}
  }
},
methods:{
  addComment(){},
  editTask(){

  },
  deleteTask(){

  },
  toggleEdit(){
    
  },
},

  props: ["taskProp"],
}
</script>

<style>

</style>