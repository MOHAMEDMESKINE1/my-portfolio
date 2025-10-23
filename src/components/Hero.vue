<script setup lang="ts">
import Button from './ui/Button.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 bg-white p-5" id="hero">
    <!-- Image first on mobile, second on desktop -->
    <div class="order-1 md:order-2 mx-auto max-w-sm flex  justify-center">
      <img
        src="../assets/image.png"
        class="mt-20 w-[400px] border-2 border-black object-cover rounded-full"
        alt=""
      />
    </div>

    <!-- Text second on mobile, first on desktop -->
    <div class="order-2 md:order-1 text-center md:text-start flex flex-col gap-6 md:mt-32">
      <h1 class="text-xl uppercase">Hi, My name is Mohamed</h1>

      <div class="text-3xl  md:text-4xl  ">
        <h1 class="font-bold capitalize text-center md:text-left">
          i'm a fullstack
          <!-- developer -->
          <span class="border-primary border-b-2">developer</span>
        </h1>
      </div>

      <p>based in Agadir, Morocco</p>

      <Button class="mx-5 md:mx-0">About Me</Button>
    </div>
  </div>
</template>
