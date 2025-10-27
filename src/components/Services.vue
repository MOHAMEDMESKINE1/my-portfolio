<script setup lang="ts">
import Card from './ui/Card.vue'
import { LaptopMinimal, Code } from 'lucide-vue-next'

const cards = [
  {
    key: 'services.frontend',
    background: 'bg-white',
    icon: LaptopMinimal,
  },
  {
    key: 'services.backend',
    background: 'bg-white',
    icon: Code,
  },
]
</script>

<template>
  <div id="services">
    <h1 class="text-center uppercase text-3xl md:text-4xl">
      {{ $t('services.title') }} 
    </h1>

    <div class="grid md:grid-cols-2 gap-y-3 gap-2 p-5">
      <Card
        v-for="card in cards"
        :key="card.key"
        :title="$t(`${card.key}.title`)"
        :background="card.background"
        :icon="card.icon"
      >
        {{ $t(`${card.key}.description`) }}
      </Card>
    </div>
  </div>
</template>
