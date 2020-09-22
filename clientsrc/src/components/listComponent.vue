<template>
    <div class="list col-4 my-2">
        <div class="card">
            <div class="card-body">
                <div v-if="!editMode">
                    <h4 class="card-title">{{listProp.title}} </h4>
                    <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Edit</button>
                    <button type="button" class="btn btn-outline-danger" @click="deleteList">Delete</button>
                </div>
                <div v-else>
                <input v-model="newList.title" :placeholder="listProp.title"  class= "card-title" />
                <button type="button" class="btn btn-outline-danger" @click="editList">Save</button>
                <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Cancel</button>
                </div>
                <div class="row justify-content-center">
                    <h1>tasks</h1>
                    <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
                <form @submit.prevent="addTask">
                <input type="text" placeholder="title" v-model="newTask.title" required />
                <button type="submit">Create Task</button>
        </form>
        </div>
      </div>
            </div>
        </div>

</template>

<script>
    import taskComponent from "./taskComponent.vue"
    export default {
        name: "listComponent",
        data() {
            return {
                newTask: {},
                newList: {},
                editMode: false
            }
        },
        mounted (){
            this.$store.dispatch("getTasks", this.listProp.id)
        },
        computed: {
            tasks(){
                return this.$store.state.tasks[this.listProp.id]
            }
        },
        methods: {
            addTask(){
                this.newTask.listId = this.listProp.id
                this.$store.dispatch("addTask", this.newTask)
                this.newTask = {}
            },
            deleteList(){
                if (window.confirm("Are you sure you want to delete this list?")) {
          this.$store.dispatch("deleteList", this.listProp.id)
        }
            },
            editList(){
                if(this.newList.title){

                    this.newList.id = this.listProp.id
                this.$store.dispatch("editList", this.newList)
                this.toggleEdit()
                }else window.alert("you must type something")
            },
            toggleEdit(){
                this.editMode = !this.editMode
            }
        },
        props: ["listProp"],
        components: {
        taskComponent
    },
    };
</script>

<style></style>