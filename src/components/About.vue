<script setup lang="ts">
import CountUp from '@/blocks/Animations/CountUp/CountUp.vue'
import about from '@/assets/lottfiles/about.json'
</script>

<template>
  <div class="grid md:grid-cols-2 gap-y-3 md:gap-2 my-5 p-5" id="about">
    <div class="hidden md:block">
      <!-- <img :src="about" /> -->
      <lottie-player
        :src="about"
        background="transparent"
        speed="1"
        style="width: fit-content; height: fit-content; margin-top: -96px"
        loop
        autoplay
        class="md:-mx-32"
      />
    </div>

    <div class="font-bold md:mt-4 md:me-10">
      <h1 class="text-xl md:text-3xl">{{ $t('about.title') }}</h1>

      <p class="mt-3 text-justify">
        {{ $t('about.description') }}
      </p>

      <div class="flex mt-5 justify-between max-w-md">
        <div>
          <h2 class="text-orange text-2xl font-bold">
            +<CountUp
              :from="0"
              :to="5"
              direction="up"
              :duration="6"
              :delay="0"
              :start-when="true"
              class-name="count-up-text"
            />
          </h2>
          <p>{{ $t('about.projects') }}</p>
        </div>

        <div>
          <h2 class="text-orange text-2xl font-bold">
            +<CountUp
              :from="0"
              :to="5"
              direction="up"
              :duration="3"
              :delay="1"
              :start-when="true"
              class-name="count-up-text"
            />
          </h2>
          <p>{{ $t('about.clients') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
