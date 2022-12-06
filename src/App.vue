<template>
  <router-view class="wrapper" v-slot="{ Component }">
      <transition name="scale-slide">
          <component :is="Component" />
      </transition>
  </router-view>
</template>

<style>
.wrapper {
    width: 100%;
    min-height: 100vh;
}

.scale-slide-enter-active,
.scale-slide-leave-active {
    position: absolute;
    transition: all 0.35s ease;
}

.scale-slide-enter-from {
    left: -100%;
}

.scale-slide-enter-to {
    left: 0%;
}

.scale-slide-leave-from {
    transform: scale(1);
}

.scale-slide-leave-to {
    transform: scale(0.8);
}
</style>