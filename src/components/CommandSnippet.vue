<script setup lang="ts">
import { computed, ref } from 'vue'

type Props = {
  command: string
}

const props = defineProps<Props>()

const parsed = computed(() => {
  const trimmed = props.command.trim()
  if (!trimmed.includes('\n')) {
    const [head, ...rest] = trimmed.split(/\s+/)
    return {
      display: null as string | null,
      head,
      tail: rest.join(' '),
    }
  }
  return {
    display: trimmed,
    head: null,
    tail: null,
  }
})

const copied = ref(false)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.command)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.warn('Failed to copy command', error)
  }
}
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 px-6 py-4 shadow shadow-black/30"
  >
    <div class="flex items-start gap-4 text-xs text-white/70 sm:text-sm">
      <span class="mt-0.5 font-mono text-white/30 sm:mt-1">$</span>
      <div class="flex-1 whitespace-pre-wrap font-mono">
        <template v-if="parsed.display">
          {{ parsed.display }}
        </template>
        <template v-else>
          <span class="text-brand-blue">{{ parsed.head }}</span>
          <span class="ml-2 text-white/80">{{ parsed.tail }}</span>
        </template>
      </div>
    </div>
    <button
      type="button"
      class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 transition hover:text-white hover:bg-white/20"
      @click="copy"
      aria-label="Copy command"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9.75V7.5a2.25 2.25 0 0 1 2.25-2.25h6A2.25 2.25 0 0 1 18.5 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 8 16.5v-2.25" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 15.75V8.25A2.25 2.25 0 0 1 5.75 6h6" />
      </svg>
    </button>
    <transition name="fade">
      <span
        v-if="copied"
        class="absolute right-14 top-3 rounded-full bg-brand-blue/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue"
      >
        Copied
      </span>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
