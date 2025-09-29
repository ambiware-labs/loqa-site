<script setup lang="ts">
import GlyphIcon from '../components/GlyphIcon.vue'
import PipelineDiagram from '../components/PipelineDiagram.vue'
import MeshDiagram from '../components/MeshDiagram.vue'
import StudioModelDiagram from '../components/StudioModelDiagram.vue'
import StudioFlowDiagram from '../components/StudioFlowDiagram.vue'
import StudioPackCard from '../components/StudioPackCard.vue'
import CommandSnippet from '../components/CommandSnippet.vue'

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
    description: 'Optional Studio persona packs, encrypted Loqa Cloud sync, and support plans keep Loqa sustainable without locking anything down.',
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
    description: 'Loqa routes responses to ambient speakers, displays, and automations with auditable sandboxes and explicit permissions.'
  }
]

const features = [
  {
    title: 'Local-first by design',
    description: 'Every inference happens on hardware you own: Macs, minis, Pis, Jetsons. No silent cloud fallbacks.'
  },
  {
    title: 'Privacy as a feature, not a tradeoff',
    description: 'Ambient intelligence should work for you. Loqa refuses telemetry, dark patterns, and hidden data shares—agency stays in your hands.'
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
    description: 'Morning briefings on an e-ink panel, calendar readouts, and contextual alerts without cloud dependence.',
    icon: 'dashboard'
  },
  {
    title: 'Desk co-pilot',
    description: 'Hands-free timers, note capture, and notification triage while keeping data on your workstation.',
    icon: 'desk'
  },
  {
    title: 'Sensor automations',
    description: 'Skills react to motion, light, or air-quality sensors to orchestrate lighting, HVAC, or reminders locally.',
    icon: 'sensors'
  },
  {
    title: 'Family companion',
    description: 'Kid-friendly personas answer questions and play media with household rules you control.',
    icon: 'family'
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
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/roadmap/MVP_BACKLOG.md',
    icon: 'roadmap'
  },
  {
    title: 'Contributor guide',
    description: 'Find starter issues, publish skills, or propose an RFC.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/contributing-guide.md',
    icon: 'guide'
  },
  {
    title: 'Extension Labs',
    description: 'Templates and checklists for building Loqa skills.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/extension-labs/README.md',
    icon: 'labs'
  },
  {
    title: 'Partner outreach',
    description: 'Collaborate on hardware kits, courses, or co-marketing.',
    href: 'https://github.com/ambiware-labs/loqa-meta/blob/main/community/outreach/partner_pipeline.md',
    icon: 'partners'
  }
]

const samplePack = {
  name: 'Harbor Home Companion',
  description: 'A bilingual household pack tuned for ambient reminders, bedtime audio, and privacy-safe kid requests.',
  personas: ['Lighthouse Guide', 'Tea Timer', 'Study Buddy'],
  highlights: [
    'Localized prompts for English + Spanish households with quiet-hours awareness.',
    'Ships with Kokoro voices, bedtime soundscapes, and household automations pre-curated for offline playback.',
    'Bundle QA includes fairness, safety, and latency checklists ready for your own commercial packs.'
  ]
}
</script>

