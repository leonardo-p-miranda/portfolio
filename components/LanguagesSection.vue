<template>
  <section class="my-12">
    <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
      Languages
    </h2>
    <div class="space-y-4">
      <div
        v-for="(language, index) in languages"
        :key="index"
        class="flex items-center space-x-2"
      >
        <div
          class="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium shadow"
        >
          {{ language.split(" ")[0] }}
        </div>
        <span class="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium shadow">{{ language.split(" ")[1] }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ languages: string[] }>();
</script>
