import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import Finances from './Finances.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/finances",
            name: "finances",
            component: Finances
        }
    ]
});