<template>
    <div>
        <b-row align-v="center">
            <b-col>
                <b-row>
                    <b-col sm="6" md="6" lg="3" class="text-left" v-if="!this.disabled">
                        <b-card class="shadow shadow-sm mb-4"
                                :border-variant="input.variant"
                                align="center"
                                footer-tag="footer"
                                style="border-radius: 20px">
                            <b-card-text>
                                <b-row style="max-height: 25px;">
                                    <b-col sm="10">
                                        <b-input v-model="input.header" placeholder="Enter header" :ref="category_name"
                                                 style="border: none; box-shadow: none; font-size: 120%"
                                                 size="sm" :tabindex="1"></b-input>
                                    </b-col>
                                </b-row>
                                <hr>
                                <b-row>
                                    <b-col>
                                        <b-textarea v-model="input.body"
                                                    placeholder="Enter body text (or paste link to auto-detect)"
                                                    style="border: none; box-shadow: none; resize: none; overflow:auto"
                                                    size="sm" max-rows="60"
                                                    :formatter="formatter" :tabindex="2"></b-textarea>
                                    </b-col>
                                </b-row>
                                <hr>
                                <b-row no-gutters>
                                    <b-col>
                                        <b-form inline>
                                            <b-form-datepicker
                                                    v-model="tmp_deadline_date"
                                                    button-only
                                                    locale="en-US"
                                                    aria-controls="example-input"
                                                    button-variant reset-button
                                                    value-as-date :reset-value="null"
                                                    dropup
                                            ></b-form-datepicker>
                                            <b-form-timepicker
                                                    dropup
                                                    v-model="tmp_deadline_time"
                                                    button-only reset-button :reset-value="null"
                                                    aria-controls="example-input" no-close-button button-variant
                                            ></b-form-timepicker>
                                        </b-form>
                                    </b-col>
                                    <b-col v-if="deadlineDate" sm="5" class="text-left">
                                        {{deadlineDateString}}
                                        <b-form-checkbox v-model="notification_flag"><em>Notification</em>
                                        </b-form-checkbox>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-1">
                                    <b-col class="text-left" align-self="center" sm="4">
                                        <b-button size="sm" pill v-b-modal.modal-1 variant="secondary">Add link
                                        </b-button>
                                        <b-modal id="modal-1" hide-footer centered ref="modal-1">
                                            <template v-slot:modal-title>
                                                <span class="hse_font_color">Add link</span>
                                            </template>
                                            <div class="text-center">
                                                <b-form>
                                                    <b-form-input
                                                            id="input-1"
                                                            v-model="tmp_link_name"
                                                            type="text"
                                                            required
                                                            size="md"
                                                            placeholder="Short link name: VK for example"
                                                    ></b-form-input>
                                                    <b-form-input
                                                            class="mt-3"
                                                            id="input-2"
                                                            v-model="tmp_link_value"
                                                            type="text"
                                                            required
                                                            placeholder="Link value: http://vk.com for example"
                                                    ></b-form-input>
                                                    <hr>
                                                    <p>Or select a notification from another board</p>
                                                    <b-form-select v-model="tmp_link_note"
                                                                   :options="headersItems"></b-form-select>
                                                    <hr>
                                                    <b-button size="md" class="mt-3 btn-hse btn-white" pill
                                                              @click="add_link">
                                                        Add link.
                                                    </b-button>
                                                </b-form>
                                            </div>
                                        </b-modal>
                                    </b-col>
                                    <div v-for="(link, index) in input.links" v-bind:key="index">
                                        <b-button @click="delete_link(index)" pill size="sm" variant="outline-primary">
                                            {{link.name}}
                                        </b-button>
                                    </div>
                                </b-row>
                            </b-card-text>
                            <template v-slot:header>
                                <b-row style="max-height: 15px;" aligh-h="end" no-gutters>
                                    <b-col class="text-left">
                                        New note form
                                    </b-col>
                                    <b-col class="text-right">
                                        <b-button variant="secondary" pill size="lg"
                                                  @click="create" class="active" :tabindex="3">+
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </template>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="6" lg="3" class="text-left" v-for="item in sortedItems" v-bind:key="item.header">
                        <card-component :item="item" :active="active_card===item.header"
                                        :category_name="category_name"
                                        @delete_component="delete_item"
                                        @change_item="change_variant"
                                        :style_schema="style_schema"
                                        :disabled="disabled"
                        ></card-component>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Empty v-if="sortedItems.length===0 && !this.disabled" header="Create new note!"></Empty>
                <Empty v-if="sortedItems.length===0 && this.disabled!==false"
                       header="There are no notes on this day!"></Empty>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CardComponent from "../components/cardComponent";
    import Empty from "../components/Empty";

    export default {
        name: "categoryView",
        components: {Empty, CardComponent},
        props: ['category_name', 'items', 'active_card', 'style_schema', 'disabled'],
        data: () => ({
            input: {
                header: '',
                body: '',
                footer: '',
                variant: 'secondary',
                date: null,
                links: [] // link = {name: string, value: string}
            },
            tmp_link_value: '',
            tmp_link_name: '',
            tmp_link_note: '',
            tmp_deadline_time: null,
            tmp_deadline_date: null,
            notification_flag: false,
            show_buttons_flag: false,
            card: [],
        }),
        methods: {
            delete_link(index) {
                this.$delete(this.input.links, index)
            },
            add_link() {
                if (this.tmp_link_note) {
                    let tmp = this.tmp_link_note.split(': ');
                    this.input.links.push({name: tmp[1], value: '/dashboard?board=' + tmp[0] + '&note=' + tmp[1]});
                } else {
                    this.input.links.push({name: this.tmp_link_name, value: this.tmp_link_value});
                }
                this.$refs['modal-1'].hide();
                this.tmp_link_value = '';
                this.tmp_link_name = '';
                this.tmp_link_note = ''
            },
            create() {
                if (this.input.header === '' || this.headersArray.includes(this.input.header)) {
                    this.$snotify.warning('Headers cannot be repeated or empty.');
                    return;
                }
                if (this.deadlineDate !== null) {
                    this.input.date = new Date(this.deadlineDate.getTime());
                    if (this.notification_flag) {
                        this.set_notification(this.input.header)
                    }
                }
                this.card.push(this.input);
                this.input = {
                    header: '',
                    body: '',
                    footer: '',
                    variant: 'secondary',
                    date: null,
                    links: []
                };
                this.tmp_deadline_time = null;
                this.tmp_deadline_date = null;
                this.notification_flag = false;
                this.save_in_browser();
                this.$refs[this.category_name].focus();
            },
            set_notification(header) {
                if (Notification.permission === "granted")
                    setTimeout(() => {
                        let board = this.category_name;
                        let tmp = new Notification(
                            this.category_name + ': ' + header
                        );
                        tmp.onclick = function () {
                            window.open('?board=' + board + '&note=' + header);
                        }
                    }, this.deadlineDate.getTime() - new Date().getTime());
                else {
                    Notification.requestPermission().then(this.set_notification(header));
                }
            },
            delete_item(item) {
                this.$delete(this.card, this.card.indexOf(item));
                this.save_in_browser()
            },
            change_variant(variant, text, header, item) {
                if (this.headersArray.includes(header) && header !== item.header && header !== '') {
                    this.$snotify.warning('Headers cannot be repeated or empty.');
                    return;
                }
                let index = this.card.indexOf(item);

                this.card[index].body = text;
                this.card[index].variant = variant;
                this.card[index].header = header;

                this.save_in_browser()
            },
            save_in_browser() {
                this.$emit('re_save', this.card, this.category_name)
            },
            detect_link(value) {
                // eslint-disable-next-line
                let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                let tmp = '';
                value = value.replace(urlRegex, function (url) {
                    tmp = url;
                    return ''
                });
                this.tmp_link_value = tmp;
                if (!this.linkExists(tmp) && tmp !== '') {
                    this.tmp_link_name = tmp.split('/')[2];
                    this.add_link();
                }
                return value;
            },
            formatter(value) {
                return this.detect_link(value)
            },
            linkExists(value) {
                for (let i = 0; i < this.input.links.length; i++) {
                    if (this.input.links[i].value === value) {
                        return true
                    }
                }
                return false;
            },
            add_null(value, limit) {
                if (value < limit) {
                    return '0' + value
                }
                return value.toString()
            },

        },
        created() {
            if (this.disabled) {
                this.card = this.get_notes_for_date;
            } else {
                this.card = this.items;
            }
        },
        computed: {
            sortedItems: function () {
                let tmp = ['secondary', 'success', 'primary', 'warning', 'danger'];
                let tmp_list = this.card;
                tmp_list.sort(function (a, b) {
                    let result = tmp.indexOf(a.variant) > tmp.indexOf(b.variant);
                    return result ? -1 : 1;
                });
                return tmp_list;
            },
            headersItems: function () {
                let nots = JSON.parse(localStorage.getItem('nots_app'));
                let tmp = [];
                nots.forEach((item) => {
                    item.items.forEach((note) => {
                        tmp.push(item.category_name + ': ' + note.header)
                    })
                });
                return tmp;
            },
            headersArray: function () {
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
            deadlineDate: function () {
                if (!this.tmp_deadline_date && !this.tmp_deadline_time) {
                    return null
                }
                if (!this.tmp_deadline_time) {
                    // eslint-disable-next-line
                    this.tmp_deadline_time = '00:00';
                }
                if (!this.tmp_deadline_date) {
                    // eslint-disable-next-line
                    this.tmp_deadline_date = new Date();
                }
                this.tmp_deadline_date.setHours(parseInt(this.tmp_deadline_time.split(':')[0]));
                this.tmp_deadline_date.setMinutes(parseInt(this.tmp_deadline_time.split(':')[1]));
                return this.tmp_deadline_date
            },
            deadlineDateString: function () {
                let tmp = this.deadlineDate;
                return this.add_null(tmp.getDate(), 10) + '.' + this.add_null((tmp.getMonth() + 1), 10) + '.' + tmp.getFullYear() + ' ' + this.add_null(tmp.getHours(), 10) + ':' + this.add_null(tmp.getMinutes(), 10)
            },
            get_notes_for_date: function () {
                let nots = JSON.parse(localStorage.getItem('nots_app'));
                let category = [];
                nots.forEach((item) => {
                    item.items.forEach((note) => {
                        let tmp = new Date(note.date);
                        if (tmp.getMonth() === this.disabled.getMonth() && tmp.getDate() === this.disabled.getDate() && tmp.getFullYear() === this.disabled.getFullYear()) {
                            note.board_name = item.category_name;
                            category.push(note)
                        }
                    })
                });
                return category;
            }
        },
        watch: {
            disabled: function () {
                this.card = this.get_notes_for_date
            }
        }
    }
</script>

<style scoped>

</style>
