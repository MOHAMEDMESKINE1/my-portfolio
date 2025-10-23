<script setup lang="ts">
import about from '../assets/svgs/about.svg'
</script>

<template>
  <div class="grid md:grid-cols-2 gap-y-3 md:gap-2 my-5   p-5" id="about">
    <div class=" hidden md:block">
      <img :src="about" />
    </div>

    <div class="font-bold capitalize ms-5">
      <h1 class="text-2xl md:text-3xl ">Im a fullstack developer with +2 years of experience</h1>
      <p class="mt-3 text-justify">
        I’m a Full Stack Developer with over 2 years of experience building modern web applications. I specialize in
        JavaScript frameworks like Vue.js and Nuxt js, as well as backend development with Laravel. I enjoy turning ideas
        into efficient, scalable, and user-friendly digital solutions, and I’m always eager to learn and explore new
        technologies.
      </p>
      <div class="flex mt-5 justify-between max-w-md">
        <div>
          <h2 class="text-orange text-2xl font-bold">+5</h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <h2 class="text-orange text-2xl font-bold">+5</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  </div>
</template>
