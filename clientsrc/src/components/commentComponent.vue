<template>
  <div class="card row mx-2 my-1 p-2 text-dark">
    <div v-if="!editMode" class="col d-flex justify-content-between">
      <div class="row">
        <i class="fa fa-pencil-alt mx-1 icon-pop" @click="toggleEdit" aria-hidden="true"></i>
        <h6>{{commentProp.title}} </h6>
      </div>
      <i class="fa fa-times align-self-start  icon-pop" @click="deleteComment" aria-hidden="true"></i>
    </div>
    <div v-else class="col d-flex flex-column justify-content-between">
      <div class="row justify-content-end">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-secondary" @click="toggleEdit" type="button"><i class="fa fa-undo align-self-center"
                aria-hidden="true"></i></button>
          </div>
          <input type="text" class="form-control bg-light" v-model="newComment.title" :placeholder="commentProp.title">
          <div class="input-group-append">
            <button class="btn btn-secondary" @click="editComment" type="button"><i
                class="fas fa-save align-self-center"></i></button>
          </div>
        </div>
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