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
                    <span>Enter OTP code</span>
                </p>

                <p class="w-full text-left text-webapp  text-sm mt-10">
                    Please provide the boxes with 6 digit code sent to johndoe@gmail.com
                </p>

                <!-- input fields -->


                <div id="otp" class="flex flex-row  w-full text-webapp my-10">
                    <div class="flex flex-row gap-x-2 sm:gap-x-3 w-full text-lg overflow-none">
                        <input type="number" v-model="val1" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val2" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val3" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val4" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val5" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val6" placeholder="-" @input="next" @keydown="back" />
                    </div>
                </div>
                <!-- submit btn -->
                <button class="bg-primary w-full rounded-lg grid place-items-center h-14 text-white">Continue</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const val1 = ref()
const val2 = ref()
const val3 = ref()
const val4 = ref()
const val5 = ref()
const val6 = ref()

const next = (e) => {
    if (!e.target.value.length < 1) {
        e.target?.nextSibling?.focus()
    }
}

const back = (e) => {
    var key = e.keyCode || e.charCode;

    if (key == 8 || key == 46) {
        e.target.value = ''
        e.target?.previousSibling?.focus()
    }
}

</script>

<style scoped>
input {
    width: 50px;
    height: 60px;
    text-align: center;
    outline: none;
    border: 1px solid #D9DDEE;
    border-radius: 10px;
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