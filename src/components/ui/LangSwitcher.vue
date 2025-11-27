<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Globe, ChevronDown, Check } from 'lucide-vue-next'

/**
 * Simple list of locales. Each entry can include a label or emoji flag.
 * Edit/add locales to match your i18n setup.
 */
const options = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

const { locale } = useI18n()
const open = ref(false)
const focusedIndex = ref(-1)

const toggle = () => {
  open.value = !open.value
  if (open.value) focusedIndex.value = options.findIndex((o) => o.code === locale.value)
}

/* When user picks a language: set i18n locale + persist */
function selectLocale(code: string) {
  locale.value = code
  localStorage.setItem('locale', code)
  open.value = false
}

/* Initialize from localStorage if present */
onMounted(() => {
  const saved = localStorage.getItem('locale')
  if (saved && options.some((o) => o.code === saved)) {
    locale.value = saved
  }
})

/* keyboard nav inside dropdown */
function onKeydown(e: KeyboardEvent) {
  if (!open.value) return
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    focusedIndex.value = Math.min(focusedIndex.value + 1, options.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    focusedIndex.value = Math.max(focusedIndex.value - 1, 0)
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    if (focusedIndex.value >= 0) selectLocale(options[focusedIndex.value].code)
  } else if (e.key === 'Escape') {
    open.value = false
  }
}
</script>

<template>
  <div class="relative inline-block text-left" @keydown.stop.prevent="onKeydown">
    <!-- Toggle Button -->
    <button
      type="button"
      @click="toggle"
      :aria-expanded="open"
      aria-haspopup="menu"
      class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border shadow-sm hover:shadow focus:outline-none bg-white text-sm"
    >
      <Globe class="w-5 h-5" />
      <span class="min-w-[64px] text-left">
        <!-- show flag + label for current locale -->
        <template v-for="opt in options" :key="opt.code">
          <span v-if="opt.code === locale" class="inline-flex items-center gap-2">
            <span class="text-xs">{{ opt.flag }}</span>
            <span class="sm:inline">{{ opt.label }}</span>
          </span>
        </template>
      </span>
      <ChevronDown class="w-4 h-4 ml-1" />
    </button>

    <!-- Dropdown -->
    <transition name="fade">
      <div
        v-if="open"
        role="menu"
        class="origin-top-right absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      >
        <div class="py-1">
          <button
            v-for="(opt, idx) in options"
            :key="opt.code"
            @click="selectLocale(opt.code)"
            @mouseenter="focusedIndex = idx"
            :class="[
              'w-full text-left px-3 py-2 text-sm flex items-center justify-between gap-2',
              opt.code === locale ? 'font-semibold' : 'font-normal',
              focusedIndex === idx ? 'bg-gray-100' : '',
            ]"
            role="menuitem"
            :aria-current="opt.code === locale ? 'true' : 'false'"
          >
            <div class="flex items-center gap-2">
              <span class="text-xs">{{ opt.flag }}</span>
              <span>{{ opt.label }}</span>
            </div>

            <div>
              <Check v-if="opt.code === locale" class="w-4 h-4 opacity-80" />
            </div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* tiny fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
