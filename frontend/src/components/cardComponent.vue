<template>
    <b-card
            :bg-variant="style_schema==='Default style'?variant_self:'white'"
            :border-variant="variant_self"
            :header-text-variant="style_schema!=='Default style'?variant_self:'white'"
            align="center"
            footer-tag="footer"
            :id="header_self"
            style="border-radius: 20px;"
            class="shadow shadow-sm mb-4"
    >
        <!--            :header-bg-variant="variant_self"
        header-text-variant="white"
-->
        <b-card-text>
            <b-tooltip :show.sync="show" :target="header_self" placement="top" v-if="active">
                This note was in link!
            </b-tooltip>
            <b-row style="max-height: 25px;" col-sm->
                <b-col class="text-left ml-2">
                    <b-input v-model="header_self" placeholder="Header" spellcheck="false"
                             :class="style_schema_string_bg_text_color"
                             style="border: none; box-shadow: none; font-size: 120%"
                             size="sm" @change='change_item'
                             :disabled="disabled !== false"></b-input>
                    <!--<p :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"-->
                    <!--style="font-size: 120%">{{header_self}}</p>-->
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-form-group>
                        <b-textarea v-model="text_self" spellcheck="false" placeholder="Text"
                                    :class="style_schema_string_bg_text_color"
                                    style="border: none; box-shadow: none; resize: none; overflow: auto"
                                    size="sm" @change='change_item' max-rows="60"
                                    :disabled="disabled !== false"
                        ></b-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr v-if="this.tmp.date!==null||this.item.links.length>0">
            <b-row class="ml-1">
                <div v-for="link in item.links" class="text-right" v-bind:key="link.name">
                    <a class="rounded-pill btn-sm btn-primary" :href="link.value"
                       target="_blank">{{link.name}}</a>
                    <!-- :target="link_to_note(link.value)"-->
                </div>
            </b-row>
            <b-row v-if="this.tmp.date!==null"
                   :class="style_schema_string_bg_text_color" no-gutters>
                <b-col class="text-left mt-2" style="font-size: 80%">
                    <em>{{deadlineDateString}} </em>
                </b-col>
                <b-col class="text-right  mt-2" style="font-size: 80%" v-if="deadlineLeft.days>5">
                    <em>{{deadlineLeft.days}} days left</em>
                </b-col>
                <b-col class="text-right  mt-2" style="font-size: 80%" v-else-if="deadlineLeft.days>=1">
                    <em>{{deadlineLeft.days}} days {{deadlineLeft.hours}} hours left</em>
                </b-col>
                <b-col class="text-right  mt-2" style="font-size: 80%" v-else-if="deadlineLeft.days===0">
                    <em>{{deadlineLeft.hours}} hours {{deadlineLeft.minutes}} minutes left</em>
                </b-col>
                <b-col class="text-right  mt-2" style="font-size: 80%" v-else>
                    <em><strong>Deadline passed</strong></em>
                </b-col>
            </b-row>
        </b-card-text>
        <template v-slot:header>
            <b-row v-if="disabled === false" style="max-height: 30px" cols-sm="4" cols="6" no-gutters align-v="start">
                <b-col class="text-left" sm="7">
                    <b-button :variant="variant_self" pill @click="onClickButton" class="mr-5 shadow shadow-sm">
                        ×
                    </b-button>
                </b-col>
                <b-col class="text-right" sm="1">
                    <b-button variant="danger" pill size="sm" @click="change_variant('danger')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right" sm="1">
                    <b-button variant="warning" pill size="sm"
                              @click="change_variant('warning')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right" sm="1">
                    <b-button variant="primary" pill size="sm"
                              @click="change_variant('primary')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right" sm="1">
                    <b-button variant="success" pill size="sm"
                              @click="change_variant('success')">&emsp;
                    </b-button>
                </b-col>
                <b-col class="text-right" sm="1">
                    <b-button variant="secondary" pill size="sm"
                              @click="change_variant('secondary')">&emsp;
                    </b-button>
                </b-col>
            </b-row>
            <b-row v-else style="max-height: 30px" no-gutters align-v="center">
                <b-col class="text-left">{{item.board_name}}</b-col>
                <b-col class="text-right" self><a class="rounded-pill btn-sm btn-primary"
                                                  :href="'?board='+item.board_name+'&note='+item.header">Go to note</a>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "cardComponent",
        props: ['item', 'active', 'category_name', 'style_schema', 'disabled'],
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
                if (this.disabled) {
                    return;
                }
                if (this.headersArray().includes(this.header_self) && this.header_self !== '' && this.header_self !== this.tmp.header) {
                    this.$snotify.warning('Headers cannot be repeated or empty.');
                    this.header_self = this.tmp.header;
                    return;
                }
                this.$emit('change_item', this.variant_self, this.text_self, this.header_self, this.tmp);
                this.tmp.body = this.text_self;
                this.tmp.variant = this.variant_self;
                this.tmp.header = this.header_self;
            },
            change_variant(variant) {
                this.variant_self = variant;
                this.change_item();
            },
            add_null(value, limit = 10) {
                if (value < limit) {
                    return '0' + value
                }
                return value.toString()
            },
            headersArray() {
                let nots = JSON.parse(localStorage.getItem('nots_app'));
                let category = [];
                nots.forEach((item) => {
                    if (item.category_name === this.category_name) {
                        category = item;
                        return;
                    }
                });
                let tmp = [];
                category.items.forEach((item) => {
                    tmp.push(item.header)
                });
                return tmp;
            },
        },
        created() {
            this.text_self = this.item.body;
            this.variant_self = this.item.variant;
            this.header_self = this.item.header;
            this.tmp = this.item;
        },
        computed: {
            style_schema_string_bg_text_color() {
                if (this.style_schema === 'Default style') {
                    return 'bg-' + this.variant_self + (this.variant_self === 'warning' ? ' text-black' : ' text-white')
                } else {
                    return 'bg-white'
                }
            },

            deadlineLeft: function () {
                if (this.item.date === null) {
                    return null
                }
                let tmp = new Date(this.item.date);
                if (tmp === null) {
                    return ''
                }
                let delta = (tmp.getTime() - new Date().getTime()) / 1000;
                if (delta < 0) {
                    return {days: -1}
                }

                let days = Math.floor(delta / 86400);
                delta -= days * 86400;

                let hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;

                let minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                return {days: days, hours: hours, minutes: minutes};

            },
            deadlineDateString: function () {
                if (this.item.date === null) {
                    return ''
                }
                let tmp = new Date(this.item.date);

                return this.add_null(tmp.getDate(), 10) + '.' + this.add_null((tmp.getMonth() + 1), 10) + '.' + tmp.getFullYear() + ' ' + this.add_null(tmp.getHours(), 10) + ':' + this.add_null(tmp.getMinutes(), 10)
            },

        }
    }
</script>

<style scoped>

</style>