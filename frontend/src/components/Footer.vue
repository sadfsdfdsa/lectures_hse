<template>
    <!-- Footer -->
    <b-container class="text-center fixed-bottom" style="    z-index: -1;
">
        <hr>
        <b-row class="mb-2">
            <b-col>
                <router-link to="/" class="hse_font_color"><h5>Home</h5></router-link>
            </b-col>
            <b-col>
                <router-link to="/lectures" class="hse_font_color"><h5>Lectures</h5></router-link>
            </b-col>
            <b-col>
                <router-link to="/blog" class="hse_font_color"><h5>Blog</h5></router-link>
            </b-col>
        </b-row>
        <b-container class="text-center">
            <b-row>
                <b-col>
                    <h6>Copyright Shuvaev Artem 2020. <a class="hse_font_color" href="https://perm.hse.ru/">HSE
                        Perm</a>
                    </h6>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
    <!-- Footer -->
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
