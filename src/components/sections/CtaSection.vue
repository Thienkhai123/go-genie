<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollReveal } from '@/composables/useScrollReveal';
import ecosystemImg from '@/assets/images/ecosystem_sep2025_8000x4500.png';

const { t } = useI18n();

const imgRef = ref<HTMLElement | null>(null);
const cardRef = ref<HTMLElement | null>(null);

useScrollReveal([imgRef, cardRef]);
</script>

<template>
  <section
    style="background-color: #f9fafa; padding: 60px 16px 60px"
    aria-label="Call to action"
  >
    <div style="max-width: 1084px; margin: 0 auto">
      <!-- Ecosystem image -->
      <img
        ref="imgRef"
        :src="ecosystemImg"
        alt="GO-GENIE logistics ecosystem"
        class="reveal"
        style="width: 100%; object-fit: contain; display: block"
      />

      <!-- White card overlapping just the bottom edge of image -->
      <div style="padding: 0 40px">
        <div
          ref="cardRef"
          class="reveal delay-200"
          style="
            margin-top: -130px;
            background: #ffffff;
            border: 1px solid rgba(10, 99, 161, 0.25);
            border-radius: 24px;

            text-align: center;
            padding: 40px 40px 48px;
            position: relative;
            z-index: 1;
          "
        >
          <h2
            style="
              font-size: 28px;
              font-weight: 700;
              color: #1f2937;
              line-height: 1.3;
              margin: 0;
            "
          >
            {{ t('cta.title') }}
            <span style="display: block; color: #3f89bd">{{
              t('cta.titleHighlight')
            }}</span>
          </h2>
          <p
            style="
              margin: 16px auto 0;
              max-width: 520px;
              font-size: 18px;
              color: #6b7280;
              line-height: 1.7;
            "
          >
            {{ t('cta.description') }}
          </p>
          <a
            href="#"
            style="
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-top: 24px;
              height: 38px;
              padding: 0 24px;
              background: #3f89bd;
              color: #ffffff;
              font-size: 14px;
              font-weight: 400;
              border-radius: 8px;
              text-decoration: none;
              border: none;
              box-shadow:
                5px 5px 14px 0 rgba(1, 63, 114, 0.18),
                inset -6px -6px 14px 0 rgba(0, 34, 63, 0.26);
              transition: opacity 0.2s;
              cursor: pointer;
            "
            onmouseover="this.style.opacity = '0.85'"
            onmouseout="this.style.opacity = '1'"
          >
            {{ t('cta.button') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
