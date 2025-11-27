<script setup lang="ts">
const props = defineProps({
  background: String,
  icon: Object,
  title: String,
  image: String,
})
</script>

<template>
  <div class="md:max-w-md">
    <div
      :class="[
        props.background,
        'border border-dark   p-3  flex flex-col',
        'hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]',
      ]"
    >
      <div class="flex items-center md:items-start sm:flex-row gap-6 flex-1">
        <div
          class="bg-white p-1 border border-black flex justify-center items-center w-16 h-16 shrink-0"
        >
          <img v-if="props.image" :src="props.image" alt="" class="w-32 h-32" />
        </div>

        <h2
          class="text-xl md:mt-4 capitalize sm:text-2xl font-bold text-gray-900 mb-2 leading-tight"
        >
          {{ props.title ?? '' }}
        </h2>
      </div>
    </div>
  </div>
</template>
