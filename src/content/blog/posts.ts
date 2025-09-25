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
    slug: 'ambiware-labs-loqa-launch',
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
<h3>What	33s inside the MVP?</h3>
<ul>
  <li>Streaming STT → LLM → TTS pipeline using Whisper, a 7	7B planner, and Piper voices</li>
  <li>Deterministic skills runtime with TinyGo reference modules (timer + smart home bridge)</li>
  <li>Observability stack (Grafana, Loki, Tempo, Prometheus) for latency and audit visibility</li>
  <li>Governance + community foundations: Discussions, RFCs, security policy, contribution guide</li>
</ul>
<p>
  We	33re building Loqa in the open. Clone the runtime, run <code>make skills</code> and <code>make run</code>, then start publishing events.
  Join us in Discussions to influence the roadmap or contribute new skills.
</p>
`
  }
]
