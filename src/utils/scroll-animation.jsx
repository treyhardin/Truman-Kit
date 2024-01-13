const options = {
  rootMargin: "0%",
  threshold: 0.0,
};

let animationID

const callback = (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        const animateScrollElements = () => {
          const boundingBox = entry.target.getBoundingClientRect()
          const viewportDistanceTop = (boundingBox.top - window.innerHeight) * -1
          const scrollRatio = viewportDistanceTop / ( boundingBox.height + window.innerHeight)
          const normalizedScrollRatio = Math.max(Math.min(scrollRatio, 1), 0)
          // entry.target.dataset.scrollRatio = normalizedScrollRatio
          entry.target.style.setProperty('--scroll-ratio', normalizedScrollRatio)
          animationID = requestAnimationFrame(animateScrollElements)
        }
        return animationID = requestAnimationFrame(animateScrollElements)
      } 
      return cancelAnimationFrame(animationID)

    });

};

const scrollAnimationObserver = new IntersectionObserver(callback, options);

export const initScrollAnimation = (element) => {
  scrollAnimationObserver.observe(element)
}