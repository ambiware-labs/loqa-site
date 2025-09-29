<template>
  <div class="mt-8 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-brand-dark/40 p-6 text-sm text-white/70 shadow shadow-black/20 md:flex-row md:items-stretch md:gap-8">
    <div class="flex-1 space-y-2">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 9h10M7 13h6" />
          </svg>
        </span>
        <div>
          <h4 class="font-display text-lg text-white">Local runtime</h4>
          <p class="text-xs text-white/60">MIT-licensed core, runs entirely on your LAN.</p>
        </div>
      </div>
      <ul class="space-y-2 text-xs text-white/70">
        <li class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>Skills execute as WASM modules; telemetry stays local.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>NATS mesh connects edge microphones, planners, and automations.</span>
        </li>
      </ul>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="#00BCD4" stroke-width="1.5" class="h-10 w-10 text-brand-blue">
      <path d="M10 20h20" />
      <path d="M23 15l7 5-7 5" fill="#00BCD4" />
    </svg>

    <div class="flex-1 space-y-2">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.75h15" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.75h15M4.5 12.75h9" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21l3-3H9l3 3z" />
          </svg>
        </span>
        <div>
          <h4 class="font-display text-lg text-white">Loqa Studio (opt-in)</h4>
          <p class="text-xs text-white/60">Persona packs, cloud sync, and support plug in as needed.</p>
        </div>
      </div>
      <ul class="space-y-2 text-xs text-white/70">
        <li class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>Encrypted sync replicates only the data you allow.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
          <span>Persona/TTS bundles drop in as modular assets; nothing changes if you stay offline.</span>
        </li>
      </ul>
    </div>
  </div>
</template>
