<script setup lang="ts">
import Card from './ui/Card.vue'
import { LaptopMinimal } from 'lucide-vue-next'
import { Code } from 'lucide-vue-next'
</script>

<template>
  <div class="" id="services">
    <h1 class="text-center uppercase text-3xl md:text-4xl ">my services</h1>
    <div class="grid md:grid-cols-2 gap-y-3 gap-2 p-5">
      <Card title="Frontend" background="bg-white" :icon="LaptopMinimal">
        I craft modern, dynamic, and visually appealing web interfaces using the latest front-end
        technologies. With Vue.js, Nuxt, and TailwindCSS, I build fast, responsive, and innovative
        user experiences .
      </Card>

      <Card title="Backend" background="bg-white" :icon="Code">
        I develop powerful and secure backends using Laravel and Inertia.js, ensuring a smooth
        bridge between the frontend and server. My focus is on building scalable, and efficient user
        experiences.
      </Card>
    </div>
  </div>
</template>
