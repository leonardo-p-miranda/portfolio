<template>
  <footer class="py-6 text-center text-gray-600 border-t mt-auto">
    <p>
      &copy; {{ new Date().getFullYear() }} {{ name }}. All
      rights reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{ name?: string }>();
</script>
