<template>
  <div class="pt-28">
    <div v-if="project">
      <section class="px-8 pb-16 border-b border-[var(--color-border)]">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink to="/work" class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors no-underline inline-block mb-8">← Work</NuxtLink>
          <p class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-4">{{ project.company }} · {{ project.duration }}</p>
          <h1 ref="titleEl" class="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.05] max-w-[900px] mb-6 opacity-0">{{ project.title }}</h1>
          <p class="text-[clamp(1rem,1.8vw,1.25rem)] text-muted leading-[1.7] max-w-[680px] mb-8">{{ project.summary }}</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in project.stack" :key="tag" class="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-2.5 py-1.5 border border-[var(--color-border)] text-muted">{{ tag }}</span>
          </div>
          <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener" class="text-[0.9375rem] font-medium text-[var(--color-text)] no-underline border-b border-[var(--color-text)] pb-px hover:text-accent hover:border-accent transition-colors">View live project ↗</a>
        </div>
      </section>

      <section class="px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="max-w-[720px]">
            <ContentRenderer :value="project" class="prose" />
          </div>
        </div>
      </section>

      <section class="px-8 py-12 border-t border-[var(--color-border)]">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink to="/work" class="text-[0.9375rem] font-medium no-underline border-b border-[var(--color-text)] pb-px hover:text-accent hover:border-accent transition-colors">← All projects</NuxtLink>
        </div>
      </section>
    </div>

    <div v-else class="px-8 py-32 text-center">
      <p class="font-mono text-[0.75rem] tracking-widest uppercase text-muted">Project not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const route = useRoute()
const { data: project } = await useAsyncData(`work-${route.params.slug}`, () =>
  queryContent('work').where({ slug: route.params.slug as string }).findOne()
)
const titleEl = ref<HTMLElement | null>(null)

onMounted(() => gsap.fromTo(titleEl.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }))
</script>

<style scoped>
:deep(.prose h2) { font-family: var(--font-display); font-size: clamp(1.25rem, 2vw, 1.75rem); font-weight: 700; letter-spacing: -0.02em; color: var(--color-text); margin: 3rem 0 1rem; }
:deep(.prose p) { font-size: 1.0625rem; line-height: 1.8; color: var(--color-text); margin: 0 0 1.25rem; }
:deep(.prose ul) { list-style: none; padding: 0; margin: 0 0 1.25rem; }
:deep(.prose ul li) { font-size: 1.0625rem; line-height: 1.7; color: var(--color-text); padding-left: 1.25rem; position: relative; margin-bottom: 0.5rem; }
:deep(.prose ul li)::before { content: '—'; position: absolute; left: 0; color: var(--color-accent); }
:deep(.prose strong) { font-weight: 600; }
</style>
