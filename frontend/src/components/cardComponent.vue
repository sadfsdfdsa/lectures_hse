<template>
    <b-card :border-variant="variant"
            :header-bg-variant="variant"
            header-text-variant="white"
            align="center"
            footer-tag="footer">
        <b-card-text>{{body_text}}</b-card-text>
        <template v-slot:header>
            <b-row align-h="between" style="max-height: 10px;">
                <b-col sm="2">
                    <b-button :variant="variant" pill @click="onClickButton" size="sm">
                        x
                    </b-button>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "cardComponent",
        props: ['variant', 'header_text', 'body_text', 'footer_text'],
        data: () => ({}),
        methods: {
            onClickButton(event) {
                this.$emit('delete_component')
            }
        }
    }
</script>

<style scoped>

</style>