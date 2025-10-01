export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'loqa-hybrid-open-core-model',
    title: 'Loqa’s Hybrid Open-Core Model',
    date: 'September 28, 2025',
    author: 'Ambiware Labs Team',
    excerpt:
      'How we blend a public-good runtime, modular extensions, and optional value-add services to keep Loqa weird, local, and sustainable.',
    content: `
<p>
  When we introduced Loqa, we promised to keep ambient intelligence fast, private, and local. Today we’re making that explicit with a
  <strong>hybrid open-core model</strong> that anchors every decision as we march toward MVP and beyond.
</p>

<h3>Public-good core</h3>
<p>
  The Loqa runtime, protocols, skills host, and tooling remain permanently MIT-licensed. Anyone can run, fork, or extend the stack on
  their own hardware—no feature gates, no cloud lock-in. Governance, security policy, and RFCs all live in the open at
  <a href="https://github.com/loqalabs/loqa-meta">loqa-meta</a>.
</p>

<h3>Modular extensibility</h3>
<p>
  Skills and adapters behave like VS Code extensions or WordPress plugins. The new
  <a href="https://github.com/loqalabs/loqa-core/blob/main/docs/skills/SPEC.md">skills specification</a> documents the
  manifest schema and host ABI so third-party creators can experiment freely. We’re also bootstrapping
  <a href="https://github.com/loqalabs/loqa-meta/issues/27">Extension Labs</a> resources to showcase community work and share
  starter kits.
</p>

<h3>Value-add ecosystem</h3>
<p>
  To keep the lights on, Ambiware Labs will offer optional services that never compromise privacy: managed updates, premium skill packs,
  and curated hardware bundles. We’re drafting the first wave in
  <a href="https://github.com/loqalabs/loqa-meta/issues/28">our value-add roadmap</a> and laying the groundwork for a
  <a href="https://github.com/loqalabs/loqa-meta/issues/26">marketplace RFC</a> so creators can monetize their skills alongside us.
</p>

<p>
  This hybrid approach gives Loqa the resilience of Blender, the modular energy of Home Assistant, and the sustainability of OBS +
  Streamlabs—all while staying unapologetically weird. Join the discussion in
  <a href="https://github.com/loqalabs/loqa-core/discussions">GitHub Discussions</a> and help shape what comes next.
</p>
`
  },
  {
    slug: 'loqalabs-loqa-launch',
    title: 'Announcing Ambiware Labs + Loqa',
    date: 'September 25, 2025',
    author: 'Ambiware Labs Team',
    excerpt:
      'Introducing Ambiware Labs and Loqa — a local-first, hardware-agnostic platform for private ambient intelligence.',
    content: `
<p>
  Today we are excited to introduce <strong>Ambiware Labs</strong>, the team stewarding <strong>Loqa</strong>—an open-core, local-first
  ambient intelligence platform. Loqa is our answer to privacy-preserving assistants that can live with you, respond in real time, and
  never exfiltrate your data to a remote cloud.
</p>
<p>
  Smart speakers proved the usefulness of ambient computing, but they also normalized constant data collection. Loqa flips that model.
  Every inference runs on your hardware. Start with a single Mac mini or NAS, expand across Raspberry Pis or Jetsons, and add skills as
  WASM modules. No silent cloud fallbacks.
</p>
<h3>What’s inside the MVP?</h3>
<ul>
  <li>Streaming STT → LLM → TTS pipeline using Whisper, a 7B planner, and Kokoro voices</li>
  <li>Deterministic skills runtime with TinyGo reference modules (timer + smart home bridge)</li>
  <li>Observability stack (Grafana, Loki, Tempo, Prometheus) for latency and audit visibility</li>
  <li>Governance + community foundations: Discussions, RFCs, security policy, contribution guide</li>
</ul>
<p>
  We’re building Loqa in the open. Clone the runtime, run <code>make skills</code> and <code>make run</code>, then start publishing events.
  Join us in Discussions to influence the roadmap or contribute new skills.
</p>
`
  }
]
