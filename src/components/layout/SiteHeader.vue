<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import WaveLogo from '../WaveLogo.vue'

const isMenuOpen = ref(false)
const route = useRoute()

const links = [
  { name: 'Home', to: '/' },
  { name: 'Docs', to: '/docs' },
  { name: 'Getting Started', to: '/getting-started' },
  { name: 'Blog', to: '/blog' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-brand-dark/80 border-b border-white/5">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="inline-flex items-center gap-3" @click="closeMenu">
        <WaveLogo />
      </RouterLink>

      <div class="hidden items-center gap-6 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-white/80 transition-colors hover:text-white"
          :class="{ 'text-brand-blue': route.path.startsWith(link.to) && link.to !== '/' || route.path === link.to }"
        >
          {{ link.name }}
        </RouterLink>
        <a
          href="https://github.com/ambiware-labs/loqa-core"
          target="_blank"
          rel="noopener"
          class="cta-button"
        >
          View on GitHub
        </a>
      </div>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Menu</span>
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <transition name="fade">
      <div v-if="isMenuOpen" class="border-t border-white/10 bg-brand-dark/95 md:hidden">
        <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-base font-medium text-white/80"
            :class="{ 'text-brand-blue': route.path.startsWith(link.to) && link.to !== '/' || route.path === link.to }"
            @click="closeMenu"
          >
            {{ link.name }}
          </RouterLink>
          <a
            href="https://github.com/ambiware-labs/loqa-core"
            target="_blank"
            rel="noopener"
            class="cta-button"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </transition>
  </header>
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
