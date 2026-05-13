<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import ServicesSection from '@/components/sections/ServicesSection.vue';

const { t, locale } = useI18n();

useHead({
  title: () => `${t('nav.services')} - CompanyName`,
  meta: [{ name: 'description', content: () => t('services.subtitle') }],
  htmlAttrs: { lang: () => locale.value },
});
</script>

<template>
  <main class="pt-16">
    <ServicesSection />
  </main>
</template>