<template>
  <section>
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-brand-gradient opacity-70 blur-3xl"></div>
      <div class="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl"></div>
      <div class="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-24">
        <div class="max-w-3xl">
          <span class="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm sm:tracking-[0.35em]">
            <span title="MIT runtime + optional Studio add-ons—no gated core features">Composable Open Core</span>
            <span class="hidden sm:inline">•</span>
            <span>Modular</span>
            <span class="hidden sm:inline">•</span>
            <span>Ethical by design</span>
          </span>
          <h1 class="mt-6 font-display text-4xl leading-tight text-white md:text-6xl">
            Keep your AI assistant close to home.
          </h1>
          <p class="mt-4 text-xl text-brand-blue/80 md:text-2xl">
            Ambient intelligence that lives on your hardware, not someone else’s.
          </p>
          <p class="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Build and adapt your own ambient assistant. Loqa runs locally, stays modular, and invites you to add skills or personas whenever you need them.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/getting-started" class="cta-button">
              Try Loqa Alpha
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
              </svg>
            </RouterLink>
            <a href="https://github.com/ambiware-labs/loqa-core" class="cta-button secondary" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5" />
              </svg>
              <span>View the runtime on GitHub</span>
            </a>
            <a href="https://github.com/ambiware-labs/loqa-core/blob/main/docs/GETTING_STARTED.md" class="cta-button secondary" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5h7.5m-7.5 0A2.25 2.25 0 006 6.75v10.5A2.25 2.25 0 008.25 19.5h7.5A2.25 2.25 0 0018 17.25V6.75A2.25 2.25 0 0015.75 4.5m-7.5 0V3.75A1.5 1.5 0 019.75 2.25h4.5a1.5 1.5 0 011.5 1.5V4.5" />
              </svg>
              <span>Quickstart guide</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="ambient-intelligence" class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 class="font-display text-3xl text-white">What is ambient intelligence?</h2>
      <p class="mt-3 max-w-3xl text-white/70">
        Ambient intelligence is technology that blends into your environment and works with you. It stays quiet until it’s helpful,
        responding to presence, context, and behaviour without exporting your data. It frees you from constantly managing devices so you can stay present in your space.
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

    <div id="how-it-works" class="mx-auto max-w-6xl px-6 py-16 md:py-20">
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
      <PipelineDiagram />
    </div>

    <div id="open-core" class="border-t border-white/10 bg-black/30">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">Our hybrid open-core model</h2>
        <p class="mt-3 max-w-3xl text-white/70">
          Loqa blends the best of Blender, Home Assistant, and OBS. The core stays MIT-licensed, extensions thrive in the
          ecosystem, and optional services—like Loqa Cloud sync, curated Studio persona packs, and paid support—keep the lights on without touching your data.
        </p>
        <div class="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/70 shadow shadow-black/20">
          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mt-0.5 h-5 w-5 text-brand-blue">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 01.518-.012c.17.058.32.202.32.415v3.367m0 0H12m0 0h.75M12 17.25h.008v.008H12v-.008z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-semibold text-white/80">
                What we mean by “Composable Open Core”
              </p>
              <p class="mt-2">
                The runtime, skill host, and tooling stay MIT-licensed forever—you can self-host, fork, and extend without permission. Sustainability comes from optional Studio add-ons and Loqa Cloud, which plug in as extra modules without gating the core or forcing telemetry.
              </p>
            </div>
          </div>
        </div>
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
        <StudioModelDiagram />
        <StudioFlowDiagram />
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h3 class="font-display text-xl text-white">Why Studio packs feel different</h3>
            <p class="mt-3 text-sm text-white/70">
              Studio personas are hand-tuned for locality, culture, and accessibility. Each pack carries:
            </p>
            <ul class="mt-4 space-y-2 text-sm text-white/70">
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Distinct voices and behaviours curated by human writers, not scraped from the public web.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Local dialect and etiquette profiles so Loqa fits into your household or workspace.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Ethical sourcing, transparent changelogs, and offline evaluation suites to keep trust front and centre.</span>
              </li>
            </ul>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h3 class="font-display text-xl text-white">What&apos;s inside a pack?</h3>
            <p class="mt-3 text-sm text-white/70">
              Each release bundles personas and deterministic skills that can be self-hosted or used with Loqa Cloud.
            </p>
            <ul class="mt-4 space-y-2 text-sm text-white/70">
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Persona manifests (intent prompts, guardrails, telemetry stance).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Tooling recipes: timers, reminders, smart-home bridges tested with the pack.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
                <span>Quality bar checklists so contributors can ship their own commercial bundles.</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <StudioPackCard :pack="samplePack" />
        </div>
      </div>
    </div>

    <div id="use-cases" class="border-t border-white/10 bg-black/20">
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
            <GlyphIcon :name="scenario.icon" class="mb-4" />
            <h3 class="font-display text-xl text-white">{{ scenario.title }}</h3>
            <p class="mt-3 text-sm text-white/70">{{ scenario.description }}</p>
          </div>
        </div>
        <RouterLink to="/getting-started#workflows" class="cta-button mt-10 inline-flex">
          Try these workflows
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
          </svg>
        </RouterLink>
      </div>
    </div>

    <div id="why-loqa" class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 class="font-display text-3xl text-white">Why Loqa?</h2>
      <p class="mt-3 max-w-2xl text-white/70">
        Loqa is a full-stack reference for ambient systems. It pairs a fast STT → LLM → TTS pipeline with a deterministic skills runtime so you can ship privacy-first assistants on commodity hardware—and grow into a marketplace of skills without giving up control. Privacy is a feature, not a tradeoff.
      </p>
      <div class="mt-10 grid gap-8 md:grid-cols-2">
        <div v-for="feature in features" :key="feature.title" class="rounded-2xl border border-white/5 bg-white/5 px-6 py-8 shadow-lg shadow-black/10">
          <h3 class="font-display text-xl text-white">{{ feature.title }}</h3>
          <p class="mt-3 text-sm text-white/70">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <div id="roadmap" class="border-t border-white/10 bg-black/40">
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="font-display text-3xl text-white">Build the mesh you need</h2>
        <p class="mt-3 max-w-2xl text-white/70">
          Scale horizontally as you add roles: keep STT on the edge, run planners on the most capable node, and let skills deploy as WASM bundles wherever capacity exists.
        </p>
        <MeshDiagram />
        <div class="mt-12 relative">
          <div class="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2"></div>
          <div class="space-y-10 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div
              v-for="(stage, idx) in roadmap"
              :key="stage.phase"
              class="relative rounded-2xl border border-white/5 bg-brand-gradient-soft px-6 py-8 shadow shadow-black/20 md:px-8"
            >
              <span
                class="absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-brand-dark md:-left-6 md:top-1/2 md:-translate-y-1/2"
              >
                {{ idx === 0 ? 'T' : 'N' }}
              </span>
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
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div class="rounded-3xl border border-white/10 bg-white/10 p-8 md:p-12">
        <h2 class="font-display text-3xl text-white">Grab the tools, shape the future</h2>
        <p class="mt-3 max-w-2xl text-white/70">
          Clone the repo, run <code class="rounded bg-white/10 px-2 py-1 text-sm text-brand-blue">make skills</code>, and start publishing events. Check the quickstart for full setup instructions—we&apos;re building Loqa in the open and every issue, RFC, or discussion helps steer the roadmap.
        </p>
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="space-y-4">
            <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Kickstart commands</h3>
            <CommandSnippet command="git clone https://github.com/ambiware-labs/loqa-core.git" />
            <CommandSnippet command="cd loqa-core && make skills && make run" />
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Skill manifest sketch</h3>
            <pre class="rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-white/80">
<code>id: skills.timer
entry: build/timer.wasm
permissions:
  nats:
    - subject: "skill.timer.#"
mounts:
  - path: /state
    access: read-write
</code>
            </pre>
          </div>
        </div>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="https://github.com/ambiware-labs/loqa-meta/blob/main/roadmap/MVP_BACKLOG.md" class="cta-button secondary" target="_blank" rel="noopener">
            View the MVP backlog
          </a>
          <a href="https://github.com/ambiware-labs/loqa-core/discussions" class="cta-button" target="_blank" rel="noopener">
            Join the community
          </a>
          <a href="https://github.com/ambiware-labs/loqa-meta/blob/main/community/extension-labs/README.md" class="cta-button secondary" target="_blank" rel="noopener">
            Explore Extension Labs
          </a>
        </div>
      </div>
    </div>

    <div id="community" class="border-t border-white/10 bg-black/35">
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
            <GlyphIcon :name="card.icon" class="mb-4" />
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
        <p class="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
          No tracking • No cloud lock-in • No data sales
        </p>
      </div>
    </div>
  </section>
</template>
