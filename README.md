![](.github/logo.png)

[![Build status](https://badge.buildkite.com/608d10408e58453caadfdf8baace412e530fefb77614355b37.svg?branch=master)](https://buildkite.com/hooroo/roo-ui?branch=master)

Qantas Hotels' library of accessible React components and assets.

To see what’s available, check out roo-ui's [storybook](https://roo-ui.netlify.com/).
If you want to jump in and and play around with the project check out [Roo UI playground](https://github.com/hooroo/roo-ui-playground) - it’s setup so you can start using it straight away.

## Contents

- [About the project](#about-the-project)
- [Installation](#installation)
- [FAQs](#faqs)
- [Helpful resources](#helpful-resources)
- [Contributing](https://github.com/hooroo/roo-ui/blob/master/.github/CONTRIBUTING.md)

---

## About the project

Roo UI is built with [Emotion](https://emotion.sh) which is a CSS-in-JS library. We use [Styled System](https://styled-system.com/) which allows us to pass props which style components. These props reference values from the [theme](https://github.com/hooroo/roo-ui/blob/master/src/theme.js). Alongside these tools we use [Polished](https://polished.js.org/) for CSS helper functions.

When using emotion, sometimes unwanted props make their way through to the DOM. React will throw a warning asking if you meant to add this attribute. To get around this we are using a function called [`omitProps`](https://github.com/hooroo/roo-ui/blob/master/src/components/omitProps/omitProps.js). Using this, we can supply an `omit` array argument which prevents specified props from making there way to the DOM.

### Supported devices

We support the latest two versions of modern web browsers and IE11+.

### Accessibility

Being under the Qantas umbrella we are required to meet AA compliance.

## Installation

Roo UI is available as a package on npm, and can be installed with Yarn or npm:

```sh
$ yarn add roo-ui
```

### Peer dependencies

While we aim to keep the library unopinionated there are a few peer dependencies which are required.

Install peer dependencies with Yarn or npm:

```sh
$ yarn add react react-dom prop-types enzyme @emotion/core @emotion/styled styled-system@^4.1.0
```

## Setup

### Theme provider

In the root of your app, render a `<ThemeProvider />`, and pass it a theme:

```js
import { ThemeProvider, theme } from 'roo-ui';

export default (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
```

### Theming

To have consistent styles between our apps we should aim to use the default theme styles.

You can override theme values by importing the roo-ui theme and using a function such as Lodash’s [merge](https://lodash.com/docs/4.17.10#merge) to combine it with your own theme object.

### Fonts

Import the appropriate font for your theme:

```js
import 'roo-ui/fonts/ciutadella.css';
```

### Icons

SVG icon paths are accessed from your apps theme (`theme.icons[iconName].path`).

A default set of icons are included in the [base theme](https://github.com/hooroo/roo-ui/blob/master/src/theme.js).

To add more icons, import them from `roo-ui/icons` and include them in your apps theme.

**Example: Add more icons to your apps theme**

```jsx
// my-app/icons.js
export { arrowUpward, arrowForward } from 'roo-ui/icons';

// my-app/theme.js
import * as icons from './icons';

export default {
  ...qantas,
  icons: {
    ...qantas.icons,
    ...icons,
  },
};
```

### CSS reset

We recommend using [`normalize.css`](http://necolas.github.io/normalize.css/).

Install [`normalize.css`](http://necolas.github.io/normalize.css) and import it to normalize default browser styles:

```sh
yarn add normalize.css
```

```js
import 'normalize.css/normalize.css';
```

### Bundler requirements

If your project is setup with Create React App you can skip this step.

If you're using Webpack, you'll need to setup [file loader](https://github.com/webpack-contrib/file-loader), [style loader](https://github.com/webpack-contrib/style-loader) and [CSS loader](https://github.com/webpack-contrib/css-loader).

## FAQ’s

- [Contents](#contents)
- [About the project](#about-the-project)
  - [Supported devices](#supported-devices)
  - [Accessibility](#accessibility)
- [Installation](#installation)
  - [Peer dependencies](#peer-dependencies)
- [Setup](#setup)
  - [Theme provider](#theme-provider)
  - [Theming](#theming)
  - [Fonts](#fonts)
  - [Icons](#icons)
  - [CSS reset](#css-reset)
  - [Bundler requirements](#bundler-requirements)
- [FAQ’s](#faqs)
  - [How do I do layout in this new world?](#how-do-i-do-layout-in-this-new-world)
  - [How do I do responsive styles?](#how-do-i-do-responsive-styles)
  - [How do I change the font size?](#how-do-i-change-the-font-size)
  - [How do I add spacing to elements?](#how-do-i-add-spacing-to-elements)
  - [What’s a good usage example?](#whats-a-good-usage-example)
  - [How do I use the theme?](#how-do-i-use-the-theme)
  - [How can I get help?](#how-can-i-get-help)
  - [Can I contribute?](#can-i-contribute)
- [Helpful resources](#helpful-resources)
  - [General](#general)
  - [Accessibility](#accessibility-1)

#### How do I do layout in this new world?

You’ll most likely need to use these three components: `Container`, `Box` and `Flex`.

`Container` will define your max width, use `Box` the same way you would `div` and think of `Flex` as a `div` with `display: flex` on it.

#### How do I do responsive styles?

In your app you can use media queries as you would have in the past.

We also provide a [Hide](https://github.com/hooroo/roo-ui/blob/master/src/components/Hide/Hide.js) component which you can wrap around components you would like to hide. It accepts props to hide its children at different screen sizes.

#### How do I change the font size?

In the theme you’ll see text styles defined. With styled system you can add `textStyle` prop to with the key as the value to text components such as `Text` and `Paragraph`.

`<Paragraph textStyle=”caps”>Hello world.</Paragraph/>`

#### How do I add spacing to elements?

The theme is setup to use a 4px grid under the `space` key. Where `space.0` is `0px` and `space.1` is `4px`. A easy way to work out the number you need is to take it and divide it by 4.

#### What’s a good usage example?

[`StarRating`](https://github.com/hooroo/roo-ui/blob/master/src/components/StarRating/StarRating.js), [`Modal`](https://github.com/hooroo/roo-ui/tree/master/src/components/Modal) and [`DatePicker`](https://github.com/hooroo/roo-ui/tree/master/src/components/DatePicker) are good examples of composing components together.

#### How do I use the theme?

Depending on what you're trying to do you can access the theme in three ways.

When you're wanting to tweak a component, you can pass through props that are defined via the Styled System API.

If you're writing CSS-in-JS and want to access theme values you can use styled systems `themeGet`. It allows you to get values out of the theme.

Alternatively, you can import the theme directly into your component.

#### How can I get help?

There's a few different ways. Chat to any of the contributors, pop a question in the #roo-ui slack channel or attend a Roo UI working group.

#### Can I contribute?

Yes, refer to [CONTRIBUTING.md](https://github.com/hooroo/roo-ui/blob/master/.github/CONTRIBUTING.md) for instructions. Browse the issues and pick one up or send a pull request for a new component or asset.

## Helpful resources

### General

- [Styled System API table reference](http://jxnblk.com/styled-system/table)
- [Theme](https://github.com/hooroo/roo-ui/blob/master/src/theme.js)

### Accessibility

- [Accessibility audit Chrome extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [A11Y project](https://a11yproject.com)
- [MDN accessibility docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Accessible UI components for the web article](https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67)
