<script setup lang="ts">
const stages = [
  {
    label: 'Sense',
    description: 'Edge microphones, sensors, and apps publish events over NATS streams.'
  },
  {
    label: 'Reason',
    description: 'Local Whisper + planners interpret intent, with deterministic skills first and LLMs on fallback.'
  },
  {
    label: 'Act',
    description: 'Responses fan out to speakers, displays, or automations with audited permissions.'
  }
]
</script>

<template>
  <div class="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
    <div
      v-for="(stage, index) in stages"
      :key="stage.label"
      class="relative flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 shadow shadow-black/20"
    >
      <div class="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">{{ stage.label }}</div>
      <p class="mt-3 text-sm text-white/70">{{ stage.description }}</p>
      <svg
        v-if="index < stages.length - 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        class="hidden md:block absolute top-1/2 right-[-38px] h-10 w-10 -translate-y-1/2 text-brand-blue"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
      </svg>
    </div>
  </div>
</template>
