<template>
  <section class="my-12">
    <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
      Contact
    </h2>
    <p class="mb-2">Interested in working together or have any questions?</p>
    <div class="flex gap-4">
      <a
        :href="`mailto:${email}`"
        class="text-blue-600 underline hover:text-blue-800 transition"
        >Email</a
      >
      <a
        :href="linkedin"
        target="_blank"
        class="text-blue-600 underline hover:text-blue-800 transition"
        >LinkedIn</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  email: string;
  linkedin: string;
}>();
</script>
