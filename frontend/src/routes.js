import indexView from "./views/indexView";
import lecturesView from "./views/lecturesView";
import blogView from "./views/blogView";

const routes = [
    {
        path: "/",
        component: indexView,
        name: "indexPage",
        meta: {}
    },
    {
        path: "/lectures",
        component: lecturesView,
        name: "lecturesPage",
        meta: {}
    },
    {
        path: "/blog",
        component: blogView,
        name: "blogPage",
        meta: {}
    },
];

export default routes;
