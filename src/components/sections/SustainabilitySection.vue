<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const features = computed(() => [
  {
    key: 'data',
    emoji: '📊',
    title: t('sustainability.features.data.title'),
    description: t('sustainability.features.data.description'),
  },
  {
    key: 'scalable',
    emoji: '🚛',
    title: t('sustainability.features.scalable.title'),
    description: t('sustainability.features.scalable.description'),
  },
  {
    key: 'impact',
    emoji: '🌍',
    title: t('sustainability.features.impact.title'),
    description: t('sustainability.features.impact.description'),
  },
]);
</script>

<template>
  <section class="py-20 bg-white" aria-labelledby="sustain-title">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2
          id="sustain-title"
          class="text-3xl sm:text-4xl font-bold text-gray-800"
        >
          {{ t('sustainability.title') }}
          <span class="text-blue-500">
            {{ t('sustainability.titleHighlight') }}</span
          >
        </h2>
        <p class="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          {{ t('sustainability.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div v-for="feature in features" :key="feature.key" class="text-center">
          <!-- 3D-style emoji illustration -->
          <div class="text-7xl mb-6 flex justify-center">
            <span class="drop-shadow-lg">{{ feature.emoji }}</span>
          </div>
          <h3 class="font-semibold text-gray-800 text-base mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
