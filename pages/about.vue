<template>
  <div v-if="data" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-6">About Me</h1>
    <p class="text-lg text-gray-700 leading-relaxed">
      Hello! I’m <strong>{{ data.name }}</strong
      >, a <strong>{{ data.title }}</strong> based in
      <strong>{{ data.location }}</strong
      >. I specialize in crafting modern, scalable, and user-focused digital
      experiences using cutting-edge technologies.
    </p>

    <p class="mt-4 text-gray-700 leading-relaxed">
      Throughout my career, I’ve embraced Agile methodologies and Extreme
      Programming principles to deliver high-quality products efficiently. My
      contributions to the Erlang and Elixir ecosystems reflect my passion for
      functional programming and reliability on the backend.
    </p>

    <p class="mt-4 text-gray-700 leading-relaxed">
      I’m always eager to learn, collaborate, and innovate. Whether it’s
      discussing a new project, exploring ideas, or just saying hello, feel free
      to
      <a :href="`mailto:${data.email}`" class="text-blue-600 underline"
        >reach out via email</a
      >
      or
      <a :href="data.linkedin" target="_blank" class="text-blue-600 underline">
        connect with me on LinkedIn </a
      >. Let’s build something exceptional together.
    </p>
  </div>

  <div v-else-if="error" class="text-center py-12 text-red-500">
    Error loading data
  </div>

  <div v-else class="text-center py-12 text-gray-500">Loading...</div>
</template>

<script setup lang="ts">
import dataJson from '~/public/data.json'

const { data } = await useAsyncData("aboutData", () => dataJson)

</script>
