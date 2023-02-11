import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage/HomePage.vue';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage.vue';
import DetailsPage from '../views/DetailsPage/DetailsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/details/:name',
        name: 'Details',
        component: DetailsPage,
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;