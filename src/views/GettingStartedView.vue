<script setup lang="ts">
const steps = [
  {
    title: 'Install prerequisites',
    details: 'Go 1.22+, TinyGo 0.39+, and a NATS server with JetStream enabled. The NATS CLI is optional but handy.'
  },
  {
    title: 'Launch NATS',
    details:
      '<code>docker run --rm -p 4222:4222 nats:2.10-alpine -js</code><br />Use Docker or your preferred deployment to expose a NATS server with JetStream.'
  },
  {
    title: 'Clone and prepare',
    details:
      '<code>git clone https://github.com/ambiware-labs/loqa-core.git</code><br /><code>cd loqa-core</code><br /><code>make skills</code>'
  },
  {
    title: 'Run the runtime',
    details: '<code>make run</code><br />Wraps <code>go run ./cmd/loqad --config ./config/example.yaml</code>. Watch the logs for service startup.'
  },
  {
    title: 'Publish events',
    details:
      '<code>nats pub skill.timer.start \'{"\\"duration_ms\\":3000,\\"label\\":\\"tea\\"}\'</code><br />Try `skill.home.command` to exercise the smart home bridge.'
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
