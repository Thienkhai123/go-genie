<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="py-20 bg-[#f0f6fb]" aria-labelledby="vision-title">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-blue-500 text-sm font-semibold tracking-wide">
        {{ t('vision.label') }}
      </p>
      <h2
        id="vision-title"
        class="mt-2 text-3xl sm:text-4xl font-bold text-gray-800"
      >
        {{ t('vision.title') }}
      </h2>

      <!-- Illustration card -->
      <div
        class="mt-10 rounded-3xl overflow-hidden bg-gradient-to-b from-[#b8dff0] to-[#7ec8e3] relative"
        style="min-height: 320px"
      >
        <!-- Sky background with clouds and truck illustration -->
        <div class="absolute inset-0 flex items-center justify-center">
          <!-- Clouds -->
          <div
            class="absolute top-8 left-12 w-20 h-10 bg-white/80 rounded-full blur-sm opacity-90"
          />
          <div
            class="absolute top-6 left-16 w-28 h-12 bg-white/70 rounded-full blur-sm"
          />
          <div
            class="absolute top-10 right-16 w-24 h-11 bg-white/80 rounded-full blur-sm opacity-90"
          />
          <div
            class="absolute top-8 right-20 w-16 h-9 bg-white/70 rounded-full blur-sm"
          />

          <!-- Trees -->
          <div
            class="absolute bottom-0 left-0 right-0 flex justify-around items-end px-4"
          >
            <div v-for="i in 8" :key="i" class="flex flex-col items-center">
              <div
                class="rounded-full"
                :style="`width: ${20 + (i % 3) * 8}px; height: ${30 + (i % 3) * 12}px; background: #2a9d6e; opacity: 0.85`"
              />
              <div class="w-2 h-4 bg-[#8B6914]" />
            </div>
          </div>

          <!-- Road -->
          <div
            class="absolute bottom-8 left-0 right-0 h-10 bg-[#555] opacity-60"
          />
          <div class="absolute bottom-10 left-0 right-0 h-1 bg-white/30" />

          <!-- GO-GENIE Truck -->
          <div class="absolute bottom-10 left-1/4 transform -translate-x-1/2">
            <div class="relative">
              <div
                class="w-32 h-16 bg-[#3a8fc4] rounded-lg flex items-center justify-center shadow-lg"
              >
                <span class="text-white font-black text-xs tracking-wider"
                  >GO-GENIE</span
                >
              </div>
              <div
                class="absolute -bottom-3 left-3 w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-400"
              />
              <div
                class="absolute -bottom-3 right-3 w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-400"
              />
            </div>
          </div>

          <!-- Hot air balloon -->
          <div class="absolute top-6 right-1/3">
            <div
              class="w-16 h-16 rounded-full bg-[#2a9d6e] flex items-center justify-center shadow-lg border-4 border-[#1a7a52]"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"
                />
              </svg>
            </div>
            <div class="w-4 h-6 bg-[#f4c430] mx-auto mt-1 rounded-b-sm" />
          </div>
        </div>
      </div>

      <!-- Description -->
      <p
        class="mt-8 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
      >
        {{ t('vision.description') }}
      </p>
    </div>
  </section>
</template>
