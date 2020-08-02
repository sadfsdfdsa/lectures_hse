import Snotify, {SnotifyPosition} from "vue-snotify";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from "./routes.js";
import App from "./App.vue";
import api from "./utils/api.js";
import './registerServiceWorker'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.rightTop,
        timeout: 3000
    }
});

// you may call it in components with this.$api
Vue.prototype.$api = api;

const store = new Vuex.Store({
    state: {
        // active: {
        //     card: null, // string
        //     board: null, // string
        // },

        special_boards: {
            calendar: 'calendar board',
            templates: 'templates board',
            everyday: 'everyday board'
        },

        localstorage_variables: {
            // DASHBOARD SERVICE
            special_boards: 'dashboard_special_boards',
            // todo nots_app in production
            // boards: 'dashboard_boards', // board model: {name: string, items: []}
            boards: 'nots_app',
            // active_card: 'dashboard_active_card',
            active_board: 'dashboard_active_board',
            style_schema: 'dashboard_style_schema',
            show_items_flag: 'show_items_flag',

            // TASKS QUEUE SERVICE
            columns: 'tasks_columns'
        },

        styles: ['full_color', 'outline_color']

    },
    mutations: {
        set_active_card(state, card_header) {
            state.active_card = card_header;
            localStorage[state.localstorage_variables.active_card] = card_header;
        },
        set_active_board(state, board_header) {
            state.active_board = board_header;
            localStorage[state.localstorage_variables.active_board] = board_header;
        },
        save_items_local(state, items) {
            localStorage[state.localstorage_variables.boards] = JSON.stringify(items)
        },
        save_special_items_local(state, items) {
            localStorage[state.localstorage_variables.special_boards] = JSON.stringify(items)
        }
    }
});

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior: () => ({y: 0})
});

new Vue({
    el: "#app",
    router,
    store,
    render: f => f(App)
});
