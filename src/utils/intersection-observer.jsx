const isBidirectional = false

const options = {
  rootMargin: "0px",
  threshold: 0.8,
};

const callback = (entries, observer) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      let delay = 0

      // console.log(entry.target.dataset)

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

const observer = new IntersectionObserver(callback, options);

export const initObserver = (element) => {
  observer.observe(element)
}