<template>
    <div class="hse_nav_background hse_nav_font_color container-fluid mb-3">
        <b-row align-v="center" no-gutters>
            <b-col class="hse_nav_header_main" sm="5">
                <h1 style="display: inline-block">
                    <router-link to="/">
                        <span class="align-middle" style="color: white">On|{{sub_header}}</span>
                    </router-link>
                </h1>
                <span class="badge badge-warning mt-1" style="vertical-align: top">Beta</span>
            </b-col>
            <b-col class="text-right">
                <router-link :to="link_path" class="hse_a"><h3>→{{link_name}}</h3></router-link>
            </b-col>
        </b-row>
        <b-row v-if="notf" :class="'text-center alert-'+variant" @click="checked">
            <b-col><h4>{{notf}}</h4>(нажмите чтобы убрать)</b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: ['sub_header', 'link_name', 'link_path', 'notification', 'variant', 'show_once'],
        data: () => ({
            notf: null
        }),
        methods: {
            checked() {
                this.notf = null;
                if (this.show_once) {
                    localStorage.note_app_show_once = 'true';
                }
            },
        },
        created() {
            document.title = 'On | ' + this.sub_header;

            if (localStorage.getItem('note_app_show_once') && !this.show_once) {
                localStorage.removeItem('note_app_show_once')
            }
            if (!localStorage.getItem('note_app_show_once' || this.show_once)) {
                this.notf = this.notification;
            }
        }
    }
</script>

<style scoped>

</style>
