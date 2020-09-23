<template>
    <div class="list col-4 my-2">
        <div class="card">
            <div class="card-body">
                <div v-if="!editMode" class="row justify-content-between">
                    <h3 class="card-title pl-3">{{listProp.title}} </h3>
                    <div>
                        <button type="button" class="btn btn-outline-success" @click="toggleEdit">Edit</button>
                        <button type="button" class="btn btn-outline-danger" @click="deleteList">Delete</button>
                    </div>
                </div>
                <div v-else class="row justify-content-between">
                    <input v-model="newList.title" :placeholder="listProp.title" class="card-title" />
                    <div>
                        <button type="button" class="btn btn-outline-danger" @click="editList">Save</button>
                        <button type="button" class="btn btn-outline-danger" @click="toggleEdit">Cancel</button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
                    <form @submit.prevent="addTask">
                        <input type="text" placeholder="Add Task" v-model="newTask.title" required />
                        <button class="btn btn-secondary" type="submit">Create Task</button>
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
        mounted() {
            this.$store.dispatch("getTasks", this.listProp.id)
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.listProp.id]
            }
        },
        methods: {
            addTask() {
                this.newTask.listId = this.listProp.id
                this.$store.dispatch("addTask", this.newTask)
                this.newTask = {}
            },
            deleteList() {
                if (window.confirm("Are you sure you want to delete this list?")) {
                    this.$store.dispatch("deleteList", this.listProp.id)
                }
            },
            editList() {
                if (this.newList.title) {

                    this.newList.id = this.listProp.id
                    this.$store.dispatch("editList", this.newList)
                    this.toggleEdit()
                } else window.alert("Field cannot be empty")
            },
            toggleEdit() {
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