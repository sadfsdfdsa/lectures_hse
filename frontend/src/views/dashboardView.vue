<template>
    <div>

        <!--                    notification="Информация об обновлении в блоге" variant="success"
                    show_once="true"-->
        <b-container class="body_for_footer" fluid>
            <b-tabs content-class="mt-3" no-fade>
                <!--special boards-->
                <!--calendar-->
                <b-tab lazy @click="utils_set_active_board(special_boards.calendar)" v-if="show_items"
                       :active="active_board===special_boards.calendar">
                    <template v-slot:title>
                        {{dateToString}}
                        <b-form-datepicker
                                v-model="calendar_board_date_value"
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
                    <category-component :board_name="special_boards.calendar"
                                        :disabled="true"
                                        :items="dateCardsArray"
                                        :style_schema="style_schema"
                                        @create_item="create_card"
                                        @delete_item="delete_card"
                                        @change_item="change_card"
                    ></category-component>
                </b-tab>
                <!--templates-->
                <b-tab lazy @click="utils_set_active_board(special_boards.templates)" v-if="show_items"
                       :active="active_board===special_boards.templates">
                    <template v-slot:title>
                        <b-row cols="3" cols-sm="3" no-gutters align-v="center">
                            <b-col>
                                <div class="mr-1 btn-success btn rounded-pill disabled">{{templatesCardsArray.length}}
                                </div>
                            </b-col>
                            <b-col class="ml-1"><h6>Templates</h6></b-col>
                        </b-row>
                    </template>
                    <category-component :board_name="special_boards.templates"
                                        :disabled="false"
                                        :templates="templatesCardsArray"
                                        :items="templatesCardsArray"
                                        :style_schema="style_schema"
                                        @create_item="create_card"
                                        @delete_item="delete_card"
                                        @change_item="change_card"
                    ></category-component>
                </b-tab>
                <!--everyday-->
                <b-tab lazy @click="utils_set_active_board(special_boards.everyday)" v-if="show_items"
                       :active="active_board===special_boards.everyday">
                    <template v-slot:title>
                        <b-row cols="3" cols-sm="3" no-gutters align-v="center">
                            <b-col>
                                <div class="mr-1 btn-success btn rounded-pill disabled">{{everydayCardsArray.length}}
                                </div>
                            </b-col>
                            <b-col class="ml-1"><h6>Everyday</h6></b-col>
                        </b-row>
                    </template>
                    <category-component :board_name="special_boards.everyday"
                                        :disabled="false"
                                        :items="everydayCardsArray"
                                        :templates="templatesCardsArray"
                                        :style_schema="style_schema"
                                        @create_item="create_card"
                                        @delete_item="delete_card"
                                        @change_item="change_card"
                    ></category-component>
                </b-tab>
                <!--/special boards-->
                <!--common boards-->
                <div v-for="item in sortedBoardsArray" v-bind:key="item.board_name">
                    <b-tab lazy @click="utils_set_active_board(item.board_name)"
                           :active="active_board===item.board_name">
                        <template v-slot:title>
                            <b-input-group>
                                <b-form-input
                                        spellcheck="false" v-model="item.tmp_name"
                                        @change="change_name_board(item.tmp_name, item.board_name)"
                                        style="border: none; box-shadow: none; color: transparent; text-shadow: 0 0 0 black;">
                                </b-form-input>
                                <template v-slot:prepend>
                                    <div class="mr-1 btn-primary btn rounded-pill disabled">{{item.items.length}}
                                    </div>
                                </template>
                                <b-input-group-append class="ml-1">
                                    <b-button pill variant="outline-danger" class="ml-1"
                                              @click="delete_board(item.board_name)"
                                    >×
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </template>
                        <category-component :board_name="item.board_name"
                                            :disabled="false"
                                            :items="item.items"
                                            :templates="templatesCardsArray"
                                            :style_schema="style_schema"
                                            :active_card="active_card"
                                            @create_item="create_card"
                                            @delete_item="delete_card"
                                            @change_item="change_card"
                        ></category-component>
                    </b-tab>
                </div>
                <!--/common boards-->
                <template v-slot:tabs-start>
                    <b-row align-v="center">
                        <b-col class="mr-1">
                            <b-button @click="set_show_items_flag()" variant="primary">
                                <div v-if="show_items">
                                    -
                                </div>
                                <div v-else>
                                    +
                                </div>
                            </b-button>
                        </b-col>
                        <b-col v-if="show_items">
                            <b-button-group size="sm">
                                <b-button :variant="style_schema==='outline_color'?'outline-primary':'primary'"
                                          @click="set_style(0)"
                                          style="border-top-left-radius: 20px; border-bottom-left-radius: 20px">⚫
                                </b-button>
                                <b-button :variant="style_schema==='outline_color'?'primary':'outline-primary'"
                                          @click="set_style(1)"
                                          style="border-top-right-radius: 20px; border-bottom-right-radius: 20px">⚪
                                </b-button>
                            </b-button-group>
                        </b-col>
                    </b-row>
                </template>
                <template v-slot:tabs-end>
                    <b-row align-v="center">
                        <b-col>
                            <b-nav-item @click="create_board(uniqueBoardName)"
                            ><h4>+</h4></b-nav-item>
                        </b-col>
                    </b-row>
                </template>
            </b-tabs>
            <div v-if="boards.length===0">
                <b-row class="text-center">
                    <b-col>
                        <b-button class="btn-hse btn-white btn-animation-1" size="lg" variant="primary" pill
                                  @click="create_board(uniqueBoardName)">Create new board
                        </b-button>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    //['board_name', 'items', 'active_card', 'style_schema', 'disabled']

    import Navigation from "../components/Navigation";
    import Footer from "../components/Footer";
    import CategoryComponent from "../components/boardComponent";

    // import draggable from 'vuedraggable'


    export default {
        name: "dashboardView",
        components: {CategoryComponent, Footer, Navigation},
        data: () => ({
            boards: [],

            style_schema: '',
            active_board: null,
            active_card: null,
            calendar_board_date_value: new Date(),

            show_items: true,

            special_boards: {
                calendar: '',
                templates: '',
                everyday: ''
            },
            special_boards_values: [],

        }),
        methods: {
            set_show_items_flag() {
                this.show_items = !this.show_items;
                localStorage[this.$store.state.localstorage_variables.show_items_flag] = JSON.stringify(this.show_items);
            },
            set_style(index) {
                this.style_schema = this.$store.state.styles[index];
                localStorage[this.$store.state.localstorage_variables.style_schema] = this.style_schema;
            },

            // create boards
            create_board(name) {
                this.boards.push({board_name: name, items: [], tmp_name: name});
                this.utils_set_active_board(name);
                this.$store.commit('save_items_local', this.boards)
            },

            change_name_board(tmp_name_new, board_name_old) {
                if (!this.boardsHeadersArray.includes(tmp_name_new) || tmp_name_new === '') {
                    for (let i = 0; i < this.boards.length; i++) {
                        if (this.boards[i].board_name === board_name_old) {
                            this.boards[i].board_name = tmp_name_new;
                            this.utils_set_active_board(tmp_name_new);
                            this.$store.commit('save_items_local', this.boards);
                            break;
                        }
                    }
                } else {
                    this.$snotify.warning('Boards names cannot be empty or repeated');
                    for (let i = 0; i < this.boards.length; i++) {
                        if (this.boards[i].board_name === board_name_old) {
                            this.boards[i].tmp_name = board_name_old;
                            break;
                        }
                    }
                }
            },
            delete_board(name) {
                for (let i = 0; i < this.boards.length; i++) {
                    if (this.boards[i].board_name === name) {
                        this.$delete(this.boards, i);
                        break;
                    }
                }
                this.$store.commit('save_items_local', this.boards)
            },
            // emits from children
            delete_card(board_name, index) {
                for (let i = 0; i < this.special_boards_values.length; i++) {
                    if (this.special_boards_values[i].board_name === board_name) {
                        this.$delete(this.special_boards_values[i].items, index);
                        this.$store.commit('save_special_items_local', this.special_boards_values);
                        return;
                    }
                }
                for (let i = 0; i < this.boards.length; i++) {
                    if (this.boards[i].board_name === board_name) {
                        this.$delete(this.boards[i].items, index);
                        this.$store.commit('save_items_local', this.boards);
                        return;
                    }
                }
            },
            change_card(board_name, index, item) {
                for (let i = 0; i < this.special_boards_values.length; i++) {
                    if (this.special_boards_values[i].board_name === board_name) {
                        this.special_boards_values[i].items[index] = item;
                        this.$store.commit('save_special_items_local', this.special_boards_values);
                        return;
                    }
                }

                for (let i = 0; i < this.boards.length; i++) {
                    if (this.boards[i].board_name === board_name) {
                        this.boards[i].items[index] = item;
                        this.$store.commit('save_items_local', this.boards);
                        return;
                    }
                }
            },
            create_card(board_name, item, options) {
                for (let i = 0; i < this.special_boards_values.length; i++) {
                    if (this.special_boards_values[i].board_name === board_name) {
                        this.special_boards_values[i].items.push(item);
                        this.$store.commit('save_special_items_local', this.special_boards_values);
                        return;
                    }
                }

                for (let i = 0; i < this.boards.length; i++) {
                    if (this.boards[i].board_name === board_name) {
                        this.boards[i].items.push(item);
                        if (options.notification_flag === true) {
                            this.set_notification(item.header, board_name, item.date);
                        }
                        this.$store.commit('save_items_local', this.boards);
                        return;
                    }
                }
            },

            set_notification(header, board_name, deadline_date) {
                if (Notification.permission === "granted")
                    setTimeout(() => {
                        let board = board_name;
                        let tmp = new Notification(
                            board_name + ': ' + header
                        );
                        tmp.onclick = function () {
                            window.open('?board=' + board + '&note=' + header);
                        }
                    }, deadline_date.getTime() - new Date().getTime());
                else {
                    Notification.requestPermission().then(this.set_notification(header, board_name, deadline_date));
                }
            },


            // set active board
            utils_set_active_board(board) {
                this.active_board = board;
                this.$store.commit('set_active_board', board)
            },
            utils_set_active_card_and_board(board, card) {
                this.active_card = card;
                this.$store.commit('set_active_card', card);
                this.utils_set_active_board(board);
            },

            // get data from $store
            utils_init_vars() {
                this.special_boards = this.$store.state.special_boards;
            },
            add_null(value, limit) {
                if (value < limit) {
                    return '0' + value
                }
                return value.toString()
            },



        }
        ,
        created() {
            this.utils_init_vars();

            // get from localstorage all info
            if (localStorage.getItem(this.$store.state.localstorage_variables.boards)) {
                this.boards = JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.boards));

                if (this.$route.query.board && this.$route.query.note) {
                    this.utils_set_active_card_and_board(this.$route.query.board, this.$route.query.note);
                    this.$router.replace({query: {}})
                } else if (localStorage.getItem(this.$store.state.localstorage_variables.active_board)) {
                    this.active_board = localStorage.getItem(this.$store.state.localstorage_variables.active_board);
                }
            }

            // get style_schema from localStorage
            if (localStorage.getItem(this.$store.state.localstorage_variables.style_schema)) {
                this.style_schema = localStorage.getItem(this.$store.state.localstorage_variables.style_schema)
            } else {
                this.style_schema = this.$store.state.styles[0];
            }

            // todo
            if (localStorage.getItem(this.$store.state.localstorage_variables.special_boards)) {
                this.special_boards_values = JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.special_boards))
            } else {
                localStorage[this.$store.state.localstorage_variables.special_boards] = JSON.stringify([
                    {board_name: this.special_boards.everyday, tmp_name: this.special_boards.everyday, items: []},
                    {board_name: this.special_boards.templates, tmp_name: this.special_boards.templates, items: []}
                ])
            }

            if (localStorage.getItem(this.$store.state.localstorage_variables.show_items_flag)) {
                this.show_items = JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.show_items_flag))
            }
        }
        ,
        computed: {
            uniqueBoardName: function () {
                let tmp = 'Board';
                let i = 1;
                while (this.boardsHeadersArray.includes(tmp + i)) {
                    i++;
                }
                return tmp + i;
            },

            boardsHeadersArray: function () {
                let tmp = [];
                this.boards.forEach((item) => {
                    tmp.push(item.board_name)
                });
                return tmp;
            },

            sortedBoardsArray: function () {
                let tmp_list = this.boards;
                tmp_list.sort(function (a, b) {
                    let result = a.items.length > b.items.length;
                    return result ? -1 : 1;
                });
                return tmp_list;
            },

            // for special boards
            templatesCardsArray: function () {
                let tmp = [];
                this.special_boards_values.forEach((board) => {
                    if (board.board_name === this.special_boards.templates) {
                        tmp = board.items;
                        return;
                    }
                });
                return tmp;
            },
            everydayCardsArray: function () {
                let tmp = [];

                this.special_boards_values.forEach((board) => {
                    if (board.board_name === this.special_boards.everyday) {
                        tmp = board.items;
                        let today = this.calendar_board_date_value;
                        tmp.forEach((item) => {
                                if (item.date !== null) {
                                    let tmp_date = new Date(item.date);
                                    tmp_date.setMonth(today.getMonth());
                                    tmp_date.setFullYear(today.getFullYear());
                                    tmp_date.setDate(today.getDate());
                                    item.date = tmp_date;
                                }
                            }
                        );
                        return;
                    }
                });
                return tmp;
            },
            dateCardsArray: function () {
                let output = [];
                this.boards.forEach((item) => {
                    item.items.forEach((note) => {
                        let tmp = new Date(note.date);
                        if (tmp.getMonth() === this.calendar_board_date_value.getMonth()
                            && tmp.getDate() === this.calendar_board_date_value.getDate()
                            && tmp.getFullYear() === this.calendar_board_date_value.getFullYear()) {
                            note.board_name = item.board_name;
                            output.push(note)
                        }
                    })
                });

                output = output.concat(this.everydayCardsArray);
                return output;
            },
            dateToString: function () {
                let tmp = this.calendar_board_date_value;
                return this.add_null(tmp.getDate(), 10) + '.' + this.add_null((tmp.getMonth() + 1), 10) + '.' + tmp.getFullYear()
            },
        }
    }
</script>

<style scoped>

</style>