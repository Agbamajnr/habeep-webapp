<template>
  <div class="w-screen min-w-full flex flex-col justify-between items-center bg-white h-full min-h-screen overflow-y-none">
    <!-- Header / Navbar -->
    <HomeNavbar />

    
    
    <!-- Hero/Quick search -->
    <div class="flex flex-col items-center gap-y-12 md:pb-0 pb-16">
      <p class="hero-text md:text-5xl text-4xl xl:text-6xl text-center text-webapp font-medium sm:4/5 w-5/6 md:w-3/5">Quick way to Find your dream Property</p>

      <!-- Quick search -->
      <div class="flex flex-col quick-search no-wrap relative">
        <!-- Search bar -->
        <div class="search-bar w-full flex flex-row items-center bg-white pl-3 pr-1 h-12 py-1 gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#B1B4CD"
            class="w-4 h-4 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <input type="text" v-model="data.input" class=" rounded-sm w-full h-full outline-none" placeholder="Search by property type, location, price">
        </div>
        <!-- search results -->
        <div class="flex flex-col gap-y-4 search-results relative sm:absolute bg-white z-10 w-full py-5 px-3 top-12 md:top-20" v-if="(data.input.length > 0)">
          <div class="flex flex-row items-center result justify-between w-full cursor-pointer" @click="$router.push('/listings/search?name=' + data.input)">
            <p class="text-webapp text-lg">{{data.input}}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#71759D"
              class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>

          <!-- Based on Search bar Input results -->
          <div class="flex flex-row items-center result justify-between w-full cursor-pointer" v-for="location in locations.slice(0, 5)" :key="location" @click="$router.push('/listings/search?name=' + data.input + '&location=' + location.toLowerCase())">
            <p class="text-webapp text-lg font-medium gap-x-1 flex flex-row items-center">{{data.input}} <span class="text-lg font-extralight text-sub-webapp">in</span> <span class="text-lg font-medium text-webapp">{{location}}</span></p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#71759D"
              class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- iLLUSTRATIONS ?  Footer-->
    <div class="flex flex-row items-end xl:justify-between justify-center  w-full z-0">
      <img src="../assets/illustrations/home-left.svg" class="xl:flex hidden"  alt="">
      <div class="flex flex-row md:mb-10 mb-4 items-center gap-x-4">
        <router-link to="/terms-of-service" class="underline text-webapp">Terms of service</router-link>
        <router-link to="/listings/search?name=Houses" class="underline text-webapp">Products</router-link>
        <router-link to="/help" class="underline text-webapp">Help</router-link>
      </div>
      <img src="../assets/illustrations/home-right.svg" class="xl:flex hidden" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

import HomeNavbar from '../components/HomeNavbar.vue'

// Manage quick search

// search variables
const data = reactive({
  input: ''
})

const locations = ref([
  'Calabar',
  'Lagos',
  'Enugu',
  'Abuja',
  'Ikom',
  'Kano',
  'Onitsha, Anambra',
])
</script>

<style scoped>
/*  Import Ubuntu font */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

/* Quick search */
.quick-search {
  max-width: 692px;
  width: 692px;
}
.search-bar, .search-results {
  border: 1px solid #EBEBEB;
  box-shadow: 0px 8px 88px -6px rgba(24, 39, 75, 0.12), 0px 14px 88px -4px rgba(24, 39, 75, 0.12);
  border-radius: 10px;
  filter: drop-shadow(0 14px 88px -6 #18274B1F);
}
.search-results {
  min-height: 100px;
  max-height: 430px;
}
input::placeholder {
  color: #B1B4CD;
  font-size: 16px;
}
input {
  outline: none !important;
  border: none !important;
}

@media screen and (max-width: 768px) {
  .quick-search {
    width: 90%;
  }
  .search-results {
    height: 280px;
  }
}
</style>