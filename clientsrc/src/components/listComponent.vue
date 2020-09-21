<template>
    <div class="list col-4 my-2">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{listProp.title}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "listComponent",
        data() {
            return {

            }
        },
        methods: {

        },
        props: ["listProp"],
    };
</script>

<style></style>