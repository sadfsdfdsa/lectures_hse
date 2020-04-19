<template>
    <b-card
            :bg-variant="variant_self"
            :border-variant="variant_self"
            :header-bg-variant="variant_self"
            header-text-variant="white"
            align="center"
            footer-tag="footer"
            :id="header_self"
    >
        <b-card-text>
            <b-tooltip :show.sync="show" :target="header_self" placement="top" v-if="active">
                This note was in link!
            </b-tooltip>
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
            <b-row :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')" no-gutters>
                <b-col class="text-left" style="font-size: 80%" sm="3">
                    <em>{{item.date}}</em>
                </b-col>
                <div sm="2" v-for="link in item.links" class="text-right" v-bind:key="link.name">
                    <a class="btn rounded-pill btn-sm btn-primary hse_font_color active" :href="link.value"
                       target="_blank">{{link.name}}</a>
                    <!-- :target="link_to_note(link.value)"-->
                </div>
            </b-row>
        </b-card-text>
        <template v-slot:header>
            <b-row style="max-height: 26px" cols-sm="6" no-gutters>
                <b-col class="text-left">
                    <b-button :variant="variant_self" pill @click="onClickButton" class="active mr-5">
                        ×
                    </b-button>
                </b-col>
                <b-col class="text-right">
                    <b-button variant="danger" pill size="sm" @click="change_variant('danger')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right">
                    <b-button variant="warning" pill size="sm"
                              @click="change_variant('warning')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right">
                    <b-button variant="primary" pill size="sm"
                              @click="change_variant('primary')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right">
                    <b-button variant="success" pill size="sm"
                              @click="change_variant('success')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right">
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
        props: ['item', 'active'],
        data: () => ({
            text_self: '',
            variant_self: 'secondary',
            header_self: '',
            tmp: null,
            show: true
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
            },
            // link_to_note(value) {
            //     return value.includes('localhost') || value.includes('hse-onlecture') ? '_parent' : '_blank';
            // }
        },
        created() {
            this.text_self = this.item.body;
            this.variant_self = this.item.variant;
            this.header_self = this.item.header;
            this.tmp = this.item;
        },
    }
</script>

<style scoped>

</style>