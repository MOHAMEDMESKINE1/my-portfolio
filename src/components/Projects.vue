<script setup lang="ts">
import Button from './ui/Button.vue'
</script>

<template>
  <div class="bg-white p-5" id="projects">
    <h1 class="text-center uppercase text-3xl md:text-4xl py-5">latest projects</h1>

    <div class="grid md:grid-cols-2 gap-y-2 md:gap-2 md:my-22">
      <!-- marafiq -->
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">marafiq</h1>
        <p class="leading-loose">
          Marafiq is a comprehensive web platform designed to simplify the management and booking of municipal
          equipment, theaters, and halls. The project was designed and developed to optimize scheduling, availability,
          and the administrative management of municipal resources.
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://marafiq.agadir.ma" target="_blank">
            <Button class="w-40">live demo</Button>
          </a>
          <!-- <button
            class="px-2 py-2 text-white bg-black overflow-hidden dark:border-white uppercase transition duration-200 text-sm font-bold hover:bg-dark hover:text-white hover:shadow-orange shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
            parcourir
          </button> -->
        </div>
      </div>
      <div
        class="border order-first md:order-last hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/marafiq.png" class="" />
      </div>
    </div>
    <!-- bureau d'ordre -->
    <div class="grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div
        class="border md:order-first hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/bureau_ordre.png" class="" />
      </div>
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">bureau d'ordre</h1>
        <p class="leading-loose">
          Designed and developed a comprehensive web platform for managing administrative correspondence (incoming and
          outgoing). The platform includes features for receiving, registering, assigning, and tracking letters. User
          roles and access permissions are fully managed for different profiles. 
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://bo.e-agadir.ma" target="_blank">
            <Button class="w-40">live demo</Button>
          </a>
          <!-- <button
            class="px-2 py-2 text-white bg-black overflow-hidden dark:border-white uppercase transition duration-200 text-sm font-bold hover:bg-dark hover:text-white hover:shadow-orange shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
            parcourir
          </button> -->
        </div>
      </div>
    </div>
    <!-- dawarat -->
    <div class="grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">Dawarat</h1>
        <p class="leading-loose">
          Dawarat is an innovative web platform dedicated to managing the sessions and meetings of the municipality. It
          provides a comprehensive solution to plan, organize, and track sessions, questions, notes, meetings, and
          sections in a centralized manner.
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://dev-dawarat.e-agadir.ma" target="_blank">
            <Button class="w-40">live demo</Button>
          </a>
          <!-- <button
            class="px-2 py-2 text-white bg-black overflow-hidden dark:border-white uppercase transition duration-200 text-sm font-bold hover:bg-dark hover:text-white hover:shadow-orange shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
            parcourir
          </button> -->
        </div>
      </div>
      <div
        class="border order-first md:order-last hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/dawarat.png" class="order" />
      </div>
    </div>
    <!-- Pelicula -->
    <div class="grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div
        class="md:order-first border hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/pelicula.png" class=" " />
      </div>
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">Pelicula</h1>
        <p class="leading-loose">
          Película is a web platform for discovering and browsing movies. It leverages the IMDb API to provide
          comprehensive information on films, series, and actors. The platform also offers advanced search
          functionality.
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://pelicula-dun.vercel.app" target="_blank">
            <Button class="w-40">live demo</Button>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</template>
