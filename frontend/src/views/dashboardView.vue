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
                                <b-textarea v-model="input.body" placeholder="Enter body text"
                                            style="border: none; box-shadow: none; resize: none;"
                                            size="sm"></b-textarea>
                            </b-card-text>
                            <template v-slot:header>
                                <b-row style="max-height: 10px;" aligh-h="end" class="text-right">
                                    <b-col sm="12">
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
                            <card-component :item="item"
                                            @delete_component="delete_item(item)"
                                            @change_item="change_variant"
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
            change_variant(variant, text, item) {
                let index = this.card.indexOf(item);

                this.card[index].body = text;
                this.card[index].variant = variant;

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
