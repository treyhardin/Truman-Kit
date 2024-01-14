import { children, mergeProps } from "solid-js";

export default function ViewportAnimation(props) {
    
  const childElements = children(() => props.children)

  // if (childElements().length > 1) {
  //   return console.warn("<PageLoadAnimation> component should only have 1 child element.")
  // }



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

  if (childElements().length > 1) {
    for (let i = 0; i < childElements().length; i++) {
      childElements()[i].dataset.animate = true
      viewportAnimationObserver.observe(childElements()[i])
    }
  } else {
    childElements().dataset.animate = true
    viewportAnimationObserver.observe(childElements())
  }

  return <>{childElements()}</>
}