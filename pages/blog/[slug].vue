<template>
  <div class="pt-28">
    <div v-if="post">
      <section class="px-8 pb-16 border-b border-[var(--color-border)]">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink to="/blog" class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors no-underline inline-block mb-8">← Blog</NuxtLink>
          <p class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-accent mb-4">{{ formatDate(post.date) }} · {{ post.readingTime }}</p>
          <h1 ref="titleEl" class="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] tracking-tight leading-[1.05] max-w-[820px] mb-6 opacity-0">{{ post.title }}</h1>
          <p class="text-[clamp(1rem,1.8vw,1.2rem)] text-muted leading-[1.7] max-w-[680px]">{{ post.summary }}</p>
        </div>
      </section>

      <section class="px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="max-w-[720px]">
            <ContentRenderer :value="post" class="prose" />
          </div>
        </div>
      </section>

      <section class="px-8 py-12 border-t border-[var(--color-border)]">
        <div class="max-w-[1200px] mx-auto">
          <NuxtLink to="/blog" class="text-[0.9375rem] font-medium no-underline border-b border-[var(--color-text)] pb-px hover:text-accent hover:border-accent transition-colors">← All posts</NuxtLink>
        </div>
      </section>
    </div>

    <div v-else class="px-8 py-32 text-center">
      <p class="font-mono text-[0.75rem] tracking-widest uppercase text-muted">Post not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryContent('blog').where({ slug: route.params.slug as string }).findOne()
)
const titleEl = ref<HTMLElement | null>(null)

const formatDate = (d: string) => d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

onMounted(() => gsap.fromTo(titleEl.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }))
</script>

<style scoped>
:deep(.prose h2) { font-family: var(--font-display); font-size: clamp(1.2rem, 2vw, 1.6rem); font-weight: 700; letter-spacing: -0.02em; color: var(--color-text); margin: 3rem 0 1rem; line-height: 1.2; }
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
