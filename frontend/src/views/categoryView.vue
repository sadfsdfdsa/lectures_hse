<template>
    <div>
        <b-row align-v="center">
            <b-col>
                <b-card-group columns>
                    <b-card :border-variant="input.variant"
                            :header-bg-variant="input.variant"
                            header-text-variant="white"
                            align="center"
                            footer-tag="footer">
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
                                    <b-textarea v-model="input.body" placeholder="Enter body text"
                                                style="border: none; box-shadow: none; resize: none; overflow:auto"
                                                size="sm" max-rows="60"
                                                :formatter="formatter" :tabindex="2"></b-textarea>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col class="text-left" sm="3">
                                    <b-form-checkbox v-model="date_flag"><em>Date</em>
                                    </b-form-checkbox>
                                </b-col>

                                <div sm="2" v-for="(link, index) in input.links" v-bind:key="index">
                                    <b-button @click="delete_link(index)" pill size="sm" variant="outline-primary">
                                        {{link.name}}
                                    </b-button>
                                </div>
                                <b-col v-if="input.links.length<=3" class="text-right">
                                    <b-button size="sm" pill v-b-modal.modal-1>Add link</b-button>
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
                            </b-row>
                        </b-card-text>
                        <template v-slot:header>
                            <b-row style="max-height: 10px;" aligh-h="end" no-gutters>
                                <b-col class="text-right">
                                    <div>
                                        <b-button variant="secondary" pill size="md"
                                                  @click="create" class="active" :tabindex="3">>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </template>
                    </b-card>
                    <div v-for="item in sortedItems" v-bind:key="item.body">
                        <card-component :item="item" :active="active_card===item.header"
                                        @delete_component="delete_item"
                                        @change_item="change_variant"
                        ></card-component>
                    </div>
                </b-card-group>
            </b-col>
        </b-row>
        <b-row v-if="items.length===0">
            <b-col>
                <Empty header="Create new note!"></Empty>
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
        props: ['category_name', 'items', 'active_card'],
        data: () => ({
            input: {
                header: '',
                body: '',
                footer: '',
                variant: 'secondary',
                date: '',
                links: [] // link = {name: string, value: string}
            },
            tmp_link_value: '',
            tmp_link_name: '',
            tmp_link_note: '',
            date_flag: false,
            show_buttons_flag: false,
            card: [],
            deadline_time: null,
            deadline_date: null
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
                if (this.date_flag) {
                    this.input.date = new Date().toISOString().split('T')[0]
                }
                // new Notification(this.input.body);
                this.card.push(this.input);
                this.input = {
                    header: '',
                    body: '',
                    footer: '',
                    variant: 'secondary',
                    date: '',
                    links: []
                };
                this.date_flag = false;
                this.save_in_browser();
                this.$refs[this.category_name].focus();
            },
            delete_item(item) {
                this.$delete(this.card, this.card.indexOf(item));
                this.save_in_browser()
            },
            change_variant(variant, text, header, item) {
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
            }
        },
        created() {
            this.card = this.items;
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
            }
        }
    }
</script>

<style scoped>

</style>
