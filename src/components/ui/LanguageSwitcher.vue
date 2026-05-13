<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { availableLocales } from '@/locales';

defineProps<{ isScrolled: boolean }>();

const { locale } = useI18n();
const isOpen = ref(false);

const currentLocale = () =>
  availableLocales.find((l) => l.code === locale.value);

function switchLocale(code: string) {
  locale.value = code;
  localStorage.setItem('locale', code);
  isOpen.value = false;
}
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1.5 text-sm font-medium px-2 py-1.5 rounded-md text-white/90 hover:text-white transition-colors"
      aria-haspopup="listbox"
    >
      <span>{{ currentLocale()?.flag }}</span>
      <svg
        class="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
      role="listbox"
    >
      <button
        v-for="loc in availableLocales"
        :key="loc.code"
        @click="switchLocale(loc.code)"
        :class="[
          'w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors',
          locale === loc.code ? 'text-blue-600 font-medium' : 'text-gray-700',
        ]"
        role="option"
      >
        <span>{{ loc.flag }}</span>
        <span>{{ loc.label }}</span>
      </button>
    </div>
  </div>
</template>
