<template>
  <div
    class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center mb-12 rounded-md shadow-lg"
  >
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold">{{ name }}</h1>
      <h2 class="text-2xl mt-2">{{ title }}</h2>
      <p class="mt-4 text-lg">{{ summary }}</p>
      <p class="mt-2">{{ location }}</p>
      <div class="mt-4 flex justify-center gap-4">
        <a
          :href="linkedin"
          target="_blank"
          class="underline hover:text-gray-200"
          >LinkedIn</a
        >
        <a :href="github" target="_blank" class="underline hover:text-gray-200"
          >Github</a
        >
        <a :href="`mailto:${email}`" class="underline hover:text-gray-200"
          >Email</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  summary: string;
  location: string;
  linkedin: string;
  email: string;
  github: string;
}
const props = defineProps<Props>();
</script>
