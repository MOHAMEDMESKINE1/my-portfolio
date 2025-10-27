<script setup lang="ts">
import DotGrid from '@/blocks/Backgrounds/DotGrid/DotGrid.vue';
import { Github, Heart, Instagram, Linkedin } from 'lucide-vue-next'

const socialItems = [
  {
    label: 'Github',
    link: 'https://github.com/MOHAMEDMESKINE1',
    icon: Github,
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/mohamed-meskine-173720180',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/med_meskine1',
    icon: Instagram,
  },
]
const navItems = [
  {
    title: 'navbar.home',
    href: '#home',
  },
  {
    title: 'navbar.about',
    href: '#about',
  },
  {
    title: 'navbar.skills',
    href: '#skills',
  },
  {
    title: 'navbar.services',
    href: '#services',
  },

  {
    title: 'navbar.projects',
    href: '#projects',
  },
  {
    title: 'navbar.contacts',
    href: '#contacts',
  },
]
</script>
<template>
    
  <!-- Footer Wrapper -->
<div class="relative bg-secondary text-white overflow-hidden">

  <!-- DotGrid Background -->
  <div class="absolute inset-0 z-0">
    <DotGrid
      :dot-size="1"
      :gap="23"
      base-color="#ffc348"
      active-color="#ffc348"
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

  <!-- Footer Content -->
  <div class=" z-10 justify-center gap-6 md:gap-22 p-5 grid grid-cols-1 md:grid-cols-3">
    
    <div class="flex flex-col gap-4 mt-2">
      <h1 class="text-white">Mohamed Meskine</h1>
      <p class="text-sm text-justify">
        {{ $t('footer.description') }}
      </p>

      <div class="flex gap-4">
        <a v-for="item in socialItems" :key="item.label" :href="item.link" target="_blank">
          <component :is="item.icon" class="w-4 h-4  md:w-5 md:h-5 hover:text-orange" />
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-2 capitalize">
      <h1 class="text-white">navigation</h1>
      <ul class="flex flex-col gap-2 md:gap-4">
        <li v-for="navItem in navItems" :key="navItem.title">
          <a
            :href="navItem.href"
            class="block py-2 md:pl-3 pr-4 text-white rounded hover:text-orange md:hover:bg-transparent md:hover:text-orange md:p-0"
          >
            {{ $t(navItem.title) }}
          </a>
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-4 mt-2">
      <h1 class="text-white ">{{$t('navbar.contacts')}}</h1>
      <ul class="flex flex-col gap-4">
        <li>+212704282927</li>
        <li>meskinemohameddev@gmail.com</li>
        <li>Agadir, Morocco</li>
      </ul>
    </div>

  </div>

  <!-- Bottom Bar -->
  <div class="relative z-10 bg-white text-dark flex items-center justify-center py-2 gap-1">
    <p>© {{ new Date().getFullYear() }} Mohamed Meskine</p>
    <Heart class="w-4 h-4" />
    <p>. {{ $t('footer.droits') }}.</p>
  </div>

</div>

 </template>

<style scoped></style>
