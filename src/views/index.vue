<script setup lang="ts">
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Services from '@/components/Services.vue'
import Skills from '@/components/Skills.vue'
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
  <div class="">
    <AppLayout>
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
     
    </AppLayout>
     <section id="contacts">
        <Contact />
      </section>
  </div>
</template>
