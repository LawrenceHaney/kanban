<template>
  <div class="card">
    <div v-if="!editMode">
      <h4 class="card-title">{{commentProp.title}} </h4>
      <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Edit</button>
      <button type="button" class="btn btn-outline-danger" @click="deleteComment">Delete</button>
    </div>
    <div v-else>
      <input v-model="newComment.title" :placeholder="commentProp.title"  class= "card-title" />
      <button type="button" class="btn btn-outline-danger" @click="editComment">Save</button>
      <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentProp"],
data(){
  return{
    newComment: {},
    editMode: false,

  }
},
methods:{
  toggleEdit(){
    this.editMode = !this.editMode
  },
  editComment(){
    this.newComment.taskId = this.commentProp.taskId
    this.newComment.id = this.commentProp.id
    this.$store.dispatch("editComment", this.newComment)
    this.toggleEdit()
  },
  deleteComment(){
    this.$store.dispatch("deleteComment", this.commentProp)
  }
}

}

</script>

<style>

</style>