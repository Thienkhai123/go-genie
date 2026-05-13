<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { availableLocales } from '@/locales';
import usFlag from '@/assets/images/us.png';
import vnFlag from '@/assets/images/OIP.webp';

defineProps<{ isScrolled: boolean }>();

const { locale } = useI18n();
const isOpen = ref(false);
const container = ref<HTMLElement | null>(null);

const currentLocale = () =>
  availableLocales.find((l) => l.code === locale.value);

function switchLocale(code: string) {
  locale.value = code;
  localStorage.setItem('locale', code);
  isOpen.value = false;
}

function onClickOutside(e: MouseEvent) {
  if (container.value && !container.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside));
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside));
</script>

<template>
  <div class="relative" ref="container">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-white/90 hover:text-white transition-colors cursor-pointer"
      aria-haspopup="listbox"
    >
      <!-- Flag icon -->
      <span v-if="currentLocale()?.code === 'en'" class="flex items-center">
        <img :src="usFlag" alt="EN" class="w-5 h-4 object-cover rounded-sm" />
      </span>
      <span v-else class="flex items-center">
        <img :src="vnFlag" alt="VN" class="w-5 h-4 object-cover rounded-sm" />
      </span>

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
          'w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors cursor-pointer',
          locale === loc.code ? 'text-blue-600 font-medium' : 'text-gray-700',
        ]"
        style="font-size: 13px"
        role="option"
      >
        <img
          v-if="loc.code === 'en'"
          :src="usFlag"
          alt="EN"
          class="w-5 h-4 object-cover rounded-sm shrink-0"
        />
        <span v-else class="flex items-center">
          <img
            :src="vnFlag"
            alt="VN"
            class="w-5 h-4 object-cover rounded-sm shrink-0"
          />
        </span>
        <span>{{ loc.label }}</span>
      </button>
    </div>
  </div>
</template>
