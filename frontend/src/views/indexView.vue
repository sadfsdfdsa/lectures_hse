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
                            <p><strong>Жаждете делиться знаниями?</strong></p>
                            <p>Делитесь знаниями, получайте их и передавайте другим!</p>
                            <p>Создавайте лекции, клубы общения, организовывайте онлайн встречи, сообщите об этом
                                остальным.</p>
                            <p><strong>Хотите получить знания или просто пообщаться?</strong></p>
                            <p>Ищите клубы по интересам, подключайтесь к лекциям и сеансам общения, контактируйте с
                                миром, когда это так важно.</p>
                            <p ><strong>Начните учиться, подключайтесь к лекциям, проведите время с пользой!</strong></p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="text-center">
                    <b-img :src="images.first" lazy></b-img>
                </b-col>
            </b-row>
            <b-row class="text-center mt-5">
                <b-col class="mt-5">
                    <b-button to="/lectures" size="lg" class="btn-white btn-animation-1 btn-xl btn-hse">
                        Start studying now.
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
