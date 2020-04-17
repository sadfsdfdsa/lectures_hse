<template>
    <div>
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
                                                  @click="create" class="active">>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </template>
                    </b-card>
                    <div v-for="item in card" v-bind:key="item.body">
                        <card-component :item="item"
                                        @delete_component="delete_item"
                                        @change_item="change_variant"
                        ></card-component>
                    </div>
                </b-card-group>
            </b-col>
        </b-row>
        <b-row v-if="items.length===0">
            <b-col>
                <Empty header="Create new note!"></Empty>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import CardComponent from "../components/cardComponent";
    import Empty from "../components/Empty";

    export default {
        name: "categoryView",
        components: {Empty, CardComponent},
        props: ['category_name', 'items'],
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
                this.$emit('re_save', this.card, this.category_name)
            },
        },
        created() {
            this.card = this.items;
        }
    }
</script>

<style scoped>

</style>
