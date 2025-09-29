<template>
  <div class="inline-flex items-center gap-2">
    <span class="glyph-circle">
      <span class="glyph-bar" v-for="n in 5" :key="n" :class="`bar-${n}`"></span>
    </span>
    <span class="glyph-label">Loqa</span>
  </div>
</template>

<style scoped>
.glyph-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid rgba(0, 188, 212, 0.8);
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(0, 188, 212, 0.15));
}

.glyph-bar {
  width: 3px;
  border-radius: 2px;
  background: #ffffff;
  transform-origin: bottom;
  animation: pulse 3s ease-in-out infinite;
}

.bar-1, .bar-5 {
  height: 10px;
  opacity: 0.6;
}

.bar-2, .bar-4 {
  height: 15px;
  opacity: 0.8;
  animation-delay: 0.12s;
}

.bar-3 {
  height: 20px;
  opacity: 1;
  animation-delay: 0.24s;
}

@keyframes pulse {
  0%, 100% {
    transform: scaleY(0.85);
  }
  50% {
    transform: scaleY(1.05);
  }
}

.glyph-label {
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
}
</style>
