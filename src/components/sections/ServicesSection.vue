<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const serviceIcons: Record<string, string> = {
  web: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  mobile:
    'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  cloud:
    'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  ai: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  security:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  consulting:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
};

const serviceKeys = [
  'web',
  'mobile',
  'cloud',
  'ai',
  'security',
  'consulting',
] as const;

const services = computed(() =>
  serviceKeys.map((key) => ({
    key,
    icon: serviceIcons[key],
    title: t(`services.items.${key}.title`),
    description: t(`services.items.${key}.description`),
  })),
);
</script>

<template>
  <section
    id="services"
    class="py-20 bg-gray-50"
    aria-labelledby="services-title"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          {{ t('services.subtitle') }}
        </p>
        <h2
          id="services-title"
          class="mt-2 text-3xl sm:text-4xl font-bold text-gray-900"
        >
          {{ t('services.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="service in services"
          :key="service.key"
          class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
        >
          <div
            class="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
          >
            <svg
              class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              :aria-label="service.title"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="service.icon"
              />
            </svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
