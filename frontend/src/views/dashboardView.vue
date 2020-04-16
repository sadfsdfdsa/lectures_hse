<template>
    <div>
        <Navigation sub_header="Dashboard." link_path="/" link_name="Home."></Navigation>
        <b-container class="body_for_footer">
            <b-row align-v="center">
                <b-col>
                    <b-card-group columns>
                        <b-card :border-variant="input.variant"
                                :header-bg-variant="input.variant"
                                header-text-variant="white"
                                align="center"
                                footer-tag="footer">
                            <b-card-text>
                                <b-form-textarea v-model="input.body" placeholder="Enter body text"
                                                 size="sm"></b-form-textarea>
                            </b-card-text>
                            <template v-slot:header>
                                <b-row style="max-height: 12px;" aligh-h="between" class="justify-content-between">
                                    <b-col sm="7">
                                        <b-button variant="primary" pill
                                                  @click="input.variant='primary'">P
                                        </b-button>
                                        <b-button variant="danger" pill @click="input.variant='danger'"> D
                                        </b-button>
                                        <b-button variant="success" pill
                                                  @click="input.variant='success'">S
                                        </b-button>
                                        <b-button variant="warning" pill
                                                  @click="input.variant='warning'">W
                                        </b-button>
                                    </b-col>
                                    <b-col sm="2">
                                        <div>
                                            <b-button variant="secondary" pill
                                                      @click="create">>
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </template>
                        </b-card>
                        <div v-for="item in card">
                            <card-component :header_text="item.header" :variant="item.variant"
                                            :footer_text="item.footer"
                                            :body_text="item.body" @delete_component="delete_item(item)"
                            ></card-component>
                        </div>
                    </b-card-group>
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
    import CardComponent from "../components/cardComponent";

    export default {
        name: "dashboardView",
        components: {CardComponent, Empty, Footer, Navigation},
        data: () => ({
            input: {
                header: '',
                body: '',
                footer: '',
                variant: 'secondary'
            },
            show_buttons_flag: false,
            card: []
        }),
        methods: {
            create() {
                // new Notification(this.input.body);
                this.card.push(this.input);
                this.input = {
                    header: '',
                    body: '',
                    footer: '',
                    variant: 'secondary'
                };
                this.save_in_browser();
            },
            delete_item(item) {
                this.$delete(this.card, this.card.indexOf(item));
                this.save_in_browser()
            },
            save_in_browser() {
                localStorage.nots = JSON.stringify(this.card);
            },
            load_from_browser() {
                if (localStorage.getItem('nots')) {
                    this.card = JSON.parse(localStorage.getItem('nots'))
                }
            }

        },
        created() {
            if (Notification.permission !== 'granted') {
                Notification.requestPermission();
            }
            this.load_from_browser();
        }
    }
</script>

<style scoped>

</style>
