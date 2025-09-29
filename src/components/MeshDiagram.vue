<script setup lang="ts">
const nodes = [
  {
    title: 'Sense on the edge',
    subtitle: 'Lightweight capture + skills',
    icon: 'edge',
    bullets: ['Pi, ESP32, phones publishing events', 'Whisper Tiny streaming ASR', 'Local automations + sensors']
  },
  {
    title: 'Coordinate in the core',
    subtitle: 'Loqa runtime + planners',
    icon: 'core',
    bullets: ['NATS mesh + skill host', 'Planner LLM and tool chain', 'Observability: Grafana, Loki, Tempo']
  },
  {
    title: 'Enrich with Studio',
    subtitle: 'Optional, encrypted value-adds',
    icon: 'studio',
    bullets: ['Loqa Cloud zero-trust sync', 'Curated persona + skill packs', 'Shared dashboards & support']
  }
]
</script>

<template>
  <div class="mt-12 space-y-8">
    <div
      v-for="(node, index) in nodes"
      :key="node.title"
      class="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/15 md:flex md:items-start md:gap-6"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue md:h-14 md:w-14">
        <svg
          v-if="node.icon === 'edge'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-7 w-7"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h10v5H7z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16h16" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 19h12" />
          <circle cx="8" cy="4" r="1.5" />
          <circle cx="16" cy="4" r="1.5" />
        </svg>
        <svg
          v-else-if="node.icon === 'core'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-7 w-7"
        >
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 9h8M8 13h5" />
          <circle cx="17" cy="13" r="1.5" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-7 w-7"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9l7-5 7 5v9a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V9l3-2 3 2v8" />
        </svg>
      </div>
      <div class="mt-4 flex-1 md:mt-0">
        <span class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">{{ (index + 1).toString().padStart(2, '0') }}</span>
        <h3 class="mt-2 font-display text-xl text-white">{{ node.title }}</h3>
        <p class="mt-1 text-sm font-medium text-white/60">{{ node.subtitle }}</p>
        <ul class="mt-4 space-y-2 text-sm text-white/70">
          <li v-for="item in node.bullets" :key="item" class="flex items-start gap-2">
            <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <svg
        v-if="index < nodes.length - 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        class="absolute -bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 rotate-90 text-brand-blue/40 md:-right-9 md:bottom-1/2 md:h-10 md:w-10 md:translate-y-1/2 md:rotate-0"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
      </svg>
    </div>
  </div>
</template>
