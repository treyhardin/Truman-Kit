# Truman Kit
A simple, performant & aesthetic toolkit built on Solid.js and optimized for nice frontend apps. [Live Demo](https://truman-kit.vercel.app/)

- Super lightweight, with only Solid.js and Lenis as dependencies - making it fast AF.
- Best practices included out-of-the-box, with 100% Lighthouse scores all around.
- Built for nice design, with fluid typography, smooth scrolling, animation helpers, and more.
- Robust set of CSS variables make it fast to make global changes, while still giving scalable granular control over styling.


## Get Started

1. **Clone the Repo**

Use the install command or download the .zip from the Github repo.

```bash
gh repo clone treyhardin/Truman-Kit
```

2. **Install Dependencies**

Open a terminal in the project root and run the install command:
```bash
npm i
```

3. **Have Fun!**

The purpose of this starter kit is to make development easier and more fun for frontend-focused projects. Now that you're set up, keep reading for details on the quality of life features built into the starter kit.

## Toolkit
The philosophy of the toolkit is not to be a wholistic component library, but rather a core set of tools to make it easier to get started on projects.

### Solid.js
[Solid](https://www.solidjs.com/) is an incredible library for powerful yet lightweight reactivity. If you're a React developer, you'll feel right at home working with Solid - in fact, the Solid team has learned from some of the quirks of React and made a framework that's both highly capable and refreshingly simple.

### Lenis
[Lenis](https://lenis.studiofreight.com/) is the current best-in-class option for smooth scrolling, with considerations for accessibility, cross-device compatibility, and customization. If smooth scroll isn't your thing, it can be easily removed without affecting any of the other features included.

## Features
The features included represent a minimalist approach to modern, interactive sites without depending on heavy packages and libraries.

### 🔤 Fluid Typography
The approach to type styles is based on fluid scaling, as opposed to breakpoints and pixel sizes. Just specify your intended font size at desktop and mobile via custom properties in `index.css`, and each style will scale accordingly, without scaling smaller than your mobile font size.

Though we set these values in pixel units, the actual calculated values or based on a function of `vw` and `px` units to allow them to scale without interfering with accessibility standards around browser scaling.

*Specify your preferred viewport sizes:*

```css
* {
  --viewport-desktop: 1440; /* The width of the desktop designs */
  --viewport-mobile: 375; /* The width of the mobile designs */
}
```
*Set your font sizes (in pixels) on each style:*

```css
h1,
.h1 {
  --font-size-desktop: 100;
  --font-size-mobile: 54;
  font-family: var(--font-primary);
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 0.95;
}
```
In this case, `h1` (the element) and `.h1` (the class) will calculate to 54px at a viewport of 375px or smaller, 100px at a viewport of 1440px, and will continue to scale up proportionally for larger viewports.

### 🎨 Accessible Color System
Color definitions in this project are broken out into *Fundamentals* and *Tokens* and are defined in `index.css`. 

#### Fundamentals
All your core project colors will be set as Fundamentals. The naming of each color property is intentionally abstracted to follow some inherent rules that help with accessibility:

Name | Property | Description
--- | --- | ---
Ink | `--color-ink` | Darkest color, usually `#000` or similar. Should have sufficient contrast against `Reverse`.
Subdued | `--color-subdued` | Visibly lighter than `Ink` but with sufficient contrast against `Reverse`.
Neutral | `--color-neutral` | Utility color commonly used for strokes or other areas without accessibility concerns.
Light | `--color-light` | Visibly darker than `Reverse` but with sufficient contrast against `Ink`.
Reverse | `--color-reverse` | Lightest color, usually `#fff` or similar. Should have sufficient contrast against `Ink`.
Brand | `--color-brand` | Any brand color you want!
Brand Contrast | `--color-brand-contrast` | A sufficiently contrasting color against `Brand`. Usually either `Ink` or `Reverse`.
Brand Secondary | `--color-brand-secondary` | An optional secondary brand color.
Brand Secondary Contrast | `--color-brand-secondary-contrast` | A sufficiently contrasting color against `Brand Secondary`. Usually either `Ink` or `Reverse`.

#### Tokens
Once you've set your Fundamentals, the *Tokens* are defined as references to the Fundamentals. This lets us easily support color theming, as we can override any Token based on user color preference or section-specific styling. Working this way also means we can set our colors once and never have to think again about accessible color contrast:

Name | Example | Description
--- | --- | ---
Foreground | `var(--color-ink)` | Global foreground color, usually either `Ink` or `Reverse`.
Foreground Secondary | `var(--color-subdued)` | If `Foreground` is `Ink`, this is `Subdued`. If `Foreground` is `Reverse`, this is `Light`.
Background | `var(--color-reverse)` | Global background color, usually either `Ink` or `Reverse`.
Background Secondary | `var(--color-light)` | If `Background` is `Ink`, this is `Subdued`. If `Background` is `Reverse`, this is `Light`.
Link | `var(--color-brand)` | Any color that's accessible against `Background`.
Link Hover | `var(--color-brand-secondary)` | Any color that's accessible against `Background`.

A common setup for Color Tokens could look like this:

```css
body[dark-mode = "false"] {
  --color-foreground: var(--color-ink);
  --color-foreground-secondary: var(--color-subdued);

  --color-background: var(--color-reverse);
  --color-background-secondary: var(--color-light);

  --color-link: var(--color-brand);
  --color-link-hover: var(--color-brand-secondary);
}

body[dark-mode = "true"] {
  --color-foreground: var(--color-reverse);
  --color-foreground-secondary: var(--color-light);

  --color-background: var(--color-ink);
  --color-background-secondary: var(--color-subdued);

  --color-link: var(--color-brand);
  --color-link-hover: var(--color-brand-secondary);
}
```

### ⚡️ Custom Animation
Animation in the kit is primarily based on CSS properties & transitions. To extend the native capabilities of CSS, we've also included helpers for *Page Load*, *Viewport* and *Scroll* animations. These are simple, lightweight wrappers built around native browser capabilities, especially the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).


#### Viewport Animations
CSS doesn't currently support transitions triggered when an element comes into view, but the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) gives us everything we need to do just that. 

Any element wrapped in `<ViewportAnimation>` will get an attribute `[data-animate="true"]` which is set to `false` when the item is in viewport, based on the `props` passed in:

**`bidirectional`** - If `true`, the animation will reset once you've scrolled past the element. Otherwise, the animation will only happen once. *Defaults to `true`*.

**`rootMargin`** - A passthrough value for `rootMargin` in the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin). Allows for offsetting the intersection area within the viewport. *Defaults to `"50% 0% 10% 0%"`*.

**`threshold`** - A passthrough value for `threshold` in the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). Defines how much of the element should be intersecting before triggering the animation. *Defaults to `0.6`*

**`delay`** - A delay in ms before the animation should trigger, after the element is in view. Particularly useful for staggered animations in a loop.

This attribute is then used to create 'before' styling in CSS that helps you transition your elements into place.

*Example Component:*
```javascript
<ViewportAnimation bidirectional={true} delay={i() * cardDelay}>
    <div class={styles.card}>
        <p class={styles.emoji}>🎚</p>
        <div class={styles.cardText}>
            <h3 class={styles.cardTitle}>Card Title</h3>
            <p class={styles.cardDescription}>Description</p>
        </div>
    </div>
</ViewportAnimation>
```
*Example CSS:*

```CSS
.card {
  opacity: 1;
  translate: 0 0;
  transition: transform var(--anim-lg), opacity var(--anim-lg);
}

.card[data-animate="true"] {
  transform: 0 60px;
  opacity: 0;
}

```

#### Page Load Animations
Because we can't depend on an Intersection Observer event to fire at the right time for above-the-fold elements, we've included a dedicated `<PageLoadAnimation>` component specifically for `onLoad` animations. Any element wrapped in this component will get a `[data-animate-load="true"]` which is removed by a `DOMContentLoaded` listener. This ensures you're not artifically delaying page load, but still get control of CSS page load animations. This is particularly useful for header, hero, and preloader elements.

*Example Component:*
```javascript
<section class={styles.heroSection}>
  <PageLoadAnimation>
    <div class={styles.sectionTitle}>
      <h1 class={styles.heading}>Heading</h1>
      <p class={styles.subheading}>Subheading.</p>
    </div>
    <button title='Get Started'>Get Started</button>
  </PageLoadAnimation>
</section>
```

*Example CSS:*
```CSS
.sectionTitle {
  transition: opacity var(--anim-lg), translate var(--anim-lg);
}

.sectionTitle[data-animate-load="true"] {
    opacity: 0;
    translate: 0 60%;
}
```


#### Scroll Animations
Any element wrapped in `<ScrollAnimation>` will get a custom property `--scroll-ratio` that ranges from 0-1, with 0 being the position at which the section has just entered the viewport and 1 when the section has fully left the viewport. This can be used in CSS values to animate just about anything.

Though you can use as many of these wrappers as you like, you should avoid nesting one `<ScrollAnimation>` component within another. This component works best on larger page sections that fill multiple view heights.

**`threshold`** - A value from 0-1 that allows for shortening the length of the animation to ensure elements are fully visible before beginning their scroll animation. *Defaults to `1`*.

*Example Component:*
```javascript
<ScrollAnimation threshold={0.2}>

    <section class={styles.scrollAnimations}>
        <div class={styles.scrollContainer}>
            <For each={cards}>{(card, i) =>
                <div class={styles.card}>
                    <p class={styles.cardEmoji}>{card.emoji}</p>
                    <h4 class={styles.cardTitle}>{card.title}</h4>
                    <p class={styles.cardDescription}>{card.description}</p>
                </div>
            }</For>
        </div>
    </section>

</ScrollAnimation>
```

*Example CSS:*
```CSS
.scrollContainer {
  width: max-content;
  translate: calc((-100% + 100vw) * var(--scroll-ratio));
}
```




### 📐 Spacing Tokens
All spacing within the kit is defined using *Spacing Tokens*. In `index.css` we have a set of pixel values from `--space-3xs` through `--space-3xl` that are referenced any place we'd typically use pixels/ems.

```CSS
:root {
  --space-3xl: 120px;
  --space-2xl: 80px;
  --space-xl: 60px;
  --space-lg: 40px;
  --space-md: 30px;
  --space-sm: 20px;
  --space-xs: 15px;
  --space-2xs: 10px;
  --space-3xs: 5px;
}
```

**☝️ Coming Soon:** Further development of the spacing system may include a more fluid approach to spacing tokens that scales similarly to how typography scales. The current approach relies on breakpoints for any spacing values that need to change between viewport sizes.

### Notes
This is just a personal tool I built to make my side projects easier to spin up. I'd love to hear thoughts on how it can be further improved or built out, so don't be a stranger.

*Designed and Developed by [Trey Hardin](https://trumancreative.co/). Get in touch at [hello@trumancreative.co](mailto:hello@trumancreative.co).*