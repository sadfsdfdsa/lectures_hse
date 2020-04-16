<template>
    <div class="hse_nav_background hse_nav_font_color container-fluid">
        <b-row align-v="center">
            <b-col class="ml-5 hse_nav_header_main">
                <router-link to="/"><h1><span class="align-middle" style="color: white">On|{{sub_header}}</span></h1>
                </router-link>
            </b-col>
            <!--            <b-col class="text-center mt-3"><h3>{{sub_header}}</h3></b-col>-->
            <b-col class="text-right mr-5">
                <router-link :to="link_path" class="hse_a"><h4>->{{link_name}}</h4></router-link>
            </b-col>
        </b-row>
        <hr>
    </div>
</template>

<script>
    import hse from '../css/hse.css';

    export default {
        name: "Navigation",
        props: ['sub_header', 'link_name', 'link_path'],
        created() {
            document.title = 'On | ' + this.sub_header;
        }
    }
</script>

<style scoped>

</style>
