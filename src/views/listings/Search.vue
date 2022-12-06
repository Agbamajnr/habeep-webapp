<template>
    <div class="w-screen min-w-full flex flex-col items-center bg-white h-full min-h-screen overflow-y-auto">
        <HomeNavbar />

        <div class="body px-6 2xl:px-44 md:px-20 w-full flex flex-col h-fit items-start gap-y-8 mt-3">
            <div class="flex flex-row w-full items-center justify-between">
                <p class="text-webapp text-lg w-full"><span class="text-primary font-medium">12</span> ads result found
                    in Calabar</p>

                <!-- filters -->
                <div class="flex flex-row items-center w-1/2 h-fit gap-x-4">
                    <div
                        class="border border-gray-300 py-2 px-3 flex flex-row items-center gap-x-2 rounded-full cursor-pointer">
                        <span class="text-lg text-sub-webapp">Sort: Recommended</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#9A9A9D" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div
                        class="border border-gray-300 py-2 px-3 flex flex-row items-center gap-x-2 rounded-full cursor-pointer">
                        <span class="text-lg text-sub-webapp">Calabar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#9A9A9D" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

            </div>

            <!-- listing -->
            <div class="flex flex-row flex-auto mt-6  md:mt-10 w-full h-fit  flex-wrap">

                <!-- listing template -->
                <div class="md:basis-1/2 xl:basis-1/3 md:px-3 md:py-3 py-5 px-0 " v-for="item in 6" :key="item">
                    <div class="flex flex-col items-start gap-y-2 border rounded-lg border-gray-200 pb-2">
                        <img src="../../assets/images/house-img.svg" alt="" class="w-full h-full">
                        <p class="text-webapp text-xl font-medium w-full mx-3">4 bedroom apartment at atimbo </p>

                        <div class="location flex flex-row items-center gap-x-2 px-3">
                            <img src="../../assets/images/map-pin.png" alt="">
                            <span class="text-sm text-webapp">Calabar</span>
                        </div>

                        <div class="flex flex-row items-center w-full justify-between px-3">
                            <span class="text-sm text-webapp font-medium">N500,000 / Year</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <!-- anima -->
            <div
                class="download-app-animation sm:w-5/6 w-full md:w-3/5 self-center xl:w-3/4 border-2 p-4  rounded xl:relative border-gray-300 h-fit xl:p-8 2xl:p-16 mt-24 md:mt-32 xl:mt-48">
                <div class="flex flex-col items-center xl:items-start gap-y-4 xl:gap-y-3 xl:w-1/2">
                    <p
                        class="text-webapp text-2xl md:text-3xl  xl:text-4xl font-bold xl:w-full w-full md:w-5/6 text-left md:text-center xl:text-left">
                        House search in just a click</p>
                    <p
                        class="text-sub-webapp text-sm  md:text-lg xl:w-full w-full md:w-4/6 text-left md:text-center xl:text-left">
                        Get the app on any device you use on apple
                        store or google playstore</p>
                    <!-- download stores -->
                    <div class="flex flex-row gap-x-2 items-center w-fit mt-4">
                        <img src="../../assets/images/apple-download.svg" alt="">
                        <img src="../../assets/images/android-download.svg" alt="">
                    </div>
                </div>

                <!-- phone anime -->
                <img src="../../assets/images/phone-blog-anime.svg"
                    class="hidden xl:block w-full  2xl:w-4/5 absolute -top-3/4 2xl:-bottom-full xl:-right-36 2xl:-right-24"
                    alt="">

            </div>
        </div>

        <div class="flex flex-row md:mb-16 mb-12 items-center gap-x-4 mt-36 md:mt-52 xl:mt-64 z-20">
            <router-link to="/terms-of-service" class="underline text-webapp">Terms of service</router-link>
            <router-link to="/products" class="underline text-webapp">Products</router-link>
            <router-link to="/help" class="underline text-webapp">Help</router-link>
        </div>
    </div>
</template>

<script setup>
import HomeNavbar from '../../components/HomeNavbar.vue'

</script>

<style>

</style>