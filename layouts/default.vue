<template>
  <div>
    <AppCursor />
    <AppNav />
    <div ref="curtain" class="fixed inset-0 bg-accent z-[9000] -translate-x-full pointer-events-none will-change-transform" aria-hidden="true" />
    <main class="min-h-screen">
      <slot />
    </main>
    <AppFooter v-if="data" :github="data.github" :linkedin="data.linkedin" :email="data.email" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import dataJson from '~/public/data.json'

const { data } = await useAsyncData('globalData', () => dataJson)
const curtain = ref<HTMLElement | null>(null)

const router = useRouter()
router.beforeEach(() => {
  const el = curtain.value
  if (!el) return
  gsap.timeline()
    .set(el, { x: '-101%' })
    .to(el, { x: '0%', duration: 0.45, ease: 'power3.inOut' })
    .to(el, { x: '101%', duration: 0.45, ease: 'power3.inOut', delay: 0.05 })
})
</script>
