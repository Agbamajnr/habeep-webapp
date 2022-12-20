<template>
     <div class="main flex flex-col  md:h-64 fixed md:absolute z-10 overflow-hidden md:right-1/4 md:top-1/3 bg-white">
        <div class="flex flex-row items-center justify-between w-full px-4 py-4 border-b border-b-gray-100">
            <span class="text-lg font-medium text-webapp">Discover agents</span>
            <img src="../../../assets/icons/x.svg" class="cursor-pointer" @click="$router.push('/login')" alt="">
        </div>

        <div class="agents-to-follow flex w-full flex-col h-3/5 overflow-y-auto items-center my-1 px-2">
            <div class="following flex flex-row items-center  justify-between w-full py-2 px-4" v-for="item in 5"
                :key="item">
                <div class="flex flex-row gap-x-2 items-center">
                    <div class="rounded-full w-10 h-10 grid place-items-center">
                        <img src="../../../assets/icons/model.svg" class="w-full h-full" alt="">
                    </div>
                    <div class="flex flex-col ">
                        <span
                            class="text-sm xl:text-lg md:text-center text-left following-name text-webapp font-medium">Duke
                            Carrick</span>
                        <span
                            class="text-sm following-ads-count md:text-center xl:text-left text-left text-sub-webapp">62
                            ads</span>
                    </div>
                </div>
                <!-- <img src="../../assets/icons/call-btn.svg" alt="" class="cursor-pointer md:ml-4"> -->
                <button
                    class="w-28 h-8 flex flex-row items-center justify-center rounded-lg text-sm font-medium text-white bg-primary border border-gray-300">Follow</button>
            </div>
        </div>

        <button class="bg-primary m-4 rounded-lg grid place-items-center h-14 text-white" @click="$router.push('/profile/jkfffkk')">Continue</button>
    </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue'


</script>
  
<style scoped>
.main {
    width: 450px;
    height: 460px;
    border-radius: 15px;
}

@media screen and (max-width: 767px) {
  .main {
    height: 100vh !important;
    width: 100vw;
  }
}
.suggs {
    box-shadow: 0px 0.33px 10px 0.33px #EBEBEB;
}
</style>