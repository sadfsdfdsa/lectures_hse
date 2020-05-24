<template>
    <b-container class="fixed-top" fluid="true" style="background-color: rgba(255, 255, 255, .7);">
        <b-row align-h="center">
            <b-col sm="12" lg="8">
                <b-navbar toggleable="lg">
                    <b-row class="navbar-row" align-v="center">
                        <b-col class="text-left" lg="6" md="10">
                            <b-row align-v="center">
                                <b-col class="text-left" lg="12" cols="10">
                                    <div style="display: inline-block">
                                        <router-link to="/" tag="div" class="cursor h-font text-uppercase">
                                            <span class="brand-animation-pink">On</span>|<span
                                                class="brand-animation-blue">Testing</span></router-link>
                                    </div>
                                    <!--                                        <span class="badge badge-warning" style="vertical-align: top">Beta</span>-->
                                </b-col>
                                <b-col class="text-right" cols="2">
                                    <b-navbar-toggle target="nav-text-collapse"
                                                     class="d-lg-none text-right border-0 bg-white">
                                        <img src="../assets/Hamburger_icon.svg">
                                    </b-navbar-toggle>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col class="text-uppercase" lg="4">
                            <b-collapse id="nav-text-collapse" is-nav>
                                <div class="mr-4">
                                    <router-link to="/" tag="div" class="navbar-item">Dashboard</router-link>
                                </div>
                                <div class="mr-4">

                                    <router-link to="/tasks" tag="div" class="navbar-item">Tasks</router-link>

                                </div>
                                <div class="mr-4">
                                    <a href="https://test-design-container.herokuapp.com/"><span
                                            class="navbar-item">Blog</span></a></div>
                            </b-collapse>
                        </b-col>
                    </b-row>
                </b-navbar>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style scoped>

</style>