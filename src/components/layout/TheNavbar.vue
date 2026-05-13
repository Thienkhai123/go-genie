<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue';

const { t } = useI18n();

const activeDropdown = ref<string | null>(null);
const isMobileOpen = ref(false);

function toggleDropdown(key: string) {
  activeDropdown.value = activeDropdown.value === key ? null : key;
}

function closeAll() {
  activeDropdown.value = null;
}

const navItems = [
  {
    key: 'services',
    label: () => t('nav.services'),
    children: [
      { label: () => t('nav.servicesMenu.lastMile'), href: '#' },
      { label: () => t('nav.servicesMenu.warehousing'), href: '#' },
      { label: () => t('nav.servicesMenu.fulfilment'), href: '#' },
    ],
  },
  {
    key: 'solutions',
    label: () => t('nav.solutions'),
    children: [
      { label: () => t('nav.solutionsMenu.merchants'), href: '#' },
      { label: () => t('nav.solutionsMenu.serviceProviders'), href: '#' },
      { label: () => t('nav.solutionsMenu.gigWorkers'), href: '#' },
    ],
  },
  {
    key: 'about',
    label: () => t('nav.about'),
    children: [
      { label: () => t('nav.aboutMenu.goGenie'), href: '#' },
      { label: () => t('nav.aboutMenu.ecosystem'), href: '#' },
      { label: () => t('nav.aboutMenu.sustainability'), href: '#' },
      { label: () => t('nav.aboutMenu.newsroom'), href: '#' },
    ],
  },
  {
    key: 'help',
    label: () => t('nav.helpGuides'),
    children: [
      { label: () => t('nav.helpMenu.helpCenter'), href: '#' },
      { label: () => t('nav.helpMenu.contactUs'), href: '#' },
    ],
  },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a6fa8] to-[#2196c4]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <span class="text-white font-black text-xl tracking-wide"
            >GO-GENIE</span
          >
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-1" @mouseleave="closeAll">
          <div
            v-for="item in navItems"
            :key="item.key"
            class="relative"
            @mouseenter="activeDropdown = item.key"
          >
            <button
              class="flex items-center gap-1 px-3 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {{ item.label() }}
              <svg
                class="w-3.5 h-3.5 mt-0.5"
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

            <!-- Dropdown -->
            <div
              v-if="activeDropdown === item.key"
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
            >
              <a
                v-for="child in item.children"
                :key="child.href"
                :href="child.href"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {{ child.label() }}
              </a>
            </div>
          </div>
        </div>

        <!-- Right actions -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#"
            class="px-4 py-1.5 border border-white/70 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            {{ t('nav.trackParcel') }}
          </a>
          <a
            href="#"
            class="px-4 py-1.5 text-white text-sm font-medium hover:text-white/80 transition-colors"
          >
            {{ t('nav.signIn') }}
          </a>
          <LanguageSwitcher :is-scrolled="false" />
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden p-2 text-white"
          @click="isMobileOpen = !isMobileOpen"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMobileOpen"
        class="lg:hidden bg-[#1a6fa8] border-t border-white/20 py-4 space-y-1"
      >
        <div v-for="item in navItems" :key="item.key">
          <button
            class="w-full flex items-center justify-between px-4 py-2 text-white text-sm font-medium"
            @click="toggleDropdown(item.key)"
          >
            {{ item.label() }}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === item.key" class="pl-6 space-y-1">
            <a
              v-for="child in item.children"
              :key="child.href"
              :href="child.href"
              class="block px-4 py-1.5 text-white/80 text-sm hover:text-white"
            >
              {{ child.label() }}
            </a>
          </div>
        </div>
        <div
          class="px-4 pt-3 flex items-center gap-3 border-t border-white/20 mt-2"
        >
          <a
            href="#"
            class="px-4 py-1.5 border border-white/70 text-white text-sm rounded-full"
          >
            {{ t('nav.trackParcel') }}
          </a>
          <a href="#" class="text-white text-sm">{{ t('nav.signIn') }}</a>
          <LanguageSwitcher :is-scrolled="false" />
        </div>
      </div>
    </nav>
  </header>
</template>
