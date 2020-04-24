<template>
    <b-card
            :bg-variant="style_schema==='full_color'?item.variant:'white'"
            :border-variant="item.variant"
            :header-text-variant="style_schema!=='full_color'?item.variant:'white'"
            align="center"
            footer-tag="footer"
            :id="item.header"
            style="border-radius: 25px; border-width: 2px;"
            class="shadow shadow-sm mb-4"
    >
        <b-card-text>
            <b-tooltip :show.sync="show" :target="item.header" placement="top" v-if="active">
                This note was in link!
            </b-tooltip>
            <b-row style="max-height: 25px;" col-sm->
                <b-col class="text-left ml-2">
                    <b-input v-bind:value="item.header" v-on:input="change_item(arguments[0], 'header')"
                             placeholder="Header" spellcheck="false"
                             :class="style_schema_string_bg_text_color"
                             style="border: none; box-shadow: none; font-size: 120%"
                             size="sm"
                             :disabled="disabled !== false"></b-input>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-form-group>
                        <b-textarea v-bind:value="item.body" v-on:input="change_item(arguments[0], 'body')"
                                    spellcheck="false" placeholder="Text"
                                    :class="style_schema_string_bg_text_color"
                                    style="border: none; box-shadow: none; resize: none; overflow: auto"
                                    size="sm" max-rows="60"
                                    :disabled="disabled !== false"
                                    :formatter="link_detect"
                        ></b-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr v-if="this.item.date!==null||this.item.links.length>0">
            <b-row class="ml-1 text-left">
                <div v-for="link in item.links" class="text-right" v-bind:key="link.name">
                    <b-button-group size="sm">
                        <a class="btn-sm btn-primary"
                           style="border-top-left-radius: 20px; border-bottom-left-radius: 20px; background-color: #FFA07A" :href="link.value"
                           target="_blank">{{link.name}}</a>
                        <b-button variant="danger"  @click="delete_link(link.value)"
                                  style="border-top-right-radius: 20px; border-bottom-right-radius: 20px; background-color: #FA8072">×
                        </b-button>
                    </b-button-group>
                </div>
            </b-row>
            <b-row
                    :class="(style_schema_string_bg_text_color+'  text-right  mt-2')" no-gutters style="font-size: 80%"
                    align-v="center">
                <b-col class="text-left" v-if="this.item.date!==null">
                    <em>{{deadlineDateString}} </em>
                </b-col>
                <div v-if="this.item.date!==null">
                    <b-col v-if="deadlineLeft.days>5">
                        <em>{{deadlineLeft.days}} days left</em>
                    </b-col>
                    <b-col v-else-if="deadlineLeft.days>=1">
                        <em><strong>{{deadlineLeft.days}} days {{deadlineLeft.hours}} hours left</strong></em>
                    </b-col>
                    <b-col v-else-if="deadlineLeft.days===0">
                        <em><strong>{{deadlineLeft.hours}} hours {{deadlineLeft.minutes}} minutes left</strong></em>
                    </b-col>
                    <b-col v-else>
                        <em><strong>Deadline passed</strong></em>
                    </b-col>
                </div>
                <b-col class="text-right">
                    <b-button size="sm" pill variant="primary" v-b-modal="item.header" style="background-color: #87CEFA">Edit date
                    </b-button>
                    <b-modal :id="item.header" hide-footer centered :ref="item.header">
                        <template v-slot:modal-title>
                            <span class="hse_font_color">Date window</span>
                        </template>
                        <div class="text-center">
                            <b-form>
                                <b-form-timepicker v-model="new_time"
                                                   reset-button :reset-value="null"
                                                   aria-controls="example-input"
                                                   reset-button
                                                   value-as-date
                                ></b-form-timepicker>
                                <b-form-datepicker v-model="new_date"
                                                   locale="en-US"
                                                   aria-controls="example-input"
                                                   reset-button
                                                   value-as-date :reset-value="null"
                                ></b-form-datepicker>
                                <hr>
                                <b-button size="md" class="mt-3 btn-primary" pill
                                          @click="change_date(item.header, false)">
                                    Save date
                                </b-button>
                                <b-button size="md" class="mt-3 btn-danger" pill
                                          @click="change_date(item.header, true)">
                                    Remove date
                                </b-button>
                            </b-form>
                        </div>
                    </b-modal>
                </b-col>
            </b-row>
        </b-card-text>
        <template v-slot:header>
            <b-row v-if="disabled === false" style="max-height: 30px" cols-sm="4" cols="6" no-gutters align-v="start">
                <b-col class="text-left" sm="7">
                    <b-button :variant="item.variant" pill @click="delete_item" class="mr-5 shadow shadow-sm">
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
                <b-col class="text-left">{{item.board_name||'Everyday'}}</b-col>
                <b-col class="text-right" self><a class="rounded-pill btn-sm primary"
                                                  :href="'?board='+item.board_name+'&note='+item.header">Go to note</a>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "cardComponent",
        props: ['item', 'active', 'style_schema', 'disabled', 'index', 'board_name'],
        data: () => ({
            new_date: null,
            new_time: null
        }),
        methods: {
            delete_item() {
                this.$emit('delete_item', this.item)
            },
            change_item(value, key) {
                this.item[key] = value;
                this.$emit('change_item', this.index, this.item)
            },
            change_variant(variant) {
                this.item.variant = variant;
                this.change_item();
            },

            change_date(header, remove) {
                this.$bvModal.hide(header);
                if (remove) {
                    this.change_item(null, 'date');
                    return;
                }
                if (this.new_date === null || this.new_time === null) {
                    return;
                }

                this.new_date.setHours(parseInt(this.new_time.split(':')[0]));
                this.new_date.setMinutes(parseInt(this.new_time.split(':')[1]));

                this.change_item(this.new_date, 'date');
            },

            add_link(name, value) {
                let tmp = this.item.links;
                tmp.push({name: name, value: value});
                this.change_item(tmp, 'links')
            },
            delete_link(value) {
                let tmp = this.item.links;
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i].value === value) {
                        this.$delete(tmp, i);
                        this.change_item(tmp, 'links');
                        return;
                    }
                }
            },

            add_null(value, limit = 10) {
                if (value < limit) {
                    return '0' + value
                }
                return value.toString()
            },
            link_detect(value) {
                // eslint-disable-next-line
                let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                let tmp = '';
                value = value.replace(urlRegex, function (url) {
                    tmp = url;
                    return ''
                });
                if (!this.link_exists(tmp) && tmp !== '') {
                    let name = tmp.split('/')[2];
                    this.add_link(name, tmp);
                }
                return value;
            },

            link_exists(value) {
                // todo
                return false
            }

        },
        created() {
            if (this.item.date!==null) {
                this.new_date = new Date(this.item.date);
                this.new_time = this.new_date.getHours() + ':' + this.new_date.getMinutes();
            }
        },
        computed: {
            style_schema_string_bg_text_color() {
                if (this.style_schema === this.$store.state.styles[0]) {
                    return 'bg-' + this.item.variant + (this.item.variant === 'warning' || this.item.variant === 'success' ? ' text-black' : ' text-white')
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