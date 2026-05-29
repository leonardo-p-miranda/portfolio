<template>
  <div>
    <!-- Hero -->
    <section class="min-h-svh flex items-center px-8 pt-32 pb-16 relative">
      <div class="max-w-[1200px] mx-auto w-full">
        <h1 class="font-display font-bold text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--color-text)] m-0">
          <span class="block">
            <span ref="word0" class="inline-block opacity-0 flip-card" tabindex="-1">
              <span class="flip-inner">
                <span class="flip-front">Leo</span>
                <span class="flip-back">
                  <img src="/assets/img/logo.svg" alt="Leo Miranda" class="w-full h-auto" style="margin-left: -14%; width: calc(100% + 14%);" />
                </span>
              </span>
            </span>
          </span>
          <span class="block overflow-hidden">
            <span ref="word1" class="inline-block opacity-0">Miranda</span>
          </span>
        </h1>

        <div ref="subEl" class="mt-10 opacity-0">
          <div class="font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-muted mb-3 flex items-center gap-3 flex-wrap">
            <span class="relative inline-block">
              <span ref="titleTextEl">Senior Product Engineer</span>
              <span ref="strikeEl" class="absolute top-1/2 left-0 h-px bg-[var(--color-text)] w-0 -translate-y-1/2" />
            </span>
            <span ref="builderEl" class="text-accent opacity-0 -translate-y-1 inline-block">builder<span class="text-accent">.</span></span>
          </div>
          <p class="text-[clamp(1.1rem,2.2vw,1.5rem)] font-light leading-relaxed max-w-[520px] text-[var(--color-text)]">
            Built right, shipped fast,
            <span class="text-accent font-medium">measured honestly.</span>
          </p>
        </div>
      </div>

      <div ref="scrollHintEl" class="absolute bottom-10 left-8 flex items-center gap-4 opacity-0">
        <span class="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted">scroll</span>
        <span class="w-12 h-px bg-tertiary block" />
      </div>
    </section>

    <!-- About Teaser -->
    <section class="px-8 py-28 bg-neutral-50">
      <div class="max-w-[1200px] mx-auto grid grid-cols-[220px_1fr] gap-16 items-start">
        <div ref="aboutLabelEl">
          <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted">About</h2>
        </div>
        <div ref="aboutTextEl" class="flex flex-col gap-6">
          <p class="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.7] max-w-[640px]">
            Senior Product Engineer based in Belo Horizonte, Brazil.
            I build products at the seam between engineering craft and business outcome.
            8 years of proof that you don't have to choose between the two.
          </p>
          <NuxtLink to="/about" class="underline-link">Full story →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Selected Work -->
    <section class="px-8 py-28">
      <div class="max-w-[1200px] mx-auto">
        <div ref="workHeadEl" class="mb-14">
          <h2 class="font-mono text-[0.75rem] tracking-[0.14em] uppercase text-muted">Selected Work</h2>
        </div>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          <NuxtLink
            v-for="project in featuredProjects"
            :key="project._path"
            :to="`/work/${project.slug}`"
            class="bg-white p-10 flex flex-col gap-3 no-underline text-[var(--color-text)] hover:bg-neutral-50 transition-colors"
          >
            <div class="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted">{{ project.stack?.slice(0, 3).join(' · ') }}</div>
            <h3 class="font-display font-semibold text-[clamp(1.2rem,2vw,1.6rem)] leading-tight tracking-tight">{{ project.title }}</h3>
            <p class="text-[0.9375rem] text-muted leading-relaxed flex-1">{{ project.summary }}</p>
            <span class="text-[0.875rem] font-medium text-accent mt-2">View case study →</span>
          </NuxtLink>
        </div>
        <div class="mt-12">
          <NuxtLink to="/work" class="underline-link">All projects →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="px-8 py-28 text-center">
      <div class="max-w-[1200px] mx-auto">
        <h2 ref="ctaEl" class="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-[1.1] opacity-0">
          Let's build something<br /><em class="italic text-accent">worth building.</em>
        </h2>
        <div class="flex gap-8 justify-center items-center flex-wrap mt-10">
          <a :href="`mailto:${data?.email}`" class="inline-block px-8 py-3.5 bg-[var(--color-text)] text-white font-medium text-[0.9375rem] tracking-wide no-underline hover:bg-accent transition-colors">Send an email</a>
          <a :href="data?.linkedin" target="_blank" rel="noopener" class="underline-link">LinkedIn →</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { useReveal } from '~/composables/useReveal'
const data = useResumeData()

const { data: projects } = await useAsyncData('featuredWork', () =>
  queryContent('work').where({ featured: true }).sort({ order: 1 }).find()
)
const featuredProjects = computed(() => projects.value ?? [])

const word0 = ref<HTMLElement | null>(null)
const word1 = ref<HTMLElement | null>(null)
const subEl = ref<HTMLElement | null>(null)
const scrollHintEl = ref<HTMLElement | null>(null)
const titleTextEl = ref<HTMLElement | null>(null)
const strikeEl = ref<HTMLElement | null>(null)
const builderEl = ref<HTMLElement | null>(null)
const workHeadEl = ref<HTMLElement | null>(null)
const aboutLabelEl = ref<HTMLElement | null>(null)
const aboutTextEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

const { reveal } = useReveal()

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo([word0.value, word1.value], { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 })
    .fromTo(subEl.value, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
    .fromTo(scrollHintEl.value, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')
    .to(strikeEl.value, { width: '100%', duration: 0.5, ease: 'power2.inOut' }, '+=0.6')
    .to(titleTextEl.value, { opacity: 0.35, duration: 0.2 }, '<')
    .fromTo(builderEl.value, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.1')


  reveal(workHeadEl.value)
  reveal(aboutLabelEl.value)
  reveal(aboutTextEl.value, { delay: 0.1 })
  reveal(ctaEl.value, { duration: 0.9 })

  document.querySelectorAll('.work-card-animate').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 85%' } })
  })
})
</script>

<style scoped>
.flip-card {
  perspective: 600px;
  cursor: default;
}

.flip-inner {
  display: inline-block;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front,
.flip-back {
  display: inline-flex;
  align-items: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-back {
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  transform: rotateY(180deg) translateY(-50%);
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;
}

.underline-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;
}
.underline-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

@media (max-width: 768px) {
  .grid-cols-\[220px_1fr\] { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
