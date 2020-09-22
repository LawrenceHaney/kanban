<template>
  <div class="card">
    <h6 class="card-title">{{taskProp.title}}</h6>
    <div class="row justify-content-center">
        <form @submit.prevent="addComment">
          <input type="text" placeholder="title" v-model="newCom.title" required />
          <button type="submit">Create List</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
data(){
  newCom: {}
}
}
</script>

<style>

</style>