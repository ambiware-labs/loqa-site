<script setup lang="ts">
interface PersonaPack {
  name: string
  description: string
  personas: string[]
  highlights: string[]
}

const props = defineProps<{ pack: PersonaPack }>()
</script>

<template>
  <div class="space-y-4 rounded-2xl border border-white/10 bg-white/10 p-6 shadow shadow-black/20">
    <div>
      <span class="rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-blue">
        Sample pack
      </span>
      <h4 class="mt-3 font-display text-xl text-white">{{ props.pack.name }}</h4>
      <p class="mt-2 text-sm text-white/70">{{ props.pack.description }}</p>
    </div>
    <div>
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Personas</p>
      <ul class="mt-2 flex flex-wrap gap-2 text-sm text-white/80">
        <li v-for="persona in props.pack.personas" :key="persona" class="rounded-full border border-white/10 bg-white/5 px-3 py-1">
          {{ persona }}
        </li>
      </ul>
    </div>
    <div>
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Highlights</p>
      <ul class="mt-2 space-y-2 text-sm text-white/70">
        <li v-for="item in props.pack.highlights" :key="item" class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
