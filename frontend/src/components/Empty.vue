<template>
    <b-container class="text-center">
        <b-row>
            <b-col>
                <b-img :src="images.first" style="border: none;" thumbnail lazy fluid></b-img>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h3 class="hse_font_color">{{header}}</h3>
                <p>{{text}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import empty_state from "../assets/empty_state.png";

    export default {
        name: "Empty",
        props: ['header', 'text'],
        data: () => ({
            images: {
                first: empty_state
            },
        })
    }
</script>

<style scoped>

</style>
