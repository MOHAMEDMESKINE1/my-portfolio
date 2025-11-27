<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import ScrollTop from '@/components/ui/ScrollTop.vue'
</script>

<template>
  <div class="bg-white">
    <div class="">
      <slot />
    </div>
    <ScrollTop />
  </div>
</template>

<style scoped></style>
