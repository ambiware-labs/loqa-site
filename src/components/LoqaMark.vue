<template>
  <div class="loqa-mark">
    <div class="wave-circle">
      <div class="wave-bars">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
    <span class="loqa-wordmark">Loqa</span>
  </div>
</template>

<style scoped>
.loqa-mark {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.wave-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35), rgba(0, 188, 212, 0.05));
  border: 6px solid rgba(0, 188, 212, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.15);
}

.wave-bars {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
}

.wave-bars .bar {
  width: 6px;
  border-radius: 3px;
  background: #ffffff;
  animation: breathe 2.8s ease-in-out infinite;
}

.wave-bars .bar:nth-child(1),
.wave-bars .bar:nth-child(5) {
  height: 14px;
  opacity: 0.65;
  animation-delay: 0s;
}

.wave-bars .bar:nth-child(2),
.wave-bars .bar:nth-child(4) {
  height: 26px;
  opacity: 0.85;
  animation-delay: 0.12s;
}

.wave-bars .bar:nth-child(3) {
  height: 36px;
  opacity: 1;
  animation-delay: 0.22s;
}

@keyframes breathe {
  0%, 100% {
    transform: scaleY(0.85);
  }
  50% {
    transform: scaleY(1.05);
  }
}

.loqa-wordmark {
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
}
</style>
