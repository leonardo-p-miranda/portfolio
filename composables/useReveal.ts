import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useReveal() {
  const reveal = (el: Element | null, opts: Record<string, unknown> = {}) => {
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 82%' }, ...opts }
    )
  }

  const heroEntrance = (label: Ref<HTMLElement | null>, title: Ref<HTMLElement | null>) => {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(label.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(title.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
  }

  const stagger = (selector: string, baseDelay = 0.3, increment = 0.08) => {
    document.querySelectorAll(selector).forEach((el, i) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, delay: baseDelay + i * increment, ease: 'power3.out' }
      )
    )
  }

  const titleReveal = (el: Ref<HTMLElement | null>, delay = 0.2) => {
    if (!el.value) return
    gsap.fromTo(el.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay })
  }

  return { reveal, heroEntrance, stagger, titleReveal }
}
