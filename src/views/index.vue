<script setup lang="ts">
import { ref, onMounted } from 'vue'

import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Hero from '@/components/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import Projects from '@/components/Projects.vue'
import Services from '@/components/Services.vue'
import Skills from '@/components/Skills.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import Loader from '@/components/ui/Loader.vue'
import Partners from '@/components/Partners.vue'

// Loader state
const loading = ref(true)

onMounted(() => {
  // Simulate loading delay (e.g., fetching data)
  setTimeout(() => {
    loading.value = false
  }, 2000) // Adjust duration as needed
})
</script>

<template>
  <div>
    <!-- Loader Screen -->
    <div v-if="loading" >
      <transition name="fade">
        <div
          v-if="loading"
          class="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50"
        >
          <!-- <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_usmfx6bp.json" background="transparent"
            speed="1" style="width: 200px; height: 200px" loop autoplay></lottie-player>
          <p class="text-gray-600 dark:text-gray-300 mt-4">Loading...</p> -->
          <Loader />
          <p class="text-gray-600 dark:text-gray-300 mt-4">Loading...</p>
        </div>
      </transition>
    </div>

    <!-- Main Content -->
    <div v-else>
      <AppLayout>
        <div class="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section>
            <Partners />
          </section>
        </div>
      </AppLayout>
      <section id="contacts">
        <Contact />
      </section>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
