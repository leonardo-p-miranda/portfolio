<template>
  <section class="my-12">
    <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
      Skills
    </h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(skill, i) in skills"
        :key="i"
        class="px-3 py-1 bg-gray-100 rounded-full text-gray-700 shadow-sm hover:bg-gray-200 transition"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  skills: string[];
}>();
</script>
