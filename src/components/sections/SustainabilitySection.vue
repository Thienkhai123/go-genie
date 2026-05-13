<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollReveal } from '@/composables/useScrollReveal';

import imgData from '@/assets/images/visual_monitor environmental impact.png';
import imgScalable from '@/assets/images/visual_green fleet.png';
import imgImpact from '@/assets/images/visual_environmental impact_1.png';

const { t } = useI18n();

const headerRef = ref<HTMLElement | null>(null);
const col0 = ref<HTMLElement | null>(null);
const col1 = ref<HTMLElement | null>(null);
const col2 = ref<HTMLElement | null>(null);

useScrollReveal([headerRef, col0, col1, col2]);

const features = computed(() => [
  {
    key: 'data',
    image: imgData,
    title: t('sustainability.features.data.title'),
    description: t('sustainability.features.data.description'),
  },
  {
    key: 'scalable',
    image: imgScalable,
    title: t('sustainability.features.scalable.title'),
    description: t('sustainability.features.scalable.description'),
  },
  {
    key: 'impact',
    image: imgImpact,
    title: t('sustainability.features.impact.title'),
    description: t('sustainability.features.impact.description'),
  },
]);
</script>

<template>
  <section class="py-[72px] bg-white" aria-labelledby="sustain-title">
    <div class="mx-auto px-4 sm:px-6 lg:px-8" style="max-width: 1084px">
      <!-- Header -->
      <div ref="headerRef" class="reveal text-center mb-14">
        <h2
          id="sustain-title"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            font-size: 32px;
            color: #1f2937;
            line-height: 1.3;
          "
        >
          {{ t('sustainability.title') }}
          <span style="color: #3f89bd">{{
            t('sustainability.titleHighlight')
          }}</span>
        </h2>
        <p
          class="mt-4 max-w-xl mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            color: #6b7280;
          "
        >
          {{ t('sustainability.description') }}
        </p>
      </div>

      <!-- 3-column grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div
          v-for="(feature, i) in features"
          :key="feature.key"
          :ref="
            (el) => {
              if (i === 0) col0 = el as HTMLElement;
              else if (i === 1) col1 = el as HTMLElement;
              else col2 = el as HTMLElement;
            }
          "
          :class="[
            'reveal text-center flex flex-col items-center',
            i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : 'delay-100',
          ]"
        >
          <!-- Illustration -->
          <div class="mb-6">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-32 h-32 sm:w-40 sm:h-40 md:w-[206px] md:h-[206px] object-contain mx-auto"
            />
          </div>

          <!-- Title -->
          <h3
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 16px;
              color: #1f2937;
              margin-bottom: 8px;
            "
          >
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p
            style="
              font-family: 'Inter', sans-serif;
              font-size: 15px;
              color: #6b7280;
              line-height: 1.6;
              max-width: 220px;
            "
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
