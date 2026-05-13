<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import ContactSection from '@/components/sections/ContactSection.vue';

const { t, locale } = useI18n();

useHead({
  title: () => `${t('nav.contact')} - CompanyName`,
  meta: [{ name: 'description', content: () => t('contact.subtitle') }],
  htmlAttrs: { lang: () => locale.value },
});
</script>

<template>
  <main class="pt-16">
    <ContactSection />
  </main>
</template>
