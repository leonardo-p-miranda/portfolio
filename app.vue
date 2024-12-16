<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900">
    <!-- Global Header -->
    <header class="bg-white border-b py-4">
      <div class="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          Leonardo Miranda
        </NuxtLink>
        <nav class="space-x-6">
          <NuxtLink to="/" class="hover:text-blue-600 transition"
            >Home</NuxtLink
          >
          <NuxtLink to="/about" class="hover:text-blue-600 transition"
            >About</NuxtLink
          >
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <Footer :name="data?.name" />
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useAsyncData("globalData", () =>
  $fetch("/data.json")
);
// If there's an error or data is null, data?.name will be undefined, but Footer handles that gracefully.
</script>
