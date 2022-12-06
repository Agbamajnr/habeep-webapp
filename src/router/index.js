import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../views/Home.vue'
import ListingSearch from '../views/listings/Search.vue'

// extras
import Blog from '../views/extras/BlogRoom.vue'
import TOS from '../views/extras/TermsOfService.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/terms-of-service',
        name: 'Terms-Of-Service',
        component: TOS
    },
    {
        path: '/listings/search',
        name: 'Listings-search',
        component: ListingSearch
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
 })
 
 export default router