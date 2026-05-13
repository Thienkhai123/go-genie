<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const features = computed(() => [
  {
    key: 'routes',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: t('carbonTracking.features.routes.title'),
    description: t('carbonTracking.features.routes.description'),
  },
  {
    key: 'monitor',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    title: t('carbonTracking.features.monitor.title'),
    description: t('carbonTracking.features.monitor.description'),
  },
  {
    key: 'goals',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: t('carbonTracking.features.goals.title'),
    description: t('carbonTracking.features.goals.description'),
  },
]);
</script>

<template>
  <section class="py-20 bg-white" aria-labelledby="carbon-title">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-14">
        <h2
          id="carbon-title"
          class="text-3xl sm:text-4xl font-bold text-gray-800"
        >
          {{ t('carbonTracking.title') }}
          <span class="block text-blue-500">{{
            t('carbonTracking.titleHighlight')
          }}</span>
        </h2>
        <p class="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          {{ t('carbonTracking.description') }}
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div
          v-for="feature in features"
          :key="feature.key"
          class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            :class="[
              'w-10 h-10 rounded-xl flex items-center justify-center mb-4',
              feature.iconBg,
            ]"
          >
            <svg
              :class="['w-5 h-5', feature.iconColor]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="feature.icon"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a
          href="#"
          class="inline-flex items-center gap-2 px-6 py-2.5 border border-blue-400 text-blue-500 font-medium rounded-full hover:bg-blue-50 transition-colors text-sm"
        >
          {{ t('carbonTracking.cta') }}
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
    </div>
  </section>
</template>
