<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="py-20 bg-[#f0f6fb]" aria-label="Call to action">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
        <!-- City illustration top -->
        <div
          class="bg-gradient-to-b from-[#e8f4fb] to-white px-8 pt-10 pb-4 flex justify-center"
        >
          <div class="grid grid-cols-4 gap-4 max-w-lg">
            <div v-for="i in 8" :key="i" class="flex flex-col items-center">
              <div
                class="rounded-xl flex items-center justify-center text-2xl shadow-sm"
                :style="`width: 64px; height: 64px; background: linear-gradient(135deg, #e0f2fe, #bae6fd); transform: translateY(${i % 2 === 0 ? '-6px' : '0px'})`"
              >
                {{ ['🏢', '🏭', '🗼', '🚛', '🏬', '🏪', '🏗️', '🏦'][i - 1] }}
              </div>
            </div>
          </div>
        </div>

        <!-- Text content -->
        <div class="text-center px-8 pb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">
            {{ t('cta.title') }}
            <span class="block text-blue-500">{{
              t('cta.titleHighlight')
            }}</span>
          </h2>
          <p
            class="mt-4 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed"
          >
            {{ t('cta.description') }}
          </p>
          <a
            href="#"
            class="mt-6 inline-block px-6 py-2.5 border border-blue-400 text-blue-500 font-medium rounded-full hover:bg-blue-50 transition-colors text-sm"
          >
            {{ t('cta.button') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
