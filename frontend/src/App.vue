<template>
    <div>
        <NavBar></NavBar>
        <router-view class="margin-nav"></router-view>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    import NavBar from "./components/Navigation";

    export default {
        components: {NavBar}
    }
</script>

<style lang="scss">
    @import "~vue-snotify/styles/material.css";
    // Your variable overrides
    $primary: #6495ed;

    $danger: #FF6347;
    $warning: #F0E68C; // FFD700
    $success: #90EE90;
    $secondary: #A9A9A9;


    .btn-primary:not(:disabled):not(.disabled) {
        background: #1e88e5;
    }

    .btn-primary:not(:active):not(.active) {
        background: #6495ed;
    }

    .btn-warning:not(:disabled):not(.disabled) {
        background: #ffc107;
    }

    // Bootstrap and its default variables
    @import '../node_modules/bootstrap/scss/bootstrap';
    // BootstrapVue and its default variables
    @import '../node_modules/bootstrap-vue/src/index.scss';
</style>
