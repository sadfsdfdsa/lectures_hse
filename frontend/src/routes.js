// import blogView from "./views/blogView";
import dashboardView from "./views/dashboardView";
import testView from "./views/testView";


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
        {
        path: "/tasks",
        component: testView,
        name: "testPage",
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
