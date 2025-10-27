// src/directives/v-scroll-animation.ts
export default {
  mounted(el: HTMLElement) {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-8')
            el.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
  },
}
