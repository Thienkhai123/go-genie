<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const features = computed(() => [
  {
    key: 'track',
    emoji: '👨‍💼',
    bg: 'from-teal-50 to-blue-50',
    title: t('reporting.features.track.title'),
    description: t('reporting.features.track.description'),
  },
  {
    key: 'reports',
    emoji: '🧑‍💻',
    bg: 'from-blue-50 to-indigo-50',
    title: t('reporting.features.reports.title'),
    description: t('reporting.features.reports.description'),
  },
  {
    key: 'showcase',
    emoji: '🚀',
    bg: 'from-indigo-50 to-purple-50',
    title: t('reporting.features.showcase.title'),
    description: t('reporting.features.showcase.description'),
  },
]);
</script>

<template>
  <section class="py-20 bg-[#f0f6fb]" aria-labelledby="reporting-title">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2
          id="reporting-title"
          class="text-3xl sm:text-4xl font-bold text-gray-800"
        >
          {{ t('reporting.title') }}
          <span class="block text-blue-500">{{
            t('reporting.titleHighlight')
          }}</span>
        </h2>
        <p class="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          {{ t('reporting.description') }}
        </p>
      </div>

      <!-- Stacked feature cards -->
      <div class="space-y-4">
        <div
          v-for="feature in features"
          :key="feature.key"
          :class="[
            'bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between gap-6 hover:shadow-md transition-shadow',
          ]"
        >
          <div class="flex-1">
            <h3 class="font-bold text-gray-800 text-lg mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
              {{ feature.description }}
            </p>
          </div>
          <!-- Illustration -->
          <div
            :class="[
              'w-32 h-28 rounded-xl flex items-center justify-center text-6xl shrink-0 bg-gradient-to-br',
              feature.bg,
            ]"
          >
            {{ feature.emoji }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
