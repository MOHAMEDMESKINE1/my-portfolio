<script setup lang="ts">
import CardSkill from '@/components/ui/CardSkill.vue'
import AboutSvg from '@/assets/svgs/skills.svg'

import html from '@/assets/skills/html.svg'
import github from '@/assets/skills/github.svg'
import tailwindcss from '@/assets/skills/tailwindcss.svg'
import css from '@/assets/skills/css.svg'
import laravel from '@/assets/skills/laravel.svg'
import vuejs from '@/assets/skills/vuejs.svg'
import php from '@/assets/skills/php.svg'
import javascript from '@/assets/skills/javascript.svg'
import wordpress from '@/assets/skills/wordpress.svg'
import bootstrap from '@/assets/skills/bootstrap.svg'
import skillsJson from "@/assets/lottfiles/skills.json"
const skills = [
  {
    title: 'html',
    image: html,
    background: 'bg-white',
  },
  {
    title: 'css',
    image: css,
    background: 'bg-white',
  },
  {
    title: 'tailwindcss',
    image: tailwindcss,
    background: 'bg-white',
  },
  {
    title: 'bootstrap',
    image: bootstrap,
    background: 'bg-white',
  },
  {
    title: 'javascript',
    image: javascript,
    background: 'bg-white',
  },
  {
    title: 'vue js',
    image: vuejs,
    background: 'bg-white',
  },
  {
    title: 'php',
    image: php,
    background: 'bg-white',
  },
  {
    title: 'laravel',
    image: laravel,
    background: 'bg-white',
  },
  {
    title: 'wordpress',
    image: wordpress,
    background: 'bg-white',
  },
  {
    title: 'github',
    image: github,
    background: 'bg-white',
  },
]

</script>

<template>
  
  <div id="skills" class="relative bg-white text-dark overflow-hidden">
    <h1 class="text-center uppercase text-3xl md:text-4xl ms-4 py-2"> {{ $t('skills.title') }}</h1>
 
    <!-- Responsive grid wrapper -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 md:items-start">
      <!-- 🧩 Left side: cards at top -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <CardSkill
          v-for="skill in skills"
          :key="skill.title"
          :title="skill.title"
          :background="skill.background"
          :image="skill.image"
        />
      </div>

      <!-- 🖼️ Right side: image -->
      <div class="flex justify-center md:justify-end hidden md:block">
        <!-- <img :src="AboutSvg" alt="skills image" class="" /> -->
            <lottie-player
          :src="skillsJson"
          background="transparent"
          speed="1"
          style="width:650px; height: 650px;"
          loop
          autoplay
          class="md:-mt-28 "
        />
      </div>
    </div>
  </div>
</template>
