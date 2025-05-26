<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import MobileNavbar from '@/components/MobileNavbar.vue'

const route = useRoute()
const showNavbar = computed(() => route.meta.showMobileNavbar)
</script>

<template>
  <div class="overflow-x-hidden">
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <Component :is="Component" />
      </transition>
    </RouterView>
    <MobileNavbar v-if="showNavbar" />
  </div>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
