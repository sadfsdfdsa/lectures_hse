<template>
    <div>
        <b-row align-v="center">
            <b-col>
                <b-row>
                    <!--input-->
                    <b-col sm="6" md="6" lg="4" xl="3" class="text-left" v-if="!this.disabled">
                        <b-card class="shadow shadow-sm mb-4"
                                :border-variant="card_model.variant"
                                align="center"
                                footer-tag="footer"
                                style="border-radius: 20px">
                            <b-card-text>
                                <b-row style="max-height: 25px;">
                                    <b-col sm="10">
                                        <b-input v-model="card_model.header" placeholder="Enter header"
                                                 style="border: none; box-shadow: none; font-size: 120%"
                                                 size="sm" :tabindex="1"></b-input>
                                    </b-col>
                                </b-row>
                                <hr>
                                <b-row>
                                    <b-col>
                                        <b-textarea v-model="card_model.body"
                                                    placeholder="Enter body text (or paste link to auto-detect)"
                                                    style="border: none; box-shadow: none; resize: none; overflow:auto"
                                                    size="sm" max-rows="60"
                                                    :formatter="link_detect"
                                                    :tabindex="2"></b-textarea>
                                    </b-col>
                                </b-row>
                                <hr>
                                <b-row no-gutters>
                                    <b-col>
                                        <b-form inline>
                                            <b-form-datepicker v-if="this.board_name!=='everyday board'"
                                                               v-model="input_extra.deadline_date"
                                                               button-only
                                                               locale="en-US"
                                                               aria-controls="example-input"
                                                               button-variant reset-button
                                                               value-as-date :reset-value="null"
                                                               dropup
                                            ></b-form-datepicker>
                                            <b-form-timepicker
                                                    dropup
                                                    v-model="input_extra.deadline_time"
                                                    button-only reset-button :reset-value="null"
                                                    aria-controls="example-input" no-close-button button-variant
                                            ></b-form-timepicker>
                                        </b-form>
                                    </b-col>
                                    <b-col v-if="deadlineDate" sm="5" class="text-left">
                                        {{deadlineDateString}}
                                        <b-form-checkbox v-model="input_extra.notification_flag"><em>Notification</em>
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
                                                            v-model="input_extra.link_short_name"
                                                            type="text"
                                                            required
                                                            size="md"
                                                            placeholder="Short link name: VK for example"
                                                    ></b-form-input>
                                                    <b-form-input
                                                            class="mt-3"
                                                            id="input-2"
                                                            v-model="input_extra.link_value"
                                                            type="text"
                                                            required
                                                            placeholder="Link value: http://vk.com for example"
                                                    ></b-form-input>
                                                    <hr>
                                                    <p>Or select a notification from another board</p>
                                                    <b-form-select v-model="input_extra.link_note"
                                                                   :options="notesLinks"></b-form-select>
                                                    <hr>
                                                    <b-button size="md" class="mt-3 btn-hse btn-white" pill
                                                              @click="add_link">
                                                        Add link.
                                                    </b-button>
                                                </b-form>
                                            </div>
                                        </b-modal>
                                    </b-col>
                                    <div v-for="(link, index) in card_model.links" v-bind:key="index">
                                        <b-button @click="delete_link(index)" pill size="sm" variant="outline-primary">
                                            {{link.name}}
                                        </b-button>
                                    </div>
                                </b-row>
                            </b-card-text>
                            <template v-slot:header>
                                <b-row style="max-height: 20px;" aligh-h="end" no-gutters cols="12">
                                    <b-col class="text-left" cols="4">
                                        New note
                                    </b-col>
                                    <b-col v-if="notesTemplates.length>1">
                                        <b-form-select size="sm" class="btn-sm rounded-pill" :options="notesTemplates"
                                                       v-model="active_template">
                                        </b-form-select>
                                    </b-col>
                                    <b-col class="text-right">
                                        <b-button variant="secondary" pill size="lg"
                                                  @click="create_item" class="active" :tabindex="3">+
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </template>
                        </b-card>
                    </b-col>
                    <!--/input-->
                    <!--cards-->
                    <b-col sm="6" md="6" lg="4" xl="3" class="text-left" v-for="(item, index) in sortedItems"
                           v-bind:key="index">
                        <card-component :item="item" :active="active_card===item.header"
                                        :board_name="board_name"
                                        @delete_item="delete_item"
                                        @change_item="change_item"
                                        :style_schema="style_schema"
                                        :disabled="disabled"
                                        :index="index"
                        ></card-component>
                    </b-col>
                    <!--/cards-->
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Empty v-if="items.length===0 && !this.disabled" header="Create new note!"></Empty>
                <Empty v-if="items.length===0 && this.disabled!==false"
                       header="There is nothing here!"></Empty>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CardComponent from "./cardComponent";
    import Empty from "./Empty";

    export default {
        name: "categoryComponent",
        components: {Empty, CardComponent},
        props: ['board_name', 'items', 'active_card', 'style_schema', 'disabled', 'templates'],
        data: () => ({
            card_model: {
                header: '',
                body: '',
                footer: '',
                variant: 'secondary',
                date: null,
                links: [] // link = {name: string, value: string}
            },
            input_extra: {
                link_value: '',
                link_short_name: '',
                link_note: '',
                deadline_time: null,
                deadline_date: null,
                notification_flag: false,
            },
            active_template: null
        }),
        methods: {
            unset_inputs() {
                this.card_model = {
                    header: '',
                    body: '',
                    footer: '',
                    variant: 'secondary',
                    date: null,
                    links: [] // link = {name: string, value: string}
                };
                this.input_extra = {
                    link_value: '',
                    link_short_name: '',
                    link_note: '',
                    deadline_time: null,
                    deadline_date: null,
                    notification_flag: false,
                }
            },

            // emits to parent
            change_item(index, item) {
                this.$emit('change_item', this.board_name, index, item)
            },
            delete_item(item) {
                this.$emit('delete_item', this.board_name, this.items.indexOf(item))
            },
            create_item() {
                if (this.card_model.header === '' || this.boardCardHeadersArray.includes(this.card_model.header)) {
                    this.$snotify.warning('Headers cannot be empty or repeated.')
                } else {
                    this.card_model.date = this.input_extra.deadline_date;
                    this.$emit('create_item', this.board_name, this.card_model, {notification_flag: this.notification_flag});
                    this.unset_inputs()
                }
            },

            add_link() {
                if (this.input_extra.link_note) {
                    let tmp = this.input_extra.link_note.split(': ');
                    this.card_model.links.push({name: tmp[1], value: '?board=' + tmp[0] + '&note=' + tmp[1]});
                } else {
                    if (this.input_extra.link_short_name === '' || this.input_extra.link_value === '') {
                        this.$snotify.warning('Short name and value cannot be empty');
                        return;
                    }
                    this.card_model.links.push({
                        name: this.input_extra.link_short_name,
                        value: this.input_extra.link_value
                    });
                }
                this.$refs['modal-1'].hide();
                this.input_extra.link_short_name = '';
                this.input_extra.link_value = '';
                this.input_extra.link_note = ''
            },
            delete_link(index) {
                this.$delete(this.card_model.links, index)
            },

            link_detect(value) {
                // eslint-disable-next-line
                let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                let tmp = '';
                value = value.replace(urlRegex, function (url) {
                    tmp = url;
                    return ''
                });
                this.input_extra.link_value = tmp;
                if (!this.link_exists(tmp) && tmp !== '') {
                    this.input_extra.link_short_name = tmp.split('/')[2];
                    this.add_link();
                }
                return value;
            },

            link_exists(link_value) {
                for (let i = 0; i < this.card_model.links.length; i++) {
                    if (this.card_model.links[i].value === link_value) {
                        return true;
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
        computed: {
            notesLinks: function () {
                let boards = JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.boards));
                let tmp = [];
                this.items.forEach((item) => {
                    tmp.push(this.board_name + ': ' + item.header)
                });
                boards.forEach((board) => {
                    board.items.forEach((item) => {
                        if (board.board_name !== this.board_name) {
                            tmp.push(board.board_name + ': ' + item.header)
                        }
                    })
                });
                return tmp;
            },
            notesTemplates: function () {
                let tmp = [];
                tmp.push({value: null, text: 'Template'});

                if (this.templates !== null) {
                    this.templates.forEach((template) => {
                        tmp.push({text: template.header, value: template})
                    });
                }
                return tmp;
            },
            sortedItems: function () {
                let tmp = ['secondary', 'success', 'primary', 'warning', 'danger'];
                let tmp_list = this.items;
                tmp_list.sort(function (a, b) {
                    if (tmp.indexOf(a.variant) > tmp.indexOf(b.variant)) {
                        return -1;
                    }
                    if (a.variant === b.variant) {
                        return (new Date(a.date).getTime() - new Date(b.date).getTime()) > 0 ? 1 : -1;
                    }
                    return 1;
                });
                return tmp_list;
            },
            boardCardHeadersArray: function () {
                let tmp = [];
                this.items.forEach((item) => {
                    tmp.push(item.header)
                });
                return tmp;
            },

            deadlineDate: function () {
                if (!this.input_extra.deadline_date && !this.input_extra.deadline_time) {
                    return null
                }
                if (!this.input_extra.deadline_time) {
                    // eslint-disable-next-line
                    this.input_extra.deadline_time = '00:00';
                }
                if (!this.input_extra.deadline_date) {
                    // eslint-disable-next-line
                    this.input_extra.deadline_date = new Date();
                }
                this.input_extra.deadline_date.setHours(parseInt(this.input_extra.deadline_time.split(':')[0]));
                this.input_extra.deadline_date.setMinutes(parseInt(this.input_extra.deadline_time.split(':')[1]));
                return this.input_extra.deadline_date
            },
            deadlineDateString: function () {
                let tmp = this.deadlineDate;
                return this.add_null(tmp.getDate(), 10) + '.' + this.add_null((tmp.getMonth() + 1), 10) + '.' + tmp.getFullYear() + ' ' + this.add_null(tmp.getHours(), 10) + ':' + this.add_null(tmp.getMinutes(), 10)
            },
        },
        watch: {
            active_template: function (val) {
                this.card_model = Object.assign({}, val);
            }
        }
    }
</script>

<style scoped>

</style>
