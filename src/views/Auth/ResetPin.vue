<template>

    <div class="w-screen min-w-full flex flex-row items-center bg-white h-screen min-h-full overflow-hidden">
        <img src="../../assets/images/habeep-show.png" class="w-1/3 xl:block hidden h-full" alt="">

        <div
            class="form-container flex flex-col items-center relative bg-white gap-y-3 w-full xl:w-2/3 h-full pb-6 md:py-10 overflow-y-auto overflow-x-hidden">

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
                    <span>Reset pin</span>
                </p>

                <p class="w-full text-left text-webapp  text-sm mt-10">
                    Please set a new pincode and re-enter to complete the process
                </p>

                <!-- input fields -->


                <div class="flex flex-col items-start w-full gap-y-1 mt-8">
                    <label for="" class="text-sm text-webapp">New pincode</label>
                    <input type="number" placeholder="Your new pincode" class="w-full h-14 rounded-lg">
                </div>
                <div class="flex flex-col items-start w-full gap-y-1 my-10">
                    <label for="" class="text-sm text-webapp">Re-enter pincode</label>
                    <input type="number" placeholder="Re-enter pincode" class="w-full h-14 rounded-lg">
                </div>
                <!-- submit btn -->
                <button class="bg-primary w-full rounded-lg grid place-items-center h-14 text-white">Continue</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


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
</style>