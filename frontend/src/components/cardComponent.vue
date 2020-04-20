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
                <b-col class="text-left ml-2">
                    <b-input v-model="header_self" placeholder="Header" spellcheck="false"
                    :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                    style="border: none; box-shadow: none; font-size: 120%"
                    size="sm" @change='change_item'></b-input>
                    <!--<p :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"-->
                       <!--style="font-size: 120%">{{header_self}}</p>-->
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-form-group>
                        <b-textarea v-model="text_self" spellcheck="false" placeholder="Text"
                                    :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')"
                                    style="border: none; box-shadow: none; resize: none; overflow: auto"
                                    size="sm" @change='change_item' max-rows="60"
                        ></b-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr v-if="this.tmp.date!==null||this.item.links.length>0">
            <b-row>
                <div sm="2" v-for="link in item.links" class="text-right" v-bind:key="link.name">
                    <a class="btn rounded-pill btn-sm btn-primary hse_font_color active" :href="link.value"
                       target="_blank">{{link.name}}</a>
                    <!-- :target="link_to_note(link.value)"-->
                </div>
            </b-row>
            <b-row v-if="this.tmp.date!==null"
                   :class="'bg-'+variant_self+(variant_self==='warning'?' text-black':' text-white')" no-gutters>
                <b-col class="text-left" style="font-size: 80%">
                    <em>{{deadlineDateString}} </em>
                </b-col>
                <b-col class="text-right" style="font-size: 80%" v-if="deadlineLeft.days>5">
                    <em>{{deadlineLeft.days}} days left</em>
                </b-col>
                <b-col class="text-right" style="font-size: 80%" v-else-if="deadlineLeft.days>=1">
                    <em>{{deadlineLeft.days}} days {{deadlineLeft.hours}} hours left</em>
                </b-col>
                <b-col class="text-right" style="font-size: 80%" v-else-if="deadlineLeft.days===0">
                    <em>{{deadlineLeft.hours}} hours {{deadlineLeft.minutes}} minutes left</em>
                </b-col>
                <b-col class="text-right" style="font-size: 80%" v-else>
                    <em><strong>Deadline end</strong></em>
                </b-col>
            </b-row>
        </b-card-text>
        <template v-slot:header>
            <b-row style="max-height: 20px" cols-sm="6" no-gutters>
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
            // },
            add_null(value, limit = 10) {
                if (value < limit) {
                    return '0' + value
                }
                return value.toString()
            }
        },
        created() {
            this.text_self = this.item.body;
            this.variant_self = this.item.variant;
            this.header_self = this.item.header;
            this.tmp = this.item;
        },
        computed: {
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
            }
        }
    }
</script>

<style scoped>

</style>