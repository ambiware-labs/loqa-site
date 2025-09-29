<script setup lang="ts">
import CommandSnippet from '../components/CommandSnippet.vue'

interface Step {
  title: string
  description: string
  commands?: string[]
}

const steps: Step[] = [
  {
    title: 'Install prerequisites',
    description:
      'Go 1.22+, TinyGo 0.39+, and a NATS server with JetStream enabled. The NATS CLI is optional but handy for testing.',
  },
  {
    title: 'Launch NATS',
    description: 'Run a local NATS instance with JetStream enabled.',
    commands: ['docker run --rm -p 4222:4222 nats:2.10-alpine -js'],
  },
  {
    title: 'Clone and prepare',
    description: 'Clone the runtime repository and build the TinyGo sample skills.',
    commands: [
      'git clone https://github.com/ambiware-labs/loqa-core.git',
      'cd loqa-core',
      'make skills',
    ],
  },
  {
    title: 'Run the runtime',
    description: 'Launch Loqa with the example configuration. Watch the logs for service startup.',
    commands: ['make run'],
  },
  {
    title: 'Publish events',
    description: 'Trigger the timer skill. Try `skill.home.command` to exercise the smart home bridge.',
    commands: ["nats pub skill.timer.start '{\"duration_ms\":3000,\"label\":\"tea\"}'"],
  },
  {
    title: 'Exercise the voice pipeline (optional)',
    description:
      'Set `stt.enabled`, `llm.enabled`, and `tts.enabled` to true in your config, start the helper processes, then publish a transcript event to simulate speech.',
    commands: [
      'python3 stt/faster_whisper.py --model small.en',
      'ollama serve',
      'python3 tts/kokoro_stub.py',
      `nats pub stt.text.final '{"text":"set a five second tea timer"}'`,
    ],
  },
]

</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-16 md:py-20">
    <h1 class="font-display text-4xl text-white md:text-5xl">Getting started with Loqa</h1>
    <p class="mt-4 text-white/70">
      The full Quickstart lives in the runtime repository, but here&apos;s the short version. Most developers have the pipeline running in under fifteen minutes.
    </p>

    <ol id="workflows" class="mt-10 space-y-6">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="rounded-2xl border border-white/5 bg-white/5 px-6 py-6 shadow shadow-black/20"
      >
        <div class="flex items-baseline gap-4">
          <span class="font-display text-4xl text-brand-blue">{{ index + 1 }}</span>
          <div>
            <h2 class="font-display text-2xl text-white">{{ step.title }}</h2>
            <p class="mt-2 text-sm text-white/70">{{ step.description }}</p>
            <div v-if="step.commands" class="mt-4 space-y-3">
              <CommandSnippet v-for="command in step.commands" :key="command" :command="command" />
            </div>
          </div>
        </div>
      </li>
    </ol>

    <div class="mt-10 rounded-2xl border border-white/10 bg-black/50 px-6 py-8">
      <h2 class="font-display text-2xl text-white">Need the full walkthrough?</h2>
      <p class="mt-3 text-sm text-white/70">
        The guide covers troubleshooting tips, observability, and more example commands. Open it in a new tab and keep it nearby while you build.
      </p>
      <div class="mt-4 flex flex-wrap gap-3">
        <a
          href="https://github.com/ambiware-labs/loqa-core/blob/main/docs/GETTING_STARTED.md"
          target="_blank"
          rel="noopener"
          class="cta-button inline-flex"
        >
          Read the Quickstart
        </a>
        <RouterLink
          to="/docs"
          class="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/70 transition hover:border-brand-blue/40 hover:text-brand-blue"
        >
          Browse the docs hub
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
