<template>
    <div class="list col-4 my-2">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{listProp.title}}</h4>
                <div class="row justify-content-center">
                    <task v-for="task in tasks" :key="task.id" :taskProp="task" />
                <form @submit.prevent="addList">
                <input type="text" placeholder="title" v-model="newTask.title" required />
                <button type="submit">Create Task</button>
        </form>
      </div>
            </div>
        </div>
    </div>
</template>

<script>
    import taskComponent from "./taskComponet.vue"
    export default {
        name: "listComponent",
        data() {
            return {
                newTask: {}

            }
        },
        mounted (){
            this.$store.dispatch("getTasks", this.listProp.id)
        },
        computed: {
            tasks(){
                return this.$store.state.tasks.filter(t => t.listId == this.listProp.id)
            }
        },
        methods: {
            addList(){
                this.newTask.listId = this.listProp.id
                this.$store.dispatch("addTask", this.newTask)
                this.newTask = {}
            }
        },
        props: ["listProp"],
        components: {
        taskComponent
    },
    };
</script>

<style></style>