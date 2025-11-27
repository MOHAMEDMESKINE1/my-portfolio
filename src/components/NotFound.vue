<script setup lang="ts">
// No extra logic needed — this is a static view
import NotFound from '@/assets/lottfiles/Error404.json'
import { HomeIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen text-center bg-white">
    <!-- Lottie animation -->
    <lottie-player
      :src="NotFound"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px"
      loop
      autoplay
    ></lottie-player>

    <p class="text-gray-500 dark:text-gray-300 mt-2">{{ $t('notFound.description') }}</p>

    <RouterLink
      to="/"
      class="mt-6 px-5 py-2 w-44 bg-orange text-white border border-black hover:bg-black hover:text-white transition"
    >
      <div class="flex items-center justify-center">
        <HomeIcon class="mr-2 w-5 h-5" />
        {{ $t('notFound.back') }}
      </div>
    </RouterLink>
  </div>
</template>
