<template>
  <ContentDetail
    :content="project"
    back-to="/work"
    back-label="All projects"
    :meta="`${project?.company} · ${project?.duration}`"
    :demo-url="project?.demoUrl"
    :video-url="project?.videoUrl"
  >
    <template #tags>
      <div class="flex flex-wrap gap-2 mb-8">
        <span v-for="tag in project?.stack" :key="tag" class="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-2.5 py-1.5 border border-[var(--color-border)] text-muted">{{ tag }}</span>
      </div>
    </template>
  </ContentDetail>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData(`work-${route.params.slug}`, () =>
  queryContent('work').where({ slug: route.params.slug as string }).findOne()
)
</script>
