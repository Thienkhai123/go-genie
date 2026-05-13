<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue';

const { t } = useI18n();

const activeDropdown = ref<string | null>(null);
const isMobileOpen = ref(false);
const isScrolled = ref(false);

function onScroll() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function toggleDropdown(key: string) {
  activeDropdown.value = activeDropdown.value === key ? null : key;
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
    class="fixed top-0 left-0 right-0 z-50"
    :style="
      isScrolled ? 'background-color: #3f89bd' : 'background-color: transparent'
    "
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center h-14 gap-8">
        <!-- Logo -->
        <router-link to="/" class="shrink-0">
          <span
            class="text-white font-black tracking-wide"
            style="font-size: 27px; letter-spacing: 0.02em"
            >GO-GENIE</span
          >
        </router-link>

        <!-- Desktop Nav links -->
        <div
          class="hidden lg:flex items-center gap-0 flex-1"
          @mouseleave="activeDropdown = null"
        >
          <div
            v-for="item in navItems"
            :key="item.key"
            class="relative"
            @mouseenter="activeDropdown = item.key"
          >
            <button
              class="flex items-center gap-1 px-3 py-2 text-white hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer"
              style="font-size: 13px"
            >
              {{ item.label() }}
              <svg
                class="w-3 h-3 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              v-if="activeDropdown === item.key"
              class="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
            >
              <a
                v-for="child in item.children"
                :key="child.href"
                :href="child.href"
                class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                style="font-size: 13px"
              >
                {{ child.label() }}
              </a>
            </div>
          </div>
        </div>

        <!-- Spacer -->
        <div class="flex-1 hidden lg:block" />

        <!-- Right actions -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Track Your Parcel button -->
          <a
            href="#"
            class="px-4 py-1.5 border border-white text-white font-medium rounded hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
            style="font-size: 13px"
          >
            {{ t('nav.trackParcel') }}
          </a>

          <!-- Sign In button -->
          <a
            href="#"
            class="px-4 py-1.5 bg-white font-medium rounded hover:bg-white/90 transition-colors cursor-pointer"
            style="font-size: 13px; color: #3f89bd"
          >
            {{ t('nav.signIn') }}
          </a>

          <!-- Language switcher with flag -->
          <LanguageSwitcher :is-scrolled="false" />
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden ml-auto p-2 text-white cursor-pointer"
          @click="isMobileOpen = !isMobileOpen"
          aria-label="Toggle menu"
        >
          <svg
            class="w-5 h-5"
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
        class="lg:hidden border-t border-white/20 py-3 space-y-1"
      >
        <div v-for="item in navItems" :key="item.key">
          <button
            class="w-full flex items-center justify-between px-4 py-2 text-white cursor-pointer"
            style="font-size: 13px"
            @click="toggleDropdown(item.key)"
          >
            {{ item.label() }}
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
          <div v-if="activeDropdown === item.key" class="pl-6">
            <a
              v-for="child in item.children"
              :key="child.href"
              :href="child.href"
              class="block px-4 py-1.5 text-white/80 hover:text-white cursor-pointer"
              style="font-size: 13px"
            >
              {{ child.label() }}
            </a>
          </div>
        </div>
        <div
          class="px-4 pt-3 flex items-center gap-2 border-t border-white/20 mt-2"
        >
          <a
            href="#"
            class="px-4 py-1.5 border border-white text-white rounded"
            style="font-size: 13px"
          >
            {{ t('nav.trackParcel') }}
          </a>
          <a
            href="#"
            class="px-4 py-1.5 border text-white rounded"
            style="font-size: 13px"
          >
            {{ t('nav.signIn') }}
          </a>
          <LanguageSwitcher :is-scrolled="false" />
        </div>
      </div>
    </nav>
  </header>
</template>
