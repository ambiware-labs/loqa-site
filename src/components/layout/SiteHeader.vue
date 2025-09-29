<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import WaveLogo from '../WaveLogo.vue'
import LoqaGlyph from '../LoqaGlyph.vue'

type LinkTarget = {
  name: string
  to?: string | { path: string; hash?: string }
  href?: string
  external?: boolean
}

type NavGroup = {
  name: string
  items: LinkTarget[]
}

const isMenuOpen = ref(false)
const route = useRoute()

const primaryCta: LinkTarget = { name: 'Try Loqa Alpha', to: '/getting-started' }

const navMenuSections: NavGroup[] = [
  {
    name: 'Get started',
    items: [
      { name: 'Quickstart on GitHub', href: 'https://github.com/ambiware-labs/loqa-core/blob/main/docs/GETTING_STARTED.md', external: true },
      { name: 'Runtime README', href: 'https://github.com/ambiware-labs/loqa-core', external: true },
      { name: 'Extension Labs', href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/extension-labs/README.md', external: true },
      { name: 'Loqa core discussions', href: 'https://github.com/ambiware-labs/loqa-core/discussions', external: true }
    ]
  },
  {
    name: 'Learn',
    items: [
      { name: 'Ambient intelligence', to: { path: '/', hash: '#ambient-intelligence' } },
      { name: 'How Loqa works', to: { path: '/', hash: '#how-it-works' } },
      { name: 'Composable Open Core', to: { path: '/', hash: '#open-core' } },
      { name: 'Why Loqa', to: { path: '/', hash: '#why-loqa' } }
    ]
  },
  {
    name: 'Community',
    items: [
      { name: 'Roadmap', href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/roadmap/MVP_BACKLOG.md', external: true },
      { name: 'Governance', href: 'https://github.com/ambiware-labs/loqa-meta/tree/main/governance', external: true },
      { name: 'Blog', to: '/blog' },
      { name: 'Docs hub', to: '/docs' }
    ]
  }
]

const isActive = (target: LinkTarget) => {
  if (target.to && typeof target.to === 'string') {
    return route.path === target.to
  }
  if (target.to && typeof target.to === 'object') {
    return route.path === target.to.path && (!target.to.hash || route.hash === target.to.hash)
  }
  return false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-lg shadow-lg shadow-black/10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-3"
        title="Loqa: Ambient intelligence by Ambiware Labs"
        @click="closeMenu"
      >
        <WaveLogo class="h-9 w-auto" />
        <span class="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-white/60 sm:flex">
          Home of
          <LoqaGlyph />
        </span>
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-if="primaryCta.to"
          :to="primaryCta.to"
          class="cta-button px-6 py-2 text-sm"
        >
          {{ primaryCta.name }}
        </RouterLink>
        <div class="relative group">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-brand-blue/60 hover:text-white focus:outline-none"
          >
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-white/50 group-hover:text-white">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <div
            class="invisible absolute right-0 top-full mt-3 w-[320px] rounded-3xl border border-white/10 bg-brand-dark/95 p-5 opacity-0 shadow-2xl shadow-black/30 backdrop-blur group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition"
          >
            <div class="space-y-4">
              <div v-for="section in navMenuSections" :key="section.name" class="space-y-2">
                <p class="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">{{ section.name }}</p>
                <ul class="space-y-1.5">
                  <li v-for="item in section.items" :key="item.name">
                    <RouterLink
                      v-if="item.to"
                      :to="item.to as any"
                      class="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      :class="{ 'bg-white/10 text-white': isActive(item) }"
                    >
                      {{ item.name }}
                      <span v-if="typeof item.to !== 'string' && item.to?.hash" class="text-white/40">#</span>
                    </RouterLink>
                    <a
                      v-else
                      :href="item.href"
                      :target="item.external ? '_blank' : undefined"
                      rel="noopener"
                      class="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {{ item.name }}
                      <svg
                        v-if="item.external"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        class="h-4 w-4 text-white/50"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H18a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2v-4.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9l-9 9M11 9h4V5" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
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
        <div class="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6">
          <RouterLink
            v-if="primaryCta.to"
            :to="primaryCta.to"
            class="cta-button justify-center"
            @click="closeMenu"
          >
            {{ primaryCta.name }}
          </RouterLink>
          <div v-for="section in navMenuSections" :key="section.name" class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{{ section.name }}</p>
            <div class="flex flex-col gap-2">
              <template v-for="item in section.items" :key="item.name">
                <RouterLink
                  v-if="item.to"
                  :to="item.to as any"
                  class="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </RouterLink>
                <a
                  v-else
                  :href="item.href"
                  :target="item.external ? '_blank' : undefined"
                  rel="noopener"
                  class="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </a>
              </template>
            </div>
          </div>
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
