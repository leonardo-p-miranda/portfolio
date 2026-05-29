<template>
  <div class="pt-24">
    <section class="px-8 pt-16 pb-8">
      <div class="max-w-[1200px] mx-auto">
        <p ref="labelEl" class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted">Blog</p>
        <h1 ref="titleEl" class="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] tracking-tight leading-none mt-6 opacity-0">
          Things I've<br /><em class="italic text-accent">written.</em>
        </h1>
      </div>
    </section>

    <section class="px-8 pb-28">
      <div class="max-w-[1200px] mx-auto border-t border-[var(--color-border)]">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="`/blog/${post.slug}`"
          class="post-row flex items-center gap-8 py-10 border-b border-[var(--color-border)] no-underline text-[var(--color-text)] transition-all hover:px-3 hover:-mx-3 hover:bg-neutral-50 opacity-0"
        >
          <div class="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted w-16 shrink-0 hidden sm:block">{{ formatDate(post.date) }}</div>
          <div class="flex-1">
            <h2 class="font-display font-semibold text-[clamp(1.1rem,1.8vw,1.5rem)] tracking-tight leading-snug mb-1">{{ post.title }}</h2>
            <p class="text-[0.9rem] text-muted leading-relaxed">{{ post.summary }}</p>
          </div>
          <span class="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted hidden md:block shrink-0">{{ post.readingTime }}</span>
          <span class="text-xl text-muted">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { data: posts } = await useAsyncData('allPosts', () => queryContent('blog').sort({ date: -1 }).find())

const labelEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)

const formatDate = (d: string) => d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ''

onMounted(() => {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo(labelEl.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(titleEl.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')

  document.querySelectorAll('.post-row').forEach((el, i) =>
    gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, delay: 0.3 + i * 0.1, ease: 'power3.out' })
  )
})
</script>
