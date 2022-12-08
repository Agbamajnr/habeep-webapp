import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../views/Home.vue'

// listings
import ListingSearch from '../views/listings/Search.vue'
import ListingProduct from '../views/listings/Product.vue'

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
    {
        path: '/listings/products/:id',
        name: 'Listings-product',
        component: ListingProduct
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
 })
 
 export default router