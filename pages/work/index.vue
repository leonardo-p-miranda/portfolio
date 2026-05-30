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
      <div class="max-w-[1200px] mx-auto border-t border-border">
        <NuxtLink
          v-for="(project, projectIndex) in projects"
          :key="project._path"
          :to="`/work/${project.slug}`"
          class="project-row flex items-center gap-8 py-8 border-b border-border no-underline text-ink transition-all hover:px-3 hover:-mx-3 hover:bg-neutral-50 opacity-0"
        >
          <span class="font-mono text-[0.7rem] tracking-[0.1em] text-muted w-8 shrink-0 self-start pt-1">{{ String(projectIndex + 1).padStart(2, '0') }}</span>
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
import { useReveal } from '~/composables/useReveal'

const { data: projects } = await useAsyncData('allWork', () => queryContent('work').sort({ order: 1 }).find())

const labelEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)
const { heroEntrance, stagger } = useReveal()

onMounted(() => {
  heroEntrance(labelEl, titleEl)
  stagger('.project-row')
})
</script>
