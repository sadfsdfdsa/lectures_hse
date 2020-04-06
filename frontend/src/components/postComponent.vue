<template>
    <div class="mb-3">
        <b-card :title="post.title" :sub-title="post.date.toString()">
            <b-card-text>
                {{post.text}}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "postComponent",
        props: ['post']
    }
</script>

<style scoped>

</style>
