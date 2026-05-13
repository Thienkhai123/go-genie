<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollReveal } from '@/composables/useScrollReveal';

import imgTrack from '@/assets/images/Image Container.png';
import imgReports from '@/assets/images/Reports Image.png';
import imgShowcase from '@/assets/images/upscale_image [Upscaled].png';

const { t } = useI18n();

const headerRef = ref<HTMLElement | null>(null);
const row0 = ref<HTMLElement | null>(null);
const row1 = ref<HTMLElement | null>(null);
const row2 = ref<HTMLElement | null>(null);

useScrollReveal([headerRef, row0, row1, row2]);

const features = computed(() => [
  {
    key: 'track',
    image: imgTrack,
    title: t('reporting.features.track.title'),
    description: t('reporting.features.track.description'),
  },
  {
    key: 'reports',
    image: imgReports,
    title: t('reporting.features.reports.title'),
    description: t('reporting.features.reports.description'),
  },
  {
    key: 'showcase',
    image: imgShowcase,
    title: t('reporting.features.showcase.title'),
    description: t('reporting.features.showcase.description'),
  },
]);
</script>

<template>
  <section class="py-20 bg-[#f0f6fb]" aria-labelledby="reporting-title">
    <div class="mx-auto px-4 sm:px-6 lg:px-8" style="max-width: 1084px">
      <!-- Header -->
      <div ref="headerRef" class="reveal text-center mb-14">
        <h2
          id="reporting-title"
          class="text-2xl sm:text-3xl"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            line-height: 1.2;
            color: #1f2937;
          "
        >
          {{ t('reporting.title') }}
          <span class="block" style="color: #3f89bd">{{
            t('reporting.titleHighlight')
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
          {{ t('reporting.description') }}
        </p>
      </div>

      <!-- Stacked feature cards -->
      <div class="space-y-4">
        <div
          v-for="(feature, i) in features"
          :key="feature.key"
          :ref="
            (el) => {
              if (i === 0) row0 = el as HTMLElement;
              else if (i === 1) row1 = el as HTMLElement;
              else row2 = el as HTMLElement;
            }
          "
          :class="[
            'reveal card-hover bg-white rounded-2xl',
            i === 1 ? 'delay-200' : i === 2 ? 'delay-300' : '',
          ]"
          style="
            border: 1px solid rgba(10, 99, 161, 0.25);
            box-shadow:
              5px 8px 9px 0 rgba(10, 99, 161, 0.08),
              inset -8px -8px 16px 0 rgba(3, 106, 177, 0.07);
          "
        >
          <!-- Mobile: stacked layout -->
          <div class="flex flex-col sm:hidden p-6 gap-4">
            <h3
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                font-size: 22px;
                color: #1f2937;
              "
            >
              {{ feature.title }}
            </h3>
            <p
              style="
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                color: #6b7280;
                line-height: 1.6;
              "
            >
              {{ feature.description }}
            </p>
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-full rounded-xl object-contain"
              style="max-height: 200px"
            />
          </div>

          <!-- Desktop: side-by-side with overflow image -->
          <div
            class="hidden sm:flex items-center justify-between"
            style="
              padding: 24px 32px;
              min-height: 200px;
              max-height: 200px;
              overflow: visible;
              position: relative;
            "
          >
            <!-- Text -->
            <div class="flex-1">
              <h3
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 700;
                  font-size: 30px;
                  color: #1f2937;
                  margin-bottom: 10px;
                "
              >
                {{ feature.title }}
              </h3>
              <p
                style="
                  font-family: 'Inter', sans-serif;
                  font-size: 18px;
                  color: #6b7280;
                  line-height: 1.6;
                  max-width: 280px;
                "
              >
                {{ feature.description }}
              </p>
            </div>

            <!-- Illustration: overflow above card -->
            <div
              class="shrink-0"
              style="
                width: 340px;
                height: 300px;
                position: absolute;
                right: 24px;
                bottom: 0;
              "
            >
              <img
                :src="feature.image"
                :alt="feature.title"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  object-position: bottom;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
