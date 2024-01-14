import { children, mergeProps } from "solid-js";

export default function ScrollAnimation(props) {

  const childElement = children(() => props.children)

  let animationID

  const defaultSettings = {
    threshold: 1.0
  } 

  const mergedProps = mergeProps(defaultSettings, props);

  const options = {
    rootMargin: "0%",
    threshold: 0.0,
  }

  const callback = (entries, observer) => {
  
      entries.forEach((entry) => {
  
        if (entry.isIntersecting) {
          const animateScrollElements = () => {
            const boundingBox = entry.target.getBoundingClientRect()
            const windowOffset = window.innerHeight * mergedProps.threshold
            const viewportDistanceTop = (boundingBox.top - windowOffset) * -1
            const scrollRatio = viewportDistanceTop / ( boundingBox.height - (window.innerHeight - windowOffset * 2))
            const normalizedScrollRatio = Math.max(Math.min(scrollRatio, 1), 0)
            entry.target.style.setProperty('--scroll-ratio', normalizedScrollRatio)
            animationID = requestAnimationFrame(animateScrollElements)
          }
          return animationID = requestAnimationFrame(animateScrollElements)
        } 
        return cancelAnimationFrame(animationID)
  
      });
  
  };
  
  const scrollAnimationObserver = new IntersectionObserver(callback, options);
  scrollAnimationObserver.observe(childElement())

  return <>{childElement()}</>
}