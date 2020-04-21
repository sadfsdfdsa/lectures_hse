<template>
    <div>
        <Navigation sub_header="Dashboard." link_path="/blog" link_name="Blog."
                    notification="Информация об обновлении в блоге" variant="success"
                    show_once="true"
        ></Navigation>
        <b-container class="body_for_footer" fluid>
            <b-tabs content-class="mt-3" no-fade>
                <b-tab lazy v-if="sortedNots.length>0"
                       @click="save_opened_table('calendar board')"
                       :active="'calendar board'===this.last_table?'active':null">
                    <template v-slot:title>
                        <b-form-datepicker
                                v-model="calendar_board_date"
                                button-only
                                locale="en-US"
                                aria-controls="example-input"
                                button-variant
                                value-as-date
                                class="bg-light"
                                right
                                size="md"
                        ></b-form-datepicker>
                    </template>
                    <category-view :category_name="'calendar board'" :items="[]" :disabled="calendar_board_date"
                                   :style_schema="style"
                    ></category-view>
                </b-tab>
                <div v-for="item in sortedNots" v-bind:key="item.category_name">
                    <b-tab lazy @click="save_opened_table(item.category_name)"
                           :active="item.category_name===last_table?'active':null">
                        <template v-slot:title>
                            <b-input-group>
                                <b-form-input v-model="item.new_name" spellcheck="false"
                                              @change="save_name(item.category_name, item.new_name)"
                                              style="border: none; box-shadow: none;   color: transparent; text-shadow: 0 0 0 black;">
                                </b-form-input>
                                <template v-slot:prepend>
                                    <div class="mr-1 btn-primary btn rounded-pill disabled">{{item.items.length}}</div>
                                </template>
                                <b-input-group-append class="ml-1">
                                    <b-button pill variant="outline-danger" class="ml-1"
                                              @click="delete_category(item.new_name)">×
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </template>
                        <category-view :category_name="item.category_name" :items="item.items" :active_card="focus_card"
                                       :style_schema="style" :disabled="false"
                                       @re_save="save_local"></category-view>
                    </b-tab>
                </div>
                <template v-slot:tabs-start v-if="sortedNots.length>0" class="ml-2 ">
                    <b-row align-v="center">
                        <b-col>
                            <b-button-group>
                                <b-button :class="(style==='Default style'?'active':'')" variant="outline-primary"
                                          @click="set_style('Default style')">Style 1
                                </b-button>
                                <b-button :class="style==='Outline style'?'active':''" variant="outline-primary"
                                          @click="set_style('Outline style')">
                                    Style 2
                                </b-button>
                            </b-button-group>
                        </b-col>
                    </b-row>
                </template>
                <template v-slot:tabs-end>
                    <b-nav-item @click="add_category('Board'+generate_int()+'(editable)')"><b>+</b>
                    </b-nav-item>
                </template>
            </b-tabs>
            <div v-if="nots.length===0">
                <b-row>
                    <b-col>
                        <Empty header="No boards... "></Empty>
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col>
                        <b-button class="btn-hse btn-white btn-animation-1" size="lg" variant="primary" pill
                                  @click="add_category('YourFirstBoard(editable)')">Create new board
                        </b-button>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Footer from "../components/Footer";
    import CategoryView from "./categoryView";
    import Empty from "../components/Empty";

    export default {
        name: "dashboardView",
        components: {Empty, CategoryView, Footer, Navigation},
        data: () => ({
            nots: [],
            flag: false,
            last_table: null,
            focus_card: null,
            style: 'Default style',
            calendar_board_date: new Date()
        }),
        methods: {
            set_style(style) {
                if (style === this.style) {
                    return;
                }
                this.style = style;
                localStorage.nots_app_style_schema = style;

            },
            save_local(items, category_name) {
                for (let i = 0; i++; i < this.nots.length) {
                    if (this.nots[i].category_name === category_name) {
                        this.nots[i].items = items;
                    }
                }
                localStorage.nots_app = JSON.stringify(this.nots);
            },
            generate_int() {
                let min = 1;
                let max = 100;
                let random = 1;
                do {
                    random = Math.floor(Math.random() * (+max - +min)) + +min
                } while (this.tablesHeadersArray().includes('Board#' + random));
                return random
            },
            add_category(name) {
                this.nots.push({category_name: name, items: [], new_name: name});
                localStorage.nots_app = JSON.stringify(this.nots);
                this.save_opened_table(name)
            },
            delete_category(name) {
                let index = -1;
                for (let i = 0; i < this.nots.length; i++) {
                    if (this.nots[i].category_name === name || this.nots[i].new_name === name) {
                        index = i;
                    }
                }
                this.$delete(this.nots, index);
                localStorage.nots_app = JSON.stringify(this.nots);
            },
            save_name(old_name, new_name) {
                if ((new_name === '' || this.tablesHeadersArray().includes(new_name)) && old_name !== new_name) {
                    this.$snotify.warning('Board name cannot be repeated or empty.');
                    new_name = old_name;
                }

                for (let i = 0; i < this.nots.length; i++) {
                    if (this.nots[i].category_name === old_name) {
                        this.nots[i].category_name = new_name;
                        this.nots[i].new_name = this.nots[i].category_name;
                    }
                }
                this.save_opened_table(new_name)
                localStorage.nots_app = JSON.stringify(this.nots);
            },
            save_opened_table(category_name) {
                this.last_table = category_name;
                localStorage.nots_app_last_table = category_name;
            },

            tablesHeadersArray() {
                let nots = JSON.parse(localStorage.getItem('nots_app'));
                let category = [];
                nots.forEach((item) => {
                    category.push(item.category_name)
                });
                return category;
            },

        },
        created() {
            if (localStorage.getItem('nots_app')) {
                this.nots = JSON.parse(localStorage.getItem('nots_app'));
                if (this.$route.query.board && this.$route.query.note) {
                    this.save_opened_table(this.$route.query.board);
                    this.focus_card = this.$route.query.note;
                    this.$router.replace({query: {}})

                } else if (localStorage.getItem('nots_app_last_table')) {
                    this.last_table = localStorage.getItem('nots_app_last_table')
                }

                if (localStorage.getItem('nots_app_style_schema')) {
                    this.style = localStorage.getItem('nots_app_style_schema')
                }
            }

        },
        computed: {
            sortedNots: function () {
                let tmp_list = this.nots;
                tmp_list.sort(function (a, b) {
                    let result = a.items.length > b.items.length;
                    return result ? -1 : 1;
                });
                return tmp_list;
            },

        }
    }
</script>

<style scoped>

</style>