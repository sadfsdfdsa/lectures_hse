<template>
    <div>
        <Navigation sub_header="Blog." link_path="/" link_name="Home."></Navigation>
        <b-container class="body_for_footer">
            <b-row align-v="center">
                <b-col sm="2"><h2 class="hse_font_color">Subjects</h2></b-col>
                <b-col class="text-center">
                    <h2 class="hse_font_color">Dashboard</h2>
                </b-col>
            </b-row>
            <hr>
            <b-tabs pills vertical>
                <template v-slot:tabs-end>
                    <span><hr></span>
                    <span class="btn btn-outline-primary">Add subject</span>
                </template>
                <b-tab active title="Today">
                    <template v-slot:title>
                        <span>Today <b-badge variant="danger" pill>14</b-badge></span>
                    </template>
                    <b-row>
                        <b-col>
                            <h5 class="text-danger">Deadlines
                                <b-button variant="outline-danger" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="danger"
                                        header="Primary"
                                        header-bg-variant="danger"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                            <hr>
                            <h5 class="text-warning">Warnings
                                <b-button variant="outline-warning" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="warning"
                                        header="Primary"
                                        header-bg-variant="warning"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="warning"
                                        header="Primary"
                                        header-bg-variant="warning"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                            <hr>
                            <h5 class="text-primary">Primary
                                <b-button variant="outline-primary" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>

                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>

                            </b-card-group>
                            <hr>
                            <h5 class="text-success">Success
                                <b-button variant="outline-success" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="success"
                                        header="Primary"
                                        header-bg-variant="success"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="success"
                                        header="Primary"
                                        header-bg-variant="success"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                        </b-col>
                    </b-row>
                </b-tab>
                <b-tab title="Subject1">
                    <b-row>
                        <b-col>
                            <h5 class="text-danger">Deadlines
                                <b-button variant="outline-danger" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="danger"
                                        header="Primary"
                                        header-bg-variant="danger"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                            <hr>
                            <h5 class="text-warning">Warnings
                                <b-button variant="outline-warning" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="warning"
                                        header="Primary"
                                        header-bg-variant="warning"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="warning"
                                        header="Primary"
                                        header-bg-variant="warning"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                            <hr>
                            <h5 class="text-primary">Primary
                                <b-button variant="outline-primary" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>

                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="primary"
                                        header="Primary"
                                        header-bg-variant="primary"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>

                            </b-card-group>
                            <hr>
                            <h5 class="text-success">Success
                                <b-button variant="outline-success" pill>+</b-button>
                            </h5>
                            <b-card-group columns>
                                <b-card border-variant="success"
                                        header="Primary"
                                        header-bg-variant="success"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                                <b-card border-variant="success"
                                        header="Primary"
                                        header-bg-variant="success"
                                        header-text-variant="white"
                                        align="center">
                                    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                                </b-card>
                            </b-card-group>
                        </b-col>
                    </b-row>

                </b-tab>
            </b-tabs>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Footer from "../components/Footer";
    import Empty from "../components/Empty";

    export default {
        name: "testView",
        components: {Empty, Footer, Navigation}
    }
</script>

<style scoped>

</style>
