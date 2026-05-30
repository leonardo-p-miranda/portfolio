<template>
  <div v-if="!isTouchDevice">
    <div ref="cursorOuterEl" class="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]" />
    <div ref="cursorDotEl" class="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const cursorOuterEl = ref<HTMLElement | null>(null)
const cursorDotEl = ref<HTMLElement | null>(null)
const isTouchDevice = ref(false)

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(hover: none) and (pointer: coarse)').matches
  if (isTouchDevice.value) return

  const outer = cursorOuterEl.value!
  const dot = cursorDotEl.value!

  gsap.set(outer, {
    xPercent: -50, yPercent: -50,
    borderRadius: '50%',
    border: '1.5px solid var(--color-text)',
    backgroundColor: 'transparent',
    translateZ: 0,
  })
  gsap.set(dot, {
    xPercent: -50, yPercent: -50,
    backgroundColor: 'var(--color-text)',
    translateZ: 0,
  })

  const xO = gsap.quickTo(outer, 'x', { duration: 0.55, ease: 'power3' })
  const yO = gsap.quickTo(outer, 'y', { duration: 0.55, ease: 'power3' })
  const xD = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'none' })
  const yD = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'none' })

  window.addEventListener('mousemove', (e) => {
    xO(e.clientX); yO(e.clientY)
    xD(e.clientX); yD(e.clientY)
  })

  const enter = () => {
    gsap.to(outer, { scale: 1.6, borderColor: 'var(--color-accent)', duration: 0.3, ease: 'power2.out' })
    gsap.to(dot, { backgroundColor: 'var(--color-accent)', duration: 0.3 })
  }
  const leave = () => {
    gsap.to(outer, { scale: 1, borderColor: 'var(--color-text)', duration: 0.3, ease: 'power2.out' })
    gsap.to(dot, { backgroundColor: 'var(--color-text)', duration: 0.3 })
  }

  const bind = () => document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
  })
  bind()
  new MutationObserver(bind).observe(document.body, { childList: true, subtree: true })
})
</script>
