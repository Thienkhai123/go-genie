<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollReveal } from '@/composables/useScrollReveal';
import sceneryImg from '@/assets/images/scenery.png';

const { t } = useI18n();

const headerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
const descRef = ref<HTMLElement | null>(null);

useScrollReveal([headerRef, imageRef, descRef]);
</script>

<template>
  <section
    class="py-16"
    style="background-color: #f9fafa"
    aria-labelledby="vision-title"
  >
    <!-- Label + Title -->
    <div ref="headerRef" class="reveal text-center px-4">
      <p class="font-medium" style="font-size: 16px; color: #3f89bd">
        {{ t('vision.label') }}
      </p>
      <h2
        id="vision-title"
        class="font-bold text-gray-800 mt-2"
        style="font-size: 36px; line-height: 1.2"
      >
        {{ t('vision.title') }}
      </h2>
    </div>

    <!-- Image -->
    <div
      ref="imageRef"
      class="reveal delay-200 mx-auto mt-8 px-4"
      style="max-width: 1002px"
    >
      <div class="overflow-hidden w-full" style="border-radius: 32px">
        <img
          :src="sceneryImg"
          alt="GO-GENIE sustainability scenery"
          class="w-full object-cover"
          style="height: 567px"
        />
      </div>
    </div>

    <!-- Description box -->
    <div
      ref="descRef"
      class="reveal delay-300 mx-auto px-4"
      style="max-width: 1084px"
    >
      <div
        class="text-center text-gray-600 w-full"
        style="
          background: #ffffff;
          border: 1px solid rgba(10, 99, 161, 0.25);
          border-radius: 16px;
          padding: 24px;
          font-size: 18px;
          line-height: 1.4;
        "
      >
        {{ t('vision.description') }}
      </div>
    </div>
  </section>
</template>
