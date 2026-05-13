<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref({ name: '', email: '', phone: '', message: '' });
const submitted = ref(false);
const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800));
  submitted.value = true;
  loading.value = false;
  form.value = { name: '', email: '', phone: '', message: '' };
}

const contactInfo = [
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    key: 'address',
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    key: 'phone',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    key: 'email',
  },
];
</script>

<template>
  <section
    id="contact"
    class="py-20 bg-gray-50"
    aria-labelledby="contact-title"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          {{ t('contact.subtitle') }}
        </p>
        <h2
          id="contact-title"
          class="mt-2 text-3xl sm:text-4xl font-bold text-gray-900"
        >
          {{ t('contact.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div
            v-for="info in contactInfo"
            :key="info.key"
            class="flex items-start gap-4"
          >
            <div
              class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0"
            >
              <svg
                class="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="info.icon"
                />
              </svg>
            </div>
            <div>
              <p class="font-semibold text-gray-900">
                {{ t(`contact.${info.key}`) }}
              </p>
              <p class="text-gray-600 text-sm mt-0.5">
                {{ t(`contact.${info.key}Value`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-white rounded-2xl p-8 shadow-sm space-y-4"
        >
          <div
            v-if="submitted"
            class="bg-green-50 text-green-700 rounded-xl p-4 text-sm font-medium"
          >
            ✓ {{ t('contact.success') }}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 mb-1"
                for="name"
              >
                {{ t('contact.name') }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                :placeholder="t('contact.namePlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 mb-1"
                for="phone"
              >
                {{ t('contact.phone') }}
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                :placeholder="t('contact.phonePlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 mb-1"
              for="email"
            >
              {{ t('contact.email') }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :placeholder="t('contact.emailPlaceholder')"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 mb-1"
              for="message"
            >
              {{ t('contact.message') }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              :placeholder="t('contact.messagePlaceholder')"
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors duration-200"
          >
            {{ loading ? '...' : t('contact.send') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
