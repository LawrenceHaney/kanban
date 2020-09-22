<template>
  <div class="card row mx-2 my-1 p-2">
    <div v-if="!editMode" class="col d-flex flex-column justify-content-between">
      <p class="row">{{commentProp.title}} </p>
      <div class="row justify-content-end">
        <button type="button" class="btn btn-outline-success mr-1" @click="toggleEdit">Edit</button>
        <button type="button" class="btn btn-outline-danger" @click="deleteComment">Delete</button>
      </div>
    </div>
    <div v-else class="col d-flex flex-column justify-content-between">
      <input v-model="newComment.title" :placeholder="commentProp.title" class="card-title" />
      <div class="row justify-content-end">
        <button type="button" class="btn btn-outline-success" @click="editComment">Save</button>
        <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props: ["commentProp"],
    data() {
      return {
        newComment: {},
        editMode: false,

      }
    },
    methods: {
      toggleEdit() {
        this.editMode = !this.editMode
      },
      editComment() {
        this.newComment.taskId = this.commentProp.taskId
        this.newComment.id = this.commentProp.id
        this.$store.dispatch("editComment", this.newComment)
        this.toggleEdit()
      },
      deleteComment() {
        this.$store.dispatch("deleteComment", this.commentProp)
      }
    }

  }

</script>

<style>

</style>