<template>
    <div v-if="!onImageViewer"
        class="w-screen min-w-full flex flex-col items-center bg-white h-full min-h-screen overflow-y-auto scroll-smooth"
        @resize="changeWidth">
        <MainNavbar v-if="(screenWidth > 767)" />

        <div
            class="body px-0 2xl:px-44 xl:px-20 mb-16 w-full flex flex-col h-fit items-center pb-10 md:items-start gap-y-8 mt-0 relative">

            <!-- product display images for desktop view -->
            <div class="product-img-grid desktop-view xl:flex flex-row items-center w-full mt-10 hidden">
                <div class="relative h-full display-img w-1/2 py-1">
                    <img :src="carouselImg.path" class="h-full w-full cursor-pointer" @click="enterImageViewer()" alt="">

                    <div class="w-full absolute flex flex-row top-5 items-center justify-between px-2">
                        <img src="../../assets/icons/back-img.svg" class="cursor-pointer" alt="">
                        <div class="flex flex-row gap-x-3">
                            <img src="../../assets/icons/share.svg" class="cursor-pointer" alt="">
                            <img src="../../assets/icons/heart.svg" class="cursor-pointer" alt="">
                        </div>
                    </div>
                </div>

                <div class="flex h-full flex-col w-1/2">
                    <div class=" flex flex-row h-1/2 w-full pl-2 items-center">
                        <img :src="image.path" class="h-full w-1/2 p-1 cursor-pointer" v-for="image in images.slice(0, 2)"
                            @click="enterImageViewer()" :key="image" alt="">
                    </div>
                    <div class=" flex flex-row h-1/2 w-full pl-2 items-center">
                        <img :src="image.path" class="h-full w-1/2 p-1 cursor-pointer" v-for="image in images.slice(3, 5)"
                            @click="enterImageViewer()" :key="image" alt="">
                    </div>
                </div>
            </div>

            <!-- product display images for mobile / carousel -->

            <div class="product-img-carousel mobile-view xl:hidden flex items-center w-full relative">

                <div class="w-full absolute flex flex-row top-5 items-center justify-between md:px-8 px-2 z-10">
                    <img src="../../assets/icons/back-img.svg" class="cursor-pointer" alt="">
                    <div class="flex flex-row gap-x-3">
                        <img src="../../assets/icons/share.svg" class="cursor-pointer" alt="">
                        <img src="../../assets/icons/heart.svg" class="cursor-pointer" alt="">
                    </div>
                </div>

                <img :src="carouselImg.path" class="h-full w-full main-img cursor-pointer" @click="enterImageViewer()">
                <!-- <img :src="images[activeCarouselImg - 1].path" class="h-full w-full new-img" :class="{'hidden': changeCarouselImg}"> -->

                <div class="flex flex-row items-center w-full absolute bottom-5 justify-between md:px-8 px-2">
                    <!-- just to take space ???? -->
                    <div class="px-6 py-2 rounded opacity-70 collapse" style="background: #161622;">
                        <span class="text-sm text-white font-medium">1/5</span>
                    </div>

                    <div class="flex flex-row items-center gap-x-1">
                        <div class="carousel-indicator md:w-4 md:h-4 h-3 w-3 rounded-full cursor-pointer"
                            @click="changeCarouselImg(indicator)"
                            :class="{ 'bg-white': indicator === activeCarouselImg, 'bg-gray-400': indicator !== activeCarouselImg }"
                            v-for="indicator in images.length" :key="indicator"></div>
                    </div>

                    <!-- main one now ???? -->
                    <div class="px-6 py-2 rounded opacity-70" style="background: #161622;">
                        <span class="text-sm text-white font-medium">{{ (activeCarouselImg + '/' +
                                images.length)
                        }}</span>
                    </div>
                </div>
            </div>

            <!-- product details -->
            <div
                class="flex flex-col md:flex-row items-start w-full gap-x-4 h-fit justify-between px-6 sm:px-7 xl:px-0">
                <!-- product info -->
                <div class="flex flex-col items-start md:w-2/3 w-full xl:w-4/6 h-full">
                    <!-- top product info -->
                    <div class="flex flex-row main-info items-center w-full justify-between">
                        <div class="flex flex-col md:gap-y-3 gap-y-2">
                            <p
                                class="text-webapp text-2xl md:text-xl xl:text-2xl font-semibold xl:font-medium product-name">
                                One bedroom apartment</p>
                            <p
                                class="text-sub-webapp text-lg md:text-sm xl:text-lg product-location flex flex-row items-center gap-x-2">
                                <img src="../../assets/images/map-pin.png" alt=""> 34 Marian Road, Calabar, Cross River
                                State</p>
                        </div>
                    </div>

                    <div class="flex flex-row py-2 border-y mt-8 border-y-gray-200 w-full divide-x">
                        <div class="flex flex-col gap-y-2 items-center w-64 md:w-auto md:pr-20">
                            <span class="text-2xl font-medium text-webapp">3</span>
                            <span class="text-sm text-sub-webapp">Bedroom</span>
                        </div>
                        <div class="flex flex-col gap-y-2 items-center w-64">
                            <span class="text-2xl font-medium text-webapp">4</span>
                            <span class="text-sm text-sub-webapp">Bathroom</span>
                        </div>
                        <div class="flex flex-col gap-y-2 items-center w-64">
                            <span class="text-2xl font-medium text-webapp">1,522</span>
                            <span class="text-sm text-sub-webapp">Square feet</span>
                        </div>
                    </div>

                    <p class="text-xl font-medium mt-8 text-webapp">Features</p>
                    <div
                        class="flex flex-row py-3 border-y mt-2 border-y-gray-200 w-full gap-x-3 overflow-x-auto flex-no-wrap">
                        <div
                            class="flex flex-col gap-y-2 items-center border border-gray-200 rounded-md w-28 h-20 justify-center">
                            <img src="../../assets/icons/light.svg" alt="">
                            <span class="text-sm text-sub-webapp">Electricity</span>
                        </div>
                        <div
                            class="flex flex-col gap-y-2 items-center border border-gray-200 rounded-md w-28 h-20 justify-center">
                            <img src="../../assets/icons/water.svg" alt="">
                            <span class="text-sm text-sub-webapp">Water</span>
                        </div>
                        <div
                            class="flex flex-col gap-y-2 items-center border border-gray-200 rounded-md w-28 h-20 justify-center">
                            <img src="../../assets/icons/parking.svg" alt="">
                            <span class="text-sm text-sub-webapp">Parking</span>
                        </div>
                        <div
                            class="flex flex-col gap-y-2 items-center border border-gray-200 rounded-md w-28 h-20 justify-center">
                            <img src="../../assets/icons/pool.svg" alt="">
                            <span class="text-sm text-sub-webapp">Pool</span>
                        </div>
                    </div>
                </div>

                <!-- agent info desktop -->
                <div
                    class="agent-info md:flex hidden p-4 bg-white flex-col w-2/3 xl:w-2/6 2xl:w-1/4 items-start ml-3 h-fit">
                    <h3 class="text-lg xl:text-xl font-medium  text-webapp">Description</h3>

                    <p class="text-sub-webapp text-xm xl:text-lg text-left w-full mt-1 xl:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus dui, a eleifend iaculis. Donec
                        proin tincidunt vitae a sagittis, rutrum. Eros, elementum, nisl sagittis elit pellentesque et
                        auctor sit imperdiet. Vitae id bibendum a, felis volutpat ornare. I
                    </p>

                    <div
                        class="agent-desktop flex flex-row items-center  md:justify-between w-full border-t pt-2 mt-2 border-t-gray-300">
                        <div class="flex flex-row gap-x-2 items-center">
                            <div class="rounded-full w-12 h-12 xl:w-16 xl:h-16 grid place-items-center">
                                <img src="../../assets/icons/model.svg" class="w-full h-full" alt="">
                            </div>
                            <div class="flex flex-col ">
                                <span
                                    class="text-sm xl:text-lg md:text-center text-left agent-name text-webapp font-medium">Duke
                                    Carrick</span>
                                <span
                                    class="text-sm agent-ads-count md:text-center xl:text-left text-left text-sub-webapp">62
                                    ads</span>
                            </div>
                        </div>
                        <img src="../../assets/icons/call-btn.svg" alt="" class="cursor-pointer md:ml-4">
                        <!-- <button class="w-24 h-20 xl:hidden md:flex flex-row items-center justify-center text-sm font-medium text-primary bg-white">Visit Profile</button> -->
                    </div>

                    <div class="flex flex-col xl:flex-row items-center w-full gap-y-1 xl:justify-between mt-1 xl:mt-3">
                        <button
                            class="agent-btn hidden xl:flex flex-row items-center justify-center text-sm font-medium text-primary w-1/2  bg-white">Visit
                            Profile</button>
                        <button
                            class="agent-btn flex flex-row items-center justify-center text-sm font-medium w-full text-white ml-2 bg-primary xl:w-1/2">Chat
                            with agent</button>
                    </div>
                </div>

                <!-- agent info mobile -->
                <div class="flex md:hidden p-4 bg-white mt-4 flex-col  items-start w-full h-fit">
                    <p class="text-xl font-medium mt-8 text-webapp">Agent</p>

                    <div
                        class="agent flex flex-row items-center justify-between w-full border-b py-3 my-3 border-b-gray-300">
                        <div class="flex flex-row gap-x-2 items-center">
                            <div class="rounded-full w-12 h-12  grid place-items-center">
                                <img src="../../assets/icons/model.svg" class="w-full h-full" alt="">
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm xl:text-lg text-left agent-name text-webapp font-medium">Duke
                                    Carrick</span>
                                <span class="text-sm agent-ads-count text-left text-sub-webapp">62 ads</span>
                            </div>
                        </div>
                        <img src="../../assets/icons/call-btn.svg" alt="" class="cursor-pointer">
                        <button
                            class="w-24 flex flex-row agent-btn items-center justify-center text-sm font-medium text-primary bg-white" @click="$router.push('/agents/profile/dfhffhfh')">Visit
                            Profile</button>
                    </div>

                    <h3 class="text-lg font-medium  text-webapp">Description</h3>

                    <p class="text-sub-webapp text-lg text-left w-full mt-1 xl:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus dui, a eleifend iaculis. Donec
                        proin tincidunt vitae a sagittis, rutrum. Eros, elementum, nisl sagittis elit pellentesque et
                        auctor sit imperdiet. Vitae id bibendum a, felis volutpat ornare. I
                    </p>



                    <div
                        class="flex md:hidden py-5  flex-row items-center fixed bottom-0 px-4 z-10 left-0 bg-white w-screen justify-between mt-4 border-t pt-2 border-t-gray-300">
                        <div class="flex flex-col gap-y-1">
                            <p class="text-webapp text-2xl md:text-xl xl:text-2xl font-medium product-price">N270,000
                            </p>
                            <p
                                class="text-sub-webapp text-lg md:text-sm xl:text-lg product-duration flex flex-row justify-start ">
                                per year</p>
                        </div>
                        <button
                            class="agent-btn flex flex-row items-center justify-center text-sm font-medium w-3/5 mr-2 text-white ml-2 bg-primary xl:w-1/2">Chat
                            with agent</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="view-img w-screen min-w-full flex flex-col items-center h-full min-h-screen lg:p-8  xl:p-12"
        style="background: #161622;">
        <div class="flex flex-row items-center w-full justify-between lg:p-0 p-6">
            <img src="../../assets/icons/x-bg.svg" @click="exitImageViewer()" class="cursor-pointer" alt="">
            <p class="text-2xl font-medium text-white">{{ (activeCarouselImg + '/' + images.length) }}</p>
            <div class="collapse"></div>
        </div>

        <div class="mt-6 flex flex-row items-center justify-between w-full h-fit gap-x-2 relative">
            <img src="../../assets/icons/back-circle.svg" @click="changeCarouselImg(activeCarouselImg - 1)"
                class="cursor-pointer lg:block absolute left-3 z-10" alt="">
            <div class="image-container h-fit w-full">
                <img :src="carouselImg.path" class="w-full h-full main-img" alt="">
            </div>
            <img src="../../assets/icons/next-circle.svg" @click="changeCarouselImg(activeCarouselImg + 1)"
                class="cursor-pointer lg:block absolute right-3 z-10" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MainNavbar from '../../components/MainNavbar.vue'
