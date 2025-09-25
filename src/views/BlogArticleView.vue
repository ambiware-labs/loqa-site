<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { posts } from '../content/blog/posts'

const route = useRoute()
const post = computed(() => posts.find((entry) => entry.slug === route.params.slug))
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-16 md:py-20">
    <div v-if="post" class="prose prose-invert prose-lg max-w-none">
      <RouterLink to="/blog" class="text-sm text-brand-blue">← Back to all posts</RouterLink>
      <h1 class="mt-4 font-display text-4xl text-white">{{ post.title }}</h1>
      <p class="mt-2 text-xs uppercase tracking-[0.35em] text-brand-blue/80">{{ post.date }} — {{ post.author }}</p>
      <div class="mt-6 prose-invert" v-html="post.content"></div>
    </div>
    <div v-else class="text-white/70">
      <p>The article you&apos;re looking for does not exist. <RouterLink to="/blog" class="text-brand-blue">Return to the blog.</RouterLink></p>
    </div>
  </section>
</template>
