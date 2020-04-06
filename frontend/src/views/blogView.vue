<template>
    <div>
        <Navigation sub_header="Blog." link_path="/" link_name="Home."></Navigation>
        <b-container class="body_for_footer">
            <b-row class="mt-5">
                <b-col>
                    <Empty header="Nothing new." text="Update soon)"></Empty>
                </b-col>
            </b-row>
            <b-row class="mt-3 text-center">
                <b-col>
                    <b-button class="btn btn-white btn-animation-1 btn-xl" size="md">Contact me.</b-button>
                </b-col>
            </b-row>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Footer from "../components/Footer";
    import Empty from "../components/Empty";

    export default {
        name: "blogView",
        components: {Empty, Footer, Navigation}
    }
</script>

<style scoped>

</style>
