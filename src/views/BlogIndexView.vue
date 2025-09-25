<script setup lang="ts">
import { posts } from '../content/blog/posts'
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-16 md:py-20">
    <h1 class="font-display text-4xl text-white md:text-5xl">Updates from Ambiware Labs</h1>
    <p class="mt-4 text-white/70">Launch notes, roadmap milestones, and architecture deep dives.</p>

    <div class="mt-10 space-y-6">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="rounded-2xl border border-white/5 bg-white/5 px-6 py-8 shadow shadow-black/20"
      >
        <h2 class="font-display text-2xl text-white">
          <RouterLink :to="`/blog/${post.slug}`" class="hover:text-brand-blue">
            {{ post.title }}
          </RouterLink>
        </h2>
        <p class="mt-2 text-xs uppercase tracking-[0.35em] text-brand-blue/70">{{ post.date }} — {{ post.author }}</p>
        <p class="mt-3 text-sm text-white/70">{{ post.excerpt }}</p>
        <RouterLink :to="`/blog/${post.slug}`" class="cta-button secondary mt-6 inline-flex" aria-label="Read article">
          Read more
        </RouterLink>
      </article>
    </div>
  </section>
</template>
