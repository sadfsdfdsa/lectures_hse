<template>
    <div>
        <router-view></router-view>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import "~vue-snotify/styles/material.css";
    // Your variable overrides
    $primary: #6495ed;
    .btn-primary:not(:disabled):not(.disabled) {
        background: #1e88e5;
    }

    .btn-warning:not(:disabled):not(.disabled) {
        background: #ffc107;
    }

    // Bootstrap and its default variables
    @import '../node_modules/bootstrap/scss/bootstrap';
    // BootstrapVue and its default variables
    @import '../node_modules/bootstrap-vue/src/index.scss';
</style>
