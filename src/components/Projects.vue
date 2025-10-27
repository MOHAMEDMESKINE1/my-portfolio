<script setup lang="ts">
import Button from './ui/Button.vue'
</script>

<template>
  <div class=""></div>

  <div class="bg-white p-5" id="projects">
    <h1 class="text-center uppercase text-3xl md:text-4xl py-5">
      {{ $t('projects.title') }}
    </h1>

    <!-- marafiq -->
    <div
    v-scroll-animate
    style="transition-delay: .1s"
    class="grid md:grid-cols-2 gap-y-2 md:gap-2 md:my-22
    transition-all
    ">
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">
          {{ $t('projects.poject1.name') }}
        </h1>
        <p class="leading-loose">
          {{ $t('projects.poject1.description') }}
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://marafiq.agadir.ma" target="_blank">
            <Button class="w-40">{{ $t('button.demo') }}</Button>
          </a>
        </div>
      </div>

      <div class="border order-first md:order-last hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/marafiq.png" class="" />
      </div>
    </div>

    <!-- bureau d'ordre -->
    <div  v-scroll-animate 
    style="transition-delay: .2s"
    class=" transition-all grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div class="border md:order-first hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/bureau_ordre.png" class="" />
      </div>

      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">
          {{ $t('projects.poject2.name') }}
        </h1>
        <p class="leading-loose">
          {{ $t('projects.poject2.description') }}
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://bo.e-agadir.ma" target="_blank">
            <Button class="w-40">{{ $t('button.demo') }}</Button>
          </a>
        </div>
      </div>
    </div>

    <!-- dawarat -->
    <div  v-scroll-animate 
    style="transition-delay: .2s"
    class=" transition-all grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">
          {{ $t('projects.poject3.name') }}
        </h1>
        <p class="leading-loose">
          {{ $t('projects.poject3.description') }}
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://dev-dawarat.e-agadir.ma" target="_blank">
            <Button class="w-40">{{ $t('button.demo') }}</Button>
          </a>
        </div>
      </div>

      <div class="border order-first md:order-last hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/dawarat.png" class="order" />
      </div>
    </div>

    <!-- Pelicula -->
    <div  v-scroll-animate 
    style="transition-delay: .3s"
    class=" transition-all grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 md:my-22">
      <div class="md:order-first border hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]">
        <img src="../assets/platforms/pelicula.png" class=" " />
      </div>

      <div class="font-bold md:ms-5">
        <h1 class="text-4xl md:text-5xl my-5 capitalize">
          {{ $t('projects.poject4.name') }}
        </h1>
        <p class="leading-loose">
          {{ $t('projects.poject4.description') }}
        </p>

        <div class="py-3 flex gap-3">
          <a href="https://pelicula-dun.vercel.app" target="_blank">
            <Button class="w-40">{{ $t('button.demo') }}</Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
