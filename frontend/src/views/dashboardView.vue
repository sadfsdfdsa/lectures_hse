<template>
    <div>
        <Navigation sub_header="Dashboard." link_path="/" link_name="Home."
                    notification="Информация об обновлении в блоге" variant="success"
                    show_once="true"
        ></Navigation>
        <b-container class="body_for_footer">
            <b-tabs content-class="mt-3" no-fade >
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
                                       @re_save="save_local"></category-view>
                    </b-tab>
                </div>
                <template v-slot:tabs-end>
                    <b-nav-item @click="add_category('NewBoard'+count)"><b>+</b>
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
                        <b-button class="btn-hse btn-white btn-animation-1" size="lg"
                                  @click="add_category('NewBoard')">Create new board
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
            count: 1,
            last_table: null,
            focus_card: null
        }),
        methods: {
            save_local(items, category_name) {
                for (let i = 0; i++; i < this.nots.length) {
                    if (this.nots[i].category_name === category_name) {
                        this.nots[i].items = items;
                    }
                }
                localStorage.nots_app = JSON.stringify(this.nots);
            },
            add_category(name) {
                this.count++;
                this.nots.push({category_name: name, items: [], new_name: name});
                localStorage.nots_app = JSON.stringify(this.nots);
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
                for (let i = 0; i < this.nots.length; i++) {
                    if (this.nots[i].category_name === old_name) {
                        this.nots[i].category_name = new_name;
                    }
                }
                localStorage.nots_app = JSON.stringify(this.nots);
            },
            save_opened_table(category_name) {
                this.last_table = category_name;
                localStorage.nots_app_last_table = category_name;
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
            }
        }
    }
</script>

<style scoped>

</style>