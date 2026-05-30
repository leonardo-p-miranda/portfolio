<template>
  <header class="fixed top-0 left-0 right-0 z-[100] px-8 py-6 transition-all duration-400">
    <div
      class="flex items-center justify-between max-w-[1200px] mx-auto transition-all duration-400"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-border' : ''"
    >
      <NuxtLink to="/" aria-label="Leo Miranda — Home" class="text-ink hover:text-accent transition-colors">
        <AppLogo class="h-8 w-auto block" />
      </NuxtLink>
      <nav class="flex items-center gap-8">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link text-sm font-medium tracking-wide text-ink no-underline relative hover:text-accent transition-colors">
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}
.nav-link:hover::after,
.nav-link.router-link-active::after { width: 100%; }
</style>
