<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center px-4">
      <div class="text-8xl font-bold text-blue-600 mb-4">404</div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        {{ locale === 'vi' ? 'Trang không tồn tại' : 'Page Not Found' }}
      </h1>
      <p class="text-gray-600 mb-8">
        {{
          locale === 'vi'
            ? 'Trang bạn tìm kiếm không tồn tại.'
            : 'The page you are looking for does not exist.'
        }}
      </p>
      <router-link
        to="/"
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
      >
        {{ locale === 'vi' ? 'Về trang chủ' : 'Back to Home' }}
      </router-link>
    </div>
  </main>
</template>
