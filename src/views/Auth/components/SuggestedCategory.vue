<template>
  <div class="main flex flex-col md:h-64 fixed md:absolute z-10 overflow-hidden md:right-1/4 md:top-1/4 bg-white ">
    <div class="flex flex-row items-center justify-between w-full px-4 py-4 border-b border-b-gray-100">
      <span class="text-lg font-medium text-webapp">Suggested house type</span>
      <img src="../../../assets/icons/x.svg" class="cursor-pointer" @click="$emit('close')" alt="">
    </div>

    <div class="suggestions flex  flex-wrap w-full flex-row items-start my-5 px-2">
      <div class="suggs rounded-md m-2 flex flex-row gap-x-3 p-2 items-center h-10 cursor-pointer"
        @click="selectSuggs(item, index)" :class="{'bg-primary text-white': item.isSelected}"
        v-for="(item, index) in suggestions" :key="(item, index)">
        <span class="text-webapp text-sm" :class="{ 'text-white': item.isSelected }">{{ item.name }}</span>
        <img src="../../../assets/icons/add.svg" v-if="!item.isSelected" alt="">
        <span class="text-lg text-white" v-else>-</span>
      </div>
    </div>

    <button class="bg-primary m-4 rounded-lg grid place-items-center h-14 text-white" @click="$emit('enterAgents')">Continue</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

let suggestions = reactive([
  {
    name: 'Bungalow',
    isSelected: false,
  },
  {
    name: 'Duplex',
    isSelected: false,
  },
  {
    name: 'Apartment',
    isSelected: false,
  },
  {
    name: 'Room and Parlor',
    isSelected: false,
  },
  {
    name: 'Office',
    isSelected: false,
  },
  {
    name: 'Flat',
    isSelected: false,
  },
]
)


const selectedSuggs = ref([])

const selectSuggs = (item, index) => {
  console.log(index)
  if (suggestions.includes(item) && suggestions[index].isSelected === false) {
    suggestions[index].isSelected = true
  } else {
    suggestions[index].isSelected = false
  }
  // if (suggestions.includes(item) && suggestions[index].isSelected === true) {
  // }

}
</script>

<style scoped>
.main {
  width: 450px;
  height: 460px;
  border-radius: 15px;
}

@media screen and (max-width: 767px) {
  .main {
    height: 100vh;
    width: 100vw;
  }
}
.suggs {
  box-shadow: 0px 0.33px 10px 0.33px #EBEBEB;
}
</style>