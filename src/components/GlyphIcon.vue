<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    class="h-10 w-10 text-brand-blue"
    aria-hidden="true"
  >
    <template v-if="props.name === 'dashboard'">
      <rect x="3" y="4" width="18" height="7" rx="2" ry="2" />
      <rect x="3" y="14" width="8" height="6" rx="2" ry="2" />
      <rect x="13" y="14" width="8" height="6" rx="2" ry="2" />
    </template>
    <template v-else-if="props.name === 'desk'">
      <path d="M4 7a3 3 0 013-3h10a3 3 0 013 3v3H4V7z" />
      <path d="M4 10h16v9a1 1 0 01-1 1h-4v-4H9v4H5a1 1 0 01-1-1v-9z" />
      <path d="M10 6h4" />
    </template>
    <template v-else-if="props.name === 'sensors'">
      <path d="M12 5v14" />
      <path d="M6.5 8.5a6 6 0 0111 0" />
      <path d="M5 12a7 7 0 0114 0" />
      <circle cx="12" cy="16" r="2.5" />
    </template>
    <template v-else-if="props.name === 'family'">
      <circle cx="8.5" cy="9" r="2.3" />
      <circle cx="15.5" cy="9" r="2.3" />
      <path d="M4.5 19c1.3-3 3.9-5 7.5-5s6.2 2 7.5 5" />
    </template>
    <template v-else-if="props.name === 'roadmap'">
      <path d="M4 6l6-2 4 2 6-2v14l-6 2-4-2-6 2V6z" />
      <path d="M10 4v14" />
      <path d="M14 6v14" />
    </template>
    <template v-else-if="props.name === 'guide'">
      <path d="M6 4.5A1.5 1.5 0 017.5 3h8A1.5 1.5 0 0117 4.5v15l-5-2-5 2v-15z" />
      <path d="M9 7h6" />
      <path d="M9 10h6" />
    </template>
    <template v-else-if="props.name === 'labs'">
      <path d="M8 4h8" />
      <path d="M10 4v5l-4.5 7.5A2 2 0 007.2 20h9.6a2 2 0 001.7-3.5L14 9V4" />
      <path d="M9 16h6" />
    </template>
    <template v-else-if="props.name === 'partners'">
      <circle cx="7.5" cy="8" r="3" />
      <circle cx="16.5" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-6 4.5-6s4.5 3 4.5 6" />
      <path d="M12 20c0-3 2.5-6 4.5-6S21 17 21 20" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8" />
    </template>
  </svg>
</template>
