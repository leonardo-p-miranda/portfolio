<template>
  <div class="pt-24">
    <!-- Narrative -->
    <section class="px-8 py-24">
      <div class="max-w-[1200px] mx-auto">
        <p ref="labelEl" class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted mb-6">About</p>
        <h1 ref="titleEl" class="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-[1.05] mb-12 opacity-0">
          Engineer by craft.<br /><em class="italic text-accent">Product thinker by habit.</em>
        </h1>
        <div ref="narrativeEl" class="grid grid-cols-[1fr_280px] gap-16 items-start opacity-0">
          <div class="flex flex-col gap-6">
            <p class="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.8]">
              I'm Leo Miranda, a Senior Product Engineer based in Belo Horizonte, Brazil <img src="https://flagcdn.com/16x12/br.png" alt="Brazil" class="inline-block align-middle mb-0.5" width="16" height="12" />.
              I've spent the last 8 years building products at companies where engineering
              directly moves business outcomes. From a 300k MAU VOD platform to a
              landing page system that drove a 23% lift in lead conversion at a
              Santander Group company.
            </p>
            <p class="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.8]">
              My bias is toward leverage. I introduced Amplitude-driven experimentation
              at O Novo Mercado, led the Platform Chapter at Fit Energia ⚡ to raise
              engineering standards across teams, and spent a year at the compiler level
              with José Valim's team building branch coverage tooling for Elixir 🔬.
              These aren't the same kind of work. But the instinct behind them is.
            </p>
            <p class="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.8]">
              I work best in teams that care about the craft and the outcome equally.
              Real XP discipline (not the watered-down kind) is how I've shipped
              consistently without burning the codebase down. Four languages mean the
              "international" in my experience isn't just a line on a CV.
            </p>
          </div>
          <div class="relative photo-wrap" style="transform: rotate(-1.5deg); transition: transform 0.4s ease;">
            <div class="aspect-[3/4] overflow-hidden">
              <img
                src="/assets/img/leo-miranda.jpg"
                alt="Leo Miranda"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <div class="absolute -bottom-3 -right-3 w-full h-full border border-[var(--color-border)] -z-10" />
            <div class="absolute top-0 left-0 w-1 h-full bg-tertiary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="px-8 py-24 bg-neutral-50">
      <div class="max-w-[1200px] mx-auto">
        <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted mb-8">Experience</h2>
        <div class="border-t border-[var(--color-border)]">
          <div v-for="(job, i) in data?.experience" :key="i" class="timeline-item grid grid-cols-[220px_1fr] gap-8 py-10 border-b border-[var(--color-border)]">
            <div class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted pt-1">{{ job.duration }}</div>
            <div>
              <h3 class="font-display font-semibold text-[clamp(1.05rem,1.8vw,1.3rem)] tracking-tight mb-1">{{ job.role }}</h3>
              <a v-if="job.link" :href="job.link" target="_blank" rel="noopener" class="text-[0.875rem] text-muted hover:text-accent transition-colors block mb-3 no-underline">{{ job.company }} ↗</a>
              <span v-else class="text-[0.875rem] text-muted block mb-3">{{ job.company }}</span>
              <p class="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-accent mb-4">{{ job.stack }}</p>
              <ul v-if="job.responsibilities.length" class="flex flex-col gap-1.5 list-none p-0">
                <li v-for="(r, j) in job.responsibilities" :key="j" class="text-[0.9375rem] text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--color-border)]">{{ r }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Languages -->
    <section class="px-8 py-24">
      <div class="max-w-[1200px] mx-auto grid grid-cols-2 gap-20">
        <div>
          <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted mb-6">Skills</h2>
          <div class="flex flex-col gap-4">
            <div v-for="(items, category) in data?.skills" :key="category">
              <p class="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-accent mb-2">{{ category }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in items" :key="skill" class="font-mono text-[0.7rem] tracking-[0.08em] uppercase px-3 py-1.5 border border-[var(--color-border)] text-muted hover:border-accent hover:text-accent transition-colors">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted mb-6">Languages</h2>
          <ul class="flex flex-col gap-3 list-none p-0">
            <li v-for="lang in languages" :key="lang.label" class="flex items-center gap-3 text-[0.9375rem]">
              <img :src="`https://flagcdn.com/16x12/${lang.flag}.png`" :alt="lang.label" width="16" height="12" class="flex-shrink-0" />
              <span>{{ lang.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="px-8 py-24 bg-neutral-50">
      <div class="max-w-[1200px] mx-auto">
        <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted mb-8">Education</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          <div v-for="(edu, i) in data?.education" :key="i" class="bg-white p-8 flex flex-col gap-2">
            <p class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted">{{ edu.period }}</p>
            <p class="font-display font-semibold text-xl tracking-tight">{{ edu.degree }}</p>
            <p class="text-[0.9rem] text-accent">{{ edu.institution }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dataJson from '~/public/data.json'

if (import.meta.client) gsap.registerPlugin(ScrollTrigger)

const data = dataJson

const languages = [
  { flag: 'br', label: 'Portuguese (Native)' },
  { flag: 'gb', label: 'English C2' },
  { flag: 'dk', label: 'Danish C2' },
  { flag: 'es', label: 'Spanish C1' },
  { flag: 'fr', label: 'French B2' },
]

const labelEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)
const narrativeEl = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo(labelEl.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(titleEl.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
    .fromTo(narrativeEl.value, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')

  document.querySelectorAll('.timeline-item').forEach(el =>
    gsap.fromTo(el, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 85%' } })
  )
})
</script>

<style scoped>
.photo-wrap:hover { transform: rotate(0deg) !important; }

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
  .timeline-item { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
  section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
  .grid-cols-\[1fr_280px\] { grid-template-columns: 1fr !important; }
}
</style>
