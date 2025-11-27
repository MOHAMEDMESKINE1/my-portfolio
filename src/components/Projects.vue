<script setup lang="ts">
import Button from './ui/Button.vue'

const projects = [
  {
    id: 1,
    nameKey: 'projects.poject1.name',
    descKey: 'projects.poject1.description',
    img: new URL('../assets/platforms/marafiq.png', import.meta.url).href,
    link: 'https://marafiq.agadir.ma',
    delay: '.1s',
  },
  {
    id: 2,
    nameKey: 'projects.poject2.name',
    descKey: 'projects.poject2.description',
    img: new URL('../assets/platforms/bureau_ordre.png', import.meta.url).href,
    link: 'https://bo.e-agadir.ma',
    delay: '.2s',
  },
  {
    id: 3,
    nameKey: 'projects.poject3.name',
    descKey: 'projects.poject3.description',
    img: new URL('../assets/platforms/dawarat.png', import.meta.url).href,
    link: 'https://dev-dawarat.e-agadir.ma',
    delay: '.3s',
  },
  {
    id: 4,
    nameKey: 'projects.poject4.name',
    descKey: 'projects.poject4.description',
    img: new URL('../assets/platforms/pelicula.png', import.meta.url).href,
    link: 'https://pelicula-dun.vercel.app',
    delay: '.4s',
  },
]
</script>

<template>
  <section id="projects" class="bg-white p-5 md:p-10">
    <h1 class="text-center uppercase text-3xl md:text-4xl font-bold py-10 tracking-wide">
      {{ $t('projects.title') }}
    </h1>

    <div
      v-for="(project, index) in projects"
      :key="project.id"
      v-scroll-animate
      class="transition-all grid md:grid-cols-2 items-center gap-6 md:gap-10 md:mb-16"
      :style="{ transitionDelay: project.delay }"
    >
      <!-- IMAGE -->
      <div
        class="border overflow-hidden hover:shadow-[2px_2px_0px_rgba(0,0,0,0.8),4px_4px_0px_rgba(0,0,0,0.6)] transition-all duration-300"
        :class="index % 2 === 0 ? 'order-first md:order-last' : 'md:order-first'"
      >
        <img
          :src="project.img"
          class="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
          :alt="$t(project.nameKey)"
        />
      </div>

      <!-- TEXT -->
      <div class="font-bold text-gray-800 px-2 md:px-6">
        <h2 class="text-3xl md:text-5xl mb-4 capitalize leading-tight">
          {{ $t(project.nameKey) }}
        </h2>
        <p class="leading-relaxed md:text-lg font-normal text-gray-700">
          {{ $t(project.descKey) }}
        </p>

        <div class="py-5 flex flex-wrap gap-3">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <Button class="w-36 md:w-40">{{ $t('button.demo') }}</Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: subtle fade-in animation on scroll */
[v-scroll-animate] {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
[v-scroll-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
