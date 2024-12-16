<template>
  <div v-if="data" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <HeroSection
      :name="data.name"
      :title="data.title"
      :summary="data.summary"
      :location="data.location"
      :linkedin="data.linkedin"
      :email="data.email"
      :github="data.github"
    />
    <ExperienceSection :experience="data.experience" />
    <SkillsSection :skills="data.skills" />
    <EducationSection :education="data.education" />
    <ContactSection :email="data.email" :linkedin="data.linkedin" />
  </div>

  <div v-else-if="pending" class="text-center py-12">Loading...</div>
  <div v-else-if="error" class="text-center py-12 text-red-500">
    Error loading data
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = await useAsyncData("homeData", () =>
  $fetch("/data.json")
);
</script>
