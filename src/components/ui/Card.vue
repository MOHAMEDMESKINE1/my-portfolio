<script setup>
const props = defineProps({
  background: String,
  icon: Object,
  title: String,
})
</script>

<template>
  <div class="w-full max-w-2xl h-full">
    <div
      :class="[
        props.background,
        'border border-dark p-6 sm:p-8 md:p-10  flex flex-col h-full ',
        'hover:shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]',
      ]"
    >
      <div class="flex flex-col sm:flex-row items-start gap-6 flex-1">
        <div
          class="bg-white p-4 border border-black flex justify-center items-center w-16 h-16 shrink-0"
        >
          <component :is="props.icon" size="32" stroke-width="2" />
        </div>

        <div class="flex flex-col justify-between flex-1">
          <div>
            <h2 class="text-xl sm:text-2xl capitalize font-bold text-gray-900 mb-2 leading-tight">
              {{ props.title ?? '' }}
            </h2>
            <p class="text-sm sm:text-base text-gray-800 leading-relaxed">
              <slot />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
