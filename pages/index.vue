<template>
  <div v-if="!error" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <HeroSection
      :name="data?.name"
      :title="data?.title"
      :summary="data?.summary"
      :location="data?.location"
      :linkedin="data?.linkedin"
      :email="data?.email"
      :github="data?.github"
    />
    <ExperienceSection :experience="data.experience" />
    <SkillsSection :skills="data.skills" />
    <EducationSection :education="data.education" />
    <LanguagesSection :languages="data.languages" />

    <section class="my-12">
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">
        Projects
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in data.projects"
          :key="index"
          :project="project"
        />
      </div>
    </section>
    <ContactSection :email="data.email" :linkedin="data.linkedin" />
  </div>

  <div v-else class="text-center py-12 text-red-500">Error loading data</div>
</template>

<script setup lang="ts">
import dataJson from "~/public/data.json";

const { data } = await useAsyncData("homeData", () => dataJson);
</script>
