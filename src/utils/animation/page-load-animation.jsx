import { children, createEffect, mergeProps } from "solid-js";

export default function PageLoadAnimation(props) {

  const childElement = children(() => props.children)

  const defaultSettings = {
    delay: 1
  } 

  const mergedProps = mergeProps(defaultSettings, props);

  const triggerAnimation = (el) => {
    setTimeout(() => {
      el.dataset.animateLoad = false
    }, mergedProps.delay);
  }


  createEffect(() => {

    window.addEventListener("DOMContentLoaded", () => {

      if (childElement().length > 1) {
        for (let i = 0; i < childElement().length; i++) {
          childElement()[i].dataset.animateLoad = true
          triggerAnimation(childElement()[i])
        }
        return
      }

      childElement().dataset.animateLoad = true
      return triggerAnimation(childElement())

    })
  })

  return <>{childElement()}</>

}