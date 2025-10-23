<script setup lang="ts">
import { Icon } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { Mouse } from 'lucide-vue-next'
const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300 // show after scrolling 300px
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <div class="">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 rounded-full shadow-lg md:hover:scale-110 transition-all duration-300 bg-white text-dark border hover:bg-primary"
    >
      <Mouse />
    </button>
  </div>
</template>
