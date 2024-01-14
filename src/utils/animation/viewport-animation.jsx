import { children, mergeProps } from "solid-js";

export default function ViewportAnimation(props) {
    
  const childElement = children(() => props.children)
  childElement().dataset.animate = true


  const defaultSettings = {
    bidirectional: true,
    rootMargin: "50% 0% 10% 0%",
    threshold: 0.6,
    delay: 0
  } 

  const mergedProps = mergeProps(defaultSettings, props);

  const options = {
    rootMargin: mergedProps.rootMargin,
    threshold: mergedProps.threshold
  };

  const callback = (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        setTimeout(() => {
          return entry.target.dataset.animate = false
        }, mergedProps.delay)
      } 

      if (mergedProps.bidirectional) {
        return entry.target.dataset.animate = true
      }

    });
  };

  const viewportAnimationObserver = new IntersectionObserver(callback, options);
  viewportAnimationObserver.observe(childElement())

  return <>{childElement()}</>
}