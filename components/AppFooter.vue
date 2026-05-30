<template>
  <footer class="border-t border-border px-8 py-8">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between">
      <NuxtLink to="/" aria-label="Leo Miranda — Home" class="text-ink hover:text-accent transition-colors">
        <AppLogo class="h-8 w-auto block" />
      </NuxtLink>

      <div class="flex items-center gap-6">
        <a :href="github" target="_blank" rel="noopener" aria-label="GitHub" class="text-ink hover:text-accent transition-colors">
          <AppIcon name="github" />
        </a>
        <a :href="linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-ink hover:text-accent transition-colors">
          <AppIcon name="linkedin" />
        </a>
        <a :href="`mailto:${email}`" aria-label="Email" class="text-ink hover:text-accent transition-colors">
          <AppIcon name="email" />
        </a>
      </div>

      <p class="font-mono text-[0.7rem] tracking-widest uppercase text-muted">© {{ year }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ github: string; linkedin: string; email: string }>()
const year = new Date().getFullYear()
</script>
