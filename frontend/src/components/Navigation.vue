<template>
    <div class="hse_nav_background hse_nav_font_color container-fluid mb-3">
        <b-row align-v="center">
            <b-col class="hse_nav_header_main">
                <router-link to="/"><h1><span class="align-middle" style="color: white">On|{{sub_header}}</span></h1>
                </router-link>
            </b-col>
            <b-col class="text-right">
                <router-link :to="link_path" class="hse_a"><h3>->{{link_name}}</h3></router-link>
            </b-col>
        </b-row>
        <b-row v-if="notf" :class="'text-center alert-'+variant" @click="notf=null">
            <b-col><h4>{{notf}}</h4>(нажмите чтобы убрать)</b-col>
        </b-row>
    </div>
</template>

<script>

    export default {
        name: "Navigation",
        props: ['sub_header', 'link_name', 'link_path', 'notification', 'variant'],
        data: () => ({
            notf: null
        }),
        created() {
            document.title = 'On | ' + this.sub_header;
            this.notf = this.notification;
        }
    }
</script>

<style scoped>

</style>
