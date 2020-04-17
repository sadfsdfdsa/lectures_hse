<template>
    <b-card :border-variant="variant_self"
            :header-bg-variant="variant_self"
            header-text-variant="white"
            align="center"
            footer-tag="footer"
            :bg-variant="variant_self"
    >
        <b-card-text>
            <b-row style="max-height: 25px;">
                <b-col>
                    <b-input v-model="header_self" placeholder="Header" spellcheck="false"
                             :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                             style="border: none; box-shadow: none; font-size: 120%"
                             size="sm" @change='change_item'></b-input>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-textarea v-model="text_self" spellcheck="false" placeholder="Text"
                                :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                                style="border: none; box-shadow: none; resize: none; overflow: auto"
                                size="sm" @change='change_item' max-rows="60"
                    ></b-textarea>
                </b-col>
            </b-row>
            <b-row :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                   style="max-height: 10px">
                <b-col class="text-left" style="font-size: 80%">
                    <em>{{item.date}}</em>
                </b-col>
            </b-row>
        </b-card-text>
        <template v-slot:header>
            <b-row class="justify-content-between" style="max-height: 26px">
                <b-col>
                    <b-button :variant="variant_self" pill @click="onClickButton" size="md" class="active mr-5">
                        ×
                    </b-button>
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
            header_self: '',
            tmp: null
        }),
        methods: {
            onClickButton() {
                this.$emit('delete_component', this.tmp)
            },
            change_item() {
                this.$emit('change_item', this.variant_self, this.text_self, this.header_self, this.tmp);
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
            this.header_self = this.item.header;
            this.tmp = this.item;
        }
    }
</script>

<style scoped>

</style>