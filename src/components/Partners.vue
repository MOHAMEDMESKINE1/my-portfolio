<script setup lang="ts">
import LogoLoop from '@/blocks/Animations/LogoLoop/LogoLoop.vue'

const techLogos = [
  {
    node: 'https://lucide.dev/framework-logos/laravel.svg',
    title: 'Laravel',
    href: 'https://laravel.com',
  },
  {
    node: 'https://inertia-rails.dev/logo.svg',
    title: 'inertia js',
    href: 'https://inertiajs.com',
  },

  {
    node: 'https://lucide.dev/framework-logos/js.svg',
    title: 'javascript',
    href: 'https://www.javascript.com',
  },
  {
    node: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
    title: 'node js',
    href: 'https://nodejs.org/en',
  },
  {
    node: 'https://cdn.worldvectorlogo.com/logos/expressjs.svg',
    title: 'express js',
    href: 'https://expressjs.com',
  },
  {
    node: 'https://lucide.dev/framework-logos/react.svg',
    title: 'react js',
    href: 'https://react.dev',
  },
  {
    node: 'https://lucide.dev/framework-logos/vue.svg',
    title: 'vue js',
    href: 'https://vuejs.org',
  },
  {
    node: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
    title: 'tailwind css',
    href: 'https://tailwindcss.com',
  },
  {
    node: 'https://lucide.dev/framework-logos/nuxt.svg',
    title: 'nuxt js',
    href: 'https://nuxt.com',
  },
  {
    node:   "https://images.seeklogo.com/logo-png/51/2/shadcn-ui-logo-png_seeklogo-519786.png",
    title: 'shadcn ui',
    href: 'https://ui.shadcn.com',
  },
]
</script>

<template>
  <div class="pb-4 max-w-7xl">
    <h1 class="text-center uppercase text-3xl md:text-4xl font-bold py-10 tracking-wide">
      {{ $t('technologies.title') }}
    </h1>
    <LogoLoop
      :logos="techLogos"
      :speed="120"
      direction="left"
      :logoHeight="40"
      :gap="40"
      :pauseOnHover="true"
      :scaleOnHover="true"
      :fadeOut="true"
      fadeOutColor="#fdf9ec"
      ariaLabel="Technology partners"
    />
  </div>
</template>
