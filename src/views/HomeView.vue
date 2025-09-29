<script setup lang="ts">
const pillars = [
  {
    title: 'Composable Open Core',
    description: 'The MIT-licensed runtime, skills host, and tooling stay open forever—compose whatever ambient stack you need.',
    href: 'https://github.com/ambiware-labs/loqa-core'
  },
  {
    title: 'Modular extensibility',
    description: 'Skills, adapters, and automations plug into Loqa like VS Code extensions or WordPress plugins, ready for community creativity.',
    href: 'https://github.com/ambiware-labs/loqa-meta/tree/main/community'
  },
  {
    title: 'Loqa Studio add-ons',
    description: 'Optional Studio bundles, encrypted Loqa Cloud, and support keep Loqa sustainable without locking anything down.',
    href: 'https://github.com/ambiware-labs/loqa-meta/issues/25'
  }
]

const howItWorks = [
  {
    title: 'Sense & capture',
    description: 'Microphones, sensors, and local apps publish events over NATS. Loqa ingests audio, text, and state without leaving your LAN.'
  },
  {
    title: 'Reason locally',
    description: 'Streaming Whisper, local LLM planners, and skills collaborate to understand intent—deterministic where possible, generative when helpful.'
  },
  {
    title: 'Act & respond',
    description: 'Loqa routes responses to ambient speakers, displays, and automations with strict permission boundaries.'
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

const useCases = [
  {
    title: 'Ambient dashboard',
    description: 'Morning briefings on an e-ink panel, calendar readouts, and contextual alerts without cloud dependence.'
  },
  {
    title: 'Desk co-pilot',
    description: 'Hands-free timers, note capture, and notification triage while keeping data on your workstation.'
  },
  {
    title: 'Sensor automations',
    description: 'Skills react to motion, light, or air-quality sensors to orchestrate lighting, HVAC, or reminders locally.'
  },
  {
    title: 'Family companion',
    description: 'Kid-friendly personas answer questions and play media with household rules you control.'
  }
]

const roadmap = [
  {
    phase: 'Today',
    items: [
      'Streaming Whisper STT + Kokoro TTS pipeline',
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


const ambientPoints = [
  {
    title: 'Blends into your environment',
    description: 'Interfaces fade into the background—voice, displays, sensors, and automations surface only when helpful.'
  },
  {
    title: 'Context-aware and personal',
    description: 'Loqa observes presence, routines, and preferences locally so reminders, lighting, or audio feel timely instead of disruptive.'
  },
  {
    title: 'Multimodal by design',
    description: 'Voice, touch, glanceable displays, and ambient feedback work together on your network—no single device steals the spotlight.'
  },
  {
    title: 'Respectful of privacy',
    description: 'Ambient intelligence should belong to you, not a remote cloud. Everything runs locally unless you opt in to encrypted sync.'
  }
]

const communityLinks = [
  {
    title: 'Read the roadmap',
    description: 'Track Workstream progress and MVP milestones.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/roadmap/MVP_BACKLOG.md'
  },
  {
    title: 'Contributor guide',
    description: 'Find starter issues, publish skills, or propose an RFC.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/contributing-guide.md'
  },
  {
    title: 'Extension Labs',
    description: 'Templates and checklists for building Loqa skills.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/extension-labs/README.md'
  },
  {
    title: 'Partner outreach',
    description: 'Collaborate on hardware kits, courses, or co-marketing.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/outreach/partner_pipeline.md'
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
            <span>Composable Open Core</span>
            <span class="hidden sm:inline">•</span>
            <span>Modular</span>
            <span class="hidden sm:inline">•</span>
            <span>Ethical by design</span>
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
              Try the Loqa alpha
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
              </svg>
            </RouterLink>
            <a href="https://github.com/ambiware-labs/loqa-core" class="cta-button secondary" target="_blank" rel="noopener">
              View the runtime on GitHub
            </a>
            <a href="https://github.com/ambiware-labs/loqa-core/blob/main/docs/GETTING_STARTED.md" class="cta-button secondary" target="_blank" rel="noopener">
              Quickstart guide
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 class="font-display text-3xl text-white">What is ambient intelligence?</h2>
      <p class="mt-3 max-w-3xl text-white/70">
        Ambient intelligence is technology that blends into your environment and works with you. It stays quiet until it’s helpful,
        responding to presence, context, and behaviour without exporting your data.
      </p>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <div
          v-for="point in ambientPoints"
          :key="point.title"
          class="rounded-2xl border border-white/5 bg-white/5 p-6 shadow shadow-black/10"
        >
          <h3 class="font-display text-xl text-white">{{ point.title }}</h3>
          <p class="mt-3 text-sm text-white/70">{{ point.description }}</p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 class="font-display text-3xl text-white">How Loqa works</h2>
      <p class="mt-3 max-w-3xl text-white/70">
        Sense the world, reason locally, and respond through ambient surfaces. Loqa keeps every hop on your network unless you opt in to extras.
      </p>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div
          v-for="step in howItWorks"
          :key="step.title"
          class="rounded-2xl border border-white/5 bg-white/5 p-6 shadow shadow-black/10"
        >
          <h3 class="font-display text-xl text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm text-white/70">{{ step.description }}</p>
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

    <div class="border-t border-white/10 bg-black/20">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">What can Loqa do today?</h2>
        <p class="mt-3 max-w-2xl text-white/70">
          Mix and match modalities to fit your space. These scenarios ship with the alpha or can be assembled with a few YAML tweaks.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div
            v-for="scenario in useCases"
            :key="scenario.title"
            class="rounded-2xl border border-white/5 bg-white/5 p-6 shadow shadow-black/10"
          >
            <h3 class="font-display text-xl text-white">{{ scenario.title }}</h3>
            <p class="mt-3 text-sm text-white/70">{{ scenario.description }}</p>
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

    <div class="border-t border-white/10 bg-black/35">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">Roadmap & community</h2>
        <p class="mt-3 max-w-3xl text-white/70">
          Loqa thrives on contributions. Explore the roadmap, ship your own skills, or partner with us on Studio add-ons.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <a
            v-for="card in communityLinks"
            :key="card.title"
            :href="card.href"
            class="rounded-2xl border border-white/5 bg-white/5 p-6 text-left shadow shadow-black/10 transition hover:border-brand-blue/40"
            target="_blank"
            rel="noopener"
          >
            <h3 class="font-display text-xl text-white">{{ card.title }}</h3>
            <p class="mt-3 text-sm text-white/70">{{ card.description }}</p>
          </a>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div class="rounded-3xl border border-white/10 bg-white/10 p-8 md:p-12">
        <h2 class="font-display text-3xl text-white">Privacy is the default</h2>
        <p class="mt-3 max-w-3xl text-white/70">
          Loqa runs locally, ships with zero telemetry, and only syncs to Loqa Cloud when you explicitly opt in. Read the
          <a
            href="https://github.com/ambiware-labs/loqa-meta/blob/main/governance/privacy.md"
            class="text-brand-blue hover:text-white"
            target="_blank"
            rel="noopener"
          >privacy & data principles</a>
          to learn how we keep ambient intelligence ethical.
        </p>
      </div>
    </div>
  </section>
</template>
