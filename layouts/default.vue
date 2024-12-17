<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900">
    <!-- Global Header -->
    <header class="bg-white border-b py-4">
      <div class="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          
        <img src="/assets/img/logo.svg" alt="Logo" class="h-12 w-auto">
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

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <Footer v-if="data" :name="data?.name" />
    <div v-else-if="error" class="text-center py-12 text-red-500">
      Error loading data
    </div>
    <div v-else class="text-center py-12 text-gray-500">Loading...</div>
  </div>
</template>

<script setup lang="ts">

import dataJson from '~/public/data.json'

const { data } = await useAsyncData("globalData", () => dataJson)

</script>
