<template>
  <div v-if="data" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-6">About Me</h1>
    <p class="text-lg text-gray-700 leading-relaxed">
      Hello! I’m {{ data.name }}, a {{ data.title }} based in
      {{ data.location }}. I specialize in building modern, scalable, and
      user-friendly applications...
    </p>
    <p class="mt-4 text-gray-700 leading-relaxed">
      I leverage Agile methodologies, Extreme Programming techniques, and have
      contributed to open-source communities in Erlang and Elixir...
    </p>
    <p class="mt-4 text-gray-700 leading-relaxed">
      Feel free to
      <a :href="`mailto:${data.email}`" class="text-blue-600 underline"
        >get in touch</a
      >
      or
      <a :href="data.linkedin" target="_blank" class="text-blue-600 underline"
        >connect on LinkedIn</a
      >.
    </p>
  </div>

  <div v-else-if="error" class="text-center py-12 text-red-500">
    Error loading data
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useAsyncData("aboutData", () =>
  $fetch("/data.json")
);
</script>
