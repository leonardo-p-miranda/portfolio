<template>
  <div class="pt-28">
    <div v-if="content">
      <section class="px-8 pb-16 border-b border-border">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink :to="backTo" class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors no-underline inline-block mb-8">← {{ backLabel }}</NuxtLink>
          <p class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-4">{{ meta }}</p>
          <h1 ref="titleEl" class="font-display font-bold text-[clamp(1.75rem,4vw,3.5rem)] tracking-tight leading-[1.05] max-w-[900px] mb-6 opacity-0">{{ content.title }}</h1>
          <p class="text-[clamp(1rem,1.8vw,1.25rem)] text-muted leading-[1.7] max-w-[680px]" :class="{ 'mb-8': $slots.tags || demoUrl || videoUrl }">{{ content.summary }}</p>
          <slot name="tags" />
          <a v-if="demoUrl && !videoUrl" :href="demoUrl" target="_blank" rel="noopener" class="inline-block text-[0.9375rem] font-medium text-ink no-underline border-b border-ink pb-px hover:text-accent hover:border-accent transition-colors">View live project ↗︎</a>
        </div>
      </section>

      <section v-if="coverUrl" class="px-8 pt-12">
        <div class="max-w-[1200px] mx-auto">
          <img :src="coverUrl" :alt="`${content.title} cover`" class="w-full block border border-border" loading="lazy" />
        </div>
      </section>

      <section v-if="videoUrl" class="px-8 pt-16 pb-0">
        <div class="max-w-[1200px] mx-auto">
          <p class="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted mb-4">Demo</p>
          <div class="relative w-full max-w-[720px]" style="padding-bottom: 56.25%;">
            <iframe
              :src="videoUrl"
              class="absolute inset-0 w-full h-full border border-border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Demo"
            />
          </div>
        </div>
      </section>

      <section class="px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="max-w-[720px]">
            <ContentRenderer :value="content" class="prose" />
          </div>
        </div>
      </section>

      <section class="px-8 py-12 border-t border-border">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink :to="backTo" class="text-[0.9375rem] font-medium no-underline border-b border-ink pb-px hover:text-accent hover:border-accent transition-colors">← {{ backLabel }}</NuxtLink>
        </div>
      </section>
    </div>

    <div v-else class="px-8 py-32 text-center">
      <p class="font-mono text-[0.75rem] tracking-widest uppercase text-muted">Not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useReveal } from '~/composables/useReveal'

defineProps<{
  content: Record<string, unknown> | null
  backTo: string
  backLabel: string
  meta: string
  coverUrl?: string
  demoUrl?: string
  videoUrl?: string
}>()

const titleEl = ref<HTMLElement | null>(null)
const { titleReveal } = useReveal()

onMounted(() => titleReveal(titleEl))
</script>

<style scoped>
:deep(.prose h2) { font-family: var(--font-display); font-size: clamp(1.25rem, 2vw, 1.75rem); font-weight: 700; letter-spacing: -0.02em; color: var(--color-text); margin: 3rem 0 1rem; line-height: 1.2; }
:deep(.prose h3) { font-family: var(--font-display); font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 600; color: var(--color-text); margin: 2rem 0 0.75rem; }
:deep(.prose p) { font-size: 1.0625rem; line-height: 1.85; color: var(--color-text); margin: 0 0 1.4rem; }
:deep(.prose strong) { font-weight: 600; }
:deep(.prose em) { font-style: italic; font-family: var(--font-display); }
:deep(.prose ul) { list-style: none; padding: 0; margin: 0 0 1.4rem; }
:deep(.prose ul li) { font-size: 1.0625rem; line-height: 1.75; color: var(--color-text); padding-left: 1.25rem; position: relative; margin-bottom: 0.5rem; }
:deep(.prose ul li)::before { content: '—'; position: absolute; left: 0; color: var(--color-accent); }
:deep(.prose hr) { border: none; border-top: 1px solid var(--color-border); margin: 3rem 0; }
:deep(.prose a) { color: var(--color-accent); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
:deep(.prose a:hover) { border-bottom-color: var(--color-accent); }
:deep(.prose code) { font-family: var(--font-mono); font-size: 0.875em; background: #f5f5f5; padding: 0.15em 0.4em; }
</style>
