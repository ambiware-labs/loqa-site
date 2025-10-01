<template>
  <footer class="border-t border-white/10 bg-black/40">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="font-display text-2xl text-white">Loqa</h2>
        <p class="mt-2 max-w-md text-sm text-white/60">
          Local-first ambient intelligence. Built in the open and stewarded by Ambiware Labs.
        </p>
      </div>
      <div class="flex flex-col gap-2 text-sm text-white/60">
        <a href="https://github.com/loqalabs" target="_blank" rel="noopener" class="hover:text-white">GitHub</a>
        <a href="mailto:hello@ambiware.ai" class="hover:text-white">hello@ambiware.ai</a>
        <span class="text-white/40">Loqa is an Ambiware Labs project.</span>
      </div>
    </div>
    <div class="border-t border-white/10 py-4 text-center text-xs text-white/40">
      &copy; {{ new Date().getFullYear() }} Loqa · Ambiware Labs.
    </div>
  </footer>
</template>
