<script setup lang="ts">
import CommandSnippet from '../components/CommandSnippet.vue'

const sections = [
  {
    id: 'installation',
    title: 'Installation Guide',
    summary:
      'Verify prerequisites, fetch a nightly bundle (or build from source), configure NATS connectivity, and confirm the runtime health endpoints.',
    highlights: [
      'Supports Linux (amd64/arm64) and macOS (Intel/Apple Silicon)',
      'Nightly archives include binaries, configs, docs, and sample skills',
      'Environment overrides make it easy to script multi-node setups'
    ],
    commands: [
      'brew install go tinygo nats-io/nats/nats',
      'docker run --rm -p 4222:4222 nats:2.10-alpine -js',
      'shasum -a 256 -c loqa-core_nightly-YYYYMMDD_linux_amd64.tar.gz.sha256'
    ],
    links: [
      {
        label: 'Read the full guide',
        href: 'https://github.com/loqalabs/loqa-core/blob/main/docs/INSTALLATION.md'
      },
      {
        label: 'Download nightly builds',
        href: 'https://github.com/loqalabs/loqa-core/actions/workflows/nightly.yml'
      }
    ]
  },
  {
    id: 'quickstart',
    title: 'Quickstart Tutorial',
    summary:
      'Bring up the runtime, load the timer and smart-home skills, and drive the voice pipeline from transcript to spoken response.',
    highlights: [
      'Make targets compile TinyGo skills and boot the runtime',
      'Timer and smart-home skills demonstrate command routing',
      'Optional walkthrough exercises STT → LLM → TTS via NATS subjects'
    ],
    commands: [
      'make skills',
      'make run',
      "nats pub skill.timer.start '{\"duration_ms\":3000,\"label\":\"tea\"}'"
    ],
    links: [
      {
        label: 'Open quickstart',
        href: 'https://github.com/loqalabs/loqa-core/blob/main/docs/GETTING_STARTED.md'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture Overview',
    summary:
      'Understand the runtime topology, message bus subjects, and extensibility story for skills, adapters, and observability.',
    highlights: [
      'NATS subjects coordinate STT, LLM, TTS, and skill execution',
      'Capability registry and heartbeats advertise node roles',
      'Sandboxed WASM host enforces per-skill permissions and audit trails'
    ],
    commands: [
      'nats sub nlu.response.final',
      'nats sub tts.audio',
      'nats sub skill.timer.status'
    ],
    links: [
      {
        label: 'View architecture doc',
        href: 'https://github.com/loqalabs/loqa-core/blob/main/docs/ARCHITECTURE.md'
      }
    ]
  },
  {
    id: 'business-model',
    title: 'Hybrid Open-Core Model',
    summary:
      'See how Loqa balances a public-good runtime, community-driven extensions, and optional value-add services to stay sustainable.',
    highlights: [
      'Core runtime remains MIT-licensed and community governed',
      'Extension labs and marketplace RFC chart the plugin ecosystem',
      'Value-add services fund ongoing development without compromising privacy'
    ],
    commands: [],
    links: [
      {
        label: 'Read the positioning update',
        href: 'https://github.com/loqalabs/.github'
      },
      {
        label: 'Follow the marketplace RFC',
        href: 'https://github.com/loqalabs/loqa-meta/issues/26'
      }
    ]
  }
]
</script>

<template>
  <main class="bg-brand-dark text-white">
    <section class="relative overflow-hidden border-b border-white/5 bg-gradient-to-t from-brand-dark to-brand-purple/40">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:py-20">
        <div class="flex-1 space-y-5">
          <span class="inline-flex items-center rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Documentation
          </span>
          <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to run Loqa locally
          </h1>
          <p class="text-base text-white/80 sm:text-lg">
            Start with the installation checklist, follow the quickstart, and dig into the architecture. Each guide mirrors the GitHub docs but adds copy-ready commands and context for faster iteration.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20">
      <nav aria-label="Documentation sections" class="flex flex-wrap gap-3">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-brand-blue/40 hover:text-brand-blue"
        >
          <span class="h-2 w-2 rounded-full bg-brand-blue/60"></span>
          {{ section.title }}
        </a>
      </nav>

      <article
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        class="space-y-8 rounded-3xl border border-white/5 bg-white/5 px-6 py-8 shadow-lg shadow-black/20 md:px-10 md:py-10"
      >
        <header class="space-y-4">
          <h2 class="text-2xl font-semibold text-white">{{ section.title }}</h2>
          <p class="text-base text-white/80">{{ section.summary }}</p>
          <ul class="grid gap-2 text-sm text-white/70 sm:grid-cols-2">
            <li v-for="item in section.highlights" :key="item" class="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mt-1 h-4 w-4 text-brand-blue">
                <path fill-rule="evenodd" d="M16.704 5.456a.75.75 0 0 1 .09 1.056l-7 9a.75.75 0 0 1-1.127.06l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.89 2.89 6.476-8.318a.75.75 0 0 1 1.111-.128Z" clip-rule="evenodd" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </header>

        <div class="grid gap-4 md:grid-cols-2">
          <CommandSnippet
            v-for="command in section.commands"
            :key="`${section.id}-${command}`"
            :command="command"
          />
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in section.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 px-5 py-2 text-sm font-medium text-brand-blue transition hover:bg-brand-blue/20"
          >
            {{ link.label }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
              <path d="M3.5 4.75A.75.75 0 0 1 4.25 4h6a.75.75 0 0 1 0 1.5h-4.5l9.116 9.116a.75.75 0 1 1-1.06 1.06L4.69 6.56v4.5a.75.75 0 0 1-1.5 0v-6Z" />
            </svg>
          </a>
        </div>
      </article>
    </section>
  </main>
</template>
