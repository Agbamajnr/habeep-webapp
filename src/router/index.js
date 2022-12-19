import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../views/Home.vue'

// listings
import ListingSearch from '../views/listings/Search.vue'
import ListingProduct from '../views/listings/Product.vue'

// agents
import AgentProfile from '../views/agents/Profile.vue'

// chats
import ChatIndex from '../views/chats/Index.vue'

// extras
import Blog from '../views/extras/BlogRoom.vue'
import TOS from '../views/extras/TermsOfService.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // extras
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
    // listings
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
    // agents
    {
        path: '/agents/profile/:id',
        name: 'Agent-profile',
        component: AgentProfile
    },
    // chats
    {
        path: '/chats',
        name: 'Chat',
        component: ChatIndex
    },


    
]



const router = createRouter({
    history: createWebHistory(),
    routes
 })
 
 export default router