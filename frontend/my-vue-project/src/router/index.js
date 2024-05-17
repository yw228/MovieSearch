import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import AppAbout from '../views/AppAbout.vue';
import AppContact from '../views/AppContact.vue';

const routes = [
    { path: '/', name: 'Home', component: AppHome },
    { path: '/about', name: 'About', component: AppAbout },
    { path: '/contact', name: 'Contact', component: AppContact }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
