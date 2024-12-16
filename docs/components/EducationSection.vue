<template>
  <section class="my-12">
    <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
      Education
    </h2>
    <div class="space-y-4">
      <div
        v-for="(edu, index) in education"
        :key="index"
        class="border p-4 rounded-lg"
      >
        <h3 class="font-semibold text-lg">
          {{ edu.degree }} - {{ edu.institution }}
        </h3>
        <p class="text-sm text-gray-600">{{ edu.period }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Education {
  degree: string;
  institution: string;
  period: string;
}

const props = defineProps<{
  education: Education[];
}>();
</script>
