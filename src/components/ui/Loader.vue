<script setup lang="ts">
import loader from '@/assets/loader.webm'
</script>

<template>
  <div class="flex flex-col items-center mx-autojustify-center h-auto mx-auto">
    <video autoplay loop muted playsinline width="128" height="128">
      <source :src="loader" type="video/webm">
    </video>
  </div>
</template>

<style scoped></style>
