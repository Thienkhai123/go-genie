<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import AboutSection from '@/components/sections/AboutSection.vue';
import TeamSection from '@/components/sections/TeamSection.vue';

const { t, locale } = useI18n();

useHead({
  title: () => `${t('nav.about')} - CompanyName`,
  meta: [{ name: 'description', content: () => t('about.description') }],
  htmlAttrs: { lang: () => locale.value },
});
</script>

<template>
  <main class="pt-16">
    <AboutSection />
    <TeamSection />
  </main>
</template>
