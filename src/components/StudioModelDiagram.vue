<script setup lang="ts">
const tiers = [
  {
    title: 'MIT Runtime',
    subtitle: 'Free forever',
    bullets: [
      'Local-first services and tooling',
      'Skills runtime + developer SDKs',
      'Self-host without restrictions'
    ]
  },
  {
    title: 'Studio Add-ons',
    subtitle: 'Optional enrichments',
    bullets: [
      'Curated persona packs',
      'Premium skills & automations',
      'Courses and pre-flashed hardware'
    ]
  },
  {
    title: 'Loqa Cloud',
    subtitle: 'Opt-in collaboration',
    bullets: [
      'Zero-trust encrypted sync',
      'Shared dashboards & presence',
      'Support SLAs for teams'
    ]
  }
]
</script>

<template>
  <div class="mt-10 grid gap-6 md:grid-cols-3">
    <div
      v-for="(tier, index) in tiers"
      :key="tier.title"
      class="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow shadow-black/20"
    >
      <span class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">{{ (index + 1).toString().padStart(2, '0') }}</span>
      <h3 class="mt-3 font-display text-2xl text-white">{{ tier.title }}</h3>
      <p class="mt-2 text-sm font-medium text-white/60">{{ tier.subtitle }}</p>
      <ul class="mt-4 space-y-2 text-sm text-white/70">
        <li v-for="item in tier.bullets" :key="item" class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
