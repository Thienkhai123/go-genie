import { onMounted, onUnmounted, type Ref } from 'vue';

export function useScrollReveal(
  refs: Ref<HTMLElement | null>[],
  options: IntersectionObserverInit = {},
) {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options },
    );

    refs.forEach((r) => {
      if (r.value) observer?.observe(r.value);
    });
  });

  onUnmounted(() => observer?.disconnect());
}
