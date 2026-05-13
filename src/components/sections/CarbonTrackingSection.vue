<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollReveal } from '@/composables/useScrollReveal';

const { t } = useI18n();

const headerRef = ref<HTMLElement | null>(null);
const card0 = ref<HTMLElement | null>(null);
const card1 = ref<HTMLElement | null>(null);
const card2 = ref<HTMLElement | null>(null);
const ctaRef = ref<HTMLElement | null>(null);

useScrollReveal([headerRef, card0, card1, card2, ctaRef]);

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
  <section class="py-[72px] bg-white" aria-labelledby="carbon-title">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headerRef" class="reveal text-center mb-14">
        <h2
          id="carbon-title"
          class="text-2xl sm:text-3xl lg:text-4xl"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            line-height: 1.2;
            letter-spacing: 0px;
            color: #1f2937;
            text-align: center;
          "
        >
          {{ t('carbonTracking.title') }}
          <span class="block" style="color: #3f89bd">{{
            t('carbonTracking.titleHighlight')
          }}</span>
        </h2>
        <p
          class="mt-4 max-w-2xl mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.6;
            letter-spacing: 0px;
            text-align: center;
            color: #6b7280;
          "
        >
          {{ t('carbonTracking.description') }}
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(feature, i) in features"
          :key="feature.key"
          :ref="
            (el) => {
              if (i === 0) card0 = el as HTMLElement;
              else if (i === 1) card1 = el as HTMLElement;
              else card2 = el as HTMLElement;
            }
          "
          :class="[
            'reveal card-hover bg-white rounded-2xl p-6',
            i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : 'delay-100',
          ]"
          style="
            border: 1px solid rgba(10, 99, 161, 0.25);
            box-shadow:
              5px 8px 9px 0 rgba(10, 99, 161, 0.08),
              inset -8px -8px 16px 0 rgba(3, 106, 177, 0.07);
          "
        >
          <div
            :class="['flex items-center justify-center mb-4', feature.iconBg]"
            style="width: 54px; height: 54px; border-radius: 8px"
          >
            <svg
              :class="['w-6 h-6', feature.iconColor]"
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
          <h3
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 20px;
              line-height: 150%;
              letter-spacing: -0.02em;
              color: #1f2937;
              margin-bottom: 8px;
            "
          >
            {{ feature.title }}
          </h3>
          <p
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 15px;
              line-height: 1.6;
              color: #6b7280;
            "
          >
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div ref="ctaRef" class="reveal delay-300 text-center">
        <a
          href="#"
          class="inline-flex items-center gap-2 px-6 py-2.5 font-medium rounded-xl transition-colors text-sm"
          style="border: 1px solid #3f89bd; color: #3f89bd"
          onmouseover="this.style.background = '#eef4f9'"
          onmouseout="this.style.background = 'transparent'"
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
