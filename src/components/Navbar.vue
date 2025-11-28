<script setup lang="ts">
import { ref } from 'vue'
import { Github, Instagram, Linkedin } from 'lucide-vue-next'
import LangSwitcher from './ui/LangSwitcher.vue'
const isOpen = ref(false)

const toggleNavbar = () => {
  isOpen.value = !isOpen.value
}
const windowWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  if (windowWidth.value >= 768) {
    isOpen.value = !isOpen.value
  } else {
    isOpen.value = false
  }
})
const navItems = [
  {
    title: 'navbar.home',
    href: '',
  },
  {
    title: 'navbar.about',
    href: 'about',
  },
  {
    title: 'navbar.skills',
    href: 'skills',
  },
  {
    title: 'navbar.services',
    href: 'services',
  },

  {
    title: 'navbar.projects',
    href: 'projects',
  },
  {
    title: 'navbar.contacts',
    href: 'contacts',
  },
]

const socialItems = [
  {
    label: 'Github',
    link: 'https://github.com/MOHAMEDMESKINE1',
    icon: Github,
    ariaLabel :'Visit my GitHub profile',
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/mohamed-meskine-173720180',
    icon: Linkedin,
    ariaLabel:"Visit my Linkedin profile",
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/med_meskine1',
    icon: Instagram,
    ariaLabel:"Visit my Instagram profile",
  },
]
</script>

<template>
  <header class="relative">
    <!-- Navbar -->
    <nav class="absolute bg-white w-full z-20 top-0 left-0">
      <div class="flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#home" class="flex items-center">
          <div class="h-10 flex gap-x-2 mx-5 self-center text-2xl font-semibold whitespace-nowrap">
            <span class="text-brown">Med</span>
            <span class="text-orange"> Meskine .</span>
          </div>
        </a>
        <div class="flex md:order-2">
          <div class="mx-2 flex md:flex items-center hidden gap-4">
            <LangSwitcher class="hidden" />
            <a v-for="item in socialItems" :key="item.label" :href="item.link"
            :aria-label="item.ariaLabel"
            target="_blank">
              <component :is="item.icon" class="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <button
            @click="toggleNavbar"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-cyan-500 border-2 dark:focus:ring-cyan-50"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          :class="[
            'items-center justify-center w-full md:flex md:w-auto md:order-1',
            { hidden: !isOpen },
          ]"
          id="navbar-cta"
        >
          <ul
            class="flex bg-white items-center flex-col uppercase font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li v-for="navItem in navItems" :key="navItem.title">
              <a
                :href="`#${navItem.href}`"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-orange md:hover:bg-transparent md:hover:text-orange md:p-0"

              >
                {{ $t(navItem.title) }}
              </a>
            </li>

            <LangSwitcher class="inline-block md:hidden" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped>
* {
  scroll-behavior: smooth;
}
</style>
