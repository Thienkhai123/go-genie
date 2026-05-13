<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const stats = computed(() => [
  { value: '200+', label: t('about.stats.clients') },
  { value: '500+', label: t('about.stats.projects') },
  { value: '10+', label: t('about.stats.years') },
  { value: '50+', label: t('about.stats.team') },
]);
</script>

<template>
  <section id="about" class="py-20 bg-white" aria-labelledby="about-title">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          {{ t('about.subtitle') }}
        </p>
        <h2
          id="about-title"
          class="mt-2 text-3xl sm:text-4xl font-bold text-gray-900"
        >
          {{ t('about.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <p class="text-gray-600 text-lg leading-relaxed mb-8">
            {{ t('about.description') }}
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-xl p-5">
              <h3 class="font-bold text-gray-900 mb-2">
                {{ t('about.mission') }}
              </h3>
              <p class="text-gray-600 text-sm">{{ t('about.missionText') }}</p>
            </div>
            <div class="bg-indigo-50 rounded-xl p-5">
              <h3 class="font-bold text-gray-900 mb-2">
                {{ t('about.vision') }}
              </h3>
              <p class="text-gray-600 text-sm">{{ t('about.visionText') }}</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center"
          >
            <div class="text-4xl font-bold">{{ stat.value }}</div>
            <div class="mt-1 text-blue-100 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
