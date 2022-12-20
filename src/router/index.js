import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '../views/Home.vue'

// listings
import ListingSearch from '../views/listings/Search.vue'
import ListingProduct from '../views/listings/Product.vue'

// profile
// user
import UserProfile from '../views/profile/user/Profile.vue'

// agents
import AgentProfile from '../views/profile/agents/Profile.vue'

// IBO
import IBO_ChooseCategory from '../views/profile/IBO/ChooseCategory.vue'



// chats
import ChatIndex from '../views/chats/Index.vue'

// extras
import Blog from '../views/extras/BlogRoom.vue'
import TOS from '../views/extras/TermsOfService.vue'

// auth
import Register from '../views/Auth/Register.vue'
import Login from '../views/Auth/Login.vue'
import ForgotPin from '../views/Auth/ForgotPin.vue'
import ResetPin from '../views/Auth/ResetPin.vue'
import OTP from '../views/Auth/OTP_Validation.vue'



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
    // profile
    {
        path: '/agents/profile/:id',
        name: 'Agent-profile',
        component: AgentProfile
    },
    {
        path: '/user/profile/:id',
        name: 'User-profile',
        component: UserProfile
    },

    // IBO
    {
        path: '/account/IBO/category',
        name: 'IBO_ChooseCategory',
        component: IBO_ChooseCategory
    },

    // chats
    {
        path: '/chats',
        name: 'Chat',
        component: ChatIndex
    },
    // authentication
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forgot-pin',
        name: 'ForgotPin',
        component: ForgotPin
    },
    {
        path: '/reset-pin',
        name: 'ResetPin',
        component: ResetPin
    },
    {
        path: '/verify-otp',
        name: 'OTP',
        component: OTP
    },

    
]



const router = createRouter({
    history: createWebHistory(),
    routes
 })
 
 export default router