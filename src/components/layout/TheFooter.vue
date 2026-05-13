<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const footerColumns = [
  {
    titleKey: 'footer.services',
    links: [
      { key: 'footer.lastMile', href: '#' },
      { key: 'footer.warehousing', href: '#' },
      { key: 'footer.fulfilment', href: '#' },
    ],
  },
  {
    titleKey: 'footer.solutions',
    links: [
      { key: 'footer.merchants', href: '#' },
      { key: 'footer.serviceProviders', href: '#' },
      { key: 'footer.gigWorkers', href: '#' },
    ],
  },
  {
    titleKey: 'footer.about',
    links: [
      { key: 'footer.goGenie', href: '#' },
      { key: 'footer.ecosystem', href: '#' },
      { key: 'footer.sustainabilityLink', href: '#' },
      { key: 'footer.newsroom', href: '#' },
    ],
  },
  {
    titleKey: 'footer.helpGuides',
    links: [
      { key: 'footer.helpCenter', href: '#' },
      { key: 'footer.contactUs', href: '#' },
    ],
  },
  {
    titleKey: 'footer.quickLinks',
    links: [
      { key: 'footer.privacy', href: '#' },
      { key: 'footer.terms', href: '#' },
      { key: 'footer.dataRetention', href: '#' },
    ],
  },
];

// Social icons paths
const socials = [
  {
    name: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z',
  },
  {
    name: 'TikTok',
    href: '#',
    path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.02-.07z',
  },
  {
    name: 'X',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];
</script>

<template>
  <footer class="bg-[#2196c4] text-white">
    <!-- Main footer links -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <!-- Logo -->
      <div class="mb-6">
        <span class="text-white font-black text-2xl tracking-wide"
          >GO-GENIE</span
        >
      </div>

      <hr class="border-white/20 mb-8" />

      <!-- Nav columns -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
        <div v-for="col in footerColumns" :key="col.titleKey">
          <h4 class="font-semibold text-white text-sm mb-4">
            {{ t(col.titleKey) }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.key">
              <a
                :href="link.href"
                class="text-white/75 hover:text-white text-sm transition-colors"
              >
                {{ t(link.key) }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="border-white/20 mb-6" />

      <!-- Addresses + Social -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        <p class="text-white/80 text-xs leading-relaxed">
          {{ t('footer.sgAddress') }}
        </p>
        <p class="text-white/80 text-xs leading-relaxed">
          {{ t('footer.vnAddress') }}
        </p>
        <div>
          <p class="text-white/80 text-xs mb-3">{{ t('footer.followUs') }}</p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="social.path"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Awards & Chambers section -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Left: text -->
          <div>
            <h4 class="font-bold text-gray-800 text-sm mb-3">
              {{ t('footer.awards') }}
            </h4>
            <ul class="space-y-1 mb-6">
              <li class="text-gray-600 text-xs">{{ t('footer.award1') }}</li>
              <li class="text-gray-600 text-xs">{{ t('footer.award2') }}</li>
              <li class="text-gray-600 text-xs">{{ t('footer.award3') }}</li>
            </ul>
            <h4 class="font-bold text-gray-800 text-sm mb-3">
              {{ t('footer.chambers') }}
            </h4>
            <ul class="space-y-2">
              <li class="text-gray-600 text-xs">{{ t('footer.chamber1') }}</li>
              <li class="text-gray-600 text-xs">{{ t('footer.chamber2') }}</li>
            </ul>
          </div>

          <!-- Right: award logos placeholder -->
          <div
            class="flex flex-wrap items-center gap-6 justify-start lg:justify-end"
          >
            <!-- Singapore Prestige Brand Award -->
            <div class="flex flex-col items-center text-center w-24">
              <div
                class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md mb-1"
              >
                <span
                  class="text-white text-xs font-bold text-center leading-tight px-1"
                  >SPBA 2025</span
                >
              </div>
              <span class="text-gray-500 text-[10px] leading-tight"
                >Singapore Prestige Brand Award</span
              >
            </div>

            <!-- Brands for Good -->
            <div class="flex items-center gap-1">
              <span class="text-2xl font-black text-gray-700 italic"
                >BRANDS</span
              >
              <div class="flex flex-col">
                <span class="text-xs text-gray-500 italic">for</span>
                <span class="text-2xl font-black text-green-600 italic"
                  >GOOD</span
                >
              </div>
            </div>

            <!-- SCCCI logo placeholder -->
            <div
              class="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center"
            >
              <span
                class="text-red-500 text-[9px] font-bold text-center leading-tight px-1"
                >SCCCI</span
              >
            </div>

            <!-- SBF logo placeholder -->
            <div class="flex items-center">
              <span class="text-3xl font-black text-blue-500 tracking-tight"
                >SBF</span
              >
              <span class="text-blue-500 text-xl font-black">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 py-4 text-center">
        <p class="text-gray-500 text-xs">{{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
