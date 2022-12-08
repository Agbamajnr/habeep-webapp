<template>
    <div class="w-screen min-w-full flex flex-col items-center bg-white h-full min-h-screen overflow-y-auto"
        @resize="changeWidth">
        <MainNavbar v-if="(screenWidth > 767)" />

        <div
            class="body px-0 2xl:px-44 xl:px-20 mb-10 w-full flex flex-col h-fit items-center md:items-start gap-y-8 mt-0">

            <div class="product-img-grid desktop-view xl:flex flex-row items-center w-full hidden">
                <div class="relative h-full display-img w-1/2 py-1">
                    <img src="../../assets/images/house-5.png" class="h-full w-full" alt="">

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
                        <img src="../../assets/images/house-4.png" class="h-full w-1/2 p-1" v-for="item in 2"
                            :key="item" alt="">
                    </div>
                    <div class=" flex flex-row h-1/2 w-full pl-2 items-center">
                        <img src="../../assets/images/house-3.png" class="h-full w-1/2 p-1" v-for="item in 2"
                            :key="item" alt="">
                    </div>
                </div>
            </div>

            <div class="product-img-carousel mobile-view xl:hidden flex items-center w-full relative">

                <div class="w-full absolute flex flex-row top-5 items-center justify-between md:px-8 px-2">
                    <img src="../../assets/icons/back-img.svg" class="cursor-pointer" alt="">
                    <div class="flex flex-row gap-x-3">
                        <img src="../../assets/icons/share.svg" class="cursor-pointer" alt="">
                        <img src="../../assets/icons/heart.svg" class="cursor-pointer" alt="">
                    </div>
                </div>

                <img :src="carouselImg.path" class="h-full w-full main-img" :class="{'hidden': inNewCarousel}">
                <img :src="images[activeCarouselImg - 1].path" class="h-full w-full new-img" :class="{'hidden': changeCarouselImg}">

                <div class="flex flex-row items-center w-full absolute bottom-5 justify-between md:px-8 px-2">
                    <div class="px-6 py-2 rounded opacity-70 collapse" style="background: #161622;">
                        <span class="text-sm text-white font-medium">1/5</span>
                    </div>

                    <div class="flex flex-row items-center gap-x-1">
                        <div class="carousel-indicator w-4 h-4 rounded-full cursor-pointer" @click="changeCarouselImg(indicator)" :class="{'bg-white': indicator === activeCarouselImg, 'bg-gray-400': indicator !== activeCarouselImg}" v-for="indicator in images.length" :key="indicator"></div>
                    </div>

                    <div class="px-6 py-2 rounded opacity-70" style="background: #161622;">
                        <span class="text-sm text-white font-medium">{{(activeCarouselImg + '/' + images.length)}}</span>
                    </div>
                </div>
            </div>
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
    let image = images[value - 1]
    activeCarouselImg.value = value

    carouselImg.value = image
    changingCarousel.value = true

    animateImgCarousel()
    // console.log(image, activeCarouselImg.value, value)
}

function animateImgCarousel() {
    inNewCarousel.value = true
    gsap.from('.new-img', {
        xPercent: -100,
        y: 0,
        duration: 3
    })
    gsap.from('.new-img', {
        xPercent: 0,
        y: 0,
    })

    inNewCarousel.value = true


    changingCarousel.value = false
    
    gsap.from('.main-img', {
        xPercent: 0,
        y: 0,
    })
    gsap.from('.main-img', {
        xPercent: 100,
        y: 0,
        duration: 3
    })
}

const screenWidth = ref(window.innerWidth)

function changeWidth() {
    screenWidth.value = window.innerWidth
    console.log(screenWidth.value)
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
</style>