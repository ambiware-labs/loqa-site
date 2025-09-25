<script setup lang="ts">
const steps = [
  {
    title: 'Install prerequisites',
    details: 'Go 1.22+, TinyGo 0.39+, and a NATS server with JetStream enabled. The NATS CLI is optional but handy.'
  },
  {
    title: 'Launch NATS',
    details: 'Use Docker (`docker run --rm -p 4222:4222 nats:2.10-alpine -js`) or your preferred deployment.'
  },
  {
    title: 'Clone and prepare',
    details: 'Clone loqa-core, run `make skills` to build the TinyGo sample modules, and validate their manifests.'
  },
  {
    title: 'Run the runtime',
    details: 'Execute `make run` (which wraps `go run ./cmd/loqad --config ./config/example.yaml`). Watch the logs for service startup.'
  },
  {
    title: 'Publish events',
    details: 'Use `nats pub skill.timer.start ...` to trigger the timer skill or explore `skill.home.command` for the smart home example.'
  }
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
            <p class="mt-2 text-sm text-white/70">{{ step.details }}</p>
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
