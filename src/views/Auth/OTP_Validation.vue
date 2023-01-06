<template>

    <div class="w-screen min-w-full flex flex-row items-center bg-white h-screen min-h-full overflow-hidden">
        <img src="../../assets/images/habeep-show.png" class="w-1/3 xl:block hidden h-full" alt="">

        <div
            class="form-container flex flex-col items-center relative bg-white gap-y-3 w-full xl:w-2/3 h-full pb-6 md:py-10 overflow-y-auto overflow-x-hidden">

            <div class="flex flex-col items-center w-full md:w-2/3 px-4">
                <!-- logo -->
                <div class="logo md:flex hidden flex-row items-center justify-end w-full gap-x-2 cursor-pointer">
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
                    Please provide the boxes with 5 digit code sent to {{ $route.query.email }}
                </p>

                <!-- input fields -->


                <div id="otp" class="flex flex-row  w-full text-webapp my-10">
                    <div class="flex flex-row gap-x-2 sm:gap-x-3 w-full text-lg overflow-none">
                        <input type="number" v-model="val1" placeholder="-" @input="next" @keydown="back1" />
                        <input type="number" v-model="val2" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val3" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val4" placeholder="-" @input="next" @keydown="back" />
                        <input type="number" v-model="val5" placeholder="-" @input="next" @keydown="back" />
                    </div>
                </div>
                <!-- submit btn -->
                <button class="bg-primary w-full rounded-lg grid place-items-center h-14 text-white" @click="verifyOTP">
                    <span v-if="!processing">Continue</span>
                    <div role="status" v-else>
                        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-white animate-spin fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </button>

            </div>

            <Toast :msg="msg.text" type="danger" v-if="msg.type === 'danger'" />
            <Toast :msg="msg.text" type="success" v-if="msg.type === 'success'" />
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import axios from '../../composables/axios'
import { ref, reactive, onMounted } from 'vue'
import { useStore } from "vuex";

const store = useStore();
const router = useRouter()
const route = useRoute();

const url = '/auth/verify';
const url2 = '/auth/getOtpCode';

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
        e.target?.previousSibling?.focus()
        e.target.value = ''
    }
}
const back1 = (e) => {
    var key = e.keyCode || e.charCode;

    if (key == 8 || key == 46) {
        e.target.value = ''
    }
}

const data = reactive({
    email: '',
})

const processing = ref(false)
let msg = ref({
    type: '',
    text: '',
})

if (route.query.email) {
    data.email = route.query.email;
} else {
    data.email = store.state.user.email;
}

const getOTP = async () => {
    try {
        const result = await axios.post(url2, data);

        if (result.data.success) {
            msg.value.type = 'success'
            msg.value.text = result.data.message;


            setTimeout(() => {
                msg.value.type = ''
                msg.value.text = '';

                if (result.data.errorMsg == null) {
                    router.push('/login')
                }
            }, 2000);
        }


    } catch (error) {
        msg.value.type = 'danger'
        msg.value.text = error.message;

        setTimeout(() => {
            msg.value.type = ''
            msg.value.text = '';
        }, 5000);
    }
}

const verifyOTP = async () => {
    const otpInput = [val1.value, val2.value, val3.value, val4.value, val5.value].join('');
    const info = {
        email: '',
        otp: otpInput
    }
    if (route.query.email) {
        info.email = route.query.email;
    } else {
        info.email = store.state.user.email;
    }
    processing.value = true

    const verify = await axios.post(url, info);

    processing.value = false
    if (verify.data.errorMsg === 'OK') {
        msg.value.type = 'success'
        msg.value.text = verify.data.message

        setTimeout(() => {
            router.push('/login')
        }, 3000);
    } else if (verify.data.errorMsg == null) {
        msg.value.type = 'success'
        msg.value.text = verify.data.message

        setTimeout(() => {
            router.push('/login')
        }, 3000);

    } else {
        msg.value.type = 'warning'
        msg.value.text = verify.data.message
        
        val1.value = ''
        val2.value = ''
        val3.value = ''
        val4.value = ''
        val5.value = ''
    }

    setTimeout(() => {
        msg.value.type = ''
        msg.value.text = '';
    }, 5000)
}


onMounted(() => {
    getOTP()
})

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