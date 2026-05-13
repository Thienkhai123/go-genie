<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const memberKeys = ['ceo', 'cto', 'lead', 'design'] as const;

const avatarColors = [
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
];

const members = computed(() =>
  memberKeys.map((key, i) => ({
    key,
    name: t(`team.members.${key}.name`),
    role: t(`team.members.${key}.role`),
    color: avatarColors[i],
    initials: t(`team.members.${key}.name`)
      .split(' ')
      .map((n: string) => n[0])
      .slice(-2)
      .join(''),
  })),
);
</script>

<template>
  <section id="team" class="py-20 bg-white" aria-labelledby="team-title">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          {{ t('team.subtitle') }}
        </p>
        <h2
          id="team-title"
          class="mt-2 text-3xl sm:text-4xl font-bold text-gray-900"
        >
          {{ t('team.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in members"
          :key="member.key"
          class="text-center group"
        >
          <div
            :class="[
              'w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold',
              member.color,
              'group-hover:scale-105 transition-transform duration-300',
            ]"
          >
            {{ member.initials }}
          </div>
          <h3 class="font-bold text-gray-900">{{ member.name }}</h3>
          <p class="text-blue-600 text-sm mt-1">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
