<template>
    <div class="absolute w-screen h-screen min-h-full top-0 opacity-50" v-if="onModal" style="background: #161622"></div>
    
    <div class="w-screen min-w-full flex flex-row items-center bg-white h-screen min-h-full overflow-hidden">
        <img src="../../assets/images/habeep-show.png" class="w-1/3 xl:block hidden h-full" alt="">
        
        <div :class="{'relative': screenWidth < 768}" class="form-container flex flex-col items-center bg-white gap-y-3 w-full xl:w-2/3 h-full pb-6 md:py-10 overflow-y-auto overflow-x-hidden">

            <div class="flex flex-col items-center w-full md:w-2/3 px-4">
                <!-- logo -->
                <div class="logo md:flex hidden flex-row items-center justify-end w-full gap-x-2 cursor-pointer"
                    @click="$router.push('/')">
                    <img src="../../assets/icons/logo.svg" alt="Logo">
                    <span class="text-primary text-2xl">Habeep</span>
                </div>

                <p class="w-full text-left text-webapp font-bold text-xl flex flex-row items-center gap-x-1 mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#0A1045" class="w-6 h-6 cursor-pointer" @click="$router.go(-1)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span>Register an account</span>
                </p>

                <!-- input fields -->
                <div class="flex flex-col items-start w-full gap-y-1 mt-10">
                    <label for="" class="text-sm text-webapp">First name</label>
                    <input type="text" placeholder="Enter your first name" class="w-full h-14 rounded-lg">
                </div>

                <div class="flex flex-col items-start w-full gap-y-1 mt-8">
                    <label for="" class="text-sm text-webapp">Surname</label>
                    <input type="text" placeholder="Enter your Surname" class="w-full h-14 rounded-lg">
                </div>

                <div class="flex flex-col items-start w-full gap-y-1 mt-8">
                    <label for="" class="text-sm text-webapp">Email address</label>
                    <input type="email" placeholder="Enter Email address" class="w-full h-14 rounded-lg">
                </div>

                <div class="flex flex-col items-start w-full gap-y-1 mt-8 relative">
                    <label for="" class="text-sm text-webapp">Phone number</label>
                    <input type="number" placeholder="Phone number" class="w-full h-14 rounded-lg bg-transaparent" :class="{'bg-bg': onModal}"
                        style="padding-left: 115px">

                    <div class="absolute top-8 left-1 flex flex-row items-center justify-center h-10 w-24 rounded-md"
                        style="background: #F4F4F4" :class="{'bg-bg': onModal}">
                        🏴 <span>+234</span>
                    </div>
                </div>

                <div class="flex flex-col xs:flex-row items-center w-full justify-between">
                    <div class="flex flex-col items-start w-full xs:w-5/12 gap-y-1 mt-8">
                        <label for="" class="text-sm text-webapp">Create a secure pin</label>
                        <input type="number" placeholder="Enter a 4 digit pin" class="w-full  h-14 rounded-lg">
                    </div>
                    <div class="flex flex-col items-start  w-full xs:w-5/12 gap-y-1 mt-8">
                        <label for="" class="text-sm text-webapp">Refferal code(optional)</label>
                        <input type="number" placeholder="Enter a refferal code" class="w-full  h-14 rounded-lg">
                    </div>
                </div>

                <!-- botttom -->
                <p
                    class="text-webapp my-7 text-sm w-full flex flex-row items-center gap-x-1 text-center justify-center">
                    Have an account! <span class="text-primary underline cursor-pointer"
                        @click="$router.push('login')">Login</span>
                </p>

                <!-- submit btn -->
                <button class="bg-primary w-full rounded-lg grid place-items-center h-14 text-white" @click="gotoModal('listings')">Next</button>

            </div>

            <SuggestedCategory @enterAgents="gotoModal('agents')" v-if="onSuggestedListingsModal && onModal" />
            <SuggestedAgents v-if="onSuggestedFollowersModal && onModal" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import SuggestedCategory from './components/SuggestedCategory.vue'
import SuggestedAgents from './components/SuggestedAgents.vue'

const screenWidth = ref(window.innerWidth)


const onModal = ref(false)
const onSuggestedListingsModal = ref(false)
const onSuggestedFollowersModal = ref(false)

function gotoModal(modal) {
    onModal.value = true
    if(modal === 'listings') {
        onSuggestedListingsModal.value = true
        onSuggestedFollowersModal.value = false
    }
    if(modal === 'agents') {
        onSuggestedListingsModal.value = false
        onSuggestedFollowersModal.value = true
    }
    if(modal === 'close') {
        onModal.value = false
        onSuggestedListingsModal.value = false
        onSuggestedFollowersModal.value = false
    }
}

</script>

<style scoped>
input::placeholder {
    color: #71759D;
    font-size: 14px;
}

input {
    padding-left: 10px;
    outline: none;
    border: 1px solid #D9DDEE;
}

input:focus {
    border: 1px solid #1B49FF;
}

.form-container::-webkit-scrollbar {
    height: .1rem;
    width: 7px;
}

.form-container::-webkit-scrollbar-track {
    background: rgb(241, 241, 241);
    border-radius: 8px;
}

.form-container::-webkit-scrollbar-thumb {
    background: #0f154d;
    border-radius: 8px;
}

.bg-bg{
    background: #161622;
    opacity: 0.5;
}
</style>