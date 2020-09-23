<template>
    <div class="list col-4 my-2">
        <div class="card bg-faded">
            <div class="card-body">
                <div v-if="!editMode" class="row justify-content-between text-dark">
                    <div class="d-flex">
                        <i class="fa fa-pencil-alt mt-2 ml-3 icon-pop" @click="toggleEdit" aria-hidden="true"></i>
                        <h3 class="card-title ml-1 yeseva">{{listProp.title}} </h3>
                    </div>
                    <i class="fa fa-times align-self-start mr-3 icon-pop" @click="deleteList" aria-hidden="true"></i>
                </div>
                <div v-else class="row justify-content-between">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-secondary" @click="toggleEdit" type="button"><i
                                    class="fa fa-undo align-self-center" aria-hidden="true"></i></button>
                        </div>
                        <input type="text" class="form-control bg-light" v-model="newList.title"
                            :placeholder="listProp.title">
                        <div class="input-group-append">
                            <button class="btn btn-secondary" @click="editList" type="button"><i
                                    class="fas fa-save align-self-center"></i></button>
                        </div>
                    </div>

                </div>
                <div class="row justify-content-center">
                    <task-component v-for="task in tasks" :key="task.id" :taskProp="task" />
                    <form @submit.prevent="addTask">
                        <div class="input-group mt-3">
                            <input type="text" class="form-control bg-light" v-model="newTask.title"
                                placeholder="New Task">
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="submit">Create Task</button>
                            </div>
                        </div>
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
                newList: { title: this.listProp.title },
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