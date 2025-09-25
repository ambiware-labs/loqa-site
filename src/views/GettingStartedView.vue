<script setup lang="ts">
const steps = [
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
]
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-16 md:py-20">
    <h1 class="font-display text-4xl text-white md:text-5xl">Getting started with Loqa</h1>
    <p class="mt-4 text-white/70">
      The full Quickstart lives in the runtime repository, but here&apos;s the short version. Most developers have the pipeline running in under fifteen minutes.
    </p>

    <ol class="mt-10 space-y-6">
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
              <pre
                v-for="command in step.commands"
                :key="command"
                class="rounded-xl bg-black/70 px-4 py-3 text-xs text-brand-blue/90 shadow-inner shadow-black/30"
              ><code>{{ command }}</code></pre>
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
      <a
        href="https://github.com/ambiware-labs/loqa-core/blob/main/docs/GETTING_STARTED.md"
        target="_blank"
        rel="noopener"
        class="cta-button mt-4 inline-flex"
      >
        Read the Quickstart
      </a>
    </div>
  </section>
</template>
