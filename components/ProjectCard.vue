<template>
    <div class="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-600">{{ project.stack }}</p>
      <p class="mt-4 text-gray-700 leading-relaxed">{{ project.description }}</p>
      <div class="mt-4 space-x-4">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          class="text-blue-600 underline hover:text-blue-800 transition"
        >
          Live Demo
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          class="text-blue-600 underline hover:text-blue-800 transition"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Project {
    title: string
    description: string
    stack: string
    demoUrl?: string
    repoUrl?: string
  }
  
  const props = defineProps<{ project: Project }>()
  </script>
  