<script setup lang="ts">
import Button from './ui/Button.vue'
import TextType from '@/blocks/TextAnimations/TextType/TextType.vue'
 import DotGrid from '@/blocks/Backgrounds/DotGrid/DotGrid.vue'

const info = ['fullstack developer !', '']
</script>

<template>
  <div
    id="hero"
    class="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 bg-white text-dark p-5 overflow-hidden"
  >
    <!-- DotGrid Background -->
    <div class="absolute inset-0 w-full h-full z-0">
      <DotGrid
        :dot-size="2"
        :gap="22"
        base-color="#d74f11"
        active-color="#d74f11"
        :proximity="150"
        :speed-trigger="100"
        :shock-radius="250"
        :shock-strength="5"
        :max-speed="5000"
        :resistance="750"
        :return-duration="1.5"
        class="w-full h-full"
      />
    </div>

    <!-- Image -->
    <div class="order-1 md:order-2 mx-auto max-w-sm flex justify-center relative z-10">
      <img
        src="../assets/image.png"
        class="mt-20 md:w-[400px] border-2 border-black object-cover rounded-full"
        alt="profile"
      />
    </div>

    <!-- Text -->
    <div
      class="order-2 md:order-1 text-center md:text-start flex flex-col gap-6 md:mt-44 relative z-10"
    >
      <h1 class="text-xl uppercase">Hi, My name is Mohamed</h1>

      <h1 class="text-3xl md:text-4xl font-bold capitalize">
        I'm a
        <TextType
          :text="info"
          :typingSpeed="75"
          :pauseDuration="1500"
          :showCursor="true"
          cursorCharacter="|"
          :textColors="['#d74f11']"
        />
      </h1>

      <p>based in Agadir, Morocco</p>

      <Button class="mx-5 md:mx-0">About Me</Button>
    </div>
  </div>

  <!-- <div class="dot-grid-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 bg-black text-white p-5" id="hero">
     <DotGrid
      :dot-size="16"
      :gap="32"
      base-color="#fdf9ec"
      active-color="#d74f11"
      :proximity="150"
      :speed-trigger="100"
      :shock-radius="250"
      :shock-strength="5"
      :max-speed="5000"
      :resistance="750"
      :return-duration="1.5"
      class-name="custom-dot-grid"
    />
     <div class="order-1 md:order-2 mx-auto max-w-sm flex  justify-center">
      <img
        src="../assets/image.png"
        class="mt-20 md:w-[400px] border-2 border-black object-cover rounded-full"
        alt=""
      />
    </div>

     <div class="order-2 md:order-1 text-center md:text-start flex flex-col gap-6 md:mt-32">
      <h1 class="text-xl uppercase">Hi, My name is Mohamed</h1>

      <div class="text-3xl  md:text-4xl  ">
        <h1 class="font-bold capitalize text-center md:text-left">
          i'm a 
            <TextType 
                  :text="info"
                  :typingSpeed="75"
                  :pauseDuration="1500"
                  :showCursor="true"
                  cursorCharacter="|"
                  class="text-orange font-bold"
                  :textColors="['#d74f11']"
                  
                />
        

        </h1>

              
      </div>
      <p>based in Agadir, Morocco</p>

      <Button class="mx-5 md:mx-0">About Me</Button>
    </div>
    
  </div> -->
</template>
<style>
.dot-grid-container {
  position: relative;
  overflow: hidden;
}
</style>
