# Truman Starter Kit
A simple, performant & aesthetic toolkit based on Solid.js optimized for nice frontend apps. [Live Demo](https://truman-kit.vercel.app/)


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

### Fluid Typography
The approach to type styles is based on fluid scaling, as opposed to breakpoints and pixel sizes. Just specify your intended font size at desktop and mobile via custom properties, and each style will scale accordingly, without scaling smaller than your mobile font size.

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

### Accessible Color System

#### Fundamentals
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
Name | Example | Description
--- | --- | ---
Foreground | `var(--color-ink)` | Global foreground color, usually either `Ink` or `Reverse`.
Foreground Secondary | `var(--color-subdued)` | If `Foreground` is `Ink`, this is `Subdued`. If `Foreground` is `Reverse`, this is `Light`.
Background | `var(--color-reverse)` | Global background color, usually either `Ink` or `Reverse`.
Background Secondary | `var(--color-light)` | If `Background` is `Ink`, this is `Subdued`. If `Background` is `Reverse`, this is `Light`.
Link | `var(--color-brand)` | Any color that's accessible against `Background`.
Link Hover | `var(--color-brand-secondary)` | Any color that's accessible against `Background`.

### Custom Animation

#### Viewport Animations

#### Scroll Animations




