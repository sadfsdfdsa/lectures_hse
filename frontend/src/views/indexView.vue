<template>
    <div>
        <Navigation sub_header="Home." link_name="Lectures." link_path="/lectures"></Navigation>
        <b-container class="body_for_footer">
            <b-row class="mt-4">
                <b-col>
                    <b-row>
                        <b-col class="text-center"><h2 class="hse_font_color">What is it?</h2></b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p><strong>Это платформа для улучшения организации Ваших заметок!</strong></p>
                            <p>Планируйте лекции, сохраняйте ссылки на них и делитесь ими.</p>
                            <p>Создавайте категории и заметки для самых нужных вещей.</p>
                        </b-col>
                    </b-row>

                </b-col>
                <b-col class="text-center">
                    <b-img :src="images.first" lazy></b-img>
                </b-col>
            </b-row>
            <b-row class="text-center mt-3 hse_font_color">
                <b-col><h2>Попробуйте!</h2></b-col>
            </b-row>
            <b-row class="text-center mt-2">
                <b-col>
                    <b-button to="/lectures" size="lg" class="btn-white btn-animation-1 btn-xl btn-hse">
                        Lectures planner
                    </b-button>
                    <b-button to="/dashboard" size="lg" class="btn-white btn-animation-1 btn-xl btn-hse">
                        Dashboard
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import Navigation from "../components/Navigation";

    import learning from "../assets/learning.png";

    export default {
        name: "indexView",
        components: {Footer, Navigation},
        data: () => ({
            images: {
                first: learning
            }
        }),
    }
</script>

<style scoped>

</style>
