<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <UCarousel v-slot="{ item }" arrows :items="items" class="w-full max-w-xs mx-auto">
    <img :src="item" width="320" height="320" class="rounded-lg">
  </UCarousel>
</template>