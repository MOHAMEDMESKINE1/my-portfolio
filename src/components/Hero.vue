<script setup lang="ts">
import Button from './ui/Button.vue'
import TextType from '@/blocks/TextAnimations/TextType/TextType.vue'
import DotGrid from '@/blocks/Backgrounds/DotGrid/DotGrid.vue'
</script>

<template>
  <div id="hero"
    class="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 bg-white text-dark p-5 overflow-hidden">
    <!-- DotGrid Background -->
    <div class="absolute inset-0 w-full h-full z-0">
      <DotGrid :dot-size="2" :gap="22" base-color="#d74f11" active-color="#d74f11" :proximity="150" :speed-trigger="100"
        :shock-radius="250" :shock-strength="5" :max-speed="5000" :resistance="750" :return-duration="1.5"
        class="w-full h-full" />
    </div>

    <!-- Image -->
    <div class="order-1 md:order-2 mx-auto max-w-sm sm:max-w-sm flex justify-center relative z-10">
      <img src="/my-portfolio/src/assets/me.webp"
        class="mt-20 md:w-[400px] bg-orange border-5 border-black object-cover rounded-full" alt="profile" width="400"
        height="400" fetchpriority="high" />

    </div>

    <!-- Text -->
    <div class="order-2 md:order-1 text-center md:text-start flex flex-col gap-6 md:mt-56 relative z-10">
      <h1 class="text-xl uppercase">
        <!-- Hi, My name is Mohamed -->
        {{ $t('hero.greeting') }}
      </h1>

      <h1 class="text-xl md:text-4xl font-bold capitalize">
        {{ $t('hero.im') }}
        <TextType :text="[$t('hero.job'), '']" :typingSpeed="75" :pauseDuration="1500" :showCursor="true"
          cursorCharacter="|" :textColors="['#d74f11']" class="inline-block whitespace-nowrap" />
      </h1>

      <a href="#about" class="">
        <Button class="mx-5 w-62 md:mx-0 md:w-full"> {{ $t('button.about') }}</Button>
      </a>
    </div>
  </div>
</template>
<style>
.dot-grid-container {
  position: relative;
  overflow: hidden;
}
</style>
