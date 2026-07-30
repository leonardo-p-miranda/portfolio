<template>
  <ContentDetail
    :content="post"
    back-to="/blog"
    back-label="All posts"
    :meta="formatMeta(post)"
    :cover-url="post?.cover"
  />
</template>

<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryContent('blog').where({ slug: route.params.slug as string }).findOne()
)

const formatMeta = (p: Record<string, unknown> | null) => {
  if (!p) return ''
  const date = p.date ? new Date(p.date as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''
  return [date, p.readingTime].filter(Boolean).join(' · ')
}
</script>
