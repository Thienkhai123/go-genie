<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import HeroSection from '@/components/sections/HeroSection.vue';
import VisionSection from '@/components/sections/VisionSection.vue';
import CarbonTrackingSection from '@/components/sections/CarbonTrackingSection.vue';
import SustainabilitySection from '@/components/sections/SustainabilitySection.vue';
import ReportingSection from '@/components/sections/ReportingSection.vue';
import CtaSection from '@/components/sections/CtaSection.vue';

const { t, locale } = useI18n();

useHead({
  title: () => `GO-GENIE® - ${t('hero.title')}`,
  meta: [
    { name: 'description', content: () => t('hero.description') },
    { property: 'og:title', content: 'GO-GENIE® - Logistics Carbon Footprint' },
    { property: 'og:description', content: () => t('hero.description') },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  htmlAttrs: { lang: () => locale.value },
});
</script>

<template>
  <main>
    <HeroSection />
    <VisionSection />
    <CarbonTrackingSection />
    <ReportingSection />
    <SustainabilitySection />
    <CtaSection />
  </main>
</template>
