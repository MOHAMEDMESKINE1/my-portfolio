<script setup lang="ts">
import { ref } from 'vue'
import github from '../assets/skills/github.svg'
import linkdin from '../assets/svgs/linkdin.svg'
import instagram from '../assets/svgs/instagram.svg'
import { Github, Instagram, Linkedin } from 'lucide-vue-next'
const isOpen = ref(false)

const toggleNavbar = () => {
  isOpen.value = !isOpen.value
}
const windowWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  if (windowWidth.value >= 768) {
    isOpen.value = !isOpen.value
  } else {
    isOpen.value = false // Always hide when switching to mobile
  }
})
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav class="bg-white fixed  border-gray-200 dark:bg-cyan-50 w-full z-20 top-0 left-0 nav">
      <div class="flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#home" class="flex items-center">
          <div class="h-10 flex gap-x-2 mx-5 self-center text-2xl font-semibold whitespace-nowrap">
            <span>Med</span>
            <span class="text-brown"> Meskine .</span>
          </div>
        </a>

        <div class="flex md:order-2">
          
          <div class="mx-2 flex md:flex hidden gap-4">
            <a href="https://github.com/MOHAMEDMESKINE1" target="_blank">
              <Github class="w-4 h-4  md:w-5 md:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-meskine-173720180" target="_blank">
              <Linkedin class="w-4 h-4 md:w-5 md:h-5 " />
            </a>
            <a href="https://www.instagram.com/med_meskine1" target="_blank">
              <Instagram class="w-4 h-4 md:w-5 md:h-5 " />
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
              aria-hidden="true"
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
            class="flex flex-col uppercase font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
                >Home</a
              >
            </li>

            <li>
              <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
                >About</a
              >
            </li>

            <li>
              <a
                href="#services"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange md:p-0"
              >
                contacts
              </a>
            </li>
            
            <li>
              <!-- get appointement -->
              <div class="md:hidden my-2">
                <!-- <a href="#" type="button" class="text-white mx-2     w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-700 font-medium rounded-md  text-sm px-6 p-3 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Download CV</a> -->
                <!-- <Button>CONTACT NOW</Button> -->
                <div class="mx-2 md:hidden flex gap-4">
                  <a href="https://github.com/MOHAMEDMESKINE1" target="_blank">
                    <img :src="github" alt="" class=" w-4 h-4 md:w-5 md:h-5 " />
                  </a>
                  <a href="https://www.linkedin.com/in/mohamed-meskine-173720180" target="_blank">
                    <img :src="linkdin" alt="" class="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="https://www.instagram.com/med_meskine1" target="_blank">
                    <img :src="instagram" alt="" class="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </li>
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
