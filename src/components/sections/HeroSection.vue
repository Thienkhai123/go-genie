<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-0 overflow-hidden"
    style="
      background: linear-gradient(
        160deg,
        #1a6fa8 0%,
        #2196c4 40%,
        #5bb8d4 70%,
        #a8d8ea 100%
      );
    "
    aria-label="Hero"
  >
    <!-- Text content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto pt-8">
      <h1
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
      >
        {{ t('hero.title') }}
      </h1>
      <p class="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
        {{ t('hero.description') }}
      </p>
      <a
        href="#"
        class="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/50 text-white font-medium rounded-full transition-colors duration-200 backdrop-blur-sm"
      >
        {{ t('hero.cta') }}
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>

    <!-- 3D city illustration placeholder -->
    <div class="relative z-10 w-full max-w-5xl mx-auto mt-12 px-4">
      <div
        class="w-full aspect-[16/7] rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <!-- Isometric city grid illustration using CSS/SVG -->
        <div class="w-full h-full relative flex items-end justify-center pb-4">
          <!-- Floating building tiles -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="grid grid-cols-4 gap-6 opacity-90">
              <div
                v-for="i in 8"
                :key="i"
                class="w-24 h-24 rounded-xl flex items-center justify-center text-4xl"
                :style="`background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); transform: rotate(-5deg) translateY(${i % 2 === 0 ? '-8px' : '8px'})`"
              >
                {{ ['🏢', '🏭', '🏗️', '🚛', '🏬', '🏪', '🗼', '🏦'][i - 1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
