import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'
import ArticleNews from '@/pages/ArticleNews.vue'
import BlogDetails from '@/pages/BlogDetails.vue'

const routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '/',
        name: 'Home',
        component: 'HomePage'
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage
    },
    {
        path: '/projectDetails',
        name: 'ProjectDetails',
        component: ProjectDetails
    },
    {
        path: '/blog',
        name: 'Blog',
        component: ArticleNews
    },
    {
        path: '/blogdetails',
        name: 'Details',
        component: BlogDetails
    },
    {
        path: '/:CatchAll(.*)',
        component: ErrorPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;