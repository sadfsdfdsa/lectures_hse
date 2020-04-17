<template>
    <b-card :border-variant="variant_self"
            :header-bg-variant="variant_self"
            header-text-variant="white"
            align="center"
            footer-tag="footer"
            :bg-variant="variant_self"
    >
        <b-card-text>
            <b-textarea v-model="text_self" spellcheck="false"
                        :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                        style="border: none; box-shadow: none; resize: none;"
                        size="sm" @change='change_item'
            ></b-textarea>
        </b-card-text>
        <template v-slot:header>
            <b-row align-h="between" style="max-height: 10px;">
                <b-col sm="2">
                    <b-button :variant="variant_self" pill @click="onClickButton" size="md" class="active">
                        ×
                    </b-button>
                </b-col>
                <b-col sm="7">
                    <b-button variant="danger" pill size="sm" @click="change_variant('danger')">&emsp;
                    </b-button>
                    <b-button variant="warning" pill size="sm"
                              @click="change_variant('warning')">&emsp;
                    </b-button>
                    <b-button variant="primary" pill size="sm"
                              @click="change_variant('primary')">&emsp;
                    </b-button>
                    <b-button variant="success" pill size="sm"
                              @click="change_variant('success')">&emsp;
                    </b-button>
                    <b-button variant="secondary" pill size="sm"
                              @click="change_variant('secondary')">&emsp;
                    </b-button>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "cardComponent",
        props: ['item'],
        data: () => ({
            text_self: '',
            variant_self: 'secondary',
            tmp: null
        }),
        methods: {
            onClickButton() {
                this.$emit('delete_component', this.tmp)
            },
            change_item() {
                this.$emit('change_item', this.variant_self, this.text_self, this.tmp);
                this.tmp.body = this.text_self;
                this.tmp.variant = this.variant_self;
            },
            change_variant(variant) {
                this.variant_self = variant;
                this.change_item();
            }
        },
        created() {
            this.text_self = this.item.body;
            this.variant_self = this.item.variant;
            this.tmp = this.item;
        }
    }
</script>

<style scoped>

</style>