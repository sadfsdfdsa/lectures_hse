import indexView from "./views/indexView";
import lecturesView from "./views/lecturesView";
import blogView from "./views/blogView";
import testView from "./views/testView";
import dashboardView from "./views/dashboardView";

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
    {
        path: "/test",
        component: testView,
        name: "testPage",
        meta: {}
    },
        {
        path: "/dashboard",
        component: dashboardView,
        name: "dashboardPage",
        meta: {}
    },
];

export default routes;
