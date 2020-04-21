<template>
    <div>
        <Navigation sub_header="Blog." link_path="/dashboard" link_name="Dashboard."></Navigation>
        <b-container class="body_for_footer">
            <b-row class="mt-5" v-if="posts.length===0">
                <b-col>
                    <Empty header="Nothing new." text="Update soon)"></Empty>
                </b-col>
            </b-row>
            <b-row v-if="posts.length>0" cols="1" cols-sm="2" cols-md="2" cols-lg="2" class="mt-4">
                <b-col class="text-center" align-self="center">
                    <b-img :src="pictures.functions" lazy fluid class="mb-3"
                           style="border-radius: 10px"></b-img>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col class="text-center"><h2 class="hse_font_color">Функционал</h2></b-col>
                    </b-row>
                    <b-row v-for="(post, index) in functions" v-bind:key="index">
                        <b-col class="mt-2">
                            <b-card :title="post.header" :sub-title="post.date" style="border-radius: 10px"
                                    class="shadow-sm shadow">
                                <b-card-text>
                                    {{post.body}}
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr v-if="posts.length>0">
            <b-row class="mt-4" v-if="posts.length>0" cols="1" cols-sm="2" cols-md="2" cols-lg="2">
                <b-col order="1" order-sm="0">
                    <b-row>
                        <b-col class="text-center"><h2 class="hse_font_color">Обновления</h2></b-col>
                    </b-row>
                    <b-row v-for="(post, index) in posts" v-bind:key="index">
                        <b-col class="mt-2">
                            <b-card :title="post.header" :sub-title="post.date" style="border-radius: 10px"
                                    class="shadow-sm shadow">
                                <b-card-text>
                                    {{post.body}}
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="text-center" align-self="center">
                    <b-img :src="pictures.posts" lazy fluid></b-img>
                </b-col>
            </b-row>
            <hr v-if="functions.length>0">
            <b-row v-if="futures.length>0" cols="1" cols-sm="2" cols-md="2" cols-lg="2" class="mt-4">
                <b-col class="text-center" align-self="center">
                    <b-img :src="pictures.futures" lazy fluid class="mb-3"
                           style="border-radius: 10px"></b-img>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col class="text-center"><h2 class="hse_font_color">Будущие функции</h2></b-col>
                    </b-row>
                    <b-row v-for="(post, index) in futures" v-bind:key="index">
                        <b-col class="mt-2">
                            <b-card :title="post.header" :sub-title="post.date" style="border-radius: 10px"
                                    class="shadow-sm shadow">
                                <b-card-text>
                                    {{post.body}}
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr v-if="futures.length>0">
            <b-row class="mt-3 text-center">
                <b-col>
                    <b-button variant="primary" pill size="lg" @click="$router.push('/')">Dashboard</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-3 text-center">
                <b-col>
                    <a class="btn btn-outline-primary rounded-pill" size="md" href="https://vk.com/karanarqq"
                       target="_blank">Contact me.</a>
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

    import ideas from "../assets/ideas.jpg";
    import funcs from "../assets/notes_picture.jpg";
    import news from "../assets/new.png";

    export default {
        name: "blogView",
        components: {Empty, Footer, Navigation},
        data: () => ({
            pictures: {
                posts: news,
                futures: ideas,
                functions: funcs
            },
            posts: [
                {
                    header: 'Первая запись в блоге!',
                    body: 'Страница открыта для посещений и просмотра.',
                    date: '20.04.2020'
                },
                {
                    header: 'Добавление календаря',
                    body: 'Теперь в панели навигации вы можете выбрать заметки за определенный день!',
                    date: '21.04.2020'
                },
                {
                    header: 'Добавление второго стиля',
                    body: 'Выбирайте между двумя стилями на свой вкус.',
                    date: '21.04.2020'
                }
            ],
            functions: [
                {
                    header: 'Создание заметок',
                    body: 'Выбирайте между двумя стилями на свой вкус.',
                },
                {
                    header: 'Deadlines',
                    body: 'Устанавливайте время выполнения и получается уведомления о наступающих дедлайнах.',
                },
                {
                    header: 'Добавление ссылок и вставка их в текст',
                    body: 'Добавляйте ссылки на важные страницы прямо в текст, они определятся автоматически. Или создавайте ссылки на другие заметки, чтобы не забыть ничего.',
                },
                {
                    header: 'Сортируйте по важности',
                    body: 'Сортируйте по цветам и важности заметки, которые нужны вам прежде всего.',
                },
            ],
            futures: [
                {
                    header: 'Редизайн заметок',
                    body: 'Еще больше простора в кастомизации ваших заметок, другие цвета и формы!',
                },
                {
                    header: 'Добавление совместных пространств и расширение аккаунта',
                    body: 'Создавайте совместные доски, а также пользуйтесь заметками на любом устройстве с одного аккаунта.',
                }
            ]

        }),
    }
</script>

<style scoped>

</style>
