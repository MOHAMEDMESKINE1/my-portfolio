<template>
  <button
    class="px-2 py-2 cursor-pointer text-white max-w-md bg-orange-700 overflow-hidden dark:border-white uppercase transition duration-200 text-sm font-bold hover:bg-dark hover:text-white hover:shadow-orange shadow-[1px_1px_rgba(0,0,0),1px_1px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),2px_2px_0px_0px_rgba(0,0,0)]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