import gsap from 'gsap'

const carouselImg = ref({
    name: '1',
    path: '/src/assets/images/house-1.png'
})

const changingCarousel = ref(false)
const inNewCarousel = ref(false)



const activeCarouselImg = ref(1)
const onImageViewer = ref(false)

const images = [
    {
        name: '1',
        path: '/src/assets/images/house-1.png'
    },
    {
        name: '2',
        path: '/src/assets/images/house-2.png'
    },
    {
        name: '3',
        path: '/src/assets/images/house-3.png'
    },
    {
        name: '4',
        path: '/src/assets/images/house-4.png'
    },
    {
        name: '5',
        path: '/src/assets/images/house-5.png'
    }
]

function changeCarouselImg(value) {
    // changingCarousel.value = true
    let image = images[value - 1]
    activeCarouselImg.value = value

    animateImgCarousel()
    carouselImg.value = image
}

function animateImgCarousel() {
    // changingCarousel.value = false
    gsap.from('.main-img', {
        scale: 1.2,
    })

}

// manage images viewer
function exitImageViewer() {
    onImageViewer.value = false

    const carouselInt = setInterval(() => {
        let value = activeCarouselImg.value + 1
        if (activeCarouselImg.value == images.length) {
            value = 1
        }
        changeCarouselImg(value)
    }, 5000);
}
function enterImageViewer() {
    onImageViewer.value = true
    clearInterval(carouselInt)
}

const carouselInt = setInterval(() => {
    let value = activeCarouselImg.value + 1
    if (activeCarouselImg.value == images.length) {
        value = 1
    }
    changeCarouselImg(value)
}, 5000);

const screenWidth = ref(window.innerWidth)

function changeWidth() {
    screenWidth.value = window.innerWidth
}
</script>

<style scoped>
.product-img-grid {
     max-height: 538px;
     height: 538px;
 }

 .product-img-carousel {
     max-height: 400px;
     height: 400px;
 }

 .agent-info {
     background: #FFFFFF;
     /* Habeep grey/grey 4 */

     border: 1px solid #EBEBEB;
     box-shadow: 0px 8px 30px -6px rgba(24, 39, 75, 0.12), 0px 14px 88px -4px rgba(24, 39, 75, 0.12);
     border-radius: 10px;
 }

 .agent-btn {
     border: 1px solid #3E64F9;
     border-radius: 5px;
     height: 50px;
 }

 .agent-btn-mobile {
     border: 1px solid #3E64F9;
     border-radius: 5px;
 }

 .image-container {
     height: 80vh;
 }
</style>