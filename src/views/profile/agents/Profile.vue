<template>
    <div class="fixed w-screen h-screen top-0 opacity-50 overflow-hidden max-h-screen" v-if="onModal" style="background: #161622"></div>

    <div class="w-screen min-w-full flex flex-col items-center bg-white h-full min-h-screen overflow-y-auto"
        :class="{'max-h-screen overflow-y-hidden': onModal}"
        resize="changeWidth">
        <MainNavbar v-if="(screenWidth > 767)" />

        <div class="flex flex-row items-center justify-between w-full px-6 2xl:px-44 md:px-20 my-4" v-else>
            <div class="flex flex-row items-center gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#0A1045" class="w-6 h-6 cursor-pointer" @click="$router.go(-1)">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span class="text-xl text-webapp font-medium">Agent profile</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0A1045"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </div>

        <div
            class="body px-6 2xl:px-44 md:px-20 mb-10 w-full flex flex-col gap-y-8 lg:flex-row h-fit gap-x-3 items-center md:items-start  mt-10">
            <!-- agent basic info -->
            <div
                class="agent-info flex p-4 bg-white flex-col border border-gray-300 rounded w-full lg:w-2/6 2xl:w-1/4 items-start lg:ml-3 h-fit">
                <div class="flex flex-row gap-x-3 items-start">
                    <div class="rounded-full w-24 h-24 grid place-items-center">
                        <img src="../../../assets/icons/model.svg" class="w-full h-full" alt="">
                    </div>
                    <div class="flex flex-col ">
                        <span class="text-xl md:text-center text-left agent-name text-webapp font-medium">Duke
                            Carrick</span>
                        <p class="text-lg agent-ads-count text-sub-webapp flex flex-row gap-x-2 items-center"><img
                                src="../../../assets/images/map-pin.png" alt="">Calabar</p>
                    </div>
                </div>

                <div class="flex flex-row items-center w-full gap-x-4 mt-3">
                    <p class="text-xl font-webapp font-medium flex flex-row gap-x-1">62<span
                            class="text-sub-webapp text-lg">Ads</span></p>
                    <p class="text-xl font-webapp font-medium flex flex-row gap-x-1">4<span
                            class="text-sub-webapp text-lg">Followers</span></p>
                    <p class="text-xl font-webapp font-medium flex flex-row gap-x-1 cursor-pointer" @click="openModal">4<span
                            class="text-sub-webapp text-lg">Following </span></p>
                </div>

                <h3 class="text-lg xl:text-xl font-medium  text-webapp mt-3">Bio</h3>

                <p class="text-sub-webapp text-sm text-left w-full sm:w-5/6 lg:w-full mt-1 xl:mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus dui, a eleifend iaculis. Donec
                    proin tincidunt vitae a sagittis, rutrum. Eros, elementum, nisl sagittis elit pellentesque et
                    auctor sit imperdiet. Vitae id bibendum a, felis volutpat ornare. I
                </p>


                <div class="flex flex-row items-center w-full gap-y-1 xl:justify-between mt-4 xl:mt-3">
                    <button
                        class="agent-btn flex-row items-center justify-center text-sm font-medium text-white text-primary w-1/2  bg-primary">Follow</button>
                    <button
                        class="agent-btn flex flex-row items-center justify-center text-sm font-medium  text-primary ml-2 bg-white w-1/2">Message</button>
                </div>
            </div>


            <!-- listing -->

            <div class="flex flex-col items-start w-full lg:w-4/5">
                <div class="flex flex-row gap-x-3 border-b border-b-gray-300 w-full">
                    <div class="cursor-pointer flex flex-row items-center justify-center w-16  pb-1"
                        @click="changeTab(1)" :class="{ 'text-blue-600 border-b-blue-700 border-b-2': openTab === 1 }">
                        Ads
                    </div>
                    <div class="cursor-pointer flex flex-row items-center justify-center w-24 pb-1"
                        @click="changeTab(2)" :class="{ 'text-blue-600 border-b-blue-700 border-b-2': openTab === 2 }">
                        Saved ads
                    </div>
                </div>

                <div class="ads-tab w-full h-full mt-6" v-if="(openTab === 1)" id="ads-tab">
                    <div class="flex flex-row flex-auto h-fit  flex-wrap">

                        <!-- listing template -->
                        <div class="md:basis-1/2 xl:basis-1/3 md:px-3 md:py-3 py-5 px-0 " v-for="item in 6" :key="item">
                            <div
                                class="flex flex-col items-start gap-y-2 relative border rounded-lg border-gray-200 pb-2">
                                <img src="../../../assets/images/house-img.svg" alt="" class="w-full h-full">
                                <p class="text-webapp text-xl font-medium w-full mx-3">4 bedroom apartment at atimbo
                                </p>

                                <div class="location flex flex-row items-center gap-x-2 px-3">
                                    <img src="../../../assets/images/map-pin.png" alt="">
                                    <span class="text-sm text-webapp">Calabar</span>
                                </div>

                                <div class="flex flex-row items-center w-full justify-between px-3">
                                    <span class="text-sm text-webapp font-medium">N500,000 / Year</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#0A1045B2" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>

                                </div>

                                <div class="rounded border border-white px-2 py-1 absolute top-5 right-5">
                                    <span class="text-white text-sm text-center">1.8km Away</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="saved-ads-tab w-full h-full mt-6" v-if="(openTab === 2)" id="saved-ads-tab">
                    <div class="flex flex-row flex-auto h-fit  flex-wrap">

                        <!-- listing template -->
                        <div class="md:basis-1/2 xl:basis-1/3 md:px-3 md:py-3 py-5 px-0 " v-for="item in 3" :key="item">
                            <div
                                class="flex flex-col items-start gap-y-2 relative border rounded-lg border-gray-200 pb-2">
                                <img src="../../../assets/images/house-img.svg" alt="" class="w-full h-full">
                                <p class="text-webapp text-xl font-medium w-full mx-3">4 bedroom apartment at atimbo
                                </p>

                                <div class="location flex flex-row items-center gap-x-2 px-3">
                                    <img src="../../../assets/images/map-pin.png" alt="">
                                    <span class="text-sm text-webapp">Calabar</span>
                                </div>

                                <div class="flex flex-row items-center w-full justify-between px-3">
                                    <span class="text-sm text-webapp font-medium">N500,000 / Year</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#FF8500" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>

                                </div>

                                <div class="rounded border border-white px-2 py-1 absolute top-5 right-5">
                                    <span class="text-white text-sm text-center">1.8km Away</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Following @close="closeModal" v-if="onModal"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'


import MainNavbar from '../../../components/MainNavbar.vue'
import Following from './components/modal/Following.vue'

const openTab = ref(1)
const onModal = ref(false)

function changeTab(tab) {
    // if(tab === 2) {
    //     gsap.to('#ads-tab', {
    //         x: -120
    //     })

    // } else {
    //     gsap.to('#saved-ads-tab', {
    //         x: 0
    //     })
    // }

    // console.log(tab)
    
    openTab.value = tab
}

function openModal() {
    onModal.value = true
}
function closeModal() {
    onModal.value = false
}

const screenWidth = ref(window.innerWidth)

function changeWidth() {
    screenWidth.value = window.innerWidth
}
</script>

<style scoped>
.agent-btn {
    border: 1px solid #3E64F9;
    border-radius: 5px;
    height: 50px;
}
</style>