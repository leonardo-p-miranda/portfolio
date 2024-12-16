<template>
  <section class="my-12">
    <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
      Experience
    </h2>
    <div class="space-y-8">
      <div
        v-for="(job, index) in experience"
        :key="index"
        class="border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
      >
        <h3 class="text-xl font-bold">{{ job.role }} @ {{ job.company }}</h3>
        <p class="text-sm text-gray-600">
          {{ job.location }} • {{ job.duration }}
        </p>
        <p class="mt-2 text-sm text-gray-800">
          <strong>Stack:</strong> {{ job.stack }}
        </p>
        <ul class="list-disc list-inside mt-4 space-y-1 text-gray-700">
          <li v-for="(res, i) in job.responsibilities" :key="i">{{ res }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  stack: string;
  responsibilities: string[];
}

const props = defineProps<{
  experience: Job[];
}>();
</script>
