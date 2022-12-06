<template>
    <!-- Header / Navbar -->
    <div class="flex flex-row items-center py-4 justify-between w-full px-6 2xl:px-44 md:px-20 border-b border-b-textfieldbg">
        <div class="logo flex flex-row items-center gap-x-2">
            <img src="../assets/icons/logo.svg" alt="Logo">
            <span class="text-primary text-2xl">Habeep</span>
        </div>

        <div class=" flex-row items-center w-fit gap-x-6 divide-x md:flex hidden">
            <!-- download app on stores -->
            <div class="flex flex-row items-center gap-x-4">
                <span class="text-sub-webapp text-lg font-normal">Download our app at</span>
                <img src="../assets/icons/apple.svg" alt="">
                <img src="../assets/icons/playstore.svg" alt="">
            </div>

            <div class="flex flex-row gap-x-10 items-start md:items-center pl-6">
                <span class="uppercase text-lg text-webapp">BLOG</span>
                <div class="flex flex-row items-center gap-x-2">
                    <img src="../assets/icons/user.svg" alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#0A1045" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>

        <img src="../assets/icons/mobile-nav.svg" class="flex md:hidden" alt="">
    </div>
</template>

<script setup>

</script>