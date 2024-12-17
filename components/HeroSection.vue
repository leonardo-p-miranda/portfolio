<template>
  <div
    class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center mb-12 rounded-md shadow-lg"
  >
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold">
        <!-- <span class="inline-block">{{ animatedGreeting }}</span> -->
        <span class="blink ml-0 mr-1">|</span>
        <span> I'm {{ name }},</span>
      </h1>
      <h2 class="text-2xl mt-2">{{ title }}</h2>
      <p class="mt-4 text-lg">{{ summary }}</p>
      <p class="mt-2">{{ location }}</p>
      <div class="mt-4 flex justify-center gap-4">
        <a
          :href="linkedin"
          target="_blank"
          class="underline hover:text-gray-200"
          >LinkedIn</a
        >
        <a :href="github" target="_blank" class="underline hover:text-gray-200"
          >Github</a
        >
        <a :href="`mailto:${email}`" class="underline hover:text-gray-200"
          >Email</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  name: string;
  title: string;
  summary: string;
  location: string;
  linkedin: string;
  email: string;
  github: string;
}
const props = defineProps<Props>();

const greetings = ["Hi,", "Olá,", "Hola,", "Salut,", "Halløj,", "你好,"];
const animatedGreeting = ref("");
let currentGreetingIndex = 0;

// Typing Effect
const typingSpeed = 300;
const eraseSpeed = 200;
const pauseTime = 2000;

// function typeGreeting() {
//   const greeting = greetings[currentGreetingIndex];
//   let i = 0;

//   const typeInterval = setInterval(() => {
//     animatedGreeting.value = greeting.slice(0, i++);
//     if (i > greeting.length) {
//       clearInterval(typeInterval);
//       setTimeout(eraseGreeting, pauseTime);
//     }
//   }, typingSpeed);
// }

// function eraseGreeting() {
//   let i = animatedGreeting.value.length;
//   const eraseInterval = setInterval(() => {
//     animatedGreeting.value = animatedGreeting.value.slice(0, --i);
//     if (i === 0) {
//       clearInterval(eraseInterval);
//       currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
//       setTimeout(typeGreeting, typingSpeed);
//     }
//   }, eraseSpeed);
// }

// onMounted(() => {
//   typeGreeting();
// });
</script>

<style scoped>
h1 span {
  display: inline-block;
}
.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
