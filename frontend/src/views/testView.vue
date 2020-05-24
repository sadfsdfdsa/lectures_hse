<template>
    <div>
        <div class="container-fluid">
            <draggable class="row" @change="save_state" :list="columns">
                <div class="col-12 col-sm-4 col-md-3 col-lg-2" v-for="(column, index) in columns" :key="column.name">
                    <!--header-->
                    <div slot="header">
                        <b-row v-if="rewrite_column_name!==column.name">
                            <b-col cols="9" class="text-left"><h5>{{column.name}}</h5></b-col>
                            <b-col cols="3" class="text-right" align-self="center">
                                        <span class="btn-md text-right btn rounded-pill"
                                              @click="set_rewrite_name(column.name)">&#9998;</span>
                            </b-col>
                        </b-row>
                        <b-row v-else no-gutters>
                            <b-col cols="10" class="text-left">
                                <h3>
                                    <b-input v-model="new_column_name" size="sm"></b-input>
                                </h3>
                            </b-col>
                            <b-col cols="2" class="text-right" align-self="center">
                                       <span class="btn-sm text-right btn rounded-pill"
                                             @click="change_column_name(column.name)">&#10004;</span>
                                <span class="btn-sm text-right btn rounded-pill btn-outline-danger"
                                      @click="delete_column(column.name)">&#128711;</span>
                            </b-col>
                        </b-row>
                    </div>
                    <!--items-->
                    <draggable :list="column.items" group="people" @change="save_state">
                        <div :class="'notice notice-'+item.variant"
                             v-for="(item, index) in column.items"
                             :key="index"
                        >
                            <b-row>
                                <b-col class="text-left" sm="9">{{item.body}}</b-col>
                                <b-col class="text-right" sm="3">
                                    <!--<b-button pill size="sm" class="bg-transparent border-0 text-black-50">-->
                                    <!--&#8801;-->
                                    <!--</b-button>-->
                                    <b-button pill size="sm" class="bg-transparent border-0 text-black-50"
                                              @click="delete_task(index, column.name)">
                                        &#215;
                                    </b-button>
                                </b-col>
                            </b-row>
                        </div>
                    </draggable>
                    <!--footer-->
                    <div slot="footer" :class="'notice-pseudo notice-'+input_fields.variant"
                         v-if="input_column_name===column.name">
                        <b-row>
                            <b-col>
                                <b-input-group>
                                    <b-form-textarea v-model="input_fields.body" size="sm"></b-form-textarea>
                                    <template slot="append">
                                        <b-button size="md" variant="info" @click="add_task(column.name)">+
                                        </b-button>
                                    </template>
                                </b-input-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="text-center">
                                <b-button-group size="lg">
                                    <b-button variant="danger"
                                              @click="input_fields.variant='danger'"></b-button>
                                    <b-button variant="warning"
                                              @click="input_fields.variant='warning'"></b-button>
                                    <b-button variant="primary"
                                              @click="input_fields.variant='primary'"></b-button>
                                    <b-button variant="success"
                                              @click="input_fields.variant='success'"></b-button>
                                    <b-button variant="secondary"
                                              @click="input_fields.variant='secondary'"></b-button>
                                </b-button-group>
                            </b-col>
                        </b-row>
                    </div>
                    <div slot="footer" v-else class="text-center">
                        <b-row class="text-center">
                            <b-col>
                                <div class="notice-btn btn" @click="input_column_name=column.name">New task
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
                <b-col sm="2">
                    <div class="notice-btn btn btn-md" @click="add_column" draggable="false">New column
                    </div>
                </b-col>
            </draggable>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import Navigation from "../components/Navigation";


    export default {
        name: "testView",
        components: {
            Navigation,
            draggable,
        },
        data: () => ({
            input_fields: {
                variant: 'secondary',
                body: ''
            },
            input_column_name: '',
            rewrite_column_name: '',
            new_column_name: '',

            columns: []
        }),
        methods: {
            add_column() {
                this.columns.push({
                    name: 'New column',
                    items: []
                });
                this.save_state()
            },
            delete_column(col_name) {
                for (let i = 0; i < this.columns.length; i++) {
                    if (col_name === this.columns[i].name) {
                        this.$delete(this.columns, i);
                        this.save_state();
                        return;
                    }
                }
            },
            set_rewrite_name(col_name) {
                this.rewrite_column_name = col_name;
                this.new_column_name = col_name
            },
            change_column_name(old_name) {
                for (let i = 0; i < this.columns.length; i++) {
                    if (old_name === this.columns[i].name) {
                        this.columns[i].name = this.new_column_name;
                        this.rewrite_column_name = '';
                        this.new_column_name = '';
                        this.save_state();
                        return;
                    }
                }
            },
            add_task(column_name) {
                for (let i = 0; i < this.columns.length; i++) {
                    if (this.columns[i].name === column_name) {
                        this.columns[i].items.push(
                            {
                                variant: this.input_fields.variant,
                                body: this.input_fields.body
                            }
                        );
                        this.input_fields = {
                            variant: 'secondary',
                            body: ''
                        };
                        this.input_column_name = '';
                        this.save_state();
                        return;
                    }
                }

            },
            delete_task(task_index, column_name) {
                for (let i = 0; i < this.columns.length; i++) {
                    if (column_name === this.columns[i].name) {
                        this.$delete(this.columns[i].items, task_index);
                        this.save_state();
                        return;
                    }
                }
            },
            save_state() {
                localStorage[this.$store.state.localstorage_variables.columns] = JSON.stringify(this.columns)
            }
        },
        created() {
            if (localStorage.getItem(this.$store.state.localstorage_variables.columns)) {
                this.columns = JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.columns))
            } else {
                localStorage[this.$store.state.localstorage_variables.columns] = JSON.stringify([])
            }
        }
    }
</script>

<style scoped>

</style>