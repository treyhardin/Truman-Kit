const isBidirectional = true

const options = {
  rootMargin: "50% 0% 10% 0%",
  threshold: 0.6,
};

const callback = (entries, observer) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      let delay = 0

      if (entry.target.dataset.animationDelay) {
        delay = entry.target.dataset.animationDelay
      }

      setTimeout(() => {
        return entry.target.dataset.animate = false
      }, delay)

    } 

    if (isBidirectional) {
      return entry.target.dataset.animate = true
    }

  });
};

const viewportAnimationObserver = new IntersectionObserver(callback, options);

export const initViewportAnimation = (element) => {
  element.dataset.animate = true
  viewportAnimationObserver.observe(element)
}