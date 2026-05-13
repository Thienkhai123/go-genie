<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ecosystemImg from '@/assets/images/ecosystem_horizontal.png';

const { t } = useI18n();
</script>

<template>
  <section
    class="relative flex flex-col items-center overflow-hidden pt-16"
    style="
      background: linear-gradient(
        180deg,
        #3f89bd 0%,
        #c8dfee 70%,
        #f9fafa 100%
      );
    "
    aria-label="Hero"
  >
    <!-- Text block -->
    <div
      class="relative z-10 text-center px-4 mx-auto pt-14 pb-10 w-full"
      style="max-width: 900px"
    >
      <h1
        class="hero-title font-bold text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
      >
        {{ t('hero.title') }}
      </h1>
      <p
        class="hero-desc mt-4 text-white/85 mx-auto text-sm sm:text-base md:text-lg"
        style="max-width: 640px"
      >
        {{ t('hero.description') }}
      </p>
      <a
        href="#"
        class="hero-cta mt-8 inline-flex items-center gap-2 font-semibold rounded-xl transition-colors duration-200 cursor-pointer text-sm sm:text-base"
        style="
          padding: 10px 22px;
          background: #e8f2fb;
          border: 2px solid #7ab8e0;
          color: #2a7ab8;
        "
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
            stroke-width="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>

    <!-- Hero image -->
    <div class="hero-image relative z-10 w-full">
      <img
        :src="ecosystemImg"
        alt="GO-GENIE logistics ecosystem illustration"
        class="w-full object-cover scale-110 origin-bottom"
      />
    </div>
  </section>
</template>
