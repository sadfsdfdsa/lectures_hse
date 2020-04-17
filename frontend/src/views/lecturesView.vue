<template>
    <div>
        <Navigation sub_header="Lectures." link_name="Blog." link_path="/blog"></Navigation>
        <b-container class="body_for_footer">
            <b-row>
                <b-col class="text-center">
                    <b-button v-b-modal.modal-1 class="btn-hse btn-white btn-animation-1 btn-xl" size="lg">Add lecture.
                    </b-button>
                    <b-modal id="modal-1" hide-footer>
                        <template v-slot:modal-title>
                            <span class="hse_font_color">Creating lecture window</span>
                        </template>
                        <div class="text-center">
                            <b-form>
                                <b-form-input
                                        id="input-1"
                                        v-model="lecture_model.title"
                                        type="text"
                                        required
                                        placeholder="Enter lecture title"
                                ></b-form-input>
                                <!--<b-form-select v-model="lecture_model.lang" :options="select_options.langs" size="sm"-->
                                <!--class="mt-3"></b-form-select>-->
                                <!--<b-form-select v-model="lecture_model.theme" :options="select_options.themes" size="sm"-->
                                <!--class="mt-3"></b-form-select>-->
                                <!--<b-form-select v-model="lecture_model.type" :options="select_options.types" size="sm"-->
                                <!--class="mt-3"></b-form-select>-->
                                <!--<b-form-select v-model="lecture_model.country" :options="select_options.countries"-->
                                <!--size="sm"-->
                                <!--class="mt-3"></b-form-select>-->
                                <!--<b-form-select v-model="lecture_model.course" :options="select_options.courses"-->
                                <!--size="sm"-->
                                <!--class="mt-3"></b-form-select>-->
                                <!--<b-form-select v-model="lecture_model.university" :options="select_options.universities"-->
                                <!--size="sm"-->
                                <!--class="mt-3"></b-form-select>-->

                                <b-form-input
                                        class="mt-3"
                                        id="input-2"
                                        v-model="lecture_model.link"
                                        type="text"
                                        required
                                        placeholder="Link for materials"
                                ></b-form-input>

                                <!--<b-form-file-->
                                <!--class=" mt-3"-->
                                <!--v-model="lecture_model.file"-->
                                <!--:state="Boolean(file)"-->
                                <!--placeholder="Choose a file or drop it here..."-->
                                <!--drop-placeholder="Drop file here..."-->
                                <!--&gt;</b-form-file>-->


                                <!--<b-form-checkbox-group v-model="lecture_model.author" id="checkboxes-4" class="mt-3">-->
                                <!--<b-form-checkbox :value="user">Set me as author (for teachers recommended)-->
                                <!--</b-form-checkbox>-->
                                <!--</b-form-checkbox-group>-->
                                <b-button size="md" class="mt-3 btn-white btn-animation-1 btn-xl btn-hse"
                                          @click="add_lecture">
                                    Add lecture.
                                </b-button>
                            </b-form>
                        </div>
                    </b-modal>
                </b-col>
            </b-row>
            <div v-if="lectures.length>0">
                <b-row class="mt-3">
                    <b-col sm="6">
                        <b-form-input
                                id="input-1"
                                v-model="find"
                                type="text"
                                required
                                placeholder="Find in archive"
                                style="    border-radius: 50px;"
                        ></b-form-input>
                    </b-col>
                    <b-col>
                        <b-button class="btn btn-xl" size="md" pill disabled>Find in archive.</b-button>
                    </b-col>
                </b-row>
                <b-table class="mt-3" striped hover :items="lectures" :fields="fields">
                    <template slot="index" slot-scope="item">
                        {{item.index+1}}
                    </template>
                    <template slot="link" slot-scope="item">
                        <a :href="item.item.link" class="hse_font_color btn btn-white">Materials</a>
                    </template>
                    <template slot="Delete" slot-scope="item">
                        <b-button pill @click="delete_lecture(item.item)" class="btn">X</b-button>
                    </template>
                </b-table>
            </div>
            <b-row v-else class="mt-4">
                <b-col>
                    <Empty header="No lectures... " text="Create or call your teacher to fix this!"></Empty>
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
        name: "lecturesView",
        components: {Empty, Footer, Navigation},
        data: () => ({
            user: 'test_user',
            file: null,
            find: null,
            fields: [
                'index',
                {
                    key: 'title',
                    sortable: false
                },
                // {
                //     key: 'country',
                //     sortable: true
                // },
                // {
                //     key: 'lang',
                //     sortable: true
                // },
                // {
                //     key: 'type',
                //     sortable: true
                // },
                // {
                //     key: 'theme',
                //     sortable: true
                // },
                // {
                //     key: 'university',
                //     sortable: true
                // },
                // {
                //     key: 'course',
                //     sortable: true
                // },
                // {
                //     key: 'author',
                //     sortable: true
                // },
                {
                    key: 'link',
                    sortable: true
                },
                'Delete'
            ],
            lectures: [],
            select_options: {
                types: ['Online article', 'Video file', 'Audio file', 'Read file'],
                langs: ['ru', 'en'],
                countries: ['Russia', 'USE', 'China', 'UK'],
                themes: ['Math'],
                courses: ['1', '2', '3', '4'],
                universities: ['HSE', 'MSU', 'PSU', 'URFU'],
            },
            lecture_model: {
                type: 'Online article',
                lang: 'ru',
                link: null,
                file: null,
                university: 'HSE',
                theme: 'Math',
                course: '1',
                country: 'Russia',
                author: null,
                title: null,
            }
        }),
        methods: {
            add_lecture() {
                this.lectures.push(this.lecture_model);
                this.lecture_model = {
                    type: 'Online article',
                    lang: 'ru',
                    link: null,
                    file: null,
                    university: 'HSE',
                    theme: 'Math',
                    course: '1',
                    country: 'Russia',
                    author: null,
                    title: null,
                };
                this.save_local()
            },
            delete_lecture(item) {
                this.$delete(this.lectures, this.lectures.indexOf(item));
                this.save_local()
            },
            save_local() {
                localStorage.lectures_app = JSON.stringify(this.lectures);
            }
        },
        created() {
            if (localStorage.getItem('lectures_app')) {
                this.lectures = JSON.parse(localStorage.getItem('lectures_app'))
            }
        }
    }
</script>

<style scoped>

</style>
