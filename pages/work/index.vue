<template>
  <div class="pt-24">
    <section class="px-8 pt-16 pb-8">
      <div class="max-w-[1200px] mx-auto">
        <p ref="labelEl" class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted">Work</p>
        <h1 ref="titleEl" class="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] tracking-tight leading-none mt-6 opacity-0">
          Things I've<br /><em class="italic text-accent">shipped.</em>
        </h1>
      </div>
    </section>

    <section class="px-8 pb-28">
      <div class="max-w-[1200px] mx-auto border-t border-[var(--color-border)]">
        <NuxtLink
          v-for="(project, i) in projects"
          :key="project._path"
          :to="`/work/${project.slug}`"
          class="project-row flex items-center gap-8 py-8 border-b border-[var(--color-border)] no-underline text-[var(--color-text)] transition-all hover:px-3 hover:-mx-3 hover:bg-neutral-50 opacity-0"
        >
          <span class="font-mono text-[0.7rem] tracking-[0.1em] text-muted w-8 shrink-0 self-start pt-1">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="flex-1">
            <h2 class="font-display font-semibold text-[clamp(1.15rem,2vw,1.6rem)] tracking-tight leading-snug">{{ project.title }}</h2>
            <p class="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted mt-1">{{ project.company }}</p>
          </div>
          <span class="font-mono text-[0.7rem] tracking-[0.06em] uppercase text-muted text-right hidden md:block">{{ project.stack?.slice(0, 3).join(' · ') }}</span>
          <span class="text-xl text-muted transition-all group-hover:text-accent group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { data: projects } = await useAsyncData('allWork', () => queryContent('work').sort({ order: 1 }).find())

const labelEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo(labelEl.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(titleEl.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')

  document.querySelectorAll('.project-row').forEach((el, i) =>
    gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, delay: 0.3 + i * 0.08, ease: 'power3.out' })
  )
})
</script>
