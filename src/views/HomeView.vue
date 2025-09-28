<script setup lang="ts">
const pillars = [
  {
    title: 'Public-good core',
    description: 'The MIT-licensed runtime, skills host, and tooling stay open forever—built in the open for everyone to run locally.',
    href: 'https://github.com/ambiware-labs/loqa-core'
  },
  {
    title: 'Modular extensibility',
    description: 'Skills, adapters, and automations plug into Loqa like VS Code extensions or WordPress plugins, ready for community creativity.',
    href: 'https://github.com/ambiware-labs/loqa-meta/tree/main/community'
  },
  {
    title: 'Value-add ecosystem',
    description: 'Optional managed services, premium skills, and curated hardware bundles keep the project sustainable without locking down the core.',
    href: 'https://github.com/ambiware-labs/loqa-meta/issues/25'
  }
]

const features = [
  {
    title: 'Local-first by design',
    description: 'Every inference happens on hardware you own: Macs, minis, Pis, Jetsons. No silent cloud fallbacks.'
  },
  {
    title: 'Modular architecture',
    description: 'STT, LLM routing, TTS, and skills run as decoupled services over NATS so you can scale or swap components.'
  },
  {
    title: 'Deterministic skills',
    description: 'Sandboxed WASM modules with declarative permissions and audit logs keep automations predictable and safe.'
  },
  {
    title: 'Observability included',
    description: 'Grafana, Loki, Tempo, and Prometheus compose into the stack for latency tracking and debugging from day one.'
  }
]

const roadmap = [
  {
    phase: 'Today',
    items: [
      'Streaming Whisper STT + Piper TTS pipeline',
      'Skills runtime with timer & smart home reference modules',
      'CI/CD, security policy, and community infrastructure'
    ]
  },
  {
    phase: 'Next',
    items: [
      'Optimized intent router and deterministic tool chain',
      'Nightly builds and internal dogfooding cluster',
      'Alpha tester cohort with guided feedback loop'
    ]
  }
]
</script>

<template>
  <section>
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-gradient opacity-60 blur-3xl"></div>
      <div class="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-24">
        <div class="max-w-3xl">
          <span class="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 sm:px-4 sm:text-sm sm:tracking-[0.3em]">
            <span>Public-good open core</span>
            <span class="hidden sm:inline">•</span>
            <span>Modular</span>
            <span class="hidden sm:inline">•</span>
            <span>Value-add ready</span>
          </span>
          <h1 class="mt-6 font-display text-5xl leading-tight text-white md:text-6xl">
            Loqa keeps your AI assistant close to home.
          </h1>
          <p class="mt-5 max-w-2xl text-lg text-white/70 md:text-xl">
            A local-first, open-core platform for voice assistants and ambient interfaces. We steward a public-good runtime,
            invite modular extensions, and offer optional value-add services—because privacy shouldn’t cost you flexibility.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/getting-started" class="cta-button">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
              </svg>
            </RouterLink>
            <a href="https://github.com/ambiware-labs/loqa-core" class="cta-button secondary" target="_blank" rel="noopener">
              View the runtime on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 bg-black/30">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">Our hybrid open-core model</h2>
        <p class="mt-3 max-w-3xl text-white/70">
          Loqa blends the best of Blender, Home Assistant, and OBS. The core stays MIT-licensed, extensions thrive in the
          ecosystem, and optional services keep the lights on without touching your data.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-6 shadow shadow-black/10"
          >
            <div class="space-y-4">
              <h3 class="font-display text-xl text-white">{{ pillar.title }}</h3>
              <p class="text-sm text-white/70">{{ pillar.description }}</p>
            </div>
            <a
              v-if="pillar.href"
              :href="pillar.href"
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white"
              target="_blank"
              rel="noopener"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 class="font-display text-3xl text-white">Why Loqa?</h2>
      <p class="mt-3 max-w-2xl text-white/70">
        Loqa is a full-stack reference for ambient systems. It pairs a fast STT → LLM → TTS pipeline with a deterministic skills runtime so you can ship privacy-first assistants on commodity hardware—and grow into a marketplace of skills without giving up control.
      </p>
      <div class="mt-10 grid gap-8 md:grid-cols-2">
        <div v-for="feature in features" :key="feature.title" class="rounded-2xl border border-white/5 bg-white/5 px-6 py-8 shadow-lg shadow-black/10">
          <h3 class="font-display text-xl text-white">{{ feature.title }}</h3>
          <p class="mt-3 text-sm text-white/70">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 bg-black/40">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">Build the mesh you need</h2>
        <p class="mt-3 max-w-2xl text-white/70">
          Scale horizontally as you add roles: keep STT on the edge, run planners on the most capable node, and let skills deploy as WASM bundles wherever capacity exists.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div v-for="stage in roadmap" :key="stage.phase" class="rounded-2xl border border-white/5 bg-brand-gradient-soft px-6 py-8">
            <h3 class="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">{{ stage.phase }}</h3>
            <ul class="mt-4 space-y-3 text-white/70">
              <li v-for="item in stage.items" :key="item" class="flex items-start gap-3">
                <span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-blue"></span>
                <span class="text-sm">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div class="rounded-3xl border border-white/10 bg-white/10 p-8 md:p-12">
        <h2 class="font-display text-3xl text-white">Grab the tools, shape the future</h2>
        <p class="mt-3 max-w-2xl text-white/70">
          Clone the repo, run <code class="rounded bg-white/10 px-2 py-1 text-sm text-brand-blue">make skills</code>, and start publishing events. We&apos;re building Loqa in the open and every issue, RFC, or discussion helps steer the roadmap.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="https://github.com/ambiware-labs/loqa-meta/blob/main/roadmap/MVP_BACKLOG.md" class="cta-button secondary" target="_blank" rel="noopener">
            View the MVP backlog
          </a>
          <a href="https://github.com/ambiware-labs/loqa-core/discussions" class="cta-button" target="_blank" rel="noopener">
            Join the community
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
