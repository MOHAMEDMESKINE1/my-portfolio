<script setup lang="ts">
import CardSkill from '../components/ui/CardSkill.vue'
import AboutSvg from '../assets/svgs/skills.svg'

import html from '../assets/skills/html.svg'
import github from '../assets/skills/github.svg'
import tailwindcss from '../assets/skills/tailwindcss.svg'
import css from '../assets/skills/css.svg'
import laravel from '../assets/skills/laravel.svg'
import vuejs from '../assets/skills/vuejs.svg'
import php from '../assets/skills/php.svg'
import javascript from '../assets/skills/javascript.svg'
import wordpress from '../assets/skills/wordpress.svg'
import bootstrap from '../assets/skills/bootstrap.svg'
</script>

<template>
  <div id="skills">
    <h1 class="text-center uppercase text-3xl md:text-4xl ms-4 py-2">my skills</h1>

    <!-- Responsive grid wrapper -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 md:items-start">
      <!-- 🧩 Left side: cards at top -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <CardSkill title="html" background="bg-white" :image="html" />
        <CardSkill title="css" background="bg-white" :image="css" />
        <CardSkill title="tailwindcss" background="bg-white" :image="tailwindcss" />
        <CardSkill title="bootstrap" background="bg-white" :image="bootstrap" />
        <CardSkill title="javascript" background="bg-white" :image="javascript" />
        <CardSkill title="vue js" background="bg-white" :image="vuejs" />
        <CardSkill title="php" background="bg-white" :image="php" />
        <CardSkill title="laravel" background="bg-white" :image="laravel" />
        <CardSkill title="github" background="bg-white" :image="github" />
        <CardSkill title="wordpress" background="bg-white" :image="wordpress" />
      </div>

      <!-- 🖼️ Right side: image -->
      <div class="flex justify-center md:justify-end hidden md:block">
        <img :src="AboutSvg" alt="skills image" class="" />
      </div>
    </div>
  </div>
</template>
