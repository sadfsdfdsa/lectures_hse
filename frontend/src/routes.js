// import blogView from "./views/blogView";
import dashboardView from "./views/dashboardView";


require('../src/css/hse.css');


const routes = [
    {
        path: "/",
        component: dashboardView,
        name: "dashboardPage",
        // component: indexView,
        // name: "indexPage",
        meta: {}
    },
    // {
    //     path: "/blog",
    //     component: blogView,
    //     name: "blogPage",
    //     meta: {}
    // },
    {
        path: "/dashboard",
        component: dashboardView,
        name: "dashboardPage",
        meta: {}
    },
];

export default routes;
