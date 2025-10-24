<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import ScrollTop from '@/components/ui/ScrollTop.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto bg-white">
    <slot />
    <ScrollTop />
  </div>
</template>

<style scoped></style>
