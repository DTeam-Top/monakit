# Repository Structure

```
translation-guide.md
netlify.toml
css
  base.scss
  decks.scss
  main.scss
  content.scss
  header.scss
  search.scss
.spelling
js
  main.js
  components
    hover.js
    navigation.js
    prefetch.js
    search.js
  pages
    home.js
    demo.js
.prettierignore
README.md
eleventy.config.js
.prettierrc
gulpfile.js
src
  demo
    index.njk
  fullscreen.md
  zh-Hant
    fullscreen.md
    multiplex.md
    markdown.md
    slide-visibility.md
    postmessage.md
    creating-plugins.md
    overview.md
    presentation-state.md
    initialization.md
    api.md
    transitions.md
    scroll-view.md
    keyboard.md
    lightbox.md
    fragments.md
    presentation-size.md
    pdf-export.md
    math.md
    config.md
    backgrounds.md
    jump-to-slide.md
    speaker-view.md
    course.md
    index.md
    plugins.md
    themes.md
    media.md
    slide-numbers.md
    react.md
    vertical-slides.md
    auto-slide.md
    links.md
    code.md
    markup.md
    auto-animate.md
    upgrading.md
    installation.md
    layout.md
    events.md
    touch-navigation.md
  _includes
    extras.njk
    meta.njk
    demo.zh-Hant.html
    sidebar.njk
    header.njk
    demo.html
    footer.njk
  multiplex.md
  markdown.md
  slide-visibility.md
  postmessage.md
  creating-plugins.md
  overview.md
  presentation-state.md
  initialization.md
  api.md
  transitions.md
  scroll-view.md
  404.njk
  keyboard.md
  lightbox.md
  fragments.md
  presentation-size.md
  pdf-export.md
  math.md
  _layouts
    home.njk
    default.njk
  config.md
  backgrounds.md
  jump-to-slide.md
  speaker-view.md
  course.md
  index.md
  plugins.md
  themes.md
  media.md
  slide-numbers.md
  react.md
  vertical-slides.md
  api
    search.njk
  auto-slide.md
  links.md
  _data
    helpers.js
    i18n
      index.js
    locales.js
  code.md
  markup.md
  auto-animate.md
  upgrading.md
  installation.md
  layout.md
  events.md
  touch-navigation.md
```

# Repository Files


## translation-guide.md

- Characters: 1832
- Tokens: 0

````markdown
# Translation Guide

If you want to contribute to the translation of the reveal.js website and docs, follow these steps:

## 1. Edit `src/_data/locales.js`

Open the `locales.js` file located in `src/_data/` directory.

```js
module.exports = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: '繁體中文',
    code: 'zh-Hant',
  },
];
```

Add a new entry for the language you want to translate to. Include the language label and its corresponding code.

## 2. Edit `src/_data/i18n/index.js`

Open the `index.js` file located in `src/_data/i18n/` directory.

```js
module.exports = {
  'Getting Started': {
    'zh-Hant': '開始',
    en: 'Getting Started',
  },
  Home: {
    'zh-Hant': '首頁',
    en: 'Home',
  },
  Demo: {
    'zh-Hant': '示範',
    en: 'Demo',
  },
  Installation: {
    'zh-Hant': '安裝',
    en: 'Installation',
  },
  // ...
};
```

Translate the strings for each page title and navigation item into the desired language.

## 3. Create Language Folder and JSON File

Create a folder with the language code in `/src`. For example, `/zh-Hant`. Then, create a `<lang code>.json` file (e.g., `zh-Hant.json`) and add the following content:

```json
{
  "dir": "ltr",
  "lang": "zh-Hant",
  "locale": "zh-Hant"
}
```

Replace `"zh-Hant"` with the appropriate language code.

## 4. Translate Markdown Pages

Copy all Markdown pages from `/src` to the newly created language folder. Translate the content of each page into the desired language.

## 5. Translate Demo Slide

Translate the demo slide located at `src/_includes/demo.html`. This slide is used to showcase the reveal.js features. Name the translated file `demo.<lang code>.html` (e.g., `demo.zh-Hant.html`).

Once you have completed these steps, your translation contribution will be ready for review and integration into the reveal.js website and docs.
````

## netlify.toml

- Characters: 77
- Tokens: 0

```text
[[redirects]]
  from = "/en/*"
  to = "/:splat"
  status = 301
  force = true
```

## css/base.scss

- Characters: 2546
- Tokens: 0

```text
$headerHeight: 4rem;
$headerMargin: 2rem;

$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
$easeOutQuint: cubic-bezier(0.23, 1, 0.32, 1);
$easeInOutQuint: cubic-bezier(0.86, 0, 0.07, 1);

html {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 16px;
}

:target {
  scroll-margin-top: $headerHeight + $headerMargin;
}

a,
button {
  touch-action: manipulation !important;
  -webkit-tap-highlight-color: darken(#edf2f7, 15%);
}

.no-transition,
.no-transition * {
  transition: none !important;
}

// sidebar
.nav-link {
  @apply text-gray-700 w-full inline-block;
}

.nav-link:hover {
  @apply text-gray-900;
}

.nav-link.selected {
  @apply text-yellow-900 bg-yellow-400 rounded;
}

// External links
.external-link-icon {
  @apply inline-block ml-1 align-text-bottom opacity-75;
}

.external-link-icon svg {
  height: 1rem;
}
.external-link-icon path {
  @apply fill-current;
}

// Advertising
#carbonads {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  text-align: left;
  @apply text-sm;
}

#carbonads .carbon-img img {
  width: 130px;
  height: 100px;
  margin: 0 0 10px 0;
  border: 0;
  box-shadow: none;
}

#carbonads .carbon-text {
  @apply text-gray-700;
}

#carbonads .carbon-poweredby {
  display: block;
  margin-top: 10px;
  @apply text-gray-500;
}

// Directional hover effect
.r-anchor {
  position: relative;
}

.r-anchor-label {
  position: relative;
  z-index: 2;
}

.r-anchor-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  border-radius: 0.25rem;
  z-index: -1;
  @apply bg-gray-300;

  transition:
    opacity 0.2s $easeOutQuint,
    visibility 0.2s $easeOutQuint,
    transform 0.3s $easeOutQuint;
}

.r-anchor.hover .r-anchor-background {
  opacity: 1;
  transform: none !important;
  visibility: visible;

  transition: transform 0.3s $easeOutQuint;
}

.search-result .r-anchor-background {
  @apply bg-gray-200;
}

.homepage-promotion {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 100px;
  color: #fff;
}
.homepage-promotion span {
  background: #fff;
  color: #000;
  border-radius: 100px;
  margin-left: 0.75rem;
  font-size: 0.8em;
  padding: 0.25rem 0.5rem;
}
```

## css/decks.scss

- Characters: 938
- Tokens: 0

```text
$demoHeight: 65vh;

.reveal-demo {
  position: relative;
  height: $demoHeight;
  max-height: 900px;
}

.highlight-demo .reveal-demo .reveal {
  position: relative;
  z-index: 100;
}

.highlight-demo .reveal-demo:after {
  content: 'The header is a live demo. Scroll to access docs.';
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 99;
  top: $demoHeight;
  left: 0;
  right: 0;
  bottom: 0;
  color: #eee;
  font-weight: 600;
  padding: 0 1rem;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
}

.reveal {
  font-size: 36px;
  background-color: darken(desaturate(#2d234c, 10%), 10%);
}

.reveal a,
.reveal .controls button,
.reveal .progress span {
  @apply text-pink-500;
}

.reveal .progress {
  height: 6px;
}

.reveal h1,
h2,
h3,
h4,
p,
ul {
  font-family: 'Inter', system-ui !important;
}

.reveal iframe {
  margin-left: auto;
  margin-right: auto;
}

.reveal img {
  display: inline-block;
}
```

## css/main.scss

- Characters: 375
- Tokens: 0

```text
@import '../node_modules/reveal.js/dist/reveal';
@import 'lib/reveal-theme';
@import '../node_modules/highlight.js/scss/base16/dracula.scss';
@import 'lib/prism-dracula';

/* purgecss start ignore */

@tailwind base;
@import 'base';
@import 'decks';
@import 'header';
@import 'search';
@import 'content';
@tailwind components;

/* purgecss end ignore */

@tailwind utilities;
```

## css/lib/prism-dracula.scss

- Characters: 2122
- Tokens: 0

```text
/**
* Dracula Theme originally by Zeno Rocha [@zenorocha]
* https://draculatheme.com/
*
* Ported for PrismJS by Albert Vallverdu [@byverdu]
*
* Modified by @hakimel to prevent hljs conflicts
*/

main {
  code:not(.hljs)[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code:not(.hljs)[class*='language-'],
  pre[class*='language-'] {
    background: #282a36;
  }

  /* Inline code */
  :not(pre) > code:not(.hljs)[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #50fa7b;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.regex,
  .token.important {
    color: #ffb86c;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
}
```

## css/lib/reveal-theme.scss

- Characters: 6120
- Tokens: 0

```text
/**
 * Black theme for reveal.js. This is the opposite of the 'white' theme.
 *
 * By Hakim El Hattab, https://hakim.se
 */
section.has-light-background,
section.has-light-background h1,
section.has-light-background h2,
section.has-light-background h3,
section.has-light-background h4,
section.has-light-background h5,
section.has-light-background h6 {
  color: #222;
}

/*********************************************
 * GLOBAL STYLES
 *********************************************/
:root {
  --background-color: #191919;
  --main-font: Source Sans Pro, Helvetica, sans-serif;
  --main-font-size: 42px;
  --main-color: #fff;
  --block-margin: 20px;
  --heading-margin: 0 0 20px 0;
  --heading-font: Source Sans Pro, Helvetica, sans-serif;
  --heading-color: #fff;
  --heading-line-height: 1.2;
  --heading-letter-spacing: normal;
  --heading-text-transform: uppercase;
  --heading-text-shadow: none;
  --heading-font-weight: 600;
  --heading1-text-shadow: none;
  --heading1-size: 2.5em;
  --heading2-size: 1.6em;
  --heading3-size: 1.3em;
  --heading4-size: 1em;
  --code-font: monospace;
  --link-color: #42affa;
  --link-color-hover: #8dcffc;
  --selection-background-color: #bee4fd;
  --selection-color: #fff;
  --r-overlay-element-bg-color: 240, 240, 240;
  --r-overlay-element-fg-color: 0, 0, 0;
}

.reveal-viewport {
  background: #191919;
  background-color: #191919;
}

.reveal {
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  font-size: 42px;
  font-weight: normal;
  color: #fff;
}

.reveal ::selection {
  color: #fff;
  background: #bee4fd;
  text-shadow: none;
}

.reveal ::-moz-selection {
  color: #fff;
  background: #bee4fd;
  text-shadow: none;
}

.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.3;
  font-weight: inherit;
}

/*********************************************
 * HEADERS
 *********************************************/
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  margin: 0 0 20px 0;
  color: #fff;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: normal;
  text-transform: uppercase;
  text-shadow: none;
  word-wrap: break-word;
}

.reveal h1 {
  font-size: 2.5em;
}

.reveal h2 {
  font-size: 1.6em;
}

.reveal h3 {
  font-size: 1.3em;
}

.reveal h4 {
  font-size: 1em;
}

.reveal h1 {
  text-shadow: none;
}

/*********************************************
 * OTHER
 *********************************************/
.reveal p {
  margin: 20px 0;
  line-height: 1.3;
}

/* Ensure certain elements are never larger than the slide itself */
.reveal img,
.reveal video,
.reveal iframe {
  max-width: 95%;
  max-height: 95%;
}

.reveal strong,
.reveal b {
  font-weight: bold;
}

.reveal em {
  font-style: italic;
}

.reveal ol,
.reveal dl,
.reveal ul {
  display: inline-block;
  text-align: left;
  margin: 0 0 0 1em;
}

.reveal ol {
  list-style-type: decimal;
}

.reveal ul {
  list-style-type: disc;
}

.reveal ul ul {
  list-style-type: square;
}

.reveal ul ul ul {
  list-style-type: circle;
}

.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul {
  display: block;
  margin-left: 40px;
}

.reveal dt {
  font-weight: bold;
}

.reveal dd {
  margin-left: 40px;
}

.reveal blockquote {
  display: block;
  position: relative;
  width: 70%;
  margin: 20px auto;
  padding: 5px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.reveal blockquote p:first-child,
.reveal blockquote p:last-child {
  display: inline-block;
}

.reveal q {
  font-style: italic;
}

.reveal pre {
  display: block;
  position: relative;
  width: 90%;
  margin: 20px auto;
  text-align: left;
  font-size: 0.55em;
  font-family: monospace;
  line-height: 1.2em;
  word-wrap: break-word;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.reveal code {
  font-family: monospace;
  text-transform: none;
}

.reveal pre code {
  display: block;
  padding: 5px;
  overflow: auto;
  max-height: 400px;
  word-wrap: normal;
}

.reveal table {
  margin: auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.reveal table th {
  font-weight: bold;
}

.reveal table th,
.reveal table td {
  text-align: left;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-bottom: 1px solid;
}

.reveal table th[align='center'],
.reveal table td[align='center'] {
  text-align: center;
}

.reveal table th[align='right'],
.reveal table td[align='right'] {
  text-align: right;
}

.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td {
  border-bottom: none;
}

.reveal sup {
  vertical-align: super;
  font-size: smaller;
}

.reveal sub {
  vertical-align: sub;
  font-size: smaller;
}

.reveal small {
  display: inline-block;
  font-size: 0.6em;
  line-height: 1.2em;
  vertical-align: top;
}

.reveal small * {
  vertical-align: top;
}

.reveal img {
  margin: 20px 0;
}

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: #42affa;
  text-decoration: none;
  transition: color 0.15s ease;
}

.reveal a:hover {
  color: #8dcffc;
  text-shadow: none;
  border: none;
}

.reveal .roll span:after {
  color: #fff;
  background: #068de9;
}

/*********************************************
 * Frame helper
 *********************************************/
.reveal .r-frame {
  border: 4px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.reveal a .r-frame {
  transition: all 0.15s linear;
}

.reveal a:hover .r-frame {
  border-color: #42affa;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
}

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: #42affa;
}

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: #42affa;
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: #191919;
  }
}
```

## css/content.scss

- Characters: 5820
- Tokens: 0

```text
/** @format */

// documentation page
.article {
  h1,
  h2,
  h3,
  h4 {
    @apply font-semibold leading-tight mt-6 mb-2;
  }

  h1 {
    @apply text-3xl mb-4;
  }

  h2 {
    @apply text-2xl mb-3;
  }

  h3 {
    @apply text-xl mb-3;
  }

  h4 {
    @apply text-lg mb-1;
  }

  h1:first-child {
    @apply mt-0;
  }

  // :'(
  & > a,
  a:not([class]) {
    @apply text-pink-700 border-b border-pink-400 no-underline break-words;

    &:hover {
      @apply text-pink-900 border-pink-600;
    }
  }

  b,
  strong {
    font-weight: 600;
  }

  p,
  ol,
  ul,
  picture {
    @apply my-2;
  }

  ol {
    @apply pl-4 list-decimal;
  }

  ul {
    @apply pl-4 list-disc;
  }

  li {
    @apply mb-2;
  }

  li p {
    @apply inline-block my-0;
  }

  picture {
    @apply -mx-4 rounded overflow-hidden block;
  }

  .r-version-badge {
    @apply text-xs p-px text-gray-500 float-right;
  }
  .r-version-badge.new:before {
    content: 'Added in ';
  }
  .r-version-badge.coming:before {
    content: 'Coming in ';
  }
  .r-version-badge.deprecated:before {
    content: 'Deprecated in ';
  }

  .r-var-type {
    @apply text-gray-700 ml-2 text-sm border p-px px-1 rounded-sm;
  }
}

// code blocks
.article {
  pre[class*='language-'] {
    @apply mx-4 my-2 -mx-4 p-4;
    font-size: 0.8125em;
  }

  ol pre[class*='language-'],
  li pre[class*='language-'] {
    @apply -ml-8;
  }

  code:not([class*='language-']):not(.hljs) {
    @apply rounded bg-gray-200 text-pink-900 p-1 py-px leading-relaxed;
  }

  pre mark {
    background: transparent;
    color: currentColor;
  }
  code:not(.hljs) .highlight-line {
    opacity: 0.4;
  }
  code:not(.hljs) .highlight-line-active {
    opacity: 1;
  }
}

.article > table {
  display: block;
  overflow: auto;
  @apply m-4 -mx-4 border rounded text-base;

  th {
    @apply p-4 align-top border-b font-medium;
  }

  td {
    @apply p-4 align-top border-0;
  }

  tr {
    background-color: #fff;
  }

  tr:nth-child(2n) {
    background-color: transparent;
  }

  &.full-width {
    display: table;
  }

  &.nowrap-1st th:first-child,
  &.nowrap-1st td:first-child,
  &.nowrap-2nd th:nth-child(2),
  &.nowrap-2nd td:nth-child(2),
  &.key-value th:first-child,
  &.key-value td:first-child,
  &.toc th:first-child {
    white-space: nowrap;
  }

  &.key-value td:nth-child(2) {
    width: 100%;
  }

  &.toc td:nth-child(1) {
    width: 100%;
  }

  &.toc strong {
    @apply py-2;
  }

  &.hide-header th {
    display: none;
  }
}

.article > form,
.article > iframe {
  @apply my-4;
}

.article {
  // An inline presentation
  .reveal-example {
    height: 300px;
    box-sizing: content-box;
    width: calc(100% + 32px);
    @apply my-4 -mx-4 rounded border-t border-gray-700;

    h1,
    h2,
    h3 {
      margin-top: 0;
      line-height: 1.25;
    }

    pre {
      font-size: 28px;
      width: 100%;
    }

    a {
      @apply no-underline border-none text-pink-400;
    }
  }

  pre + .reveal-example {
    @apply -mt-2 rounded-t-none;
  }

  // Input/output (code/deck) wrapper
  .reveal-example-wrapper pre[class*='language-'] {
    @apply mb-0 rounded-b-none;
  }

  .reveal-example-wrapper .reveal-example {
    @apply mt-0 rounded-t-none;
  }

  .reveal-example.focused:before {
    content: '';
    @apply absolute block inset-0 border-2 border-pink-400 pointer-events-none rounded-b;
  }
}
.article .reveal h1 {
  font-size: 2.5em;
}
.article .reveal h2 {
  font-size: 1.6em;
}
.article .reveal h3 {
  font-size: 1.3em;
}

.anchorjs-link:after {
  @apply text-gray-400;
}

.extras .gumroad-button,
.article .gumroad-button {
  display: inline-block !important;
  font-family: inherit !important;
  background-image: none !important;
  box-shadow: none !important;
  @apply text-gray-900 bg-yellow-400 text-xl font-medium px-4 py-2 my-2 rounded #{!important};
}
.extras .gumroad-button:hover,
.article .gumroad-button:hover {
  transform: none !important;
}
.extras .gumroad-button-logo,
.article .gumroad-button-logo,
.extras .gumroad-button .logo-full,
.article .gumroad-button .logo-full {
  display: none !important;
}

.buy-course {
  display: flex;
  flex-direction: row;
  width: 100%;
  @apply my-8;
}
.buy-course-thumb {
  display: flex;
  width: 33%;
  max-width: 240px;
  background: #111;
  @apply rounded-l-lg;
}
.buy-course-action {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @apply border border-l-0 border-r-0 p-4 pt-2 pl-10 pr-5;
}
.buy-course-price {
  font-size: 3.5rem;
  line-height: 1.2;
}
.buy-course-price sup {
  font-size: 0.5em;
  top: -0.7em;
}
.buy-course-price .old-price {
  position: relative;
  font-size: 0.7em;
  color: #999;
  vertical-align: middle;
}
.buy-course-price .old-price:before {
  content: '';
  position: absolute;
  background: #999;
  display: block;
  height: 3px;
  left: -6px;
  right: -6px;
  top: 45%;
}
.buy-course-data {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @apply border border-l-0 p-4 pr-10 pl-5 rounded-lg rounded-l-none;
}
.buy-course-data ul {
  list-style: none;
}
.buy-course-data li:before {
  content: '';
  margin-right: 10px;
  background-image: url('/images/icons/checkmark.svg');
  background-size: contain;
  display: inline-block;
  width: 1em;
  height: 1em;
}

@media screen and (max-width: 700px) {
  .buy-course-thumb {
    display: none;
  }

  .buy-course-action {
    @apply border-l rounded-l-lg;
  }
}

@media screen and (max-width: 480px) {
  .buy-course {
    flex-direction: column;
  }

  .buy-course-action {
    @apply border border-b-0 rounded-t-lg rounded-b-none px-6;
  }

  .buy-course-data {
    @apply border border-t-0 rounded-b-lg rounded-t-none px-6;
  }
}
```

## css/header.scss

- Characters: 1503
- Tokens: 0

```text
/** @format */

.header a,
.header button {
  -webkit-tap-highlight-color: transparent;
}

.header-logo-wrapper {
  position: relative;
}

.header-logo {
  transform: translateY(-20px);
  opacity: 0;
  visibility: hidden;
}
.logo-visible .header-logo,
.menu-visible .header-logo {
  transform: none;
  transition: all 0.2s ease;
  opacity: 1;
  visibility: visible;
}

.header-cta {
  position: absolute !important;
  transition: all 0.2s ease;
  top: 0;
}

.logo-visible .header-cta,
.menu-visible .header-cta {
  opacity: 0;
  transform: translateY(20px);
  visibility: hidden;
}
.sidebar-language {
  display: none;
}

@media (max-width: 1024px) {
  .header-logo {
    transform: none;
    opacity: 1;
    visibility: visible;
  }
  .header-cta {
    opacity: 0;
    visibility: hidden;
  }
  .sidebar-language {
    display: block;
  }
}

.menu-visible .header-logo,
.menu-visible .header-cta {
  transition: none;
}

.menu-visible header {
  position: fixed;
}

.menu-toggle .line1,
.menu-toggle .line2 {
  transition: all 0.3s ease;
  transform-origin: 8px 12px;
}

.menu-visible .menu-toggle .line1 {
  transform: rotate(45deg);
}
.menu-visible .menu-toggle .line2 {
  transform: rotate(-45deg);
}

.header-nav path {
  @apply fill-current;
}

.header-lang-select {
  display: none;
  background-color: #fff;
  cursor: pointer;
  transform-origin: top;
  white-space: nowrap;
  z-index: 0;
  transform: translateX(-50%);
  left: 50%;
}
.header-lang:hover .header-lang-select {
  display: block;
}
```

## css/search.scss

- Characters: 584
- Tokens: 0

```text
.search-results {
  display: none;
}

.search-visible .search-results[data-state='no-results'],
.search-visible .search-results[data-state='has-results'],
.search-visible .search-results[data-state='loading-error'] {
  display: block;
}

.search-visible .search-results[data-state='no-results'] {
  @apply p-4;
}

.search-results .excerpt {
  @apply text-gray-700;
  white-space: pre-wrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.search-results mark {
  @apply bg-yellow-300;
}

.divider:last-child {
  display: none;
}
```

## .spelling

- Characters: 941
- Tokens: 0

```text
config
Node.js
iframe
iframes
autoplay
autoplays
autoplaying
preloaded
fullscreen
postMessage
stringified
animatable
stylesheet
stylesheets
backticks
viewport
i.e.
print-pdf
navigationMode
runtime
repo
whitespace
clojure
preload
preloading
resized
letterboxing.
nowrap-1st
gifs
index.html
solarized
namespace
resize
javascript
css
charset
readme.md
eventName
100px
src
async
theming
barebones
pre-processing
npm
hakimel
https
href
td
js
h.v
v3
lt
grey
e.g.
unregister
uninitialize
uninitializing

RevealHighlight
RevealMarkdown
RevealSearch
RevealNotes
RevealMath
RevealMath.KaTeX
RevealMath.MathJax2
RevealMath.MathJax3
RevealZoom
highlight.js
markdown.js
search.js
notes.js
math.js
zoom.js
reveal.js
reveal.js.
revealjs.com
reveal.css
reset.css
beforeHighlight

katex
mathjax2
mathjax3
url
mathml
commonhtml
fitty
rollup
monokai
monokai.css
mathjax
vimeo
youtube
slides.com
decktape
slideshare
highlight.js
head.min.js
Gumroad
hakim.se
toc
```

## js/main.js

- Characters: 2907
- Tokens: 0

```javascript
import setupHome from 'pages/home.js';
import setupDemo from 'pages/demo.js';
import setupSearch from 'components/search.js';
import setupHovers from 'components/hover.js';
import setupPrefetch from 'components/prefetch.js';
import setupNavigation from 'components/navigation.js';

import AnchorJS from 'anchor-js';

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import MathJax from 'reveal.js/plugin/math/math.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

const PAGE_ID = document.body.dataset.page;

setupNavigation();
setupHovers('.header-nav a, .header-cta, .footer a, .sidebar a:not(.selected)');
setupAnchors();
setupPage();

if (document.readyState === 'complete') {
  setupAd();
} else if (document.readyState === 'interactive') {
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      setupAd();
    }
  };
}

function setupPage() {
  setupInlineDecks();
  setupPrefetch();

  if (PAGE_ID === 'home') {
    setupHome();
    setupSearch();
  } else if (PAGE_ID === 'demo') {
    setupDemo();
  } else {
    setupSearch();
  }
}

function setupAd() {
  const adUnit = document.querySelector('#_carbonads_js');
  if (adUnit && adUnit.hasAttribute('data-src')) {
    const adSource = adUnit.getAttribute('data-src');
    adUnit.removeAttribute('data-src');
    adUnit.setAttribute('src', adSource);
  }
}

function setupAnchors() {
  // Set up link anchors
  const anchors = new AnchorJS();
  anchors.options = { placement: 'left', icon: '#' };
  anchors.add('.article>h2, .article>h3, .article>h4');
}

function setupInlineDecks() {
  // Inline example decks in the docs
  Array.from(document.querySelectorAll('.reveal-example')).forEach(
    (deckElement) => {
      // If this deck is paired with an input code block,
      // wrap them both in a shared container
      let code = deckElement.previousSibling;
      if (code.matches('pre')) {
        let wrapper = document.createElement('div');
        wrapper.className = 'reveal-example-wrapper';
        code.parentNode.insertBefore(wrapper, code);
        wrapper.appendChild(code);
        wrapper.appendChild(deckElement);
      }

      let config = {};

      if (deckElement.hasAttribute('data-config')) {
        config = JSON.parse(deckElement.dataset.config);
      }

      let deck = new Reveal(deckElement, {
        width: 900,
        height: 500,
        hash: false,
        scrollActivationWidth: null,
        respondToHashChanges: false,
        embedded: true,
        progress: false,
        keyboardCondition: 'focused',
        controlsTutorial: false,
        math: {
          config: 'TeX-AMS_HTML-full',
        },
        plugins: [Markdown, Highlight, Zoom, MathJax],
        ...config,
      });
      deck.initialize();
    }
  );
}
```

## js/components/hover.js

- Characters: 3520
- Tokens: 0

```javascript
/**
 * Directional hover effect copied from https://hakim.se.
 */

let lastMouseX = 0,
  lastMouseY = 0;

let pointerDirectionX = 0,
  pointerDirectionY = 0;

let hoverTimeout;
let lastMouseLeave;

let transform = (element, x, y, scale) => {
  element.style.transform =
    'scale(' + scale + ') translate(' + x + 'px,' + y + 'px)';
};

let transformOrigin = (element, x, y) => {
  let tx = (event.offsetX / element.offsetWidth) * 100;
  let ty = (event.offsetY / element.offsetHeight) * 100;
  tx = Math.min(Math.max(tx, 0), 100);
  ty = Math.min(Math.max(ty, 0), 100);
  element.style.transformOrigin = Math.round(tx) + '% ' + Math.round(ty) + '%';
};

let bindDirectionalHovers = (element, childSelector) => {
  let children = Array.from(element.querySelectorAll(childSelector));

  element.addEventListener(
    'mouseenter',
    function (event) {
      clearTimeout(hoverTimeout);

      // Move the children into their start positions
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);

        let scale = Date.now() - lastMouseLeave < 200 ? 1 : 0.7;

        childElement.classList.add('no-transition');
        transform(
          childElement,
          -16 * pointerDirectionX,
          -16 * pointerDirectionY,
          scale
        );
        childElement.offsetHeight;
        childElement.classList.remove('no-transition');
      });

      // Wait until the next cycle and trigger the hover effect
      hoverTimeout = setTimeout(() => {
        element.classList.add('hover');
      }, 1);
    },
    false
  );

  element.addEventListener(
    'mouseleave',
    function (event) {
      lastMouseLeave = Date.now();

      clearTimeout(hoverTimeout);

      // Remove the hover effect and move the child in the
      // direction of the mouse
      element.classList.remove('hover');
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);
        transform(
          childElement,
          16 * pointerDirectionX,
          16 * pointerDirectionY,
          0.7
        );
      });
    },
    false
  );
};

document.addEventListener('mousemove', () => {
  if (lastMouseX && lastMouseY) {
    let ox = event.pageX - lastMouseX;
    let oy = event.pageY - lastMouseY;

    // let longestMovement = Math.max( Math.abs( ox ), Math.abs( oy ) );

    // let sx = ox/longestMovement;
    // let sy = oy/longestMovement;

    pointerDirectionX = ox / 6;
    pointerDirectionY = oy / 6;

    pointerDirectionX = Math.max(Math.min(pointerDirectionX, 2), -2);
    pointerDirectionY = Math.max(Math.min(pointerDirectionY, 2), -2);
  }

  lastMouseX = event.pageX;
  lastMouseY = event.pageY;
});

document.addEventListener(
  'scroll',
  (event) => {
    lastMouseX = null;
    lastMouseY = null;

    pointerDirectionX = 0;
    pointerDirectionY = 0;
  },
  { passive: true }
);

export default (selector) => {
  if (!/ipad|iphone|ipod|android|windows\sphone/gi.test(navigator.userAgent)) {
    // Wrap anchors in the markup we need for hover effects
    Array.from(document.querySelectorAll(selector)).forEach((element) => {
      element.classList.add('r-anchor');
      element.innerHTML =
        '<span class="r-anchor-label">' +
        element.innerHTML +
        '</span><span class="r-anchor-background"></span>';
    });

    Array.from(document.querySelectorAll('.r-anchor')).forEach((element) => {
      bindDirectionalHovers(element, '.r-anchor-background');
    });
  }
};
```

## js/components/navigation.js

- Characters: 1792
- Tokens: 0

```javascript
export default () => {
  let sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    // Update the selected item in the navigation to
    // match the current URL & hash.
    let updateSelection = () => {
      let currentURL =
        window.location.pathname.replace(/\/$/, '') +
        '/' +
        window.location.hash;
      let newSelection = sidebar.querySelector(
        '.nav-link[href="' + currentURL + '"]'
      );

      if (newSelection) {
        let selectedItem = sidebar.querySelector('.nav-link.selected');
        if (selectedItem) selectedItem.classList.remove('selected');
        newSelection.classList.add('selected');
      }
    };

    updateSelection();

    window.addEventListener('hashchange', updateSelection);

    // Remember the sidebar scroll position between page loads
    let storedScrollTop = parseInt(
      sessionStorage.getItem('sidebar-scroll-top'),
      10
    );
    let sidebarScroller = document.querySelector('.sidebar-scroller');

    if (!isNaN(storedScrollTop)) {
      sidebarScroller.scrollTop = storedScrollTop;
    } else {
      let selectedItem = sidebar.querySelector('.nav-link.selected');
      if (selectedItem.offsetTop > sidebarScroller.offsetHeight * 0.8) {
        sidebarScroller.scrollTop =
          selectedItem.offsetTop - sidebarScroller.offsetHeight * 0.8;
      }
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('sidebar-scroll-top', sidebarScroller.scrollTop);
    });

    // Toggle the mobile nav.
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      document.documentElement.classList.toggle(
        'menu-visible',
        !sidebar.classList.contains('hidden')
      );
    });
  }
};
```

## js/components/prefetch.js

- Characters: 474
- Tokens: 0

```javascript
import debounce from 'lodash/debounce';

export default () => {
  let loader = document.createElement('link');
  loader.setAttribute('rel', 'prefetch prerender');

  let prefetch = debounce((href) => {
    loader.setAttribute('href', href);
    document.head.appendChild(loader);
  }, 300);

  Array.from(document.querySelectorAll('a[href^="/"]')).forEach((link) => {
    link.addEventListener('mouseover', () => {
      prefetch(link.getAttribute('href'));
    });
  });
};
```

## js/components/search.js

- Characters: 6804
- Tokens: 0

```javascript
import lunr from 'lunr';
import trim from 'lodash/trim';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import setupHovers from 'components/hover.js';

// Based on:
// https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr

export default async () => {
  const SEARCH_RESULT_LIMIT = 3;

  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  const searchShortcutModifier = document.querySelector(
    '.search-shortcut-modifier'
  );

  let docs;
  let index;

  async function load() {
    setState('loading', 'Loading...');

    let result = await fetch('/api/search.json');
    docs = await result.json();

    index = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('content');

      docs.forEach((doc, index) => {
        doc.id = index;
        this.add(doc);
      });
    });
  }

  let search = debounce((searchTerm) => {
    // Make sure we're loaded
    if (docs) {
      let results = index
        .search(searchTerm)
        .map((r) => {
          return docs[r.ref];
        })
        .slice(0, SEARCH_RESULT_LIMIT);

      if (results.length) {
        searchResults.innerHTML = results
          .map(renderSearchResult.bind(this, searchTerm))
          .join('');
        setupHovers('.search-result');
        setState('has-results');
      } else {
        setState('no-results', `No results for "${searchTerm}"`);
      }
    }
  }, 250);

  function renderSearchResult(searchTerm, result) {
    let searchTermMatcher = new RegExp(searchTerm.split(' ').join('|'), 'i');

    let title = highlightWords(result.title, searchTermMatcher);

    let content = '';
    let contentMatch = result.content.match(searchTermMatcher);

    if (contentMatch) {
      let start = contentMatch.index;
      let end = start + contentMatch[0].length;

      // Include surrounding text
      start = Math.max(start - 30, 0);
      end = Math.max(end + 110, result.content.length);

      let value = result.content.slice(start, end).trim();

      if (value.length > 0) {
        value = value.replace(/\s*[\n]+\s*/g, '\n');
        value = value.replace(/^\s+|\s+$/g, '');
        content = [
          '<p class="excerpt mt-2">',
          start > 0 ? '...' : '',
          highlightWords(value, searchTermMatcher),
          end < result.content.length ? '...' : '',
          '</p>',
        ].join('');
      }
    }

    return `
			<a href="${result.url}" class="search-result block z-10 m-0 p-2 outline-none border-2 border-transparent rounded focus:border-blue-400">
				<p class="font-medium text-base">${title}</p>
				${content}
			</a>
			<div class="divider border-t border-gray-200 my-2"></div>
		`;
  }

  function highlightWords(string, wordExpression) {
    return string.replace(new RegExp(wordExpression, 'gi'), '<mark>$&</mark>');
  }

  function setState(state, description) {
    searchResults.dataset.state = state;

    if (typeof description === 'string') {
      searchResults.innerHTML = `<span class="text-gray-500">${description}</span>`;
    }
  }

  let updateFixedPosition = throttle(() => {
    let bounds = searchInput.getBoundingClientRect();
    searchResults.style.top = Math.round(bounds.bottom) + 'px';
  }, 33);

  function show() {
    if (!isVisible()) {
      document.documentElement.classList.add('search-visible');
      document.addEventListener('mousedown', onDocumentMouseDown);
      document.addEventListener('keydown', onDocumentKeyDown);

      // Our search results are position fixed on small screens,
      // but on the homepage the header is pushed down from the
      // top of the screen... et voilà:
      if (
        document.querySelector('.header').offsetTop > 0 &&
        getComputedStyle(searchResults).position === 'fixed'
      ) {
        document.addEventListener('scroll', updateFixedPosition, {
          passive: true,
        });
        updateFixedPosition();
      } else {
        searchResults.style.top = '';
      }

      // Lazy-load the first time the search field is shown
      if (!docs) {
        load().then(
          () => {
            let searchTerm = searchInput.value.trim();
            if (searchTerm && isVisible()) {
              search(searchTerm);
            }
          },
          () => {
            setState('loading-error', 'Failed to load search data 😭');
          }
        );
      }
    }
  }

  function hide() {
    if (isVisible()) {
      document.documentElement.classList.remove('search-visible');
      document.removeEventListener('mousedown', onDocumentMouseDown);
      document.removeEventListener('keydown', onDocumentKeyDown);
      document.removeEventListener('scroll', updateFixedPosition);
    }
  }

  function isVisible() {
    return document.documentElement.classList.contains('search-visible');
  }

  /**
   * Moves focus between the search input & results.
   */
  function moveFocus(offset = 1) {
    let focusables = [
      searchInput,
      ...document.querySelectorAll('.search-result'),
    ];
    let index = focusables.indexOf(document.activeElement);
    let target = index === -1 ? focusables[1] : focusables[index + offset];

    if (target) target.focus();
  }

  searchInput.addEventListener('focus', show);
  searchInput.addEventListener('input', (event) => {
    show();

    let searchTerm = searchInput.value.trim();
    if (searchTerm) {
      search(searchTerm);
    } else {
      setState('no-term', 'Enter a search term');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === '/' ||
      (event.key === 'k' && (event.metaKey || event.ctrlKey))
    ) {
      searchInput.focus();
      searchInput.select();
      event.preventDefault();
    }
  });

  // only bound while search is visible
  function onDocumentKeyDown(event) {
    if (event.key === 'Escape') {
      searchInput.blur();
      hide();
    } else if (event.key === 'Enter') {
      searchInput.blur();
      hide();

      // If there are results, but no result is focused, open the
      // first one
      let results = document.querySelectorAll('.search-result');
      if (
        results.length &&
        document.activeElement.matches('.search-result') === false
      ) {
        window.location = results[0].getAttribute('href');
      }
    } else if (
      event.key === 'ArrowUp' ||
      (event.key === 'Tab' && event.shiftKey)
    ) {
      moveFocus(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowDown' || event.key === 'Tab') {
      moveFocus(1);
      event.preventDefault();
    }
  }

  function onDocumentMouseDown(event) {
    if (!event.target.closest('.search')) {
      hide();
    }
  }
};
```

## js/pages/home.js

- Characters: 2137
- Tokens: 0

```javascript
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import throttle from 'lodash/throttle';

export default () => {
  let deck = new Reveal(document.querySelector('.reveal-demo .reveal'), {
    embedded: true,
    hash: true,
    margin: 0.1,
    scrollActivationWidth: null,
    url: 'https://revealjs.com/demo',
    plugins: [Markdown, Highlight, Notes, Zoom],
  });
  deck.initialize().then(() => {
    setupHeader();
    setupDemoLink();
  });

  function setupHeader() {
    let demoLogo = document.querySelector('.demo-logo');
    if (demoLogo) {
      let updateVisibility = () => {
        document.documentElement.classList.toggle(
          'logo-visible',
          demoLogo.getBoundingClientRect().bottom < 0
        );
      };

      updateVisibility();

      document.addEventListener('scroll', throttle(updateVisibility, 100), {
        passive: true,
      });
    }
  }

  function setupDemoLink() {
    const anchor = document.querySelector('.demo-link');
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo(0, 0);
      highlightDemo();
    });
  }

  function highlightDemo() {
    let scrollListener = () => {
      if (window.scrollY) {
        document.documentElement.classList.remove('highlight-demo');
        document.removeEventListener('scroll', scrollListener);
      }
    };

    document.documentElement.classList.add('highlight-demo');
    document.addEventListener('scroll', scrollListener, { passive: true });
  }

  // There's a number of links to revealjs.com?print-pdf out
  // there to demonstrate the PDF export feature. This new
  // site no longer has a printable presentation on the home
  // page so we redirect those links to /demo?print-pdf.
  if (/print\-pdf/.test(location.search)) {
    window.location = '/demo' + window.location.search;
  }

  if (/demo/.test(location.search)) {
    highlightDemo();
  }
};
```

## js/pages/demo.js

- Characters: 580
- Tokens: 0

```javascript
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

export default () => {
  let deck = new Reveal(document.querySelector('.reveal'), {
    hash: true,
    scrollActivationWidth: null,
    plugins: [Markdown, Highlight, Notes, Zoom],
  });
  deck.initialize();

  // Make the Reveal object globally available on the /demo page
  window.Reveal = deck;
};
```

## .prettierignore

- Characters: 40
- Tokens: 0

```text
src/**/*.md
.vscode/
node_modules/
dist/
```

## README.md

- Characters: 2326
- Tokens: 0

````markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/be9ff8bf-e575-44b6-9db4-1087ff4942f8/deploy-status)](https://app.netlify.com/sites/revealjs/deploys)

# revealjs.com

The official reveal.js website and docs. Contributions are welcome!

## Installation

1. Clone the repo

   ```sh
   $ git clone https://github.com/reveal/revealjs.com.git && cd revealjs.com
   ```

1. Install dependencies

   ```sh
   $ yarn
   ```

1. Start the development server

   ```sh
   $ yarn start
   ```

The development server will automatically reload as you make changes.

## Spell Check

There's a built-in task for spell checking.

```sh
$ yarn test
```

## Formatting

We use [Prettier](https://prettier.io/) to ensure consistent code formatting. The rules are as follows:

- Single quotes for strings.
- 2-space indentation.

Make sure your code adheres to these rules before committing. You can format your code manually with:

```sh
$ yarn prettier --write .
```

### GitHub Actions Check

Our repository includes a GitHub Actions workflow that automatically checks code formatting on each push and pull request. This ensures all code merged into the repository follows the defined formatting rules.

## Translation

We welcome contributions to help translate the site into different languages. If you would like to help with translations, please follow our [Translation Guide](translation-guide.md). This guide provides detailed instructions on how to contribute translations.

## Technologies

This site is built using [Eleventy](https://www.11ty.dev/) — a powerful but easy to use static site generator. It's styled with [tailwindcss](https://tailwindcss.com/) and the docs are written in Markdown.

## Deploy

The site is hosted on Netlify and automatically deploys the `master` branch when there are new commits.

We automatically generate our production build at deploy-time but it's also possible to do it manually with:

```sh
yarn run production
```

### Note

reveal.js is installed from the [master branch](https://github.com/hakimel/reveal.js/). If it gets stuck on an old version, remove the reveal.js entry from `package.lock.json` and rerun `yarn`.

---

This updated `README.md` now includes a section about helping with translations, directing users to follow the `translation-guide.md` for detailed instructions.
````

## eleventy.config.js

- Characters: 2625
- Tokens: 0

```javascript
/** @format */

const htmlmin = require('html-minifier');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');

module.exports = (eleventyConfig) => {
  // i18n translations
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en',
    },
  });

  // Minify our HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'default.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');

  // Include our static assets
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('demos');

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
  });

  let md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
  });

  md.use(require('markdown-it-attrs'));
  md.use(require('markdown-it-anchor'));

  eleventyConfig.setLibrary('md', md);

  // Cut back on terminal noise during development
  eleventyConfig.setQuietMode(true);

  // Collection of pages that can appear in search results
  eleventyConfig.addCollection('searchPages', (collection) => {
    return collection
      .getFilteredByGlob('src/*.md')
      .sort((a, b) => {
        if (a.data.title < b.data.title) return -1;
        if (a.data.title > b.date.title) return 1;
        return 0;
      })
      .filter((page) => {
        return !page.data.hidden;
      });
  });

  // Helper for extracting the searchable content in a page
  eleventyConfig.addShortcode('searchContent', (page) => {
    if (!page.hasOwnProperty('templateContent')) {
      console.warn(
        'Failed to extract excerpt: Document has no property "templateContent".'
      );
      return null;
    }

    return JSON.stringify(page.templateContent)
      .slice(1, -1)
      .replace(/[\n]\s*[\n]/gm, '\n')
      .replace(/<h1[^>]*.*<\/h1>/gm, '')
      .replace(/<[^>]*>/g, '')
      .replace(/^\\n/g, '')
      .trim();
  });

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data',
    },
  };
};
```

## .prettierrc

- Characters: 88
- Tokens: 0

```text
{
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "singleQuote": true
}
```

## gulpfile.js

- Characters: 1886
- Tokens: 0

```javascript
const pkg = require('./package.json');
const path = require('path');
const gulp = require('gulp');
const sass = require('sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const webpack = require('webpack-stream');
const through = require('through2');

// a custom pipeable step to transform Sass to CSS
function compileSass() {
  return through.obj((vinylFile, encoding, callback) => {
    const transformedFile = vinylFile.clone();

    sass.render(
      {
        data: transformedFile.contents.toString(),
        includePaths: ['css/'],
      },
      (err, result) => {
        if (err) {
          console.log(vinylFile.path);
          console.log(err.formatted);
        } else {
          transformedFile.extname = '.css';
          transformedFile.contents = result.css;
          callback(null, transformedFile);
        }
      }
    );
  });
}

gulp.task('js', () =>
  gulp
    .src(['js/main.js'])
    .pipe(
      webpack({
        mode:
          process.env.NODE_ENV === 'production' ? 'production' : 'development',
        performance: {
          hints: false,
        },
        resolve: {
          modules: ['js', 'node_modules'],
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /(node_modules)/,
            },
          ],
        },
      })
    )
    // .pipe(rename('main.js'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('css', () =>
  gulp
    .src(['css/main.scss'])
    .pipe(compileSass())
    .pipe(postcss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('build', gulp.parallel('js', 'css'));

gulp.task('default', () => {
  gulp.watch(['js/**.*', 'js/*/**.*'], gulp.series('js'));
  gulp.watch(['css/**.*', 'css/*/**.*'], gulp.series('css'));
  gulp.parallel('js', 'css')();
});
```

## src/demo/index.njk

- Characters: 869
- Tokens: 0

```text
<!doctype html>
<html lang="{{ locale }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo | {{ site.name }}</title>
    <meta name="description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">

    <link rel="stylesheet" href="/main.css{{ helpers.assetSuffix }}">

    {% include "meta.njk" %}

    <link rel="icon" type="image/png" href="{{ site.images.favicon }}">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body class="h-screen full-page-demo" data-page="demo">
    {% if locate %}
    {% include "demo."+locate+".html" %}
    {% else %}
    {% include "demo.html" %}
    {% endif %}

    <script src="/main.js{{ helpers.assetSuffix }}" defer></script>

</body>
</html>
```

## src/fullscreen.md

- Characters: 582
- Tokens: 0

```markdown
---
id: fullscreen
title: Fullscreen
layout: default
---

### Fullscreen mode

There's built-in support for fullscreen mode. Press »F« on your keyboard to view your presentation in fullscreen mode. Once in fullscreen mode, press the »ESC« key to exit.

Try it out below. Note that this example uses an [embedded](/presentation-size/#embedded) presentation, you will need to click to give it focus before pressing F.

<div class="reveal reveal-example">
  <div class="slides">
    <section>Click here to focus, then the F key.</section>
    <section>Slide 2</section>
  </div>
</div>
```

## src/zh-Hant/fullscreen.md

- Characters: 466
- Tokens: 0

```markdown
---
id: fullscreen
title: 全螢幕
layout: default
---

### 全螢幕模式

reveal.js 支援全螢幕模式。在鍵盤上按「F」鍵即可進入全螢幕模式觀看你的簡報。一旦進入全螢幕模式，按「ESC」鍵退出。

你可以在下方試用。請注意，這個範例使用了一個[嵌入式](/zh-hant/presentation-size/#%E5%B5%8C%E5%85%A5%E5%BC%8F)簡報，你需要點擊以給它焦點然後按 F 鍵。

<div class="reveal reveal-example">
  <div class="slides">
    <section>點擊此處以獲取焦點，然後按 F 鍵。</section>
    <section>幻燈片 2</section>
  </div>
</div>

這個功能允許使用者更加沉浸地觀看簡報，尤其是在大螢幕上展示時，全螢幕模式可以更好地吸引觀眾的注意力。簡報者可以利用全螢幕模式來顯示詳細圖表或圖像，讓觀眾更容易看清楚細節。
```

## src/zh-Hant/multiplex.md

- Characters: 224
- Tokens: 0

```markdown
---
id: multiplex
title: 多重廣播
layout: default
---

# 多重廣播

多重廣播插件允許你的觀眾在自己的手機、平板或筆記本電腦上跟隨你控制的簡報中的幻燈片。當你在主簡報中更換幻燈片時，每個人都會同步看到相同的內容。

這個插件之前是 reveal.js 核心的一部分，但從 4.0.0 版本開始，它已經成為了自己的存儲庫，在 <https://github.com/reveal/multiplex>。
```

## src/zh-Hant/markdown.md

- Characters: 3700
- Tokens: 0

`````markdown
---
id: markdown
title: Markdown
layout: default
---

# Markdown

使用 Markdown 編寫簡報內容不僅可行，而且往往更方便。要創建一個 Markdown 幻燈片，請在你的 `<section>` 元素中添加 `data-markdown` 屬性，並將內容包裹在 `<textarea data-template>` 中，如下例所示。

```html
<section data-markdown>
  <textarea data-template>
    ## 幻燈片 1
    包含一些文本和一個[鏈接](https://hakim.se)的段落。
    ---
    ## 幻燈片 2
    ---
    ## 幻燈片 3
  </textarea>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown data-separator="---">
        <script type="text/template">
## 幻燈片 1
包含一些文本和一個[鏈接](https://hakim.se)的段落。
---
## 幻燈片 2
---
## 幻燈片 3
        </script>
    </section>
  </div>
</div>

注意，它對縮進（避免混合使用制表符和空格）和換行（避免連續換行）很敏感。

## Markdown 插件

這個功能由內置的 Markdown 插件提供支持，該插件反過來使用 [marked](https://github.com/chjj/marked) 進行所有解析。Markdown 插件包含在我們的默認簡報範例中。如果你想手動將其添加到新的簡報中，這是操作方式：

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

## 外部 Markdown

你可以將內容寫入一個單獨的文件，並讓 reveal.js 在運行時加載它。注意分隔符參數，它決定了外部文件中的幻燈片如何分隔：`data-separator` 屬性定義水平幻燈片的正則表達式（默認為 `^\r?\n---\r?\n$`，即以換行符為界的水平線）和 `data-separator-vertical` 定義垂直幻燈片（默認禁用）。`data-separator-notes` 屬性是一個正則表達式，用於指定當前幻燈片講者筆記的開始（默認為 `notes?:`，因此它會匹配 "note:" 和 "notes:"）。`data-charset` 屬性是可選的，指定加載外部文件時使用哪種字符集。

在本地使用時，此功能要求 reveal.js [從本地網頁伺服器運行](/zh-hant/installation/#full-setup)。以下範例自定義了所有可用選項：

```html
<section
  data-markdown="example.md"
  data-separator="^\n\n\n"
  data-separator-vertical="^\n\n"
  data-separator-notes="^Note:"
  data-charset="iso-8859-15"
>
  <!--
        注意 Windows 使用 `\r\n` 而不是 `\n` 作為換行字符。
        為了支持所有操作系統的正則表達式，使用 `\r?\n` 而非 `\n`。
    -->
</section>
```

## 元素屬性

特殊語法（通過 HTML 註釋）可用於為 Markdown 元素添加屬性。這對於片段等很有用。

```html
<section data-markdown>
  <script type="text/template">
    - 項目 1 <!-- .element: class="fragment" data-fragment-index="2" -->
    - 項目 2 <!-- .element: class="fragment" data-fragment-index="1" -->
  </script>
</section>
```

## 幻燈片屬性

特殊語法（通過 HTML 註釋）可用於為由你的 Markdown 生成的幻燈片 `<section>` 元素添加屬性。

```html
<section data-markdown>
  <script type="text/template">
    <!-- .slide: data-background="#ff0000" -->
      Markdown 內容
  </script>
</section>
```

## 語法高亮

reveal.js 內置了強大的語法高亮功能。使用下面顯示的括號語法，你可以突出顯示個別行，甚至逐步進行多個獨立的高亮。[了解更多關於行高亮的信息](/zh-hant/code/#%E8%A1%8C%E8%99%9F%E8%88%87%E9%AB%98%E4%BA%AE)。

````html
<section data-markdown>
  <textarea data-template>
    ```js [1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

### 行號偏移

你可以通過在高亮的開頭添加一個數字和冒號來添加[行號偏移](/zh-hant/code/#%E8%A1%8C%E8%99%9F%E5%81%8F%E7%A7%BB-4.2.0)。

````html
<section data-markdown>
  <textarea data-template>
    ```js [712: 1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [712: 1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

## 配置 _marked_

我們使用 [marked](https://github.com/chjj/marked) 解析 Markdown。要自定義 marked 的渲染，你可以在[配置 Reveal](/zh-hant/config/) 時傳入選項：

```javascript
Reveal.initialize({
  // 傳入 marked 的選項
  // 見 https://marked.js.org/using_advanced#options
  markdown: {
    smartypants: true,
  },
});
```
`````

## src/zh-Hant/slide-visibility.md

- Characters: 1214
- Tokens: 0

````markdown
---
id: slide-visibility
title: 幻燈片可見性
layout: default
---

# 幻燈片可見性

`data-visibility` 屬性可以用來隱藏幻燈片。它還可以用來在 reveal.js 的內部編號系統中標記幻燈片為「未計數」，這將會影響可見的幻燈片編號和進度條。

## 隱藏的幻燈片 <span class="r-version-badge new">4.1.0</span>

要從視圖中隱藏幻燈片，添加 `data-visibility="hidden"`。隱藏的幻燈片會在 reveal.js 初始化時立即從 DOM 中移除。

```html
<section>幻燈片 1</section>
<section data-visibility="hidden">幻燈片 2</section>
<section>幻燈片 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section data-visibility="hidden">幻燈片 2</section>
    <section>幻燈片 3</section>
  </div>
</div>

## 未計數的幻燈片

在準備演講時，有時準備一些可能有時間展示也可能沒有時間展示的選擇性幻燈片是有幫助的。這可以通過在簡報的末尾追加幾張幻燈片輕鬆完成，但這意味著 reveal.js 的進度條和幻燈片編號將提示還有額外的幻燈片。

要將這些幻燈片“隱藏”在 reveal.js 的編號系統中，可以使用 `data-visibility="uncounted"`。

**注意：**這只適用於簡報末尾的幻燈片，即所有主要幻燈片之後的幻燈片。

```html
<section>幻燈片 1</section>
<section>幻燈片 2</section>
<section data-visibility="uncounted">幻燈片 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t", "progress": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
    <section data-visibility="uncounted">幻燈片 3</section>
  </div>
</div>
````

## src/zh-Hant/postmessage.md

- Characters: 1323
- Tokens: 0

````markdown
---
id: postmessage
title: postMessage API
layout: default
---

# postMessage API

框架內建了 postMessage API，當需要與另一個視窗中的簡報進行通信時可以使用。以下範例展示了如何讓給定視窗中的 reveal.js 實例進行到第二張幻燈片：

```javascript
<window>.postMessage( JSON.stringify({ method: 'slide', args: [ 2 ] }), '*' );
```

## postMessage 事件

當 reveal.js 在一個 iframe 中運行時，它可以選擇將所有事件冒泡到父視窗。冒泡的事件是三個字段的字符串化 JSON：namespace, eventName 和 state。這是從父視窗監聽它們的方式：

```javascript
window.addEventListener('message', (event) => {
  var data = JSON.parse(event.data);
  if (data.namespace === 'reveal' && data.eventName === 'slidechanged') {
    // 幻燈片已變更，查看 data.state 以獲得幻燈片號碼
  }
});
```

## postMessage 回調

當你通過 postMessage API 調用任何函式時，reveal.js 會發送一條帶有返回值的消息。這樣做是為了讓你可以調用 getter 函式並查看結果。查看此範例：

```javascript
<revealWindow>.postMessage( JSON.stringify({ method: 'getTotalSlides' }), '*' );

window.addEventListener( 'message', event => {
  var data = JSON.parse( event.data );
  // `data.method` 是我們調用的函式
  if( data.namespace === 'reveal' && data.eventName === 'callback' && data.method === 'getTotalSlides' ) {
    data.result // = 幻燈片的總數
  }
} );
```

## 啟用/禁用 postMessage

這種跨視窗消息傳遞可以通過配置標誌來開啟或關閉。這些是默認值。

```javascript/1-5
Reveal.initialize({
  // 通過 window.postMessage 暴露 reveal.js API
  postMessage: true,

  // 通過 postMessage 將所有 reveal.js 事件發送到父視窗
  postMessageEvents: false
});
```
````

## src/zh-Hant/creating-plugins.md

- Characters: 3006
- Tokens: 0

````markdown
---
id: creating-plugins
title: 創建插件
layout: default
---

# 創建插件 <span class="r-version-badge new">4.0.0</span>

我們提供了一個輕量級的插件規範和 API。這被我們的預設插件如[代碼高亮](/zh-hant/code/)和 [Markdown](/zh-hant/markdown/) 使用，但也可以用來創建你自己的插件。

## 插件定義

插件是包含以下屬性的對象。

| 屬性                                         | 值                                                                                                                                                                                                                                                                                                                                             |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id <span class="r-var-type">字符串</span>    | 插件的唯一 ID。這可以用來通過 `Reveal.getPlugin(<id>)` 檢索插件實例。                                                                                                                                                                                                                                                                           |
| init <span class="r-var-type">函數</span>    | 可選的函數，當插件應該運行時被調用。它被調用時有一個參數；插件導入的[簡報實例](/zh-hant/api/)的引用。<br><br>init 函數可以選擇性地返回一個 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果返回了 Promise，reveal.js 將等待它解析完成，然後簡報初始化完成並觸發[準備好的事件](/zh-hant/events/#%E5%B0%B1%E7%B7%92)。 |
| destroy <span class="r-var-type">函數</span> | 可選的函數，當這個插件導入的 reveal.js 實例被卸載時調用。                                                                                                                                                                                                                                                                                        |

{.key-value}

這裡是一個範例插件，當按下 T 鍵時，它會在簡報中洗牌所有幻燈片。注意，我們導出一個返回新插件對象的函數。這樣做是因為同一頁面上可能有[多個簡報實例](/zh-hant/initialization/#multiple-presentations)，而每個實例都應該擁有我們插件的自己的實例。

```js
// toaster.js
export default () => ({
  id: 'toaster',
  init: (deck) => {
    deck.addKeyBinding({ keyCode: 84, key: 'T' }, () => {
      deck.shuffle();
      console.log('🍻');
    });
  },
});
```

## 導入插件

插件通過將它們包含在[配置選項](/zh-hant/config/)的 `plugins` 數組中來導入。你也可以在運行時使用 `Reveal.registerPlugin( Plugin )` 導入插件。

```js
import Reveal from 'dist/reveal.esm.js';
import Toaster from 'toaster.js';

Reveal.initialize({
  plugins: [Toaster],
});
```

### 異步插件

如果你的插件需要在 reveal.js 完成初始化之前運行異步代碼，它可以返回一個 Promise。這裡是一個會延遲初始化三秒的範例插件。

```js
let WaitForIt = {
  id: 'wait-for-it',
  init: (deck) => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  },
};

Reveal.initialize({ plugins: [WaitForIt] }).then(() => {
  console.log('Three seconds later...');
});
```
````

## src/zh-Hant/overview.md

- Characters: 567
- Tokens: 0

````markdown
---
id: overview
title: 概覽模式
layout: default
---

# 概覽模式

按下「ESC」或「O」鍵來開啟或關閉概覽模式。當你處於這種模式時，你仍然可以在幻燈片之間導覽，就像你在你的簡報上方 1000 公尺高的地方一樣。

<picture><img src="/images/docs/overview.png" alt="具有垂直幻燈片的幻燈片布局"></picture>

## API

你可以使用`toggleOverview()` API 函式從 JavaScript 中激活或停用概覽模式。

```js
// 切換到當前狀態的相反狀態
Reveal.toggleOverview();

// 激活概覽模式
Reveal.toggleOverview(true);

// 停用概覽模式
Reveal.toggleOverview(false);
```

## 事件

當概覽模式被激活和停用時，我們會觸發事件。

```javascript
Reveal.on('overviewshown', (event) => {
  /* ... */
});
Reveal.on('overviewhidden', (event) => {
  /* ... */
});
```
````

## src/zh-Hant/presentation-state.md

- Characters: 418
- Tokens: 0

````markdown
---
id: presentation-state
title: 簡報狀態
layout: default
---

# 簡報狀態

可以通過使用 `getState` 函式來獲取簡報的當前狀態。狀態對象包含將簡報恢復到首次調用 `getState` 時的所有必要信息。有點像快照。它是一個簡單的對象，可以輕易地被序列化並持久化或通過網頁發送。

```javascript
// 移動到第 1 張幻燈片
Reveal.slide(1);

let state = Reveal.getState();
// {indexh: 1, indexv: 0, indexf: undefined, paused: false, overview: false}

// 移動到第 3 張幻燈片
Reveal.slide(3);

// 這將恢復保存的狀態，再次放置在第 1 張幻燈片
Reveal.setState(state);
```
````

## src/zh-Hant/initialization.md

- Characters: 2368
- Tokens: 0

````markdown
---
id: initialization
title: 初始化
layout: default
---

# 初始化

最常見的 reveal.js 使用情景是有一個覆蓋整個視窗的單一簡報。從 4.0 版本開始，我們也支持在同一頁面上同時運行[多個簡報](#multiple-presentations)，以及將庫作為一個[ES 模塊](#es-module)引入。

如果你的頁面上只有一個簡報，我們建議使用全域的 `Reveal` 對象來初始化 reveal.js。`Reveal.initialize` 函式接受一個參數；一個 reveal.js 的[配置對象](/zh-hant/config/)。

```html
<script src="dist/reveal.js"></script>
<script>
  Reveal.initialize({ transition: 'none' });
</script>
```

`initialize` 函式返回一個 promise，當簡報準備好並可以通過 API 進行交互時，此 promise 將解析。

```js
Reveal.initialize().then(() => {
  // reveal.js 已準備好
});
```

## 多個簡報 <span class="r-version-badge new">4.0.0</span> {id="multiple-presentations"}

要在同一頁面上並排運行多個簡報，你可以創建叫做 `Reveal` 的 class 的實例。`Reveal` 構造函數接受兩個參數；簡報的 `.reveal` HTML 元素根以及一個可選的[配置對象](/zh-hant/config/)。

請注意，你還需要將[嵌入式](/zh-hant/presentation-size/#嵌入式)配置選項設置為真。這個標誌使得簡報按照它們的 `.reveal` 根元素的大小進行自我調整，而不是按照瀏覽器視窗。你還需要手動為每個 `.reveal .deck*` 元素定義 `width` 和 `height` 的 CSS 屬性，才能看到它們顯示出來。

默認情況下，reveal.js 會捕獲文檔中的所有鍵盤事件。對於嵌入式簡報，我們建議使用 `keyboardCondition: 'focused'` 初始化，這樣鍵盤事件只有在觀眾聚焦簡報時才會被捕獲。

```html
<div class="reveal deck1">...</div>
<div class="reveal deck2">...</div>

<script src="dist/reveal.js"></script>
<script>
  let deck1 = new Reveal(document.querySelector('.deck1'), {
    embedded: true,
    keyboardCondition: 'focused', // 只有在聚焦時才反應按鍵
  });
  deck1.initialize();

  let deck2 = new Reveal(document.querySelector('.deck2'), {
    embedded: true,
  });
  deck2.initialize();
</script>
```

## ES 模塊 <span class="r-version-badge new">4.0.0</span> {id="es-module"}

我們提供兩個 JavaScript 包，取決於你的使用情況。我們的默認簡報模板使用 `dist/reveal.js`，它支持廣泛的跨瀏覽器（ES5）並將 Reveal 暴露到全域窗口（UMD）。

第二個包是 `dist/reveal.esm.js`，它允許將 reveal.js 作為 ES 模塊導入。這個版本可以直接在瀏覽器中使用 `<script type="module">` 或在你自己的構建過程中

捆綁使用。

以下是如何導入並初始化 reveal.js 的 ES 模塊版本以及 Markdown 插件：

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

如果你是[從 npm 安裝 reveal.js](https://revealjs.com/zh-hant/installation/#%E5%BE%9E-npm-%E5%AE%89%E8%A3%9D) 並且捆綁它，你應該能夠使用：

```js
import Reveal from 'reveal.js';
Reveal.initialize();
```

## 取消初始化 reveal.js <span class="r-version-badge new">4.3.0</span> {id="destroy"}

如果你想取消初始化 reveal.js，你可以使用 `destroy` API 函式。這將撤銷框架對 DOM 做出的所有更改，移除所有事件監聽器並註銷/銷毀所有插件。

```js
Reveal.destroy();
```
````

## src/zh-Hant/api.md

- Characters: 2608
- Tokens: 0

````markdown
---
id: methods
title: API 方法
layout: default
---

# API

我們提供了一個廣泛的 JavaScript API 來控制導覽和檢查簡報的當前狀態。如果你正在編輯單份簡報，可以通過全域對象 `Reveal` 來訪問 API。

### 導覽

```javascript
// 導覽到指定幻燈片
Reveal.slide(indexh, indexv, indexf);

// 相對導覽
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();

// 片段導覽
Reveal.navigateFragment(indexf); // (-1 表示隱藏所有片段)
Reveal.prevFragment();
Reveal.nextFragment();

// 檢查我們可以向哪些方向導覽
// {top: false, right: true, bottom: false, left: false}
Reveal.availableRoutes();

// 檢查我們可以向哪些片段方向導覽
// {prev: false, next: true}
Reveal.availableFragments();
```

### 其他

```javascript
// 如果你添加或移除幻燈片，調用此函數以更新控制、進度等
Reveal.sync();
// 調用此函數以同步僅一個幻燈片
Reveal.syncSlide((slide = currentSlide));
// 調用此函數以同步僅一個幻燈片的片段
Reveal.syncFragments((slide = currentSlide));

// 調用此函數根據視窗大小更新簡報比例
Reveal.layout();

// 隨機排序幻燈片
Reveal.shuffle();

// 返回當前配置選項
Reveal.getConfig();

// 獲取簡報的當前比例
Reveal.getScale();

// 返回一個對象，其中包含縮放後的簡報寬度和高度
Reveal.getComputedSlideSize();

Reveal.getIndices((slide = currentSlide)); // 幻燈片的坐標（例如 { h: 0, v: 0, f: 0 }）
Reveal.getProgress(); // （0 表示第一張幻燈片，1 表示最後一張）

// 幻燈片屬性的鍵值對數組
Reveal.getSlidesAttributes();

// 返回指定索引的幻燈片背景元素
Reveal.getSlideBackground(indexh, indexv);

// 返回幻燈片的演講筆記
Reveal.getSlideNotes((slide = currentSlide));

// 檢索查詢字符串為鍵值對映射
Reveal.getQueryHash();

// 返回幻燈片的 URL 路徑
Reveal.getSlidePath((slide = currentSlide));
```

### 幻燈片

```javascript
// 返回匹配指定索引的幻燈片元素
Reveal.getSlide(indexh, indexv);

// 檢索前一個和當前的幻燈片元素
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

// 返回套件中所有水平/垂直幻燈片
Reveal.getHorizontalSlides();
Reveal.getVerticalSlides();

// 總幻燈片數
Reveal.getTotalSlides();
Reveal.getSlidePastCount();

// 所有幻燈片的數組
Reveal.getSlides();
```

### 幻燈片狀態

```javascript
// 檢查簡報是否包含兩個或更多
// 水平/垂直幻燈片
Reveal.hasHorizontalSlides();
Reveal.hasVerticalSlides();

// 檢查套件是否至少在任一軸上導覽過一次
Reveal.hasNavig;

atedHorizontally();
Reveal.hasNavigatedVertically();

Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isVerticalSlide();
Reveal.isLastVerticalSlide();
```

### 模式

```javascript
// 顯示一個幫助介面，包含鍵盤快捷鍵，可以傳遞 true/false 來強制開啟/關閉
Reveal.toggleHelp();

// 切換簡報狀態，可以傳遞 true/false 來強制開啟/關閉
Reveal.toggleOverview();
Reveal.toggleAutoSlide();
Reveal.togglePause();

Reveal.isOverview();
Reveal.isAutoSliding();
Reveal.isPaused();
```

### DOM 元素

```javascript
// 檢索關鍵 DOM 元素
Reveal.getRevealElement(); // <div class="reveal">
Reveal.getSlidesElement(); // <div class="slides">
Reveal.getViewportElement(); // <div class="reveal-viewport">
Reveal.getBackgroundsElement(); // <div class="backgrounds">
```

## 閱讀更多

- [插件 API](/zh-hant/plugins/#api)
````

## src/zh-Hant/transitions.md

- Characters: 1807
- Tokens: 0

````markdown
---
id: transitions
title: 轉場效果
layout: default
---

# 轉場效果

在導覽簡報時，我們通常通過從右向左動畫的方式在幻燈片之間進行轉場。這種轉場可以通過設置 `transition` 配置選項為有效的[轉場樣式](#styles)來更改。轉場也可以使用 `data-transition` 屬性為特定幻燈片覆蓋。

```html
<section data-transition="zoom">
  <h2>此幻燈片將覆蓋簡報的轉場並放大！</h2>
</section>

<section data-transition-speed="fast">
  <h2>從三種轉場速度中選擇：默認、快速或慢速！</h2>
</section>
```

## 樣式

這是所有可用轉場樣式的完整列表。它們適用於幻燈片和幻燈片背景。

| 名稱    | 效果                                     |
| :------ | :--------------------------------------- |
| none    | 瞬間切換背景                             |
| fade    | 交叉淡出 — _背景轉場的默認選擇_          |
| slide   | 幻燈片之間滑動 — _幻燈片轉場的默認選擇_  |
| convex  | 以凸角滑動                               |
| concave | 以凹角滑動                               |
| zoom    | 放大進入的幻燈片，使其從屏幕中心向外成長 |

{.key-value}

## 分離進出轉場

你還可以對同一幻燈片使用不同的進場和出場轉場，函式是在轉場名稱後附加 `-in` 或 `-out`。

```html
<section data-transition="slide">火車繼續前進……</section>
<section data-transition="slide">不斷前行……</section>
<section data-transition="slide-in fade-out">然後停下。</section>
<section data-transition="fade-in slide-out">（乘客進出）</section>
<section data-transition="slide">火車再次啟動。</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-transition="slide">
        火車繼續前進……
    </section>
    <section data-transition="slide">
        不斷前行……
    </section>
    <section data-transition="slide-in fade-out">
        然後停下。
    </section>
    <section data-transition="fade-in slide-out">
        （乘客進出）
    </section>
    <section data-transition="slide">
        火車再次啟動。
    </section>
  </div>
</div>

## 背景轉場

我們預設使用交叉淡出來進行幻燈片背景之間的轉場。這可以在全域層面更改，或為特定幻燈片覆蓋。要更改所有幻燈片的背景轉場，請使用 `backgroundTransition` 配置選項。

```js
Reveal.initialize({
  backgroundTransition: 'slide',
});
```

或者，你可以在任何 `<section>` 上使用 `data-background-transition` 屬性來覆蓋該特定轉場。
````

## src/zh-Hant/scroll-view.md

- Characters: 3845
- Tokens: 0

````markdown
---
id: scroll-view
title: 滾動視圖
layout: default
---

# 滾動視圖 <span class="r-version-badge new">5.0.0</span>

從 reveal.js 5.0 版本開始，任何簡報都可以作為可滾動頁面查看。所有的動畫、片段和其他功能仍然像在普通幻燈片視圖中一樣運作。

幻燈片套件是進行演示的絕佳格式，但可滾動的網頁對觀眾自行閱讀更為方便。

滾動視圖讓你兼得兩者之長——而不需額外努力。以最適合演示的格式進行演示，以最適合聽眾的格式進行分享。

### 垂直幻燈片怎麼辦？

滾動視圖將你的套件扁平化為單一線性流程。所有幻燈片將按照其創建順序顯示，不會區分水平和 [垂直幻燈片](/zh-hant/vertical-slides)。

### 入門

滾動視圖通過初始化 reveal.js 並設置 `view: "scroll"` 來激活。這裡有一個實際操作的示範。

```js
Reveal.initialize({
  // 激活滾動視圖
  view: 'scroll',

  // 強制滾動條始終可見
  scrollProgress: true,
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "scrollProgress": true}'>
  <div class="slides">
    <section>
      <h2>滾動我！</h2>
    </section>
    <section data-background="indigo">
      <h2>帶有兩個片段的幻燈片</h2>
      <h2 class="fragment fade-left">一</h2>
      <h2 class="fragment fade-left">二</h2>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">滾動更棒</h2>
        <div data-id="box-1" style="position: absolute; top: 100%; left: 50%; width: 40px; height: 40px; background-color: indigo;"></div>
      </div>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">滾動配合自動動畫更棒！</h2>
        <div data-id="box-1" style="position: absolute; top: -20px; left: 0; width: 100%; height: 180px; background-color: indigo;"></div>
      </div>
    </section>
    <section><h2>結束</h2></section>
  </div>
</div>

## URL 激活

想要為一套幻燈片啟用滾動視圖而不改變其配置？編輯 URL 並添加 `view=scroll` 到查詢字符串。例如，這裡是 reveal.js 演示在滾動視圖中的效果：  
<https://revealjs.com/demo/?view=scroll>

## 自動激活

在行動裝置上瀏覽簡報時，滾動視圖非常有用。因此，當視窗達到移動寬度時，我們會自動啟用滾動視圖。

這是通過 `scrollActivationWidth` 配置值控制的。如果你想要禁用自動滾動視圖，初始化你的

簡報時將該值設為 `null` 或 `0`:

```js
Reveal.initialize({
  scrollActivationWidth: null,
});
```

## 滾動條

我們為任何在滾動視圖中的簡報渲染自定義滾動條。這個滾動條按幻燈片分段，讓用戶清楚地知道幻燈片何時更換。

滾動條還將顯示你幻燈片中的個別片段。擁有片段的幻燈片將根據片段數量獲得更多垂直空間。

默認情況下，當你停止滾動時滾動條會自動隱藏。這個行為可以通過 `scrollProgress` 進行配置。

```js
// - auto:     滾動時顯示滾動條，閒置時隱藏
// - true:     始終顯示滾動條
// - false:    永不顯示滾動條
scrollProgress: 'auto';
```

## 滾動捕捉

在滾動時，reveal.js 會自動移動到最接近的幻燈片。這被選為默認行為，因為這樣在觸控設備上「快速滑動」幻燈片非常舒適。

如果你喜歡，你可以將其更改為只在靠近幻燈片頂部時捕捉，使用 `proximity`。你也可以通過設置 `scrollSnap` 為 `false` 完全禁用捕捉。

```js
// - false:      無捕捉，滾動連續
// - proximity:  靠近幻燈片時捕捉
// - mandatory:  始終捕捉到最接近的幻燈片
scrollSnap: 'mandatory';
```

## 滾動布局 (實驗性)

默認情況下，每個幻燈片都將設置為與視窗一樣高。這在大多數情況下看起來很不錯，但這可能意味著你的幻燈片上下會有一些空白空間（取決於視窗和幻燈片套件的長寬比）。

如果你更喜歡一個更密集的布局，並且多個幻燈片同時可見，將 `scrollLayout` 選項設置為 `compact`。這將使每個幻燈片的寬度與視窗一致，高度根据你的長寬比（幻燈片寬度/高度）需要而設定。

你可以在下面的範例中看到兩種模式之間的區別。從緊湊布局開始。

```js
Reveal.initialize({
  view: 'scroll',
  scrollLayout: 'compact',
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "compact"}'>
  <div class="slides">
    <section>
      <h2>幻燈片一</h2>
    </section
    <section data-background="indigo">
      <h2>幻燈片二</h2>
    </section>
    <section data-background="salmon">
      <h2>幻燈片三</h2>
    </section>
    <section data-background="indigo">
      <h2>

幻燈片四</h2>
</section>

  </div>
</div>

以下是使用默認 `scrollLayout` ('full') 的相同內容。

```js
Reveal.initialize({
  view: 'scroll',
  scrollLayout: 'full', // 這是默認值
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height: 300, "scrollLayout": "full"}'>
  <div class="slides">
    <section>
      <h2>幻燈片一</h2>
    </section>
    <section data-background="indigo">
      <h2>幻燈片二</h2>
    </section>
    <section data-background="salmon">
      <h2>幻燈片三</h2>
    </section>
    <section data-background="indigo">
      <h2>幻燈片四</h2>
    </section>
  </div>
</div>

## 範例

如果你正在尋找可滾動的 reveal.js 幻燈片範例，這裡有一個很好的範例：https://slides.com/news/scroll-mode/scroll
````

## src/zh-Hant/keyboard.md

- Characters: 1210
- Tokens: 0

````markdown
---
id: keyboard
title: 鍵盤綁定
layout: default
---

# 鍵盤綁定

如果你對任何默認的鍵盤綁定不滿意，可以使用 `keyboard` 配置選項來覆蓋它們。

```javascript/1-5
Reveal.configure({
  keyboard: {
    27: () => { console.log('esc') }, // 當按下 ESC 時執行自定義操作
    13: 'next', // 當按下 ENTER 鍵時進入下一張幻燈片
    32: null // 當按下 SPACE 時不執行任何操作（即禁用 reveal.js 的默認綁定）
  }
});
```

鍵盤對象是鍵碼及其對應*動作*的映射。動作可以有三種不同的類型。

| 類型   | 動作                                         |
| :----- | :------------------------------------------- |
| 函數   | 觸發一個回調函數。                           |
| 字符串 | 調用 [reveal.js API](/zh-hant/api/) 中的指定函式名。 |
| null   | 禁用該鍵（阻止默認的 reveal.js 動作）        |

{.key-value}

## 通過 JavaScript 添加鍵盤綁定

也可以使用 JavaScript 添加和移除自定義鍵盤綁定。自定義鍵盤綁定將覆蓋默認的鍵盤綁定，但會被 `keyboard` 配置選項中用戶定義的綁定覆蓋。

```javascript
Reveal.addKeyBinding(binding, callback);
Reveal.removeKeyBinding(keyCode);
```

例如

```javascript
// 綁定參數提供以下屬性
//      keyCode: 用於綁定到回調的鍵碼
//          key: 在幫助覆蓋中顯示的鍵標籤
//  description: 在幫助覆蓋中顯示的操作描述
Reveal.addKeyBinding(
  { keyCode: 84, key: 'T', description: '啟動計時器' },
  () => {
    // 啟動計時器
  }
);

// 綁定參數也可以是直接的鍵碼，無需提供幫助描述
Reveal.addKeyBinding(82, () => {
  // 重置計時器
});
```

這允許插件直接向 Reveal 添加鍵盤綁定，使它們可以：

- 利用 Reveal 的鍵處理預處理邏輯（例如，在暫停時忽略按鍵）
- 包括在幫助覆蓋中（可選）
````

## src/zh-Hant/lightbox.md

- Characters: 4273
- Tokens: 0

````markdown
---
id: lightbox
title: Lightbox
layout: default
---

# Lightbox

A lightbox is a modal that displays an image or video in a full-screen overlay. It's great for things like clicking on thumbnails to view a larger [image](#image-lightbox) or [video](#video-lightbox).

## Image Lightbox

The simplest way to trigger a lightbox in reveal.js is to add the `data-preview-image` attribute to an `img` tag. Clicking on the image below, will open the same image in an overlay.

```html
<img src="reveal.png" data-preview-image>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image width="400px">
    </section>
  </div>
</div>

Lightboxes aren't limited to opening the image src. You can open any image you like by assigning a value to the `data-preview-image` attribute.

```html
<img src="reveal.png" data-preview-image="mastering.svg">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image="/images/docs/mastering.svg" width="400px">
    </section>
  </div>
</div>


## Video Lightbox

Video lightboxes work the same way as image lightboxes except you use the `data-preview-video` attribute instead.

```html
<video src="video.mp4" data-preview-video></video>
<img src="reveal.png" data-preview-video="video.mp4">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-hstack" style="gap: 40px;">
        <video src="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" data-preview-video width="400px"></video>
        <img src="/images/logo/reveal-black-text-sticker.png" data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" width="400px">
      </div>
    </section>
  </div>
</div>

## Lightbox Media Size
The sizing of media in the lightbox can be controlled using the `data-preview-fit` attribute. The following fit modes are supported:

| Value                | Effect                                                                   |
| :------------------- | :----------------------------------------------------------------------- |
| scale-down (default) | Scale media down if needed to fit in the lightbox.                       |
| contain              | Scale media up and down to fit the lightbox without cropping.            |
| cover                | Scale media to cover the entire lightbox, even if some of it is cut off. |
```html
<img src="reveal.png" data-preview-image data-preview-fit="cover">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-white-text.svg" data-preview-image data-preview-fit="cover" width="400px">
    </section>
  </div>
</div>

## Works on Any Element

Note that the lightbox feature works on any element, not just images and videos. For example, you can trigger an image or video lightbox from clicking a button or link.

```html
<a data-preview-image="image.png">📸 Open Logo</a>
<button data-preview-video="video.mp4">🎥 Open Video</button>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a data-preview-image="/images/logo/reveal-black-text-sticker.png">📸 Open Logo</a>
      <br/>
      <br/>
      <button data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4">🎥 Open Video</button>
    </section>
  </div>
</div>

## Iframe Lightbox

It's also possible to preview links in iframe lightboxes. The syntax for this is slightly different from how image and video lightboxes work. To enable a link preview, you'll need to add the `data-preview-link` attribute to an anchor tag. It does not accept any value and will always use the anchor's `href` attribute as the source for the iframe.

```html
<a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
    </section>
  </div>
</div>

Note that this will only work if the link allows for embedding. Many domains prevent embedding via `x-frame-options` or `Content-Security-Policy`.
````

## src/zh-Hant/fragments.md

- Characters: 4164
- Tokens: 0

````markdown
---
id: fragments
title: 片段
layout: default
---

# 片段

片段用於突出顯示或逐步顯示幻燈片上的單個元素。所有帶有叫做 `fragment` 的 class 的元素將在轉到下一張幻燈片之前逐步顯示。

默認的片段樣式是從不可見開始，然後淡入。通過添加不同的 class 到片段，可以更改這種樣式。

```html
<p class="fragment">淡入</p>
<p class="fragment fade-out">淡出</p>
<p class="fragment highlight-red">突出顯示紅色</p>
<p class="fragment fade-in-then-out">先淡入，然後淡出</p>
<p class="fragment fade-up">向上滑動同時淡入</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment">淡入</p>
      <p class="fragment fade-out">淡出</p>
      <p class="fragment highlight-red">突出顯示紅色</p>
      <p class="fragment fade-in-then-out">先淡入，然後淡出</p>
      <p class="fragment fade-up">向上滑動同時淡入</p>
    </section>
  </div>
</div>

| 名稱                    | 效果                           |
| :---------------------- | :----------------------------- |
| fade-out                | 開始可見，然後淡出             |
| fade-up                 | 向上滑動同時淡入               |
| fade-down               | 向下滑動同時淡入               |
| fade-left               | 向左滑動同時淡入               |
| fade-right              | 向右滑動同時淡入               |
| fade-in-then-out        | 先淡入，然後在下一步淡出       |
| current-visible         | 在下一步先淡入，然後淡出       |
| fade-in-then-semi-out   | 先淡入，然後在下一步淡到 50%    |
| grow                    | 放大                           |
| semi-fade-out           | 淡出到 50%                      |
| shrink                  | 縮小                           |
| strike                  | 中劃線                         |
| highlight-red           | 文本變紅                       |
| highlight-green         | 文本變綠                       |
| highlight-blue          | 文本變藍                       |
| highlight-current-red   | 文本變紅，然後在下一步恢復原樣 |
| highlight-current-green | 文本變綠，然後在下一步恢復原樣 |
| highlight-current-blue  | 文本變藍，然後在下一步恢復原樣 |

{.key-value}

## 自定義片段 <span class="r-version-badge new">4.5.0</span>

可以通過為 `.fragment.effectname` 和 `.fragment.effectname.visible` 分別定義 CSS 樣式來實現自定義效果。當片段在簡報中被逐步顯示時，叫做 `visible` 的 class 將被添加到每個片段上。

例如，以下定義了一種片段樣式，其中元素最初被模糊，但在逐步顯示時變得清晰。

```html
<style>
  .fragment.blur {
    filter: blur(5px);
  }
  .fragment.blur.visible {
    filter: none;
  }
</style>
<section>
  <p class="fragment custom blur">一</p>
  <p class="fragment custom blur">二</p>
  <p class="fragment custom blur">三</p>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <style>
      .fragment.blur {
        filter: blur(5px);
      }
      .fragment.blur.visible {
        filter: none;
      }
    </style
    <section>
      <p class="fragment custom blur">一</p>

      <p class="fragment custom blur">二</p>
      <p class="fragment custom blur">三</p>
    </section>

  </div>
</div>

請注意，我們為每個片段添加了一個 叫做 `custom` 的 class 。這告訴 reveal.js 避免應用其默認的淡入片段樣式。

如果你希望所有元素保持模糊，除了當前片段外，你可以用 `current-fragment` 替換 `visible`。

```css
.fragment.blur.current-fragment {
  filter: none;
}
```

## 嵌套片段

可以通過包裝同一元素來順序應用多個片段，這將在第一步淡入文本，在第二步將其變紅，在第三步淡出。

```html
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out"> 淡入 > 變紅 > 淡出 </span>
  </span>
</span>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <span class="fragment fade-in">
        <span class="fragment highlight-red">
          <span class="fragment fade-out">
            淡入 > 變紅 > 淡出
          </span>
        </span>
      </span>
    </section>
  </div>
</div>

## 片段順序

默認情況下，片段將按照它們在 DOM 中出現的順序進行步進。這個顯示順序可以使用 `data-fragment-index` 屬性更改。請注意，多個元素可以在同一索引處出現。

```html
<p class="fragment" data-fragment-index="3">最後出現</p>
<p class="fragment" data-fragment-index="1">第一個出現</p>
<p class="fragment" data-fragment-index="2">第二個出現</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment" data-fragment-index="3">最後出現</p>
      <p class="fragment" data-fragment-index="1">第一個出現</p>
      <p class="fragment" data-fragment-index="2">第二個出現</p>
    </section>
  </div>
</div>

## 事件

當片段被顯示或隱藏時，reveal.js 將發送事件。

```javascript
Reveal.on('fragmentshown', (event) => {
  // event.fragment = 片段 DOM 元素
});
Reveal.on('fragmenthidden', (event) => {
  // event.fragment = 片段 DOM 元素
});
```
````

## src/zh-Hant/presentation-size.md

- Characters: 1164
- Tokens: 0

````markdown
---
id: presentation-size
title: 簡報尺寸
layout: default
---

# 簡報尺寸

所有簡報都有一個「正常」尺寸，即它們創作時的解析度。reveal.js 會根據正常尺寸自動等比例縮放簡報，以確保一切內容能適應任何顯示或視窗尺寸，同時不改變內容的縱橫比或布局。

下面列出了與尺寸相關的[配置選項](/zh-hant/config/)，包括它們的預設值：

```javascript
Reveal.initialize({
  // 簡報的「正常」尺寸，縱橫比會在簡報被縮放以適應不同解析度時被保留。
  // 可以使用百分比單位指定。
  width: 960,
  height: 700,

  // 顯示尺寸的一部分應該保持空白圍繞內容
  margin: 0.04,

  // 應用於內容的最小/最大可能縮放範圍
  minScale: 0.2,
  maxScale: 2.0,
});
```

## 置中

幻燈片基於它們包含的內容量在螢幕上垂直置中。若要禁用此功能並保持幻燈片在配置的高度固定，請將 `center` 設置為 `false`。

```js
Reveal.initialize({ center: false });
```

## 嵌入式

默認情況下，reveal.js 將假設其應覆蓋整個瀏覽器視窗。如果你想在網頁的一個較小部分嵌入你的簡報，或在同一頁面上顯示[多個簡報](/zh-hant/initialization/#multiple-presentations)，你可以使用 `embedded` [配置選項](/zh-hant/config/)。

```js
Reveal.initialize({ embedded: false });
```

一個嵌入式簡報將根據其 `.reveal` 根的尺寸確定其大小。如果該元素的大小因非視窗 `resize` 事件的原因而改變，你可以調用 `Reveal.layout()` 手動觸發布局更新。

```js
// 更改我們簡報的尺寸
document.querySelector('.reveal').style.width = '50vw';

// 使 reveal.js 感知到尺寸變化
Reveal.layout();
```

## 自帶佈局

如果你想禁用內建的縮放和置中，並帶來你自己的佈局，設置 `disableLayout: true`。這將使你的幻燈片覆蓋可用頁面的 100% 寬度和高度，並將響應式樣式留給你來處理。

```javascript
Reveal.initialize({
  disableLayout: false,
});
```
````

## src/zh-Hant/pdf-export.md

- Characters: 1531
- Tokens: 0

````markdown
---
id: pdf-export
title: PDF 輸出
layout: default
---

# PDF 輸出

簡報可以通過特殊的列印樣式表導出為 PDF。這裡有一個已經上傳到 SlideShare 的導出簡報的範例：https://slideshare.net/hakimel/revealjs-300。

注意：此功能目前僅確認在 [Google Chrome](https://google.com/chrome) 和 [Chromium](https://www.chromium.org/Home) 中可行。

## 操作說明

1. 使用包含 `print-pdf` 的查詢字符串打開你的簡報，例如：`http://localhost:8000/?print-pdf`。你可以在 [revealjs.com/demo?print-pdf](/zh-hant/demo/?print-pdf) 測試這個功能。
1. 打開瀏覽器中的列印對話框（CTRL/CMD+P）。
1. 將 **目的地** 設置更改為 **保存為 PDF**。
1. 將 **佈局** 更改為 **橫向**。
1. 將 **邊距** 更改為 **無**。
1. 啟用 **背景圖形** 選項。
1. 點擊 **保存** 🎉

![Chrome Print Settings](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings-2.png)

## 演講者筆記

你的[演講者筆記](/zh-hant/speaker-view/)可以通過啟用 `showNotes` 選項包含在輸出的 PDF 中。

```js
Reveal.configure({ showNotes: true });
```

筆記將在幻燈片上方的一個覆蓋框中列印。如果你希望將它們列印在幻燈片後面的單獨頁面上，將 `showNotes` 設置為 `"separate-page"`。

```js
Reveal.configure({ showNotes: 'separate-page' });
```

## 頁碼

如果你想在列印頁面上加上頁碼，請確保啟用[幻燈片編號](/zh-hant/slide-numbers/)。

## 頁面大小

導出尺寸是從配置的[簡報大小](/zh-hant/presentation-size/)中推斷出來的。如果幻燈片過高無法放在單一頁面內，它將擴展到多個頁面。你可以使用 `pdfMaxPagesPerSlide` 配置選項來限制一個幻燈片可能擴展到的頁面數量。例如，要確保沒有任何幻燈片超過一頁，你可以將它設置為 1。

```js
Reveal.configure({ pdfMaxPagesPerSlide: 1 });
```

## 分段的單獨頁面

[分段](/zh-hant/fragments/) 默認在單獨的幻燈片上列印。這意味著，如果你有一個包含三個分段步驟的幻燈片，它將生成三個單獨的幻燈片，其中的分段會逐步顯示。

如果你喜歡在同一幻燈片上列印所有可見狀態的分段，你可以使用 `pdfSeparateFragments` 配置選項。

```js
Reveal.configure({ pdfSeparateFragments: false });
```

## 替代的導出方式

你也可以使用 [decktape](https://github.com/astefanutti/decktape) 通過命令行將你的簡報轉換為 PDF。
````

## src/zh-Hant/math.md

- Characters: 4004
- Tokens: 0

````markdown
---
id: math
title: 數學
layout: default
---

# 數學

數學插件允許你在幻燈片中包含美觀的排版數學公式。首先，確保 reveal.js 已經初始化並啟用了數學插件。

```html
<script src="plugin/math/math.js"></script>
<script>
  Reveal.initialize({ plugins: [RevealMath.KaTeX] });
</script>
```

在此範例中，我們使用了 KaTeX 排版器，但你也可以選擇使用[MathJax 2](#mathjax-2)或[3](#mathjax-3-4.2.0)。

現在插件已導入，我們可以開始在幻燈片中添加 [LaTeX](https://en.wikipedia.org/wiki/LaTeX) 公式。

```html
<section>
  <h2>洛倫茲方程</h2>
  \[\begin{aligned} \dot{x} &amp; = \sigma(y-x) \\ \dot{y} &amp; = \rho x - y -
  xz \\ \dot{z} &amp; = -\beta z + xy \end{aligned} \]
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>洛倫茲方程</h2>
      \[\begin{aligned}
      \dot{x} &amp; = \sigma(y-x) \\
      \dot{y} &amp; = \rho x - y - xz \\
      \dot{z} &amp; = -\beta z + xy
      \end{aligned} \]
    </section>
  </div>
</div>

## Markdown

如果你想在 Markdown 寫的簡報中插入數學公式，你需要用反引號將公式包起來。這樣可以避免 LaTeX 和 Markdown 語法之間的衝突。例如：

```html
<section data-markdown>`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`</section>
```

## 排版庫

數學插件提供了三種數學排版庫供你選擇用於渲染你的數學公式。每個變體都是獨立的插件，可以通過 `RevealMath.<Variant>` 訪問。如果你沒有特別偏好，我們建議使用 KaTeX。

| Library                                               | Plugin Name         | Config Property              |
| :---------------------------------------------------- | :------------------ | :--------------------------- |
| [KaTeX](https://katex.org/)                           | RevealMath.KaTeX    | [katex](#katex-4.2.0)        |
| [MathJax 2](https://docs.mathjax.org/en/v2.7-latest/) | RevealMath.MathJax2 | [mathjax2](#mathjax-2)       |
| [MathJax 3](https://www.mathjax.org/)                 | RevealMath.MathJax3 | [mathjax3](#mathjax-3-4.2.0) |

{.full-width}

### KaTeX <span class="r-version-badge new">4.2.0</span>

通過 `katex` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需添加 `katex` 配置選項。

```js
Reveal.initialize({
  katex: {
    version: 'latest',
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
  },
  plugins: [RevealMath.KaTeX],
});
```

注意，默認情況下會從外部伺服器取得最新版本的 KaTeX（https://cdn.jsdelivr.net/npm/katex）。要使用固定版本，將 `version` 設為例如 `0.13.18`。

如果你想離線使用 KaTeX，你需要下載庫的副本（例如通過 npm）並使用 `local` 配置選項（則 `version` 選項將被忽略），例如：

```js
Reveal.initialize({
  katex: {
    local: 'node_modules/katex',
  },
  plugins: [RevealMath.KaTeX],
});
```

### MathJax 2

通過 `mathjax2` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需包括 `mathjax2` 配置選項。

```js
Reveal.initialize({
  mathjax2: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    // pass other options into `MathJax.Hub.Config()`
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    },
  },
  plugins: [RevealMath.MathJax2],
});
```

注意，最新的 MathJax 2 從遠程伺服器加載。要使用固定版本，將 mathjax 設為例如 https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js。

如果你想離線使用 MathJax，你需要下載函式庫的副本（例如通過 npm）並將 `mathjax` 指向本地副本。

### MathJax 3 <span class="r-version-badge new">4.2.0</span>

通過 `mathjax3` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需包括 `mathjax3` 配置選項。

```js
Reveal.initialize({
  mathjax3: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    tex: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    },
  },
  plugins: [RevealMath.MathJax3],
});
```

注意，最新的 MathJax 3 從遠程伺服器加載。要使用固定版本，將 `mathjax` 設為例如 <https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js>。此外，配置現在是 URL 的一部分，默認載入 `tex-mml-chtml`，它能識別 TeX 和 MathML 表示的數學公式，並使用 HTML 和 CSS 生成輸出（CommonHTML 輸出格式）。這是一個非常通用的配置，但這也是它很龐大的原因，因此你可能需要考慮一個更輕量，更符合你需求的配置，例如 `tex-svg`。

如果你想離線使用 MathJax，你需要下載庫的副本（例如通過 npm）並相應地調整 `mathjax`。
````

## src/zh-Hant/config.md

- Characters: 5227
- Tokens: 0

````markdown
---
id: config
title: 配置
layout: default
---

# 配置選項

可以通過使用大量的參數來微調簡報。這些選項可以在你[初始化](/zh-hant/initialization/) reveal.js 時包含進去。也可以在運行時[重新配置](#%E9%87%8D%E6%96%B0%E9%85%8D%E7%BD%AE)。

注意，**所有**屬性值都是**可選的**，以下顯示默認值。

```javascript
Reveal.initialize({

  // 顯示簡報控制箭頭
  controls: true,

  // 通過提供提示來幫助用戶學習控制，例如當他們首次遇到垂直幻燈片時使下箭頭彈跳
  controlsTutorial: true,

  // 決定控制出現的位置，"edges" 或 "bottom-right"
  controlsLayout: 'bottom-right',

  // 向後導覽箭頭的可見性規則；"faded", "hidden" 或 "visible"
  controlsBackArrows: 'faded',

  // 顯示簡報進度條
  progress: true,

  // 顯示當前幻燈片的頁碼
  // - true:    顯示幻燈片編號
  // - false:   隱藏幻燈片編號
  //
  // 可選地設置為指定編號格式的字符串：
  // - "h.v":   水平 . 垂直幻燈片編號（默認）
  // - "h/v":   水平 / 垂直幻燈片編號
  // - "c":     扁平化幻燈片編號
  // - "c/t":   扁平化幻燈片編號 / 總幻燈片數
  //
  // 或者，你可以提供一個返回當前幻燈片的幻燈片編號的函數。
  // 該函數應該接受一個幻燈片對象並返回一個字符串 [幻燈片編號] 或
  // 三個字符串 [n1,delimiter,n2]。見 #formatSlideNumber()。
  slideNumber: false,

  // 可用於限制幻燈片編號出現的上下文
  // - "all":      總是顯示幻燈片編號
  // - "print":    僅在打印到 PDF 時
  // - "speaker":  僅在演講者視圖中
  showSlideNumber: 'all',

  // 使用基於 1 的索引為 # 鏈接以匹配幻燈片編號（默認是基於 0 的）
  hashOneBasedIndex: false,

  // 將當前幻燈片編號添加到 URL 哈希中，以便重新加載頁面/複製 URL 將返回到相同的幻燈片
  hash: false,

  // 標記是否應監控哈希並相應地更改幻燈片
  respondToHashChanges: true,

  // 啟用跳轉到幻燈片的導覽快捷鍵
  jumpToSlide: true,

  // 將每次幻燈片更改推送到瀏覽器歷史記錄。意味著 `hash: true`
  history: false,

  // 啟用用於導覽的鍵盤快捷

鍵
  keyboard: true,

  // 可選函數，當返回 false 時阻止鍵盤事件
  //
  // 如果你將此設置為 'focused'，我們只會在嵌入式幻燈片聚焦時捕獲鍵盤事件
  keyboardCondition: null,

  // 禁用默認的 reveal.js 幻燈片佈局（縮放和居中）
  // 以便你可以使用自定義 CSS 佈局
  disableLayout: false,

  // 啟用幻燈片概覽模式
  overview: true,

  // 幻燈片的垂直居中
  center: true,

  // 啟用具有觸控輸入的設備上的觸控導覽
  touch: true,

  // 循環播放簡報
  loop: false,

  // 將簡報方向更改為從右到左
  rtl: false,

  // 更改我們的導覽方向的行為。
  //
  // "default"
  // 左/右箭頭鍵在水平幻燈片之間步進，上/下箭頭鍵在垂直幻燈片之間步進。空格鍵步進
  // 通過所有幻燈片（水平和垂直）。
  //
  // "linear"
  // 移除上/下箭頭。左/右箭頭步進通過所有幻燈片（水平和垂直）。
  //
  // "grid"
  // 啟用時，從一個垂直堆疊向相鄰的垂直堆疊進行左/右步進時，將使你處於相同的垂直
  // 索引。
  //
  // 考慮一個有六張幻燈片按兩個垂直堆疊排序的套件：
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // 如果你在幻燈片 1.3 上並向右導覽，你通常會從 1.3 -> 2.1。如果使用 "grid"，相同的導覽將帶你
  // 從 1.3 -> 2.3。
  navigationMode: 'default',

  // 每次加載簡報時隨機化幻燈片的順序
  shuffle: false,

  // 全域開啟或關閉片段
  fragments: true,

  // 標記是否將當前片段包含在 URL 中，
  // 以便重新加載後你會回到相同的片段位置
  fragmentInURL: true,

  // 標記簡報是否在嵌入模式下運行，
  // 即包含在屏幕的有限部分內
  embedded: false,

  // 標記是否應在按下問號鍵時顯示幫助覆蓋
  help: true,

  // 標記是否應該可以暫停簡報（黑屏）
  pause: true,

  // 標記是否應向所有觀眾顯示演講者筆記
  showNotes: false,

  // 全域覆蓋用於自動播放嵌入式媒體（視頻/音頻/iframe）
  // - null:   媒體只有在存在 data-autoplay 時才會自動播放
  // - true:   所有媒體將自動播放，無論個別設定如何
  // - false:  無論個別設定如何，都不會自動播放媒體
  autoPlayMedia: null,

  // 全球覆蓋用於預加載懶加載 iframes
  // - null:   帶有 data-src 和 data-preload 的 iframes 將在進入 viewDistance 範圍內時加載，只帶有 data-src 的 iframes 將在可見時加載
  // - true:   所有帶有 data-src 的 iframes 將在進入 viewDistance 範圍內時加載
  // - false:  所有帶有 data-src 的 iframes 將只在可見時加載
  preloadIframes: null,

  // 可用於全域禁用自動動畫
  autoAnimate: true,

  // 可選提供一個自定義元素匹配器，
  // 將用於決定我們可以在哪些元素之間進行動畫。
  autoAnimateMatcher: null,

  // 我們自動動畫過渡的預設設定，可以通過數據參數
  // 在每張幻燈片或每個元素上進行覆蓋
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,

  // 可以自動動畫的 CSS 屬性。位置 & 縮放
  // 分別匹配，因此無需包括
  // 像 top/right/bottom/left, width/height 或 margin 這樣的樣式。
  autoAnimateStyles: [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset'
  ],

  // 控制自動進入下一幻燈片
  // - 0:      自動播放只在當前幻燈片或片段上存在 data-autoslide HTML 屬性時發生
  // - 1+:     所有幻燈片將以給定間隔自動進行
  // - false:  即使存在 data-autoslide，也不進行自動播放
  autoSlide: 0,

  // 用戶輸入後停止自動播放
  autoSlideStoppable: true,

  // 自動播放時用於導覽的函式（默認為 navigateNext）
  autoSlideMethod: null,

  // 指定你認為你將花在每張幻燈片上的平均時間（秒）。這用於在演講者視圖中顯示配速計時器
  defaultTiming: null,

  // 啟用通過鼠標滾輪進行幻燈片導覽
  mouseWheel: false,

  // 在 iframe 預覽覆蓋層中打開鏈接
  // 添加 `data-preview-link` 和 `data-preview-link="false"` 以自定義每個鏈接
  previewLinks: false,

  // 通過 window.postMessage 暴露 reveal.js API


  postMessage: true,

  // 通過 postMessage 將所有 reveal.js 事件派發給父視窗
  postMessageEvents: false,

  // 當頁面可見性改變時聚焦 body 以確保鍵盤快捷鍵工作
  focusBodyOnPageVisibilityChange: true,

  // 過渡樣式
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // 過渡速度
  transitionSpeed: 'default', // default/fast/slow

  // 全頁幻燈片背景的過渡樣式
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // 單張幻燈片可以擴展到多個頁面時打印到 PDF 的最大頁數，
  // 預設為無限制
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

  // 打印每個片段到一張幻燈片
  pdfSeparateFragments: true,

  // 用於減少導出 PDF 頁面內容高度的偏移量。
  // 這存在於根據你如何打印到 PDF 來解釋環境差異。
  // CLI 打印選項，如 phantomjs 和 wkpdf，可以精確地
  // 結束在文檔的總高度，而在瀏覽器中打印必須在
  // 一個像素之前結束。
  pdfPageHeightOffset: -1,

  // 離當前幻燈片可見的幻燈片數
  viewDistance: 3,

  // 在行動裝置上離當前幻燈片可見的幻燈片數。
  // 建議將此數字設置為比 viewDistance 更低的數字以節省資源。
  mobileViewDistance: 2,

  // 用於顯示幻燈片的顯示模式
  display: 'block',

  // 如果不活動則隱藏光標
  hideInactiveCursor: true,

  // 隱藏光標的時間（毫秒）
  hideCursorTime: 5000

});
```

## 重新配置

使用 `configure` 函式可以在初始化後更新配置。

```javascript
// 關閉 autoSlide
Reveal.configure({ autoSlide: 0 });

// 每 5 秒開始自動播放
Reveal.configure({ autoSlide: 5000 });
```
````

## src/zh-Hant/backgrounds.md

- Characters: 5415
- Tokens: 0

````markdown
---
id: backgrounds
title: 背景
layout: default
---

# 幻燈片背景

預設情況下，幻燈片內容會被限制在屏幕的一部分以適應任何顯示設備並均勻縮放。你可以通過在 `<section>` 元素上添加 `data-background` 屬性，應用全頁背景在幻燈片區域之外。支持四種不同類型的背景：顏色、圖片、視頻和 iframe。

## 顏色背景

支持所有 CSS 顏色格式，包括十六進制值、關鍵字、`rgba()` 或 `hsl()` 等。

```html/0,3
<section data-background-color="aquamarine">
  <h2>🍦</h2>
</section>
<section data-background-color="rgb(70, 70, 255)">
  <h2>🍰</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-color="aquamarine">
      <h2 style="font-size: 4em;">🍦</h2>
    </section>
    <section data-background-color="rgb(70, 70, 255)">
      <h2 style="font-size: 4em;">🍰</h2>
    </section>
  </div>
</div>

## 漸變背景

支持所有 CSS 漸變格式，包括 `linear-gradient`、`radial-gradient` 和 `conic-gradient`。

```html/0,3
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
  <h2>🐟</h2>
</section>
<section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
  <h2>🐳</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐟</h2>
    </section>
    <section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐳</h2>
    </section>
  </div>
</div>

## 圖片背景

預設情況下，背景圖片被調整大小以覆蓋整個頁面。可用選項包括：

| 屬性                     | 預設值    | 描述                                                                                                  |
| :----------------------- | :-------- | :---------------------------------------------------------------------------------------------------- |
| data-background-image    |           | 顯示的圖片的 URL。幻燈片開啟時，GIF 將重新開始。                                                      |
| data-background-size     | cover     | 參見 MDN 上的 [background-size](https://developer.mozilla.org/docs/Web/CSS/background-size)。         |
| data-background-position | center    | 參見 MDN 上的 [background-position](https://developer.mozilla.org/docs/Web/CSS/background-position)。 |
| data-background-repeat   | no-repeat | 參見 MDN 上的 [background-repeat](https://developer.mozilla.org/docs/Web/CSS/background-repeat)。     |
| data-background-opacity  | 1         | 背景圖片的透明度，0-1 範圍。0 是透明的，1 是完全不透明的。                                            |

{.nowrap-1st}

```html/0,3-4
<section data-background-image="http://example.com/image.png">
  <h2>Image</h2>
</section>
<section data-background-image="http://example.com/image.png"
          data-background-size="100px" data-background-repeat="repeat">
  <h2>這張背景圖將被設置為 100px 並重複</h2>
</section>
```

## 視頻背景

自動播放全尺寸視頻作

為幻燈片背景。

| 屬性                        | 預設值 | 描述                                                       |
| :-------------------------- | :----- | :--------------------------------------------------------- |
| data-background-video       |        | 一個視頻源或逗號分隔的多個視頻源。                         |
| data-background-video-loop  | false  | 標記視頻是否應重複播放。                                   |
| data-background-video-muted | false  | 標記音頻是否應靜音。                                       |
| data-background-size        | cover  | 使用 `cover` 全屏和部分裁剪，或 `contain` 以信箱格式顯示。 |
| data-background-opacity     | 1      | 背景視頻的透明度，0-1 範圍。0 是透明的，1 是完全不透明的。 |

{.nowrap-1st}

```html/0-1
<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
          data-background-video-loop data-background-video-muted>
  <h2>Video</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" 
          data-background-video-loop data-background-video-muted>
      <h2>Video</h2>
    </section>
  </div>
</div>

## iframe 背景

在幻燈片背景中嵌入一個網頁，覆蓋 100% 的 reveal.js 寬度和高度。iframe 位於背景層，位於你的幻燈片後面，因此默認情況下無法與之互動。若要使你的背景可互動，可以添加 `data-background-interactive` 屬性。

| 屬性                        | 預設值 | 描述                                                                   |
| :-------------------------- | :----- | :--------------------------------------------------------------------- |
| data-background-iframe      |        | 要加載的 iframe 的 URL                                                 |
| data-background-interactive | false  | 添加此屬性可以與 iframe 內容互動。啟用此功能將阻止與幻燈片內容的互動。 |

{.nowrap-1st}

```html/0-1
<section data-background-iframe="https://slides.com"
          data-background-interactive>
  <h2>Iframe</h2>
</section>
```

iframe 會在變得可見時懶加載。如果你想提前預加載 iframe，你可以在幻燈片 `<section>` 上添加 `data-preload` 屬性。你也可以使用 `preloadiframes` 配置選項為所有 iframes 啟用全域預加載。

## 背景轉場

我們將使用交叉淡入來過渡幻燈片背景，這是預設設置。可以使用 [`backgroundTransition`](/zh-hant/transitions/#%E8%83%8C%E6%99%AF%E8%BD%89%E5%A0%B4) 配置選項更改此設置。

## 視差背景

如果你想使用視差滾動背景，初始化 reveal.js 時設置下面的前兩個屬性（另外兩個是可選的）。

```javascript/1-11
Reveal.initialize({
  // 視差背景圖片
  parallaxBackgroundImage: '', // 例如 "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"

  // 視差背景大小
  parallaxBackgroundSize: '', // CSS 語法，例如 "2100px 900px" - 目前只支持像素（不要使用 % 或 auto）

  // 每張幻燈片移動視差背景的像素數
  // - 除非指定，否則自動計算
  // - 設置為 0 禁用沿軸移動


  parallaxBackgroundHorizontal: 200,
  parallaxBackgroundVertical: 50
});
```

確保背景大小遠大於屏幕大小，以允許一定的滾動。[查看示範](/demo?parallaxBackgroundImage=https%3A%2F%2Fs3.amazonaws.com%2Fhakim-static%2Freveal-js%2Freveal-parallax-1.jpg&parallaxBackgroundSize=2100px%20900px).
````

## src/zh-Hant/jump-to-slide.md

- Characters: 794
- Tokens: 0

````markdown
---
id: jump-to-slide
title: 跳轉到幻燈片
layout: default
---

# 跳轉到幻燈片 <span class="r-version-badge coming">4.5.0</span>

你可以使用 reveal.js 的跳轉到幻燈片快捷鍵直接跳到特定的幻燈片。以下是操作方式：

1. 按 G 啟動
2. 輸入幻燈片編號或 id
3. 按 Enter 確認

## 導覽到幻燈片編號

當跳轉到一個幻燈片時，你可以輸入數字值或字符串。如果你提供一個數字，reveal.js 將導覽到所需的幻燈片編號。如果你輸入一個字符串，reveal.js 將嘗試定位一個具有匹配 `id` 的幻燈片並導覽到它。

這裡有一些不同輸入及其導覽結果的範例。

| 輸入    | 結果                                                 |
| :------ | :--------------------------------------------------- |
| 5       | 導覽到幻燈片編號 5                                   |
| 6/2     | 導覽到水平幻燈片 6，垂直幻燈片 2                     |
| the-end | 導覽到具有此 id 的幻燈片（`<section id="the-end">`） |

{.key-value}

## 禁用跳轉到幻燈片

跳轉到幻燈片默認情況下是啟用的，但如果你想關閉它，你可以將 `jumpToSlide` 配置值設置為 `false`。

```javascript
Reveal.initialize({
  jumpToSlide: false,
});
```
````

## src/zh-Hant/speaker-view.md

- Characters: 1852
- Tokens: 0

````markdown
---
id: speaker-view
title: 演講者視圖
layout: default
---

# 演講者視圖

reveal.js 提供了一個演講者筆記插件，可以在單獨的瀏覽器視窗中展示每張幻燈片的筆記。筆記視窗還會預覽下一張即將展示的幻燈片，所以即使你沒有寫筆記，這也可能是有幫助的。按鍵盤上的「S」鍵打開演講者視圖。

演講者視圖打開後，演講計時器即開始運行。你可以通過點擊計時器來重置它。

筆記是通過在幻燈片下附加一個 `<aside>` 元素來定義的，如下所示。如果你更喜歡使用 Markdown 來寫筆記，可以向 aside 元素添加 `data-markdown` 屬性。

或者，你可以在幻燈片的 `data-notes` 屬性中添加你的筆記，如 `<section data-notes="Something important"></section>`。

在本地使用時，此功能要求 reveal.js [從本地網頁伺服器運行](/zh-hant/installation/#full-setup)。

```html/3-5
<section>
  <h2>某個幻燈片</h2>

  <aside class="notes">
    嘘，這是你的私人筆記 📝
  </aside>
</section>
```

如果你正在使用 [Markdown](/zh-hant/markdown/) 插件，你可以利用特殊的分隔符添加筆記：

```html/0-1,7-8
<section data-markdown="example.md" data-separator="^\n\n\n"
         data-separator-vertical="^\n\n" data-separator-notes="^Note:">
# 標題
## 副標題

這裡是一些內容...

Note:
這將僅在筆記視窗中顯示。
</section>
```

## 添加演講者筆記插件

該插件已經與 reveal.js 捆綁在一起。要啟用演講者筆記插件，將插件源添加到 `index.html` 中並將插件添加到 reveal.js 的初始化中。

```html
<script src="plugin/notes/notes.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealNotes],
  });
</script>
```

## 分享和列印演講者筆記

筆記僅對演講者在演講者視圖中可見。如果你希望與他人分享你的筆記，可以將 reveal.js 初始化時的 `showNotes` 配置值設置為 `true`。筆記將顯示在簡報的底部。

當啟用 `showNotes` 時，筆記也會包含在你 [輸出的 PDF](/zh-hant/pdf-export/) 中。默認情況下，筆記在幻燈片上方的一個框中打印。如果你更喜歡在幻燈片之後的單獨頁面上打印它們，設置 `showNotes: "separate-page"`。

## 演講者筆記時鐘和計時器

演講者筆記視窗還會顯示：

- 自演講開始以來經過的時間。如果你將鼠標懸停在此部分上方，將顯示一個計時器重置按鈕。
- 當前的實時時間
- （可選）節

奏計時器，指示當前演示的節奏是否準時（顯示為綠色），如果不是，演講者應該加速（顯示為紅色）或可以放慢（藍色）。

節奏計時器可以通過在 `Reveal` 配置塊中配置 `defaultTiming` 參數來啟用，該參數指定每張幻燈片的秒數。120 可以是一個合理的經驗法則。或者，你可以通過設置 `totalTime` 來啟用計時器，這設置了你的演示總長度（也以秒為單位）。如果兩個值都指定了，`totalTime` 將優先，`defaultTiming` 將被忽略。無論基準時間函式如何，都可以通過設置幻燈片 `<section>` 的 `data-timing` 屬性（同樣是以秒為單位）來給出時間。

## 伺服器端演講者筆記

在某些情況下，可能希望在與演示的設備不同的設備上運行筆記。基於 Node.js 的筆記插件允許你使用與其客戶端對應物相同的筆記定義來做到這一點。請參見 <https://github.com/reveal/notes-server>.
````

## src/zh-Hant/course.md

- Characters: 3341
- Tokens: 0

```markdown
---
id: course
title: 精通 reveal.js
description: 一個即將推出的視頻課程，涵蓋從 reveal.js 基礎到高級自定義和功能的所有內容。
layout: default
hidden: true
hide_ads: true
---

# 精通 reveal.js

<iframe width="100%" height="405" src="https://www.youtube.com/embed/6-uWaBcqguc?color=white&controls=1&modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

這個視頻課程將教你如何使用 reveal.js 創建精美的簡報。

我們將從安裝 reveal.js、創建幻燈片和配置你的簡報的基礎開始。然後，我們將進一步探討更有趣的話題，如展示語法高亮代碼、使用自動動畫讓幻燈片內容動起來，以及使用演講者視圖。在高級視頻中，我們將探索 reveal.js JavaScript API、插件創建和如何自定義鍵盤綁定。（見[完整視頻列表](#table-of-contents)。）

### 這是為誰設計的？

這個課程面向剛接觸 reveal.js 的人，以及那些已經理解基礎但準備探索完整功能集的你。

你需要對 HTML、CSS 和 JavaScript 有基本的了解。HTML 是 reveal.js 的骨幹，在整個課程中廣泛使用。CSS 和 JavaScript 主要用於高級視頻，涵蓋如創建自定義主題、使用 reveal.js API 和編輯源代碼等主題。

### 誰來講解？

👋 我是 Hakim——一名瑞典前端開發人員和 reveal.js 的創建者。目前在我創辦的 [Slides.com](https://slides.com) 工作——一個基於 reveal.js 構建的簡報平台和圖形編輯器。除此之外，我喜歡在 [hakim.se](https://hakim.se) 上進行視覺演示和實驗。

我在 10 年前 (!) 發布了 reveal.js 的第一個版本，當時沒有想到它最終會被成千上萬的人使用。我希望你能加入進來，親身體驗為什麼這麼多人選擇使用 reveal.js 創建他們的簡報！

<div class="buy-course">
	<div class="buy-course-thumb">
		<img src="/images/docs/mastering.svg">
	</div>
	<div class="buy-course-action">
		<p class="buy-course-price">
			<span class="old-price"><sup>$</sup>99</span>
			<span><sup>$</sup>79</span>
		</p>
		<a class="gumroad-button" href="https://gum.co/reveal-js/v0sz80d?wanted=true" target="_blank" data-gumroad-single-product="true">購買課程</a>
	</div>
	<div class="buy-course-data">
		<ul>
			<li>22 視頻</li>
			<li>總時長 5 小時 39 分鐘</li>
			<li>以高清格式流媒體</li>
			<li>以 4K 格式下載</li>
			<li>免費更新</li>
		</ul>

    </div>

</div>
<script src="https://gumroad.com/js/gumroad.js"></script>

課程通過 [Gumroad](https://gumroad.com/) 銷售。購買時將添加增值稅（如果適用）。如果課程不適合你——保證 100% 無條件退款。

## 目錄

課程被拆為相對較短的影片，以便你可以輕鬆跳過與你無關或你已熟悉的主題。總時長為 5.5 小時。

| 起步                                           | <!-- --> |
| :--------------------------------------------- | -------: |
| **起步**                                       |     時長 |
| &nbsp; 安裝 reveal.js 和設置開發伺服器。       |     5:40 |
| &nbsp; 創建幻燈片，互相鏈接並保存草稿。        |    10:04 |
| &nbsp; 配置你的簡報。                          |     8:23 |
| &nbsp; 使用垂直幻燈片。                        |     9:05 |
| &nbsp; 使用 Markdown 創建幻燈片。              |    16:34 |
| **內容創建**                                   |
| &nbsp; 向幻燈片添加文本、圖片、視頻和 iframe。 |    10:47 |
| &nbsp; 使用棧和自動大小文本佈局幻燈片內容。    |    13:58 |
| &nbsp; 全屏背景圖片、視頻、顏色和 iframe。     |    16:26 |
| &nbsp; 展示語法高亮代碼。                      |    21:51 |
| &nbsp; 使用 Fragments 逐步構建幻燈片。         |    13:14 |
| &nbsp; 使用 Auto-Animate 動畫幻燈片內容。      |    17:01 |
| **配置與功能**                                 |
| &nbsp; 簡報大小和比例。                        |    14:34 |
| &nbsp; 幻燈片過渡。                            |    12:36 |
| &nbsp; 主題化你的內容並創建你自己的主題。      |    16:12 |
| &nbsp; 演講者筆記和使用演講者視圖。            |    11:27 |
| &nbsp; 幻燈片編號與 URL。                      |    19:55 |
| &nbsp; 將你的簡報轉換為 PDF。                  |    10:23 |
| **高級 (JS)**                                  |
| &nbsp; 初始化和運行多個簡報。                  |    19:06 |
| &nbsp; 插件；在哪裡找到以及如何創建它們。      |    14:52 |
| &nbsp; 使用 reveal.js API 控制你的簡報。       |    40:32 |
| &nbsp; 自定義鍵盤快捷鍵。                      |    15:04 |
| &nbsp; 與源代碼一起工作。                      |    21:09 |

{.toc .hide-header}
```

## src/zh-Hant/index.md

- Characters: 1006
- Tokens: 0

```markdown
---
id: home
title: HTML 簡報框架
description: 針對開源專案 reveal.js HTML 簡報框架的文檔和示範。
layout: home
hidden: true
---

# 在網頁上創建驚豔的簡報

reveal.js 是一個開源的 HTML 簡報框架。能讓任何有瀏覽器的人都可以免費創建功能齊全且美觀的簡報。

使用 reveal.js 製作的簡報是基於網頁技術。這意味著你在網頁上能做的任何事情，都可以在你的簡報中實現。使用 CSS 更改樣式，使用`<iframe>` 嵌入外部網頁或使用我們的 [JavaScript API](/zh-hant/api) 添加自定義行為。

這個框架集合了廣泛的功能，如[簡報子頁面](/zh-hant/vertical-slides/)、[Markdown 支持](/zh-hant/markdown/)、[自動動畫](/zh-hant/auto-animate/)、[PDF 輸出](/zh-hant/pdf-export/)、[演講者筆記](/zh-hant/speaker-view/)、[LaTeX 支持](/zh-hant/math/)以及[代碼高亮](/zh-hant/code/)等。

## 準備好開始了嗎？

只需一分鐘即可完成設置。閱讀[安裝說明](/zh-hant/installation/)來了解如何創建你的第一份簡報！

## 在線編輯器

如果你希望能享受 reveal.js 的優點而不必編寫 HTML 或 Markdown，試試 [https://slides.com](https://slides.com?ref=github)。這是為 reveal.js 設計的一個功能齊全的視覺編輯平台，由同一個作者開發。

## 支持 reveal.js

這個項目是由 [@hakimel](https://github.com/hakimel/) 發起並維護的，並得到了許多[來自社區的貢獻](https://github.com/hakimel/reveal.js/graphs/contributors)。支持這個項目的最好方式是[成為 Slides.com 的付費會員](https://slides.com/pricing) — Hakim 正在建設的 reveal.js 演示平台。
```

## src/zh-Hant/plugins.md

- Characters: 3020
- Tokens: 0

````markdown
---
id: plugins
title: 插件
layout: default
---

# 插件

插件可用於為 reveal.js 增加額外功能。要使用插件，你需要執行兩件事：

1. 在文檔中包含插件腳本。（有些插件可能還需要樣式。）
1. 通過在初始化時將其包含在 `plugins` 數組中來告訴 reveal.js 關於插件。

這是一個範例：

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

如果你使用 ES 模塊，我們也為所有內置插件提供了模塊導出：

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

## 內置插件

一些常見的插件，包括支持 [Markdown](/zh-hant/markdown/)、[代碼高亮](/zh-hant/code/) 和 [演講者筆記](/zh-hant/speaker-view/)，均包含在我們默認的[簡報模板](https://github.com/hakimel/reveal.js/blob/master/index.html)中。

這些插件與 reveal.js 存儲庫一起分發。這是所有內置插件的完整列表。

| 名稱            | 描述                                                                                                       |
| :-------------- | :--------------------------------------------------------------------------------------------------------- |
| RevealHighlight | 語法高亮的[代碼](/zh-hant/code/)。<br><span class="text-gray-600">plugin/highlight/highlight.js</span>             |
| RevealMarkdown  | 使用 [Markdown](/zh-hant/markdown/) 編寫內容。<br><span class="text-gray-600">plugin/markdown/markdown.js</span>   |
| RevealSearch    | 按 CTRL+Shift+F 搜索幻燈片內容。<br><span class="text-gray-600">plugin/search/search.js</span>             |
| RevealNotes     | 在單獨視窗中顯示[演講者視圖](/zh-hant/speaker-view/)。<br><span class="text-gray-600">plugin/notes/notes.js</span> |
| RevealMath      | 呈現[數學方程式](/zh-hant/math/)。<br><span class="text-gray-600">plugin/math/math.js</span>                       |
| RevealZoom      | Alt+ 點擊元素放大（Linux 中使用 CTRL+ 點擊）。<br><span class="text-gray-600">plugin/zoom/zoom.js</span>     |

{.key-value}

如果你換用 `.js` 為 `.esm.js`，以上所有插件都可以作為 ES 模塊獲得。

## API

我們提供了 API 函式來檢查哪些插件目前已導入。如果你想手動調用插件上的函式，也可以檢索任何已導入插件實例的參考。

```js
import Reveal from 'dist/reveal.esm.js';
import Markdown from 'plugin/markdown/markdown.esm.js';
import Highlight from 'plugin/highlight/highlight.esm.js';

Reveal.initialize({ plugins: [Markdown, Highlight] });

Reveal.hasPlugin('markdown');
// true

Reveal.getPlugin('markdown');
// { id: "markdown", init: ... }

Reveal.getPlugins();
// {
//   markdown: { id: "markdown", init: ... },
//   highlight: { id: "highlight", init: ... }
// }
```

## 依賴 <span class="r-version-badge deprecated">4.0.0</span> {id=dependencies}

這個功能是為了向後兼容而保留的，但從 reveal.js 4.0.0 開始已被廢棄。在舊版本中，我們使用內置的依賴加載器來加載插件。我們停用這一功能是因為腳本的最佳加載和捆綁方式可能會根據使用案例大不相同。如果你需要加載一個依賴，請使用 `<script defer>` 標籤包含它。

依賴按照它們出現的順序加載。

```js
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/markdown.js', condition: () => {
        return !!document.querySelector( ’[data-markdown]’ );
    } },
    { src: 'plugin/highlight/highlight.js', async: true }
  ]
});
```

每個依賴對象都有以下屬性：

- **src**: 要加載的腳本的路徑
- **async**: [可選] 標記腳本是否應該在 reveal.js 啟動後加載，默認為 false
- **callback**: [可選] 腳本加載完成時執行的函數
- **condition**: [可選] 必須返回 true 才會加載腳本的函數
````

## src/zh-Hant/themes.md

- Characters: 2168
- Tokens: 0

````markdown
---
id: themes
title: 主題
layout: default
---

# 主題

此框架附帶了幾種不同的主題。

| 名稱         | 預覽                                                                                                          |
| :----------- | :------------------------------------------------------------------------------------------------------------ |
| black (默認) | <img src="/images/docs/themes/black.png" width="150" height="150" alt="黑色背景，白色文字，藍色鏈接">         |
| white        | <img src="/images/docs/themes/white.png" width="150" height="150" alt="白色背景，黑色文字，藍色鏈接">         |
| league       | <img src="/images/docs/themes/league.png" width="150" height="150" alt="灰色背景，白色文字，藍色鏈接">        |
| beige        | <img src="/images/docs/themes/beige.png" width="150" height="150" alt="米色背景，深色文字，棕色鏈接">         |
| night        | <img src="/images/docs/themes/night.png" width="150" height="150" alt="黑色背景，粗白色文字，橙色鏈接">       |
| serif        | <img src="/images/docs/themes/serif.png" width="150" height="150" alt="卡布奇諾背景，灰色文字，棕色鏈接">     |
| simple       | <img src="/images/docs/themes/simple.png" width="150" height="150" alt="白色背景，黑色文字，藍色鏈接">        |
| solarized    | <img src="/images/docs/themes/solarized.png" width="150" height="150" alt="奶油色背景，深綠色文字，藍色鏈接"> |
| moon         | <img src="/images/docs/themes/moon.png" width="150" height="150" alt="深藍背景，粗灰色文字，藍色鏈接">        |
| dracula      | <img src="/images/docs/themes/dracula.png" width="150" height="150">                                          |
| sky          | <img src="/images/docs/themes/sky.png" width="150" height="150" alt="藍色背景，細深色文字，藍色鏈接">         |
| blood        | <img src="/images/docs/themes/blood.png" width="150" height="150" alt="深色背景，粗白色文字，紅色鏈接">       |

{.key-value}

每個主題都可作為一個單獨的樣式表使用。若要更換主題，你需要在 index.html 中將以下 **black** 替換為你想要的主題名稱：

```html
<link rel="stylesheet" href="dist/theme/black.css" />
```

## 自定義屬性

所有主題變數都作為 CSS 自定義屬性在偽類 `:root` 中。查看[變數列表](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss)。

## 創建主題

如果你想添加自己的主題，請參見此處的指南：[/css/theme/README.md](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md)。

或者，如果你想要一個全新的開始，你可以選擇從一個空白的 CSS 文件開始，並從頭開始自定義一切。
````

## src/zh-Hant/media.md

- Characters: 1765
- Tokens: 0

````markdown
---
id: media
title: 媒體
layout: default
---

# 媒體

我們提供了便利的機制來自動播放和懶加載基於幻燈片可見性和鄰近性的 HTML 媒體元素和 iframe。這適用於[\<video\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)、[\<audio\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)和[\<iframe\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)元素。

## 自動播放

如果你希望媒體元素在幻燈片顯示時自動開始播放，請添加`data-autoplay`：

```html
<video
  data-autoplay
  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
></video>
```

如果你想要全域啟用或禁用所有嵌入媒體的自動播放，可以使用`autoPlayMedia`配置選項。如果將此選項設置為`true`，所有媒體將無視個別的`data-autoplay`屬性而自動播放。如果設置為`autoPlayMedia: false`，則沒有媒體將自動播放。

```js
Reveal.initialize({
  autoPlayMedia: true,
});
```

請注意，嵌入的 HTML `<video>`/`<audio>`和 YouTube/Vimeo iframe 在你離開幻燈片時會自動暫停。可以通過為你的元素添加一個`data-ignore`屬性來禁用此功能。

## 懶加載

在包含大量媒體或 iframe 內容的簡報中，懶加載很重要。懶加載意味著 reveal.js 只會為最靠近當前幻燈片的幾張幻燈片加載內容。預加載的幻燈片數量由`viewDistance`配置選項確定。

要啟用懶加載，你只需要將`src`屬性更改為`data-src`，如下所示。這支持圖像、視頻、音頻和 iframe 元素。

```html/1-2,4-5
<section>
  <img data-src="image.png">
  <iframe data-src="https://hakim.se"></iframe>
  <video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
  </video>
</section>
```

### 懶加載 iframe

請注意，懶加載的 iframe 將忽略`viewDistance`配置，只有在其包含的幻燈片變為可見時才會加載。iframe 也會在幻燈片隱藏後立即卸載。

當我們懶加載視頻或音頻元素時，reveal.js 不會開始播放這些內容，直到幻燈片變為可見。然而，對於 iframe，由於它可能包含任何類型的內容，因此無法控制。這意味著如果我們在幻燈片在屏幕上可見之前加載了 iframe，它可能會在背景中開始播放媒體和聲音。

你可以使用`data-preload`屬性覆蓋此行為。下面的 iframe 將根據`viewDistance`加載。

```html/1
<section>
  <iframe data-src="https://hakim.se" data-preload></iframe>
</section>
```

你也可以通過`preloadIframes`配置選項全域更改默認設置。如果設置為`true`，所有帶有`data-src`屬性的 iframe 都將在`viewDistance`範圍內預加載，無論個別的`data-preload`屬性如何。如果設置為`false`，所有 iframe 只有在它們變得可見時才會加載。
````

## src/zh-Hant/slide-numbers.md

- Characters: 1402
- Tokens: 0

````markdown
---
id: slide-numbers
title: 幻燈片編號
layout: default
---

# 幻燈片編號

你可以通過設置 `slideNumber` 配置選項為 `true` 來顯示當前幻燈片的頁碼。

```js
Reveal.initialize({ slideNumber: true });
```

<div class="reveal reveal-example" data-config='{"slideNumber": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
  </div>
</div>

## 格式

幻燈片編號格式可以通過將 `slideNumber` 設置為以下值之一來自定義。

| 值  | 描述                                     |
| :-- | :--------------------------------------- |
| h.v | 水平。垂直幻燈片編號（默認）              |
| h/v | 水平/垂直幻燈片編號                      |
| c   | 平坦化的幻燈片編號，包括水平和垂直幻燈片 |
| c/t | 平坦化的幻燈片編號/總幻燈片數            |

{.key-value}

```js
Reveal.initialize({ slideNumber: 'c/t' });
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
  </div>
</div>

如果現有的格式都不符合你的需求，你可以提供一個自定義的幻燈片編號生成器。

```js
Reveal.initialize({
  slideNumber: (slide) => {
    // 忽略垂直幻燈片的編號
    return [Reveal.getIndices(slide).h];
  },
});
```

## 上下文

當啟用幻燈片編號時，它們將默認包含在所有上下文中。如果你只想在特定上下文中顯示幻燈片編號，你可以將 `showSlideNumber` 設置為以下之一：

| 值      | 描述                                 |
| :------ | :----------------------------------- |
| all     | 在所有上下文中顯示幻燈片編號（默認） |
| print   | 僅在打印 PDF 時顯示幻燈片編號      |
| speaker | 僅在演講者視圖中顯示幻燈片編號       |

{.key-value}

```js
Reveal.initialize({ showSlideNumber: 'print' });
```
````

## src/zh-Hant/react.md

- Characters: 2833
- Tokens: 0

````markdown
---
id: react
title: React 框架
layout: default
---

# React 框架

有幾種不同的方式可以將 Reveal.js 添加到 React 項目中。

1. [通過 npm 安裝並設置 Reveal.js](#installing-from-npm)
2. [使用第三方套件](#third-party-packages)

## 通過 npm 安裝

你可以在像 `main.tsx` 或 `app.tsx` 這樣的 JavaScript/TypeScript 源文件中添加和初始化 Reveal.js。

你可以全域地執行，即在應用/組件函數之外，或者在其中之一內部。在後一種情況下，你必須小心不要堆疊初始化。只初始化一次簡報。如果需要重新配置，請使用 `configure` 函數或在再次初始化之前 `destroy` 簡報。

首先，使用 `npm` 安裝 Reveal：

```bash
npm install reveal.js
```

如果你正在使用 TypeScript，你需要安裝類型：

```bash
npm i --save-dev @types/reveal.js
```

#### 導入

你將需要以下導入：

```ts
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // "black" 主題只是一個範例
```

#### 初始化

最後，添加最適合你項目需求的[初始化代碼](https://revealjs.com/initialization/)。

如果你決定在返回 JSX 的應用或組件函數內部初始化幻燈片集，我們建議你使用 `useEffect` 這個 hook 來進行。這將確保在容器首次渲染後進行初始化。

還建議使用 refs 來維護對幻燈片集容器 `div` 和相應的 `reveal` 實例的引用。這些 refs 可以幫助確保每個幻燈片集只初始化一次。

#### 下面是一個完整的工作範例：

```ts
// App.tsx
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
    const deckDivRef = useRef<HTMLDivElement>(null); // 幻燈片集容器 div 的引用
    const deckRef = useRef<Reveal.Api | null>(null); // 幻燈片集 reveal 實例的引用

    useEffect(() => {
        // 防止在嚴格模式下重複初始化
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
            // 其他配置選項
        });

        deckRef.current.initialize().then(() => {
            // 事件處理器和插件設置的好位置
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy 調用失敗。");
            }
        };
    }, []);

    return (
        // 你的簡報大小是基於父元素的寬度和高度。確保父元素高度不為 0。
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <section>幻燈片 1</section>
                <section>幻燈片 2</section>
            </div>
        </div>
    );
}

export default App;
```

注意在 `Reveal` 構造器中使用 `deckDivRef`。如果你想在同一個 React 應用中添加多個幻燈片集，這一點非常重要。

## React Portals

如果你只想在特定幻燈片中添加一些組件，我們建議將 Reveal.js 的 DOM 樹保持在 React 之外，並使用 [React Portals](https://react.dev/reference/react-dom/createPortal) 將 react 組件放置在特定部分。

## 第三方套件

以下第三方套件可能對於將 Reveal.js 簡報添加到 React 項目中或將 React 組件/應用添加到 Reveal.js 簡報中非常有用：

- [revealjs-react](https://github.com/blakeanedved/revealjs-react) - RevealJS 簡報庫的 React 包裝器。
- [react-reveal-slides](https://github.com/bouzidanas/react-reveal-slides) - 一個用於完全在 React 中創建 Reveal.js 簡報的 React 組件。
- [revealjs-react-boilerplate](https://github.com/cberthou/revealjs-react-boilerplate) - 使用 React 創建 revealJS 簡報的模板。
````

## src/zh-Hant/vertical-slides.md

- Characters: 2676
- Tokens: 0

````markdown
---
id: vertical-slides
title: 垂直幻燈片
layout: default
---

# 垂直幻燈片

你的幻燈片默認通過水平滑動過渡來逐步切換。這些水平幻燈片被視為你套件中的主要或*頂級*幻燈片。

你也可以在單個頂級幻燈片內嵌套多個幻燈片，以創建一個垂直堆疊。這是一種將內容在你的演示中邏輯分組的絕佳方式，並使包含可選幻燈片變得方便。

在演示時，你使用左/右箭頭來逐步瀏覽頂級（水平）幻燈片。當你到達一個垂直堆疊時，你可以選擇性地按上/下箭頭來查看垂直幻燈片，或者通過按右箭頭來跳過它們。以下是一個顯示此操作中的鳥瞰圖的範例。

<picture>
  <img src="https://static.slid.es/support/reveal.js-vertical-slides.gif" alt="帶有垂直幻燈片的幻燈片布局">
</picture>

## 標記

以下是一個簡單的垂直堆疊的標記範例。

```html
<section>水平幻燈片</section>
<section>
  <section>垂直幻燈片 1</section>
  <section>垂直幻燈片 2</section>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>水平幻燈片</section>
    <section>
      <section>垂直幻燈片 1</section>
      <section>垂直幻燈片 2</section>
    </section>
  </div>
</div>

## 導覽模式

你可以通過使用 `navigationMode` 配置選項來微調 reveal.js 的導覽行為。請注意，這些選項僅對使用水平和垂直幻燈片混合的簡報有用。以下是可用的導覽模式：

| 值      | 描述                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | 左/右箭頭鍵在水平幻燈片之間切換。上/下箭頭鍵在垂直幻燈片之間切換。空格鍵遍歷所有幻燈片（水平和垂直）。                                                                                                                                                                                                                                                                                               |
| linear  | 移除上/下箭頭。左/右箭頭遍歷所有幻燈片（水平和垂直）。                                                                                                                                                                                                                                                                                                                                               |
| grid    | 啟用此功能時，從一個垂直堆疊向相鄰的垂直堆疊向左/右步進時，將會導覽至相同的垂直索引處。<br><br>考慮一個套件，其中有六個幻燈片按兩個垂直堆疊排序：<br>`1.1`&nbsp;&nbsp;&nbsp;&nbsp;`2.1`<br>`1.2`&nbsp;&nbsp;&nbsp;&nbsp;`2.2`<br>`1.3`&nbsp;&nbsp;&nbsp;&nbsp;`2.3`<br><br>如果你在幻燈片 1.3 上並向右導覽，通常會從 1.3 往 2.1 移動。將 navigationMode 設置為 "grid"，相同的導覽會將你從 1.3 導覽到 2.3。 |
````

## src/zh-Hant/auto-slide.md

- Characters: 1244
- Tokens: 0

````markdown
---
id: auto-slide
title: 自動播放
layout: default
---

# 自動播放

簡報可以設定為自動播放幻燈片，無需任何用戶輸入。要啟用此功能，你需要使用 `autoSlide` 配置選項指定幻燈片變更的間隔時間。間隔以毫秒為單位。

```javascript
// 每五秒自動切換一張幻燈片
Reveal.initialize({
  autoSlide: 5000,
  loop: true,
});
```

<div class="reveal reveal-example" data-config='{"autoSlide": 5000, "loop": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
    <section>幻燈片 3</section>
  </div>
</div>

對於自動播放的幻燈片集，將自動出現播放/暫停控制元件。如果用戶開始與幻燈片集互動，播放將自動暫停。你還可以通過鍵盤上的「A」鍵來暫停或恢復播放（在這裡的嵌入式演示中不適用）。

你可以通過在[配置選項](/zh-hant/config/)中指定 `autoSlideStoppable: false` 來禁用自動播放控制，防止播放被暫停。

## 幻燈片計時

也可以使用 `data-autoslide` 屬性設定幻燈片設定持續時間。

```html
<section data-autoslide="2000">
  <p>2 秒後將顯示第一個片段。</p>
  <p class="fragment" data-autoslide="10000">10 秒後將顯示下一個片段。</p>
  <p class="fragment">現在，片段顯示 2 秒後將顯示下一個幻燈片。</p>
</section>
```

## 自動播放函式

`autoSlideMethod` 屬性可以更改自動撥放的方向。

我們預設將按順序播放所有幻燈片，包括水平和[垂直](/zh-hant/vertical-slides/)幻燈片。如果你只想沿頂層導覽並忽略垂直幻燈片，你可以提供一個調用 `Reveal.right()` 的函式。

```js
Reveal.configure({
  autoSlideMethod: () => Reveal.right(),
});
```

## 事件

每當自動播放被暫停或恢復時，都會觸發事件。

```javascript
Reveal.on('autoslideresumed', (event) => {
  /* ... */
});
Reveal.on('autoslidepaused', (event) => {
  /* ... */
});
```
````

## src/zh-Hant/links.md

- Characters: 1385
- Tokens: 0

````markdown
---
id: links
title: 內部鏈接
layout: default
---

# 內部鏈接

你可以創建從一張幻燈片到另一張的鏈接。首先給目標幻燈片一個唯一的 `id` 屬性。接著，你可以創建一個錨點，其 href 格式為 `#/<id>`。這是一個完整的實用範例：

```html/1,8
<section>
	<a href="#/grand-finale">前往最後一張幻燈片</a>
</section>
<section>
	<h2>幻燈片 2</h2>
</section>
<section id="grand-finale">
	<h2>結尾</h2>
	<a href="#/0">回到第一張</a>
</section>
```

<div class="reveal reveal-example" data-config='{"respondToHashChanges": true}'>
  <div class="slides">
    <section>
		<a href="#/grand-finale">前往最後一張幻燈片</a>
	</section>
	<section>
		<h2>幻燈片 2</h2>
	</section>
	<section id="grand-finale">
		<h2>結尾</h2>
		<a href="#/0">回到第一張</a>
	</section>
  </div>
</div>

## 編號鏈接

也可以根據幻燈片索引創建鏈接。以編號鏈接的 href 格式為 `#/0`，其中 0 是水平幻燈片編號。要鏈接到[垂直幻燈片](/zh-hant/vertical-slides/)，使用 `#/0/0`，其中第二個數字是垂直幻燈片目標的索引。

```html
<a href="#/2">前往第二張幻燈片</a>
<a href="#/3/2">前往第三張幻燈片中的第二個垂直幻燈片</a>
```

## 導覽鏈接

你可以添加相對導覽鏈接，這與內置的方向控制箭頭的工作方式類似。這是通過在 `.reveal` 容器內的任何可點擊 HTML 元素上添加以下類之一來實現的。

```html
<button class="navigate-left">左</button>
<button class="navigate-right">右</button>
<button class="navigate-up">上</button>
<button class="navigate-down">下</button>

<!-- 前一個垂直或水平幻燈片 -->
<button class="navigate-prev">上一個</button>

<!-- 下一個垂直或水平幻燈片 -->
<button class="navigate-next">下一個</button>
```

每個導覽元素都會自動根據當前幻燈片的導覽路線有效性獲得 `enabled` 的 class。例如，如果你在第一張幻燈片上，只有 `navigate-right` 會獲得 `enabled` 的 class，因為向左導覽是不可能的。這樣可以直觀的告诉使用者往哪些方向是可行的。
````

## src/zh-Hant/code.md

- Characters: 3525
- Tokens: 0

````markdown
---
id: code
title: 展示代碼
layout: default
---

# 展示代碼

reveal.js 有一個強大的功能，就是為程式碼添加顏色 — 由 [highlight.js](https://highlightjs.org/) 提供支持。這些功能位於 highlight 插件中，並包含在我們的預設簡報模板中。

下面是一個將被語法高亮的 clojure 程式碼範例。當 `<code>` 標籤存在 `data-trim` 屬性時，會自動移除代碼周圍的空白。

預設會對 HTML 進行轉換。要避免這一點，可以在 `<code>` 元素上添加 `data-noescape` 屬性。

```html
<section>
  <pre><code data-trim data-noescape>
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <pre><code data-trim data-noescape>
      (def lazy-fib
        (concat
         [0 1]
         ((fn rfib [a b]
              (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
      </code></pre>
    </section>
  </div>
</div>

## 主題

確保在你的文檔中包含了一個語法高亮主題。我們預設包含了 Monokai，它隨 reveal.js 儲存在 [plugin/highlight/monokai.css](https://github.com/hakimel/reveal.js/tree/master/plugin/highlight/monokai.css) 中。可用的主題完整列表可以在 <https://highlightjs.org/static/demo/> 上找到。

```html
<link rel="stylesheet" href="plugin/highlight/monokai.css" />
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealHighlight],
  });
</script>
```

## 行號與高亮

你可以通過在你的 `<code>` 標籤上添加 `data-line-numbers` 屬性來啟用行號。如果你想高亮特定行，可以使用同一屬性提供以逗號分隔的行號列表。例如，在以下範例中，第 3 行和第 8-10 行被高亮：

```html
<pre><code data-line-numbers="3,8-10">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3,8-10" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>

#### 行號偏移 <span class="r-version-badge new">4.2.0</span>

如果你想展示一長串代碼的片段，你可以偏移行號。在下面的範例中，我們設置 `data-ln-start-from="7"` 使行號從 7 開始。

```html
<pre><code data-line-numbers data-ln-start-from="7">
<tr>
  <td>Oranges</td>
  <td>$2</td>
  <td>18</td>
</tr>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers data-ln-start-from="7" data-trim data-noescape>
&lt;tr&gt;
  &lt;td>Oranges&lt;/td&gt;
  &lt;td>$2&lt;/td&gt;
  &lt;td>18&lt;/td&gt;
&lt;/tr&gt;
</code></pre>
    </section>
  </div>
</div>

## 分步高亮

你可以在同一代碼塊上分步進行多次代碼高亮。用 `|` 字符分隔每個高亮步驟。例如 `data-line-numbers="1|2-3|4,6-10"` 會產生三個步驟。開始時高亮第 1 行，下一步是第 2-3 行，最後是第 4 行和第 6 到 10 行。

```html
<pre><code data-line-numbers="3-5|8-10|13-15">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Kiwi</td>
    <td>$3</td>
    <td>1</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3-5|8-10|13-15" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Kiwi&lt;/td&gt;
    &lt;td>$3&lt;/td&gt;
    &lt;td>1&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>
````

## src/zh-Hant/markup.md

- Characters: 1662
- Tokens: 0

````markdown
---
id: markup
title: 標記
layout: default
---

# 標記

這是一個完整的 reveal.js 簡報的基本範例：

```html
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>幻燈片 1</section>
        <section>幻燈片 2</section>
      </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

簡報的標記層次結構需要是 `.reveal > .slides > section`，其中 `section` 元素代表一個幻燈片，可以無限重復。

如果你在另一個 `section` 內放置多個 `section` 元素，它們將被顯示為[垂直幻燈片](/zh-hant/vertical-slides/)。垂直幻燈片的第一個是其他幻燈片的「根」（在頂部），並將包括在水平序列中。例如：

```html
<div class="reveal">
  <div class="slides">
    <section>水平幻燈片</section>
    <section>
      <section>垂直幻燈片 1</section>
      <section>垂直幻燈片 2</section>
    </section>
  </div>
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>水平幻燈片</section>
    <section>
      <section>垂直幻燈片 1</section>
      <section>垂直幻燈片 2</section>
    </section>
  </div>
</div>

你同樣可以使用 [Markdown](/zh-hant/markdown/) 撰寫簡報。

## 視窗

reveal.js 的視窗是確定簡報在網頁上的大小的包裝器 DOM 元素。默認情況下，這將是 `body` 元素。如果你在同一頁面上包含多個簡報，每個簡報的 `.reveal` 元素將作為它們的視窗。

視窗在 reveal.js 初始化時始終帶有叫做 `reveal-viewport` 的 class 。

## 幻燈片狀態

如果你在幻燈片 `<section>` 上設置了 `data-state="make-it-pop"`，當該幻燈片打開時，"make-it-pop" 將作為類應用於[視窗元素](#視窗)。這使得你可以根據幻燈片的狀態應用樣式。

```html
<section data-state="make-it-pop"></section>
```

```css
/* CSS */
.make-it-pop {
  filter: drop-shadow(0 0 10px purple);
}
```

你還可以通過 JavaScript 監聽這些狀態變化：

```javascript
Reveal.on('make-it-pop', () => {
  console.log('✨');
});
```
````

## src/zh-Hant/auto-animate.md

- Characters: 8012
- Tokens: 0

````markdown
---
id: auto-animate
title: 自動動畫
layout: default
---

# 自動動畫 <span class="r-version-badge new">4.0.0</span>

reveal.js 可以自動在幻燈片之間添加動畫。你只需在兩個相鄰的幻燈片 `<section>` 元素上添加 `data-auto-animate`，自動動畫將會對兩者間的所有匹配元素進行動畫處理。

這裡有一個簡單的例子，讓你更好地理解如何使用它。

```html
<section data-auto-animate>
  <h1>自動動畫</h1>
</section>
<section data-auto-animate>
  <h1 style="margin-top: 100px; color: red;">自動動畫</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>自動動畫</h1>
    </section>
    <section data-auto-animate>
      <h1 style="margin-top: 100px; color: red;">自動動畫</h1>
    </section>
  </div>
</div>

這個例子使用了 `margin-top` 屬性來移動元素，但內部 reveal.js 將使用 CSS transform 屬性來確保平滑移動。這種動畫方式適用於大多數支援動畫的 CSS 屬性如 `position`、`font-size`、`line-height`、`color`、`background-color`、`padding` 和 `margin` 等。

### 移動動畫

動畫不僅限於樣式變化。自動動畫也可以用來自動移動元素到新位置，隨著內容的添加、移除或在幻燈片上重新排列。所有這些都不需要任何行內 CSS。

```html
<section data-auto-animate>
  <h1>隱式</h1>
</section>
<section data-auto-animate>
  <h1>隱式</h1>
  <h1>動畫</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>隱式</h1>
    </section>
    <section data-auto-animate>
      <h1>隱式</h1>
      <h1>動畫</h1>
    </section>
  </div>
</div>

## 元素如何匹配

當你在兩個自動動畫幻燈片之間導覽時，我們將盡力自動找到兩個幻燈片中的匹配元素。對於文本，如果文本內容和節點類型都相同，我們將其視為匹配。對於圖片、視頻和 iframes，我們比較 `src` 屬性。除此以外我們還會考慮元素在 DOM 中出現的順序。

在無法自動匹配的情況下，你可以給你想要動畫之間的對象添加匹配的 `data-id` 屬性。我們優先匹配 `data-id` 值而不是自動匹配。

這裡是一個例子，我們給兩個區塊設置了匹配的 ID，因為自動匹配沒有內容可依據。

```html
<section data-auto-animate>
  <div data-id="box" style="height: 50px; background: salmon;"></div>
</section>
<section data-auto-animate>
  <div data-id="box" style="height: 200px; background: blue;"></div>
</section>
```

<div class="reveal reveal-example">

  <div class="slides">
    <section data-auto-animate>
	  <div data-id="box" style="height: 50px; background: salmon;"></div>
	</section>
	<section data-auto-animate>
	  <div data-id="box" style="height: 200px; background: blue;"></div>
	</section>
  </div>
</div>

## 動畫設定

你可以覆蓋特定的動畫設定，例如動畫曲線和持續時間，無論是對整個簡報、每張幻燈片還是每個動畫元素。以下配置屬性可以用來改變特定幻燈片或元素的設置：

| 屬性                        |   默認值 | 描述                                                                                           |
| :-------------------------- | -------: | :--------------------------------------------------------------------------------------------- |
| data-auto-animate-easing    |     ease | 一個 CSS [easing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function)。 |
| data-auto-animate-unmatched |     true | 決定沒有匹配的自動動畫目標元素是否應該淡入。設置為 false 使它們立即出現。                      |
| data-auto-animate-duration  |      1.0 | 動畫持續時間，以秒為單位。                                                                     |
| data-auto-animate-delay     |        0 | 動畫延遲，以秒為單位（只能為特定元素設置，不能在幻燈片層面設置）。                             |
| data-auto-animate-id        | _absent_ | 將自動動畫幻燈片綁定在一起的 [id](#auto-animate-id-%26-restart)。                              |
| data-auto-animate-restart   | _absent_ | [分隔](#auto-animate-id-%26-restart) 兩個相鄰的自動動畫幻燈片（即使它們有相同的 id）。         |

如果你想改變整個套件的默認設置，可以使用以下配置選項：

```javascript
Reveal.initialize({
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false,
});
```

## Auto-Animate Id & Restart

當你希望分離一組組幻燈片相鄰的自動動畫，可以使用 `data-auto-animate-id` 和 `data-auto-animate-restart` 屬性。

使用 `data-auto-animate-id`，你可以為幻燈片指定任意 id。只有當兩個相鄰幻燈片具有相同的 id 或兩者都沒有 id 時，自動動畫才會被啟動。

另一種控制自動動畫的方式是使用 `data-auto-animate-restart` 屬性。將此屬性應用於一張幻燈片將防止該幻燈片與前一幻燈片之間的自動動畫（即使它們具有相同的 id），但不會影響它與下一張幻燈片之間的動畫。

```html
<section data-auto-animate>
  <h1>組 A</h1>
</section>
<section data-auto-animate>
  <h1 style="color: #3B82F6;">組 A</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1>組 B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #10B981;">組 B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
  <h1>組 C</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #EC4899;">組 C</h1>
</section>
```

<div class="reveal reveal-example">
	<div class="slides">
		<section data-auto-animate>
			<h1>組 A</h1>
		</section>
		<section data-auto-animate>
			<h1 style="color: #3B82F6;">組 A</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1>組 B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #10B981;">組 B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
			<h1>組 C</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #EC4899;">組 C</h1>
		</section>
	</div>
</div>

## 事件

每次你在兩個自動動畫幻燈片之間切換，都會發送 `autoanimate` 事件。

```javascript
Reveal.on('autoanimate', (event) => {
  // event.fromSlide, event.toSlide
});
```

## 範例：在程式碼區塊之間進行動畫

我們支持在程式碼區塊之間進行動畫。確保程式碼區塊啟用了 `data-line-numbers`，並且全部都具有匹配的 `data-id` 值。

```html
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let circumferenceReducer = ( c, planet ) => {
      return c + planet.diameter * Math.PI;
    }

    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]

    let c = planets.reduce( circumferenceReducer, 0 )
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let circumferenceReducer = ( c, planet ) => {
          return c + planet.diameter * Math.PI;
        }

        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]

        let c = planets.reduce( circumferenceReducer, 0 )
      </code></pre>
    </section>

  </div>
</div>

## 範例：在列表之間進行動畫

我們單獨處裡每一個列表項目，讓你可以在不同項目之間進行動畫。

```html/2-4,10,12
<section data-auto-animate>
  <ul>
    <li>水星</li>
    <li>木星</li>
    <li>火星</li>
  </ul>
</section>
<section data-auto-animate>
  <ul>
    <li>水星</li>


 <li>地球</li>
    <li>木星</li>
    <li>土星</li>
    <li>火星</li>
  </ul>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <ul>
        <li>水星</li>
        <li>木星</li>
        <li>火星</li>
      </ul>
    </section>
    <section data-auto-animate>
      <ul>
        <li>水星</li>
        <li>地球</li>
        <li>木星</li>
        <li>土星</li>
        <li>火星</li>
      </ul>
    </section>
  </div>
</div>

## 進階：狀態屬性

我們在有自動動畫的不同元素上添加了狀態屬性。如果你想進一步調整動畫行為，比如通過自定義 CSS，這些屬性可以被連接使用。

在自動動畫開始之前，我們會在即將顯示的幻燈片 `<section>` 上添加 `data-auto-animate="pending"`。此時即將出現的幻燈片是可見的，所有動畫元素都已移至其起始位置。接下來我們切換到 `data-auto-animate="running"`，以表示元素開始朝其最終屬性進行動畫。

每個個別元素都裝飾有 `data-auto-animate-target` 屬性。該屬性的值是這個特定動畫的唯一 ID 或者 "unmatched" 如果元素不匹配。
````

## src/zh-Hant/upgrading.md

- Characters: 1909
- Tokens: 0

````markdown
---
id: upgrading
title: 升級指南
layout: default
---

# 從版本 3 升級到 4.0

我們盡力避免破壞性更改，但在版本 4.0 中有一些變更。如果你想遷移現有的簡報，請按照以下指南操作。

### 更新資產位置

我們的 JS 和 CSS 資產已經移動。在你的簡報 HTML 中，更新以下 `<script>` 和 `<link>` 的路徑：

| 舊位置                           | 新位置                            |
| :------------------------------- | :-------------------------------- |
| js/reveal.js                     | dist/reveal.js                    |
| css/reset.css                    | dist/reset.css                    |
| css/reveal.css                   | dist/reveal.css                   |
| css/theme/&lt;theme-name&gt;.css | dist/theme/&lt;theme-name&gt;.css |
| lib/css/monokai.css              | plugin/highlight/monokai.css      |
| lib/js/head.min.js               | 在 3.8.0 中刪除                   |

{.key-value}

### 從 `<head>` 中移除打印 CSS

在你的簡報 HTML 中，從 `<head>` 移除以下腳本。這些樣式現已整合入 reveal.css 文件中。

```html
<script>
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi)
    ? 'css/print/pdf.css'
    : 'css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
</script>
```

### 插件導入

如果你保留了 v3 /plugin 目錄的副本，則*沒有破壞性更改*。如果你想切換到最新的插件版本，你需要更新你的 `Reveal.initialize()` 調用，以使用[新的插件導入語法](/zh-hant/plugins/)。插件也可作為 ES 模塊使用。

```html
<script src="dist/reveal.js"></script>
<script src="plugin/markdown/markdown.js"></script>
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown, RevealHighlight],
  });
</script>
```

### 移除 Multiplex 和 Notes Server

Multiplex 和 Notes Server 插件已從 reveal.js 核心移出到它們自己的存儲庫中。請查看它們相應的 README 文件以獲取使用指南。

- https://github.com/reveal/multiplex
- https://github.com/reveal/notes-server

### 其他

- 移除了 `Reveal.navigateTo`，改用 `Reveal.slide`。
- 我們已切換到 gulp 和 rollup 作為構建系統。確保執行 `npm install` 以獲得最新的依賴項。伺服器仍然使用 `npm start` 啟動，與之前相同。
````

## src/zh-Hant/installation.md

- Characters: 1896
- Tokens: 0

````markdown
---
id: installation
title: 安裝
layout: default
---

# 安裝

我們提供三種不同安裝 reveal.js 的方式，取決於你的使用情境和技術經驗。

1. [基本設置](#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E7%BD%AE) 是開始使用的最簡單函式。無需設置任何構建工具。
1. [完整設置](#full-setup) 可讓你訪問更改 reveal.js 源代碼所需的構建工具。它包括一個網頁伺服器，如果你想要加載外部 Markdown 文件則需要此伺服器（基本設置配合你自訂的網頁伺服器也可以）。
1. 如果你想在項目中使用 reveal.js 作為依賴項，你可以 [從 npm 安裝](#%E5%BE%9E-npm-%E5%AE%89%E8%A3%9D)。

#### 下一步

安裝完 reveal.js 後，我們推薦你查看 [Markup](/zh-hant/markup/) 和 [配置選項](/zh-hant/config/) 指南。

## 基本設置

我們希望能讓盡可能多的人使用 reveal.js。基本設置是大家最常使用的方式，你只需要有一個瀏覽器。無需經過構建過程或安裝任何依賴套件。

1. 下載最新版本的 reveal.js <https://github.com/hakimel/reveal.js/archive/master.zip>
2. 解壓並替換 index.html 中的範例內容為你自己的
3. 在瀏覽器中打開 index.html 查看

就是這麼簡單 🚀

## 完整設置 <span class="text-gray-500 font-normal">- 推薦</span>{id="full-setup"}

某些 reveal.js 功能，如外部 Markdown，簡報需要從本地網頁伺服器執行。以下指令將設置這樣的伺服器以及完成對 reveal.js 源代碼所需的所有開發任務。

1. 安裝 [Node.js](https://nodejs.org/) (10.0.0 或更高版本)

2. 克隆 reveal.js 倉庫

   ```shell
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

3. 移動到 reveal.js 資料夾並安裝依賴

   ```shell
   $ cd reveal.js && npm install
   ```

4. 提供簡報並監控源文件的更改

   ```shell
   $ npm start
   ```

5. 打開 <http://localhost:8000> 查看你的簡報

### 開發伺服器端口

開發伺服器默認使用 8000 端口。你可以使用 `port` 參數切換到不同的端口：

```shell
npm start -- --port=8001
```

## 從 npm 安裝

 reveal.js 有上架至 [npm](https://www.npmjs.com/package/reveal.js) 可以直接安裝。請注意，reveal.js 面向瀏覽器並包含 CSS、字體及其他資源，因此使用 npm 安裝許多功能可能會受限。

```shell
npm install reveal.js
# 或者
yarn add reveal.js
```

安裝後，你可以將 reveal.js 作為 ES 模塊導入：

```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

你還需要包括 reveal.js 的樣式和一個 [簡報主題](/zh-hant/themes/)。

```html
<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css" />
```
````

## src/zh-Hant/layout.md

- Characters: 3638
- Tokens: 0

````markdown
---
id: layout
title: 布局
layout: default
---

# 布局

我們提供了幾種不同的輔助 class，用於控制布局並設計你的內容。我們目標是在即將到來的版本中添加更多這種 class，因此請保持密切關注。

如果你希望更改簡報的尺寸、縮放和居中，請參見[簡報大小](/zh-hant/presentation-size/)。

## 堆疊

`r-stack` 布局輔助讓你可以居中並將多個元素疊加在一起。這意味著要與[片段](/zh-hant/fragments/)一起使用，以逐步揭示元素。

```html
<div class="r-stack">
  <img
    class="fragment"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

如果你希望逐個顯示堆疊的元素，可以調整片段設置：

```html
<div class="r-stack">
  <img
    class="fragment fade-out"
    data-fragment-index="0"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment current-visible"
    data-fragment-index="0"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment fade-out" data-fragment-index="0" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment current-visible" data-fragment-index="0" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

## 適應文字

叫做 `r-fit-text` 的 class 使文字盡可能大而不超出幻燈片。當你希望文字很大而不需要手動找到正確的字體大小時，這非常合適。由 [fitty](https://github.com/rikschennink/fitty) ❤️ 提供支持

```html
<h2 class="r-fit-text">大</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">大</h2>
    </section>
  </div>
</div>

```html
<h2 class="r-fit-text">適應文字</h2>
<h2 class="r-fit-text">可用於多個標題</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">適應文字</h2>
      <h2 class="r-fit-text">可用於多個標題</h2>
    </section>
  </div>
</div

>

## 拉伸

`r-stretch` 布局輔助讓你可以調整元素（如圖片或視頻）的大小，以覆蓋幻燈片中剩餘的垂直空間。例如，在下面的例子中，我們的幻燈片包含一個**標題**、一個**圖片**和一個**作者行**。因為**圖片**具有 叫做 `.r-stretch` 的 class ，其高度設置為幻燈片高度減去**標題**和**作者行**的組合高度。

```html
<h2>拉伸範例</h2>
<img class="r-stretch" src="/images/slides-symbol-512x512.png" />
<p>圖片說明</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>拉伸範例</h2>
      <img class="r-stretch" style="display: inline-block;" src="/images/slides-symbol-512x512.png">
      <p>圖片說明</p>
    </section>
  </div>
</div>

#### 拉伸限制

- 只有幻燈片部分的直接後代才可以拉伸
- 每個幻燈片部分只能拉伸一個後代

## 框架

用 `r-frame` 裝飾任何元素，使其在背景中脫穎而出。如果被框架的元素放置在錨點內，我們將對邊框應用懸停效果。

```html
<img src="logo.svg" width="200" />
<a href="#">
  <img class="r-frame" src="logo.svg" width="200" />
</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-symbol.svg" width="200">
      <a href="#">
        <img class="r-frame" src="/images/logo/reveal-symbol.svg" width="200">
      </a>
    </section>
  </div>
</div>
````

## src/zh-Hant/events.md

- Characters: 1630
- Tokens: 0

````markdown
---
id: events
title: 事件
layout: default
---

# 事件

我們發送許多事件，以便你可以輕鬆地響應簡報中的變化。使用 `Reveal.on()` 添加事件監聽器，使用 `Reveal.off()` 移除它們。

```js
Reveal.on('eventname', callbackFunction);
```

## 就緒

當 reveal.js 加載了所有非異步依賴並準備好接受 API 調用時會觸發 `ready` 事件。要檢查 reveal.js 是否已經「就緒」，你可以調用 `Reveal.isReady()`。

```javascript
Reveal.on('ready', (event) => {
  // event.currentSlide, event.indexh, event.indexv
});
```

我們還會在 `.reveal` 元素上添加一個 class 叫 `.ready`，以便你可以用 CSS 掛鉤進這個狀態。

`Reveal.initialize` 函式還返回一個 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，當簡報準備好時解析。以下與添加 `ready` 事件的監聽器同義：

```javascript
Reveal.initialize().then(() => {
  // reveal.js 已準備好
});
```

## 幻燈片變更

每次幻燈片變更時，都會觸發 `slidechanged` 事件。事件對象包含當前幻燈片的索引值以及對前一幻燈片和當前幻燈片 HTML 元素的引用。

一些函式庫如 MathJax（參見 [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)），可能會對幻燈片的變形和顯示狀態感到困惑。通常，這可以通過從此回調調用它們的更新或渲染函數來修復。

```javascript
Reveal.on('slidechanged', (event) => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
});
```

## 幻燈片轉換結束

`slidechanged` 事件在幻燈片變更時立即觸發。如果你寧願在幻燈片轉換完成並完全可見時調用事件監聽器，你可以使用 `slidetransitionend` 事件。`slidetransitionend` 事件包含與 `slidechanged` 相同的事件數據。

```javascript
Reveal.on('slidetransitionend', (event) => {
  console.log(event.currentSlide);
});
```

## 調整大小

當 reveal.js 更改簡報的縮放比例時，會觸發 `resize` 事件。

```javascript
Reveal.on('resize', (event) => {
  // event.scale, event.oldScale, event.size
});
```

## 特定功能的事件

- [概覽模式事件](/zh-hant/overview/#%E4%BA%8B%E4%BB%B6)
- [片段事件](/zh-hant/fragments/#%E4%BA%8B%E4%BB%B6)
- [自動播放事件](/zh-hant/auto-slide/#%E4%BA%8B%E4%BB%B6)
````

## src/zh-Hant/touch-navigation.md

- Characters: 379
- Tokens: 0

````markdown
---
id: touch-navigation
title: 觸控導覽
layout: default
---

# 觸控導覽

你可以在任何支持觸控的設備上通過滑動來導覽簡報。水平滑動更改水平幻燈片，垂直滑動更改垂直幻燈片。

如果你希望禁用此功能，可以在初始化時將 `touch` 配置選項設置為 false。

```javascript
Reveal.initialize({
  touch: false,
});
```

如果你的內容中有部分需要保持對觸控事件的可訪問性，你需要通過向元素添加 `data-prevent-swipe` 屬性來標註這一點。一個常見的例子是需要滾動的元素。

```html
<section>
  <p data-prevent-swipe>無法通過滑動此元素更改幻燈片。</p>
</section>
```
````

## src/_includes/extras.njk

- Characters: 1297
- Tokens: 0

```text
<div class="hidden extras inset-0 lg:-mb-0 sticky top-16 h-full w-1/5 lg:block">
	<div class="text-sm px-6 pl-10 pt-8">
		{% if hide_ads != true %}
		{% if helpers.environment == "production" %}
		<div class="mb-4 pb-4 border-b border-gray-300">
			<script async type="text/javascript" data-src="//cdn.carbonads.com/carbon.js?serve=CKYI553M&placement=revealjscom" id="_carbonads_js"></script>
		</div>
		{% endif %}
		{% endif %}
		<div class="mb-4 pb-4 border-b border-gray-300">
			<a href="https://slides.com">
				<img src="/images/slides-symbol-512x512.png" width="100" height="100">
				<p class="block mb-2 text-gray-700">Slides.com — the reveal.js presentation editor.</p>
				<span class="text-pink-700 hover:text-pink-900">Try it for free <span class="external-link-icon">{% include "images/icons/arrow-right.svg" %}</span></span>
			</a>
		</div>
		{% if id != "course" %}
		<div class="mb-4 pb-4">
			<a href="/course">
				<img src="/images/docs/mastering.svg" width="140" height="140">
				<p class="block my-2 text-gray-700">Become a reveal.js pro in the official video course.</p>
				<span class="text-pink-700 hover:text-pink-900">Learn more <span class="external-link-icon">{% include "images/icons/arrow-right.svg" %}</span></span>
			</a>
		</div>
		{% endif %}
	</div>
</div>
```

## src/_includes/meta.njk

- Characters: 1153
- Tokens: 0

```text
{# Google Schema #}
<meta itemprop="name" content="{{ title }} | {{ site.name }}">
<meta itemprop="description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">

{# Twitter #}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ title }} | {{ site.name }}">
<meta name="twitter:description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">
<meta name="twitter:site" content="{{ site.author.handle }}">
<meta name="twitter:creator" content="{{ site.author.handle }}">
<meta name="twitter:image:src" content="{{ site.url }}{{ site.images.twitter }}">

{# Open Graph #}
<meta property="og:title" content="{{ title }} | {{ site.name }}">
<meta property="og:description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">
<meta property="og:image" name="image" content="{{ site.url }}{{ site.images.og }}">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:site_name" content="{{ site.name }}">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">
```

## src/_includes/demo.zh-Hant.html

- Characters: 16610
- Tokens: 0

````html
<!-- @format -->

<div class="reveal">
  <div class="slides">
    <section>
      <img
        src="https://static.slid.es/reveal/logo-v1/reveal-white-text.svg"
        alt="reveal.js"
        style="height: 180px; margin: 0 auto 4rem auto; background: transparent"
        class="demo-logo"
      />
      <h3>HTML 簡報框架</h3>
      <p>
        <small
          >由 <a href="https://twitter.com/hakimel">Hakim El Hattab</a>
          與
          <a href="https://github.com/hakimel/reveal.js/graphs/contributors"
            >貢獻者們</a
          >
          開發</small
        >
      </p>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 1.5rem;
          padding-top: 1.5rem;
        "
      >
        <small>由</small>
        <a href="https://slides.com" rel="dofollow">
          <img
            src="https://d1835mevib0k1p.cloudfront.net/reveal-js/sponsors/slides-mono-white.png"
            width="227"
            height="86"
          />
        </a>
        <small>贊助</small>
      </div>
    </section>

    <section>
      <h2>哈囉</h2>
      <p>
        Reveal.js 讓您能夠使用 HTML
        建立精美的互動式簡報。這個範例將向您展示其功能。
      </p>
    </section>

    <section>
      <section>
        <h2>垂直幻燈片</h2>
        <p>幻燈片可以相互嵌套。</p>
        <p>使用 <em>空白</em> 鍵來瀏覽不同頁面</p>
        <br />
        <a href="#" class="navigate-down">
          <img
            class="r-frame"
            style="background: rgba(255, 255, 255, 0.1)"
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Down arrow"
          />
        </a>
      </section>
      <section>
        <h2>地下一樓</h2>
        <p>嵌套幻燈片非常適合在大量資訊的母幻燈片下添加額外的細節。</p>
      </section>
      <section>
        <h2>地下二樓</h2>
        <p>就醬，該上去了</p>
        <br />
        <a href="#/2">
          <img
            class="r-frame"
            style="
              background: rgba(255, 255, 255, 0.1);
              transform: rotate(180deg);
            "
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Up arrow"
          />
        </a>
      </section>
    </section>

    <section>
      <h2>簡報</h2>
      <p>
        不是程式設計師？不用擔心！有一個功能完整的視覺編輯器可以用來創建這些幻燈片，試試看
        <a href="https://slides.com" target="_blank">https://slides.com</a>。
      </p>
    </section>

    <section data-auto-animate>
      <h2 data-id="code-title">漂亮的程式</h2>
      <pre
        data-id="code-animation"
      ><code class="hljs javascript" data-trim data-line-numbers>
                import React, { useState } from 'react';

                function Example() {
                  const [count, setCount] = useState(0);

                  return (
                    ...
                  );
                }
            </code></pre>
      <p>
        代碼高亮使用
        <a href="https://highlightjs.org/usage/">highlight.js</a>。
      </p>
    </section>

    <section data-auto-animate>
      <h2 data-id="code-title">更精美的動畫</h2>
      <pre
        data-id="code-animation"
      ><code class="hljs javascript" data-trim data-line-numbers="|4,8-11|17|22-24">
                import React, { useState } from 'react';

                function Example() {
                  const [count, setCount] = useState(0);

                  return (
                    &lt;div&gt;
                      &lt;p&gt;You clicked {count} times&lt;/p&gt;
                      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                        Click me
                      &lt;/button&gt;
                    &lt;/div&gt;
                  );
                }

                function SecondExample() {
                  const [count, setCount] = useState(0);

                  return (
                    &lt;div&gt;
                      &lt;p&gt;You clicked {count} times&lt;/p&gt;
                      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                        Click me
                      &lt;/button&gt;
                    &lt;/div&gt;
                  );
                }
            </code></pre>
    </section>

    <section>
      <h2>視窗</h2>
      <p>按 <strong>ESC</strong> 來檢視整體簡報框架。</p>
      <p>
        按住 <strong>alt</strong> 鍵（在 Linux 中是
        <strong>ctrl</strong> 鍵）並點擊任何元素，使用
        <a href="https://lab.hakim.se/zoom-js">zoom.js</a>
        進行放大。再次點擊以縮小回去。
      </p>
      <p>（注意：在 Linux 中使用 ctrl + 點擊。）</p>
    </section>

    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <h2>自動動畫</h2>
      <p>
        使用
        <a href="https://revealjs.com/auto-animate/">自動動畫</a>
        在幻燈片之間為匹配的元素添加自動動畫。
      </p>
      <div class="r-hstack justify-center">
        <div
          data-id="box1"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
        <div
          data-id="box2"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
        <div
          data-id="box3"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
      </div>
    </section>
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <div class="r-hstack justify-center">
        <div
          data-id="box1"
          data-auto-animate-delay="0"
          style="background: cyan; width: 150px; height: 100px; margin: 10px"
        ></div>
        <div
          data-id="box2"
          data-auto-animate-delay="0.1"
          style="background: magenta; width: 150px; height: 100px; margin: 10px"
        ></div>
        <div
          data-id="box3"
          data-auto-animate-delay="0.2"
          style="background: yellow; width: 150px; height: 100px; margin: 10px"
        ></div>
      </div>
      <h2 style="margin-top: 20px">自動動畫</h2>
    </section>
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <div class="r-stack">
        <div
          data-id="box1"
          style="
            background: cyan;
            width: 300px;
            height: 300px;
            border-radius: 200px;
          "
        ></div>
        <div
          data-id="box2"
          style="
            background: magenta;
            width: 200px;
            height: 200px;
            border-radius: 200px;
          "
        ></div>
        <div
          data-id="box3"
          style="
            background: yellow;
            width: 100px;
            height: 100px;
            border-radius: 200px;
          "
        ></div>
      </div>
      <h2 style="margin-top: 20px">自動動畫</h2>
    </section>

    <section>
      <h2>支援觸控</h2>
      <p>
        簡報在手機和平板電腦等觸控設備上也看起來非常棒。只需用手指滑動即可切換幻燈片。
      </p>
    </section>

    <section data-markdown>
      <script type="text/template">
        ## Markdown 支援

        使用行內或外部 Markdown 編寫內容。
        更多說明和資訊請參見[說明文件](https://revealjs.com/markdown/)。

        ```html []
        <section data-markdown>
        ## Markdown 支持

        使用行內或外部 Markdown 編寫內容。
        更多說明和資訊請參見 [說明文件](https://revealjs.com/markdown/)。
        </section>
        ```
      </script>
    </section>

    <section>
      <p>添加 class <code>r-fit-text</code> 來自動調整字體大小</p>
      <h2 class="r-fit-text">FIT TEXT</h2>
    </section>

    <section>
      <section id="fragments">
        <h2>片段</h2>
        <p>點擊下一個箭頭...</p>
        <p class="fragment">...來逐步展示...</p>
        <p>
          <span class="fragment">...一個</span>
          <span class="fragment">分段的</span>
          <span class="fragment">幻燈片。</span>
        </p>

        <aside class="notes">
          這個幻燈片包含片段，這些片段也會在筆記窗口中逐步展示。
        </aside>
      </section>
      <section>
        <h2>片段動畫</h2>
        <p>有不同類型的片段動畫，比如：</p>
        <p class="fragment grow">放大</p>
        <p class="fragment shrink">縮小</p>
        <p class="fragment fade-out">淡出</p>
        <p>
          <span style="display: inline-block" class="fragment fade-right"
            >向右淡出，</span
          >
          <span style="display: inline-block" class="fragment fade-up"
            >向上，</span
          >
          <span style="display: inline-block" class="fragment fade-down"
            >向下，</span
          >
          <span style="display: inline-block" class="fragment fade-left"
            >向左</span
          >
        </p>
        <p class="fragment fade-in-then-out">先淡入再淡出</p>
        <p class="fragment fade-in-then-semi-out">先淡入再半透明淡出</p>
        <p>
          突顯 <span class="fragment highlight-red">紅色</span>
          <span class="fragment highlight-blue">藍色</span>
          <span class="fragment highlight-green">綠色</span>
        </p>
      </section>
    </section>

    <section id="transitions">
      <h2>轉場動畫</h2>
      <p>
        你可以選擇不同的轉場動畫<br />
        <a href="?transition=none#/transitions">無</a> -
        <a href="?transition=fade#/transitions">淡入</a> -
        <a href="?transition=slide#/transitions">滑入</a> -
        <a href="?transition=convex#/transitions">凸出</a> -
        <a href="?transition=concave#/transitions">凹陷</a> -
        <a href="?transition=zoom#/transitions">放大</a>
      </p>
    </section>

    <section>
      <section data-background="#dddddd">
        <h2>背景</h2>
        <p>
          加入
          <code>data-background="#dddddd"</code>
          在投影片上變更背景顏色。支援所有 CSS 顏色格式。
        </p>
        <a href="#" class="navigate-down">
          <img
            class="r-frame"
            style="background: rgba(255, 255, 255, 0.1)"
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Down arrow"
          />
        </a>
      </section>
      <section
        data-background="https://static.slid.es/reveal/image-placeholder.png"
      >
        <h2>圖片背景</h2>
        <pre><code class="hljs html">&lt;section data-background="image.png"&gt;</code></pre>
      </section>
      <section
        data-background="https://static.slid.es/reveal/image-placeholder.png"
        data-background-repeat="repeat"
        data-background-size="100px"
      >
        <h2>平鋪背景</h2>
        <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background="image.png" data-background-repeat="repeat" data-background-size="100px"&gt;</code></pre>
      </section>
      <section
        data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
        data-background-color="#000000"
      >
        <div
          style="
            background-color: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 20px;
          "
        >
          <h2>影片背景</h2>
          <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background-video="video.mp4,video.webm"&gt;</code></pre>
        </div>
      </section>
      <section data-background="http://i.giphy.com/90F8aUepslB84.gif">
        <h2>... 還有 GIFs!</h2>
      </section>
    </section>

    <section
      data-transition="slide"
      data-background="#4d7e65"
      data-background-transition="zoom"
    >
      <h2>背景轉場</h2>
      <p>
        透過 backgroundTransition
        參數可以實現不同的背景轉換動畫。如這就是所謂的「縮放」。
      </p>
      <pre><code class="hljs javascript">Reveal.configure({ backgroundTransition: 'zoom' })</code></pre>
    </section>

    <section
      data-transition="slide"
      data-background="#b5533c"
      data-background-transition="zoom"
    >
      <h2>背景轉場</h2>
      <p>您可以覆蓋每張投影片的背景轉換。</p>
      <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background-transition="zoom"&gt;</code></pre>
    </section>

    <section
      data-background-iframe="https://hakim.se"
      data-background-interactive
    >
      <div
        style="
          position: absolute;
          width: 40%;
          right: 0;
          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.5),
            0 5px 25px rgba(0, 0, 0, 0.2);
          background-color: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 20px;
          font-size: 20px;
          text-align: left;
        "
      >
        <h2>Iframe 背景</h2>
        <p>
          由於 Reveal.js
          在網頁中運行，因此您可以輕鬆嵌入其他網路內容。嘗試與後台頁面互動。
        </p>
      </div>
    </section>

    <section>
      <h2>精彩的無序列表</h2>
      <ul>
        <li>這裡沒有順序</li>
        <li>這裡也沒有</li>
        <li>這裡也是</li>
        <li>這裡同樣沒有</li>
      </ul>
    </section>

    <section>
      <h2>神奇的有序列表</h2>
      <ol>
        <li>一小</li>
        <li>二小</li>
        <li>三最大！</li>
      </ol>
    </section>

    <section>
      <h2>表格</h2>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>價格</th>
            <th>數量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>蜂蜜</td>
            <td>$230</td>
            <td>1</td>
          </tr>
          <tr>
            <td>檸檬</td>
            <td>$20</td>
            <td>18</td>
          </tr>
          <tr>
            <td>感冒藥</td>
            <td>$120</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>有道理的引言</h2>
      <p>
        引言有兩種呈現方式，分別是行內：
        <q
          cite="https://dict.revised.moe.edu.tw/dictView.jsp?ID=75879&la=0&powerMode=0"
          >咖啡因來自咖啡果，所以咖啡果是因，咖啡因是果</q
        >
        ，以及區塊：
      </p>
      <blockquote
        cite="https://dict.revised.moe.edu.tw/dictView.jsp?ID=156961&la=0&powerMode=0"
      >
        &ldquo;飲水機其實不是飲水機，它是出水機。你才是飲水機，各位飲水機們好。&rdquo;
      </blockquote>
    </section>

    <section>
      <h2>超連結</h2>
      <p>
        你可以在簡報中加入超連結來導覽至不同頁面，像是
        <a href="#/2/3">這個</a>。
      </p>
    </section>

    <section>
      <h2>簡報者檢視畫面</h2>
      <p>
        我們有一個
        <a href="https://revealjs.com/speaker-view/">簡報者檢視畫面</a>。
        它包括一個計時器，下一張幻燈片的預覽以及你的演講筆記。
      </p>
      <p>按下 <em>S</em> 鍵來試用。</p>

      <aside class="notes">
        嘿，這裡有一些筆記。它們將在你的簡報中被隱藏，但如果你打開演講者筆記窗口（在鍵盤上按
        's'），你可以看到它們。
      </aside>
    </section>

    <section>
      <h2>輸出 PDF</h2>
      <p>
        簡報可以被
        <a href="https://revealjs.com/pdf-export/">輸出成 PDF</a>，
        這是一個範例：
      </p>
      <iframe
        data-src="https://www.slideshare.net/slideshow/embed_code/42840540"
        width="445"
        height="355"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        style="border: 3px solid #666; margin-bottom: 5px; max-width: 100%"
        allowfullscreen
      >
      </iframe>
    </section>

    <section>
      <h2>全域狀態</h2>
      <p>
        在幻燈片上設置 <code>data-state="something"</code>，當幻燈片開啟時，
        <code>"something"</code>
        將被添加為文檔元素的 class。這讓你可以更自由的應用畫面，如切換頁面背景。
      </p>
    </section>

    <section data-state="customevent">
      <h2>狀態事件</h2>
      <p>
        此外，可以通過綁定到
        <code>data-state</code> 名稱，在每個幻燈片的基礎上觸發自定義事件。
      </p>
      <pre><code class="javascript" data-trim contenteditable style="font-size: 18px;">
Reveal.on( 'customevent', function() {
  console.log( '"customevent" has fired' );
} );
            </code></pre>
    </section>

    <section>
      <h2>欸等等</h2>
      <p>
        在鍵盤上按 B 或 . 鍵來暫停簡報。當你在台上希望聚焦觀眾的注意力時很有用。
      </p>
    </section>

    <section>
      <h2>更多功能</h2>
      <ul>
        <li>從右到左布局的支援</li>
        <li>
          <a href="https://revealjs.com/api/">廣泛的 JavaScript API</a>
        </li>
        <li>
          <a href="https://revealjs.com/auto-slide/">自動切換</a>
        </li>
        <li>
          <a href="https://revealjs.com/backgrounds/#parallax-background"
            >滾動滾動視差背景</a
          >
        </li>
        <li>
          <a href="https://revealjs.com/keyboard/">自訂快捷鍵</a>
        </li>
      </ul>
    </section>

    <section style="text-align: left">
      <h1>THE END</h1>
      <p>
        - <a href="https://slides.com">試試線上編輯器</a> <br />
        -
        <a href="https://github.com/hakimel/reveal.js">原始碼倉庫</a>
      </p>
    </section>
  </div>
</div>
````

## src/_includes/sidebar.njk

- Characters: 2160
- Tokens: 0

```text
<div class="sidebar hidden fixed inset-0 pt-16 h-screen z-20 w-full bg-gray-100 lg:sticky lg:overflow-y-visible lg:pt-0 lg:w-1/5 lg:block lg:top-16 lg:pb-16 lg:-mb-16">
  <div class="sidebar-inner overflow-hidden h-full">
    <nav class="sidebar-scroller text-base sm:text-sm inset-0 overflow-y-auto overflow-x-hidden px-6 py-8 h-full">
      <ul>
         <li class="level-1 mb-4 sidebar-language">
            <span class="block text-sm sm:text-xs mb-2 uppercase font-semibold text-gray-500">{{ 'Languages' | i18n }}</span>
            <ul>
              {% for localeI in locales -%}
                <li class="level-2 mb-px">
                <a href="/{{ localeI.code }}/{{ page.url | replace(locale, '') | replace('/', '') }}" hreflang="{{ localeI.code }}" class="nav-link -mx-1 p-1">
                  {{ localeI.label }}
                </a>
              </li>
              {% endfor -%}



            </ul>
          </li>
        
        {% for section in navigation.sections %}

          <li class="level-1 mb-4">
            <span class="block text-sm sm:text-xs mb-2 uppercase font-semibold text-gray-500">{{ section.label | i18n }}</span>
            <ul>
              {% for item in section.items %}
              {% set is_current_page = page.url | replace('/', '') == item.url | replace('/', '') %}

              <li class="level-2 mb-px">
                <a href="{% if locale and not item.external %}/{{ locale }}{% endif %}{{ item.url | safe }}" class="nav-link -mx-1 p-1 {{ item.class }} {% if is_current_page %}selected{% endif %}"{% if is_current_page %} aria-current="page"{% endif %}>
                  {{ item.label | i18n }}
                  {% if item.external %}<span class="external-link-icon">{% include "images/icons/arrow-right.svg" %}</span>{% endif %}
                  {% if item.new %}<span class="inline-block border border-gray-700 text-gray-700 leading-none p-0.5 ml-2 -mt-px rounded-sm align-middle" style="font-size: 0.65em;">NEW</span>{% endif %}
                </a>
              </li>

              {% endfor %}

            </ul>
          </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
</div>
```

## src/_includes/header.njk

- Characters: 3931
- Tokens: 0

```text
<header class="header {% if id == "home" %}sticky{% else %}fixed{% endif %} flex h-16 items-center top-0 w-full z-30 bg-gray-100 py-2 border-b border-gray-300">
  <div class="w-full relative max-w-screen-xl mx-auto px-6 flex flex-row items-center justify-between">
    <div class="header-left mr-6 flex-shrink-0">
      <a class="header-logo block" href="/" title="reveal.js home">
        <img class="hidden sm:block" src="/images/logo/reveal-black-text.svg" alt="reveal.js logo" style="width: 142px">
        <img class="block sm:hidden" src="/images/logo/reveal-symbol.svg" alt="reveal.js logo" style="width: 40px">
      </a>
      <!--<a class="header-cta py-3 px-2 -mx-2 text-gray-800 hover:text-gray-900 rounded font-semibold" href="/installation">Get Started</a>-->
    </div>

    <div class="search relative mr-2 flex-grow max-w-3xl sm:mr-6">
      <input class="search-input appearance-none h-10 w-full inline-block py-1 px-4 bg-gray-300 border-2 border-gray-300 outline-none rounded-full placeholder-gray-600 text-gray-800 hover:text-gray-900 focus:border-yellow-400 focus:bg-white" placeholder="Search reveal.js..." />
      <kbd class="search-shortcut absolute right-4 py-2 top-0.5 rounded-lg text-sm text-gray-600 pointer-events-none hidden sm:inline-block"><span class="search-shortcut-modifier text-lg leading-none align-middle mr-0.5">⌘</span>K</kbd>
      <div class="search-results overflow-hidden fixed left-4 right-4 top-100 bg-white p-2 mt-2 rounded-lg shadow-2xl text-sm lg:absolute lg:left-auto lg:right-auto lg:min-w-full" data-state="no-term"></div>
    </div>

    <nav class="header-nav hidden lg:flex">

      <ul class="menu flex flex-col lg:flex-row items-center list-reset text-base">
        {% if locales.length %}
        <li class="relative header-lang">
          <a class="inline-block py-3 px-5 text-gray-800 hover:text-gray-900 rounded align-middle">
            {% include "images/icons/translate.svg" %}
          </a>
          <div class="header-lang-select absolute shadow-2xl px-2 py-2 text-gray-800 rounded-lg align-middle focus:outline-none">
          {% for localed in locales -%}
        <a href="/{{ localed.code }}/{{ page.url | replace(locale, '') | replace('/', '') }}" hreflang="{{ localed.code }}" class="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900">{{ localed.label }}</a>
  {% endfor -%}
          </div>
        </li>
        {% endif %}
        <li>
          <a class="inline-block py-3 px-5 text-gray-800 hover:text-gray-900 rounded align-middle" href="{{ site.urls.twitter }}">
            {% include "images/icons/twitter.svg" %}
          </a>
        </li>
        <li>
          <a class="inline-block py-3 px-5 text-gray-800 hover:text-gray-900 rounded align-middle" href="{{ site.urls.github }}">
            {% include "images/icons/github.svg" %}
          </a>
        </li>

      </ul>

    </nav>

    <nav class="header-nav lg:hidden flex">

      <ul class="menu flex flex-row items-center list-reset text-sm">

        {# <li>
          <a class="inline-block p-2 text-gray-800 hover:text-gray-900 rounded align-middle" href="{{ site.urls.twitter }}">
            {% include "images/icons/twitter.svg" %}
          </a>
        </li> #}
        <li>
          <a class="inline-block p-2 mr-1 text-gray-800 hover:text-gray-900 rounded align-middle" href="{{ site.urls.github }}">
            {% include "images/icons/github.svg" %}
          </a>
        </li>
        <li>
          <button class="menu-toggle inline-block py-1 pl-2">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line class="line1" x1="0" y1="8" x2="24" y2="8" style="stroke: #000; stroke-width: 2" />
              <line class="line2" x1="0" y1="16" x2="24" y2="16" style="stroke: #000; stroke-width: 2" />
            </svg>
          </button>
        </li>

      </ul>

    </nav>
  </div>
</header>
```

## src/_includes/demo.html

- Characters: 19180
- Tokens: 0

````html
<div class="reveal">
  <div class="slides">
    <section>
      <img
        src="https://static.slid.es/reveal/logo-v1/reveal-white-text.svg"
        alt="reveal.js"
        style="height: 180px; margin: 0 auto 4rem auto; background: transparent"
        class="demo-logo"
      />
      <h3>The HTML Presentation Framework</h3>
      <p>
        <small
          >Created by
          <a href="https://twitter.com/hakimel">Hakim El Hattab</a> and
          <a href="https://github.com/hakimel/reveal.js/graphs/contributors"
            >contributors</a
          ></small
        >
      </p>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 1.5rem;
          padding-top: 1.5rem;
        "
      >
        <small>Sponsored by</small>
        <a href="https://slides.com" rel="dofollow">
          <img
            src="https://d1835mevib0k1p.cloudfront.net/reveal-js/sponsors/slides-mono-white.png"
            width="227"
            height="86"
          />
        </a>
      </div>
    </section>

    <section>
      <h2>Hello There</h2>
      <p>
        reveal.js enables you to create beautiful interactive slide decks using
        HTML. This presentation will show you examples of what it can do.
      </p>
    </section>

    <section>
      <section>
        <h2>Vertical Slides</h2>
        <p>Slides can be nested inside of each other.</p>
        <p>Use the <em>Space</em> key to navigate through all slides.</p>
        <br />
        <a href="#" class="navigate-down">
          <img
            class="r-frame"
            style="background: rgba(255, 255, 255, 0.1)"
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Down arrow"
          />
        </a>
      </section>
      <section>
        <h2>Basement Level 1</h2>
        <p>
          Nested slides are useful for adding additional detail underneath a
          high level horizontal slide.
        </p>
      </section>
      <section>
        <h2>Basement Level 2</h2>
        <p>That's it, time to go back up.</p>
        <br />
        <a href="#/2">
          <img
            class="r-frame"
            style="
              background: rgba(255, 255, 255, 0.1);
              transform: rotate(180deg);
            "
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Up arrow"
          />
        </a>
      </section>
    </section>

    <section>
      <h2>Slides</h2>
      <p>
        Not a coder? Not a problem. There's a fully-featured visual editor for
        authoring these, try it out at
        <a href="https://slides.com" target="_blank">https://slides.com</a>.
      </p>
    </section>

    <section data-auto-animate>
      <h2 data-id="code-title">Pretty Code</h2>
      <pre
        data-id="code-animation"
      ><code class="hljs javascript" data-trim data-line-numbers>
                import React, { useState } from 'react';

                function Example() {
                  const [count, setCount] = useState(0);

                  return (
                    ...
                  );
                }
            </code></pre>
      <p>
        Code syntax highlighting courtesy of
        <a href="https://highlightjs.org/usage/">highlight.js</a>.
      </p>
    </section>

    <section data-auto-animate>
      <h2 data-id="code-title">Even Prettier Animations</h2>
      <pre
        data-id="code-animation"
      ><code class="hljs javascript" data-trim data-line-numbers="|4,8-11|17|22-24">
                import React, { useState } from 'react';

                function Example() {
                  const [count, setCount] = useState(0);

                  return (
                    &lt;div&gt;
                      &lt;p&gt;You clicked {count} times&lt;/p&gt;
                      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                        Click me
                      &lt;/button&gt;
                    &lt;/div&gt;
                  );
                }

                function SecondExample() {
                  const [count, setCount] = useState(0);

                  return (
                    &lt;div&gt;
                      &lt;p&gt;You clicked {count} times&lt;/p&gt;
                      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                        Click me
                      &lt;/button&gt;
                    &lt;/div&gt;
                  );
                }
            </code></pre>
    </section>

    <section>
      <h2>Point of View</h2>
      <p>Press <strong>ESC</strong> to enter the slide overview.</p>
      <p>
        Hold down the <strong>alt</strong> key (<strong>ctrl</strong> in Linux)
        and click on any element to zoom towards it using
        <a href="https://lab.hakim.se/zoom-js">zoom.js</a>. Click again to zoom
        back out.
      </p>
      <p>(NOTE: Use ctrl + click in Linux.)</p>
    </section>

    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <h2>Auto-Animate</h2>
      <p>
        Automatically animate matching elements across slides with
        <a href="https://revealjs.com/auto-animate/">Auto-Animate</a>.
      </p>
      <div class="r-hstack justify-center">
        <div
          data-id="box1"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
        <div
          data-id="box2"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
        <div
          data-id="box3"
          style="
            background: #999;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 5px;
          "
        ></div>
      </div>
    </section>
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <div class="r-hstack justify-center">
        <div
          data-id="box1"
          data-auto-animate-delay="0"
          style="background: cyan; width: 150px; height: 100px; margin: 10px"
        ></div>
        <div
          data-id="box2"
          data-auto-animate-delay="0.1"
          style="background: magenta; width: 150px; height: 100px; margin: 10px"
        ></div>
        <div
          data-id="box3"
          data-auto-animate-delay="0.2"
          style="background: yellow; width: 150px; height: 100px; margin: 10px"
        ></div>
      </div>
      <h2 style="margin-top: 20px">Auto-Animate</h2>
    </section>
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    >
      <div class="r-stack">
        <div
          data-id="box1"
          style="
            background: cyan;
            width: 300px;
            height: 300px;
            border-radius: 200px;
          "
        ></div>
        <div
          data-id="box2"
          style="
            background: magenta;
            width: 200px;
            height: 200px;
            border-radius: 200px;
          "
        ></div>
        <div
          data-id="box3"
          style="
            background: yellow;
            width: 100px;
            height: 100px;
            border-radius: 200px;
          "
        ></div>
      </div>
      <h2 style="margin-top: 20px">Auto-Animate</h2>
    </section>

    <section>
      <h2>Touch Optimized</h2>
      <p>
        Presentations look great on touch devices, like mobile phones and
        tablets. Simply swipe through your slides.
      </p>
    </section>

    <section data-markdown>
      <script type="text/template">
        ## Markdown support

        Write content using inline or external Markdown.
        Instructions and more info available in the [readme](https://revealjs.com/markdown/).

        ```html []
        <section data-markdown>
          ## Markdown support

          Write content using inline or external Markdown.
          Instructions and more info available in the [readme](https://revealjs.com/markdown/).
        </section>
        ```
      </script>
    </section>

    <section>
      <p>Add the <code>r-fit-text</code> class to auto-size text</p>
      <h2 class="r-fit-text">FIT TEXT</h2>
    </section>

    <section>
      <section id="fragments">
        <h2>Fragments</h2>
        <p>Hit the next arrow...</p>
        <p class="fragment">... to step through ...</p>
        <p>
          <span class="fragment">... a</span>
          <span class="fragment">fragmented</span>
          <span class="fragment">slide.</span>
        </p>

        <aside class="notes">
          This slide has fragments which are also stepped through in the notes
          window.
        </aside>
      </section>
      <section>
        <h2>Fragment Styles</h2>
        <p>There's different types of fragments, like:</p>
        <p class="fragment grow">grow</p>
        <p class="fragment shrink">shrink</p>
        <p class="fragment fade-out">fade-out</p>
        <p>
          <span style="display: inline-block" class="fragment fade-right"
            >fade-right,
          </span>
          <span style="display: inline-block" class="fragment fade-up"
            >up,
          </span>
          <span style="display: inline-block" class="fragment fade-down"
            >down,
          </span>
          <span style="display: inline-block" class="fragment fade-left"
            >left</span
          >
        </p>
        <p class="fragment fade-in-then-out">fade-in-then-out</p>
        <p class="fragment fade-in-then-semi-out">fade-in-then-semi-out</p>
        <p>
          Highlight <span class="fragment highlight-red">red</span>
          <span class="fragment highlight-blue">blue</span>
          <span class="fragment highlight-green">green</span>
        </p>
      </section>
    </section>

    <section id="transitions">
      <h2>Transition Styles</h2>
      <p>
        You can select from different transitions, like: <br />
        <a href="?transition=none#/transitions">None</a> -
        <a href="?transition=fade#/transitions">Fade</a> -
        <a href="?transition=slide#/transitions">Slide</a> -
        <a href="?transition=convex#/transitions">Convex</a> -
        <a href="?transition=concave#/transitions">Concave</a> -
        <a href="?transition=zoom#/transitions">Zoom</a>
      </p>
    </section>

    <section>
      <section data-background="#dddddd">
        <h2>Slide Backgrounds</h2>
        <p>
          Set <code>data-background="#dddddd"</code> on a slide to change the
          background color. All CSS color formats are supported.
        </p>
        <a href="#" class="navigate-down">
          <img
            class="r-frame"
            style="background: rgba(255, 255, 255, 0.1)"
            width="178"
            height="238"
            data-src="https://static.slid.es/reveal/arrow.png"
            alt="Down arrow"
          />
        </a>
      </section>
      <section
        data-background="https://static.slid.es/reveal/image-placeholder.png"
      >
        <h2>Image Backgrounds</h2>
        <pre><code class="hljs html">&lt;section data-background="image.png"&gt;</code></pre>
      </section>
      <section
        data-background="https://static.slid.es/reveal/image-placeholder.png"
        data-background-repeat="repeat"
        data-background-size="100px"
      >
        <h2>Tiled Backgrounds</h2>
        <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background="image.png" data-background-repeat="repeat" data-background-size="100px"&gt;</code></pre>
      </section>
      <section
        data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
        data-background-color="#000000"
      >
        <div
          style="
            background-color: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 20px;
          "
        >
          <h2>Video Backgrounds</h2>
          <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background-video="video.mp4,video.webm"&gt;</code></pre>
        </div>
      </section>
      <section data-background="http://i.giphy.com/90F8aUepslB84.gif">
        <h2>... and GIFs!</h2>
      </section>
    </section>

    <section
      data-transition="slide"
      data-background="#4d7e65"
      data-background-transition="zoom"
    >
      <h2>Background Transitions</h2>
      <p>
        Different background transitions are available via the
        backgroundTransition option. This one's called "zoom".
      </p>
      <pre><code class="hljs javascript">Reveal.configure({ backgroundTransition: 'zoom' })</code></pre>
    </section>

    <section
      data-transition="slide"
      data-background="#b5533c"
      data-background-transition="zoom"
    >
      <h2>Background Transitions</h2>
      <p>You can override background transitions per-slide.</p>
      <pre><code class="hljs html" style="word-wrap: break-word;">&lt;section data-background-transition="zoom"&gt;</code></pre>
    </section>

    <section
      data-background-iframe="https://hakim.se"
      data-background-interactive
    >
      <div
        style="
          position: absolute;
          width: 40%;
          right: 0;
          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.5),
            0 5px 25px rgba(0, 0, 0, 0.2);
          background-color: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 20px;
          font-size: 20px;
          text-align: left;
        "
      >
        <h2>Iframe Backgrounds</h2>
        <p>
          Since reveal.js runs on the web, you can easily embed other web
          content. Try interacting with the page in the background.
        </p>
      </div>
    </section>

    <section>
      <h2>Marvelous List</h2>
      <ul>
        <li>No order here</li>
        <li>Or here</li>
        <li>Or here</li>
        <li>Or here</li>
      </ul>
    </section>

    <section>
      <h2>Fantastic Ordered List</h2>
      <ol>
        <li>One is smaller than...</li>
        <li>Two is smaller than...</li>
        <li>Three!</li>
      </ol>
    </section>

    <section>
      <h2>Tabular Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apples</td>
            <td>$1</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Lemonade</td>
            <td>$2</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Bread</td>
            <td>$3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Clever Quotes</h2>
      <p>
        These guys come in two forms, inline:
        <q
          cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations"
          >The nice thing about standards is that there are so many to choose
          from</q
        >
        and block:
      </p>
      <blockquote
        cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations"
      >
        &ldquo;For years there has been a theory that millions of monkeys typing
        at random on millions of typewriters would reproduce the entire works of
        Shakespeare. The Internet has proven this theory to be untrue.&rdquo;
      </blockquote>
    </section>

    <section>
      <h2>Intergalactic Interconnections</h2>
      <p>
        You can link between slides internally,
        <a href="#/2/3">like this</a>.
      </p>
    </section>

    <section>
      <h2>Speaker View</h2>
      <p>
        There's a <a href="https://revealjs.com/speaker-view/">speaker view</a>.
        It includes a timer, preview of the upcoming slide as well as your
        speaker notes.
      </p>
      <p>Press the <em>S</em> key to try it out.</p>

      <aside class="notes">
        Oh hey, these are some notes. They'll be hidden in your presentation,
        but you can see them if you open the speaker notes window (hit 's' on
        your keyboard).
      </aside>
    </section>

    <section>
      <h2>Export to PDF</h2>
      <p>
        Presentations can be
        <a href="https://revealjs.com/pdf-export/">exported to PDF</a>, here's
        an example:
      </p>
      <iframe
        data-src="https://www.slideshare.net/slideshow/embed_code/42840540"
        width="445"
        height="355"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        style="border: 3px solid #666; margin-bottom: 5px; max-width: 100%"
        allowfullscreen
      >
      </iframe>
    </section>

    <section>
      <h2>Global State</h2>
      <p>
        Set <code>data-state="something"</code> on a slide and
        <code>"something"</code>
        will be added as a class to the document element when the slide is open.
        This lets you apply broader style changes, like switching the page
        background.
      </p>
    </section>

    <section data-state="customevent">
      <h2>State Events</h2>
      <p>
        Additionally custom events can be triggered on a per slide basis by
        binding to the <code>data-state</code> name.
      </p>
      <pre><code class="javascript" data-trim contenteditable style="font-size: 18px;">
Reveal.on( 'customevent', function() {
  console.log( '"customevent" has fired' );
} );
            </code></pre>
    </section>

    <section>
      <h2>Take a Moment</h2>
      <p>
        Press B or . on your keyboard to pause the presentation. This is helpful
        when you're on stage and want to take distracting slides off the screen.
      </p>
    </section>

    <section>
      <h2>Much more</h2>
      <ul>
        <li>Right-to-left support</li>
        <li>
          <a href="https://revealjs.com/api/">Extensive JavaScript API</a>
        </li>
        <li><a href="https://revealjs.com/auto-slide/">Auto-progression</a></li>
        <li>
          <a href="https://revealjs.com/backgrounds/#parallax-background"
            >Parallax backgrounds</a
          >
        </li>
        <li>
          <a href="https://revealjs.com/keyboard/">Custom keyboard bindings</a>
        </li>
      </ul>
    </section>

    <section style="text-align: left">
      <h1>THE END</h1>
      <p>
        - <a href="https://slides.com">Try the online editor</a> <br />
        -
        <a href="https://github.com/hakimel/reveal.js"
          >Source code &amp; documentation</a
        >
      </p>
    </section>
  </div>
</div>
````

## src/_includes/footer.njk

- Characters: 598
- Tokens: 0

```text
<footer class="footer flex mt-24 pt-8 px-4 w-full border-t border-gray-300 justify-end text-sm">
  <a href="{{ site.urls.personal_twitter }}" class="p-2 text-pink-700 hover:text-pink-900 mr-auto">{{ 'Created by @hakimel' | i18n }}</a>
  <a href="{{ site.urls.twitter }}" class="p-2 text-pink-700 hover:text-pink-900">X (Twitter)</a>
  <a href="{{ site.urls.github }}" class="p-2 text-pink-700 hover:text-pink-900">GitHub</a>
  <a href="https://github.com/reveal/revealjs.com/tree/master/{{ page.inputPath }}" class="p-2 text-pink-700 hover:text-pink-900">{{ 'Edit this page' | i18n }}</a>
</footer>
```

## src/multiplex.md

- Characters: 476
- Tokens: 0

```markdown
---
id: multiplex
title: Multiplex
layout: default
---

# Multiplex

The multiplex plugin allows your audience to follow the slides of the presentation you are controlling on their own phone, tablet or laptop. When you change slides in your master presentations everyone will follow and see the same content on their own device.

This plugin was previously part of reveal.js core but as of 4.0.0 it has graduated to its own repository at <https://github.com/reveal/multiplex>.
```

## src/markdown.md

- Characters: 5173
- Tokens: 0

`````markdown
---
id: markdown
title: Markdown
layout: default
---

# Markdown

It's possible and often times more convenient to write presentation content using Markdown. To create a Markdown slide, add the `data-markdown` attribute to your `<section>` element and wrap the contents in a `<textarea data-template>` like the example below.

```html
<section data-markdown>
  <textarea data-template>
    ## Slide 1
    A paragraph with some text and a [link](https://hakim.se).
    ---
    ## Slide 2
    ---
    ## Slide 3
  </textarea>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown data-separator="---">
        <script type="text/template">
## Slide 1
A paragraph with some text and a [link](https://hakim.se).
---
## Slide 2
---
## Slide 3
        </script>
    </section>
  </div>
</div>

Note that this is sensitive to indentation (avoid mixing tabs and spaces) and line breaks (avoid consecutive breaks).

## Markdown Plugin

This functionality is powered by the built-in Markdown plugin which in turn uses [marked](https://github.com/chjj/marked) for all parsing. The Markdown plugin is included in our default presentation examples. If you want to manually add it to a new presentation here's how:

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

## External Markdown

You can write your content as a separate file and have reveal.js load it at runtime. Note the separator arguments which determine how slides are delimited in the external file: the `data-separator` attribute defines a regular expression for horizontal slides (defaults to `^\r?\n---\r?\n$`, a newline-bounded horizontal rule) and `data-separator-vertical` defines vertical slides (disabled by default). The `data-separator-notes` attribute is a regular expression for specifying the beginning of the current slide's speaker notes (defaults to `notes?:`, so it will match both "note:" and "notes:"). The `data-charset` attribute is optional and specifies which charset to use when loading the external file.

When used locally, this feature requires that reveal.js [runs from a local web server](/installation/#full-setup). The following example customizes all available options:

```html
<section
  data-markdown="example.md"
  data-separator="^\n\n\n"
  data-separator-vertical="^\n\n"
  data-separator-notes="^Note:"
  data-charset="iso-8859-15"
>
  <!--
        Note that Windows uses `\r\n` instead of `\n` as its linefeed character.
        For a regex that supports all operating systems, use `\r?\n` instead of `\n`.
    -->
</section>
```

## Element Attributes

Special syntax (through HTML comments) is available for adding attributes to Markdown elements. This is useful for fragments, among other things.

```html
<section data-markdown>
  <script type="text/template">
    - Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
    - Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->
  </script>
</section>
```

## Slide Attributes

Special syntax (through HTML comments) is available for adding attributes to the slide `<section>` elements generated by your Markdown.

```html
<section data-markdown>
  <script type="text/template">
    <!-- .slide: data-background="#ff0000" -->
      Markdown content
  </script>
</section>
```

## Syntax Highlighting

Powerful syntax highlighting features are built into reveal.js. Using the bracket syntax shown below, you can highlight individual lines and even walk through multiple separate highlights step-by-step. [Learn more about line highlights](/code/#line-numbers-highlights).

````html
<section data-markdown>
  <textarea data-template>
    ```js [1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

### Line Number Offset

You can add a [line number offset](/code/#line-number-offset-4.2.0) by adding a number and a colon at the beginning of your highlights.

````html
<section data-markdown>
  <textarea data-template>
    ```js [712: 1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [712: 1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

## Configuring _marked_

We use [marked](https://github.com/chjj/marked) to parse Markdown. To customize marked's rendering, you can pass in options when [configuring Reveal](/config/):

```javascript
Reveal.initialize({
  // Options which are passed into marked
  // See https://marked.js.org/using_advanced#options
  markdown: {
    smartypants: true,
  },
});
```
`````

## src/slide-visibility.md

- Characters: 1766
- Tokens: 0

````markdown
---
id: slide-visibility
title: Slide Visibility
layout: default
---

# Slide Visibility

The `data-visibility` attribute can be used to hide slides. It can also be used to mark slides as "uncounted" in reveal.js' internal numbering system, which affects the visible slide number and progress bar.

## Hidden Slides <span class="r-version-badge new">4.1.0</span>

To hide a slide from view, add `data-visibility="hidden"`. Hidden slides are removed from the DOM as soon as reveal.js is initialized.

```html
<section>Slide 1</section>
<section data-visibility="hidden">Slide 2</section>
<section>Slide 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>Slide 1</section>
    <section data-visibility="hidden">Slide 2</section>
    <section>Slide 3</section>
  </div>
</div>

## Uncounted Slides

When preparing a presentation it can sometimes be helpful to prepare optional slides that you may or may not have time to show. This is easily done by appending a few slides at the end of the presentation, however this means that the reveal.js progress bar and slide numbering will hint that there are additional slides.

To "hide" those slides from reveal.js' numbering system you can use `data-visibility="uncounted"`.

**Note:** This only works for slides at the end of the presentation, after all of your main slides.

```html
<section>Slide 1</section>
<section>Slide 2</section>
<section data-visibility="uncounted">Slide 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t", "progress": true}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
    <section data-visibility="uncounted">Slide 3</section>
  </div>
</div>
````

## src/postmessage.md

- Characters: 1922
- Tokens: 0

````markdown
---
id: postmessage
title: postMessage
layout: default
---

# postMessage API

The framework has a built-in postMessage API that can be used when communicating with a presentation inside of another window. Here's an example showing how you'd make a reveal.js instance in the given window proceed to slide 2:

```javascript
<window>.postMessage( JSON.stringify({ method: 'slide', args: [ 2 ] }), '*' );
```

## postMessage Events

When reveal.js runs inside of an iframe it can optionally bubble all of its events to the parent. Bubbled events are stringified JSON with three fields: namespace, eventName and state. Here's how you subscribe to them from the parent window:

```javascript
window.addEventListener('message', (event) => {
  var data = JSON.parse(event.data);
  if (data.namespace === 'reveal' && data.eventName === 'slidechanged') {
    // Slide changed, see data.state for slide number
  }
});
```

## postMessage Callbacks

When you call any method via the postMessage API, reveal.js will dispatch a message with the return value. This is done so that you can call a getter method and see what the result is. Check out this example:

```javascript
<revealWindow>.postMessage( JSON.stringify({ method: 'getTotalSlides' }), '*' );

window.addEventListener( 'message', event => {
  var data = JSON.parse( event.data );
  // `data.method`` is the method that we invoked
  if( data.namespace === 'reveal' && data.eventName === 'callback' && data.method === 'getTotalSlides' ) {
    data.result // = the total number of slides
  }
} );
```

## Turning postMessage on/off

This cross-window messaging can be toggled on or off using configuration flags. These are the default values.

```javascript/1-5
Reveal.initialize({
  // Exposes the reveal.js API through window.postMessage
  postMessage: true,

  // Dispatches all reveal.js events to the parent window through postMessage
  postMessageEvents: false
});
```
````

## src/creating-plugins.md

- Characters: 4506
- Tokens: 0

````markdown
---
id: creating-plugins
title: Creating Plugins
layout: default
---

# Creating a Plugin <span class="r-version-badge new">4.0.0</span>

We provide a lightweight specification and API for plugins. This is used by our default plugins like [code highlighting](/code/) and [Markdown](/markdown/) but can also be used to create your own plugins.

## Plugin Definition

Plugins are objects that contain the following properties.

| Property                                         | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id <span class="r-var-type">String</span>        | The plugins unique ID. This can be used to retrieve the plugin instance via `Reveal.getPlugin(<id>)`.                                                                                                                                                                                                                                                                                                                                                                                                     |
| init <span class="r-var-type">Function</span>    | An optional function that is called when the plugin should run. It's invoked with one argument; a reference to the [presentation instance](/api/) that the plugin was registered with.<br><br>The init function can optionally return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If a Promise is returned, reveal.js will wait for it to resolve before the presentation finishes initialization and fires the [ready event](/events/#ready). |
| destroy <span class="r-var-type">Function</span> | Optional function that is called when the reveal.js instance that this plugin is registered to is uninitialized.                                                                                                                                                                                                                                                                                                                                                                                          |

{.key-value}

Here's an example plugin which shuffles all slides in a presentation when the T key is pressed. Note that we export a function that returns a new plugin object. This is done because there may be [multiple presentation instances on the same page](/initialization/#multiple-presentations), and each should have their own instance of our plugin.

```js
// toaster.js
export default () => ({
  id: 'toaster',
  init: (deck) => {
    deck.addKeyBinding({ keyCode: 84, key: 'T' }, () => {
      deck.shuffle();
      console.log('🍻');
    });
  },
});
```

## Registering a Plugin

Plugins are registered by including them in the `plugins` array of the [config options](/config/). You can also register a plugin at runtime using `Reveal.registerPlugin( Plugin )`.

```js
import Reveal from 'dist/reveal.esm.js';
import Toaster from 'toaster.js';

Reveal.initialize({
  plugins: [Toaster],
});
```

### Async Plugins

If your plugin needs to run asynchronous code before reveal.js finishes initializing it can return a Promise. Here's an example plugin that will delay initialization for three seconds.

```js
let WaitForIt = {
  id: 'wait-for-it',
  init: (deck) => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  },
};

Reveal.initialize({ plugins: [WaitForIt] }).then(() => {
  console.log('Three seconds later...');
});
```
````

## src/overview.md

- Characters: 890
- Tokens: 0

````markdown
---
id: overview
title: Overview
layout: default
---

# Overview Mode

Press the »ESC« or »O« keys to toggle the overview mode on and off. While you're in this mode, you can still navigate between slides, as if you were at 1,000 feet above your presentation.

<picture><img src="/images/docs/overview.png" alt="Slide layout with vertical slides"></picture>

## API

You can use the `toggleOverview()` API method to activate or deactivate the overview mode from JavaScript.

```js
// Switch to the opposite of the current state
Reveal.toggleOverview();

// Activate the overview mode
Reveal.toggleOverview(true);

// Deactivate the overview mode
Reveal.toggleOverview(false);
```

## Events

We fire events when the overview mode is activated and deactivated.

```javascript
Reveal.on('overviewshown', (event) => {
  /* ... */
});
Reveal.on('overviewhidden', (event) => {
  /* ... */
});
```
````

## src/presentation-state.md

- Characters: 703
- Tokens: 0

````markdown
---
id: presentation-state
title: Presentation State
layout: default
---

# Presentation State

The presentation's current state can be fetched by using the `getState` method. A state object contains all of the information required to put the presentation back as it was when `getState` was first called. Sort of like a snapshot. It's a simple object that can easily be stringified and persisted or sent over the wire.

```javascript
// Move to slide 1
Reveal.slide(1);

let state = Reveal.getState();
// {indexh: 1, indexv: 0, indexf: undefined, paused: false, overview: false}

// Move to slide 3
Reveal.slide(3);

// This restores the saved state, placing on slide 1 again
Reveal.setState(state);
```
````

## src/initialization.md

- Characters: 3657
- Tokens: 0

````markdown
---
id: initialization
title: Initialization
layout: default
---

# Initialization

The most common reveal.js use case is to have a single presentation which covers the full viewport. As of 4.0 we also support running [multiple presentations](#multiple-presentations) in parallel on the same page as well as including the library as an [ES module](#es-module).

If you only have a single presentation on the page we recommend initializing reveal.js using the global `Reveal` object. The `Reveal.initialize` method accepts one argument; a reveal.js [config object](/config/).

```html
<script src="dist/reveal.js"></script>
<script>
  Reveal.initialize({ transition: 'none' });
</script>
```

The `initialize` method returns a promise which will resolve as soon as the presentation is ready and can be interacted with via the API.

```js
Reveal.initialize().then(() => {
  // reveal.js is ready
});
```

## Multiple Presentations <span class="r-version-badge new">4.0.0</span> {id="multiple-presentations"}

To run multiple presentations side-by-side on the same page you can create instances of the `Reveal` class. The `Reveal` constructor accepts two arguments; the `.reveal` HTML element root of the presentation and an optional [config object](/config/).

Note that you will also need to set the [embedded](/presentation-size/#embedded) config option to true. This flag makes the presentations size themselves according to their `.reveal` root element size, rather than the browser viewport. You will also need to manually define the `width` and `height` CSS properties for each `.reveal .deck*` element in order to see them appear.

By default reveal.js will capture all keyboard events in the document. For embedded presentations we recommend initializing with `keyboardCondition: 'focused'` so that keyboard events are only captured when the presentation has been focused by the viewer.

```html
<div class="reveal deck1">...</div>
<div class="reveal deck2">...</div>

<script src="dist/reveal.js"></script>
<script>
  let deck1 = new Reveal(document.querySelector('.deck1'), {
    embedded: true,
    keyboardCondition: 'focused', // only react to keys when focused
  });
  deck1.initialize();

  let deck2 = new Reveal(document.querySelector('.deck2'), {
    embedded: true,
  });
  deck2.initialize();
</script>
```

## ES Module <span class="r-version-badge new">4.0.0</span> {id="es-module"}

We provide two JavaScript bundles depending your use case. Our default presentation boilerplate uses `dist/reveal.js` which has broad cross browser support (ES5) and exposes Reveal to the global window (UMD).

The second bundle is `dist/reveal.esm.js` which makes it possible to import reveal.js as an ES module. This version can be used either directly in the browser with `<script type="module">` or bundled in your own build process.

Here's how to import and initialize the ES module version of reveal.js as well as the Markdown plugin:

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

If you're [installing reveal.js from npm](/installation/#installing-from-npm) and bundling it you should be able to use:

```js
import Reveal from 'reveal.js';
Reveal.initialize();
```

## Uninitializing reveal.js <span class="r-version-badge new">4.3.0</span> {id="destroy"}

If you want to uninitialize reveal.js you can use the `destroy` API method. This will undo all changes that the framework has made to the DOM, remove all event listeners and unregister/destroy all plugins.

```js
Reveal.destroy();
```
````

## src/api.md

- Characters: 3793
- Tokens: 0

````markdown
---
id: methods
title: API Methods
layout: default
---

# API

We provide an extensive JavaScript API for controlling navigation and checking the current state of a presentation. If you're working with a single presentation instance the API can be accessed via the global `Reveal` object.

### Navigation

```javascript
// Navigate to a specific slide
Reveal.slide(indexh, indexv, indexf);

// Relative navigation
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();

// Fragment navigation
Reveal.navigateFragment(indexf); // (-1 means all fragments are invisible)
Reveal.prevFragment();
Reveal.nextFragment();

// Checks which directions we can navigate towards
// {top: false, right: true, bottom: false, left: false}
Reveal.availableRoutes();

// Checks which fragment directions we can navigate towards
// {prev: false, next: true}
Reveal.availableFragments();
```

### Misc

```javascript
// Call this if you add or remove slides to update controls, progress, etc
Reveal.sync();
// Call this to sync just one slide
Reveal.syncSlide((slide = currentSlide));
// Call this to sync just one slide's fragments
Reveal.syncFragments((slide = currentSlide));

// Call this to update the presentation scale based on available viewport
Reveal.layout();

// Randomize the order of slides
Reveal.shuffle();

// Returns the present configuration options
Reveal.getConfig();

// Fetch the current scale of the presentation
Reveal.getScale();

// Returns an object with the scaled presentationWidth & presentationHeight
Reveal.getComputedSlideSize();

Reveal.getIndices((slide = currentSlide)); // Coordinates of the slide (e.g. { h: 0, v: 0, f: 0 })
Reveal.getProgress(); // (0 == first slide, 1 == last slide)

// Array of key:value maps of the attributes of each slide in the deck
Reveal.getSlidesAttributes();

// Returns the slide background element at the specified index
Reveal.getSlideBackground(indexh, indexv);

// Returns the speaker notes for the slide
Reveal.getSlideNotes((slide = currentSlide));

// Retrieves query string as a key:value map
Reveal.getQueryHash();

// Returns the path to the slide as represented in the URL
Reveal.getSlidePath((slide = currentSlide));
```

### Slides

```javascript
// Returns the slide element matching the specified index
Reveal.getSlide(indexh, indexv);

// Retrieves the previous and current slide elements
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

// Returns an all horizontal/vertical slides in the deck
Reveal.getHorizontalSlides();
Reveal.getVerticalSlides();

// Total number of slides
Reveal.getTotalSlides();
Reveal.getSlidePastCount();

// Array of all slides
Reveal.getSlides();
```

### Slide State

```javascript
// Checks if the presentation contains two or more
// horizontal/vertical slides
Reveal.hasHorizontalSlides();
Reveal.hasVerticalSlides();

// Checks if the deck has navigated on either axis at least once
Reveal.hasNavigatedHorizontally();
Reveal.hasNavigatedVertically();

Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isVerticalSlide();
Reveal.isLastVerticalSlide();
```

### Modes

```javascript
// Shows a help overlay with keyboard shortcuts, optionally pass true/false
// to force on/off
Reveal.toggleHelp();

// Toggle presentation states, optionally pass true/false to force on/off
Reveal.toggleOverview();
Reveal.toggleAutoSlide();
Reveal.togglePause();

Reveal.isOverview();
Reveal.isAutoSliding();
Reveal.isPaused();
```

### DOM Elements

```javascript
// Retrieve key DOM elements
Reveal.getRevealElement(); // <div class="reveal">
Reveal.getSlidesElement(); // <div class="slides">
Reveal.getViewportElement(); // <div class="reveal-viewport">
Reveal.getBackgroundsElement(); // <div class="backgrounds">
```

## More Reading

- [Plugin API](/plugins/#api)
````

## src/transitions.md

- Characters: 2945
- Tokens: 0

````markdown
---
id: transitions
title: Transitions
layout: default
---

# Transitions

When navigating a presentation, we transition between slides by animating them from right to left by default. This transition can be changed by setting the `transition` config option to a valid [transition style](#styles). Transitions can also be overridden for a specific slide using the `data-transition` attribute.

```html
<section data-transition="zoom">
  <h2>This slide will override the presentation transition and zoom!</h2>
</section>

<section data-transition-speed="fast">
  <h2>Choose from three transition speeds: default, fast or slow!</h2>
</section>
```

## Styles

This is a complete list of all available transition styles. They work for both slides and slide backgrounds.

| Name    | Effect                                                                   |
| :------ | :----------------------------------------------------------------------- |
| none    | Switch backgrounds instantly                                             |
| fade    | Cross fade — _default for background transitions_                        |
| slide   | Slide between backgrounds — _default for slide transitions_              |
| convex  | Slide at a convex angle                                                  |
| concave | Slide at a concave angle                                                 |
| zoom    | Scale the incoming slide up so it grows in from the center of the screen |

{.key-value}

## Separate In-Out Transitions

You can also use different in and out transitions for the same slide by appending `-in` or `-out` to the transition name.

```html
<section data-transition="slide">The train goes on …</section>
<section data-transition="slide">and on …</section>
<section data-transition="slide-in fade-out">and stops.</section>
<section data-transition="fade-in slide-out">
  (Passengers entering and leaving)
</section>
<section data-transition="slide">And it starts again.</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-transition="slide">
        The train goes on …
    </section>
    <section data-transition="slide">
        and on …
    </section>
    <section data-transition="slide-in fade-out">
        and stops.
    </section>
    <section data-transition="fade-in slide-out">
        (Passengers entering and leaving)
    </section>
    <section data-transition="slide">
        And it starts again.
    </section>
  </div>
</div>

## Background Transitions

We transition between slide backgrounds using a cross fade by default. This can be changed on a global level or overridden for specific slides. To change background transitions for all slides, use the `backgroundTransition` config option.

```js
Reveal.initialize({
  backgroundTransition: 'slide',
});
```

Alternatively you can use the `data-background-transition` attribute on any `<section>` to override that specific transition.
````

## src/scroll-view.md

- Characters: 6186
- Tokens: 0

````markdown
---
id: scroll-view
title: Scroll View
layout: default
---

# Scroll View <span class="r-version-badge new">5.0.0</span>

As of reveal.js 5.0 any presentation can be viewed as a scrollable page. All of your animations, fragments and other features continue to work just like they do in the normal slide view.

Slide decks are a great format for giving presentations, but scrollable web pages are easier for viewers to read on their own.

The scroll view gives you the best of both worlds—without any extra effort. Present in the format best suited for presenting, share in the format best suited for consumption.

### What About Vertical Slides?

The scroll view flattens your deck into a single linear flow. All slides will appear in the order they were authored and there is no differentiation between horizontal and [vertical slides](/vertical-slides).

### Getting Started

The scroll view is activated by initializing reveal.js with `view: "scroll"`. Here's a demo of it in action.

```js
Reveal.initialize({
  // Activate the scroll view
  view: 'scroll',

  // Force the scrollbar to remain visible
  scrollProgress: true,
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "scrollProgress": true}'>
  <div class="slides">
    <section>
      <h2>Scroll me!</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide with two fragments</h2>
      <h2 class="fragment fade-left">One</h2>
      <h2 class="fragment fade-left">Two</h2>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">Scrolling is even better</h2>
        <div data-id="box-1" style="position: absolute; top: 100%; left: 50%; width: 40px; height: 40px; background-color: indigo;"></div>
      </div>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">Scrolling is even better</h2>
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">with auto-animate!</h2>
        <div data-id="box-1" style="position: absolute; top: -20px; left: 0; width: 100%; height: 180px; background-color: indigo;"></div>
      </div>
    </section>
    <section><h2>The end</h2></section>
  </div>
</div>

## URL Activation

Want to enable scrolling for a deck without changing its config? Edit the URL and append `view=scroll` to the query string. For example, here's the main reveal.js demo in scroll view:  
<https://revealjs.com/demo/?view=scroll>

## Automatic Activation

The scroll view is great when browsing presentations on a mobile device. For that reason, we automatically enable the scroll view when the viewport reaches mobile widths.

This is controlled through the `scrollActivationWidth` config value. If you want to disable the automatic scroll view initialize your presentation with that value set to `null` or `0`:

```js
Reveal.initialize({
  scrollActivationWidth: null,
});
```

## Scrollbar

We render a custom scrollbar for any presentation in scroll view. This scrollbar is broken up by slide so that users get a clear indication of when the slide will change.

The scrollbar also shows individual fragments within your slides. Slides with fragments are given more vertical space based on how many fragments there are.

By default, the scrollbar is automatically hidden when you stop scrolling. This behavior can be configured using `scrollProgress`.

```js
// - auto:     Show the scrollbar while scrolling, hide while idle
// - true:     Always show the scrollbar
// - false:    Never show the scrollbar
scrollProgress: 'auto';
```

## Scroll Snapping

When scrolling reveal.js will automatically snap to the closest slide. This was picked as the default behavior because it's very comfortable to "flick" between slides this way on touch devices.

If you prefer, you can change it to only snap when you're close to the top of a slide using `proximity`. You can also disable snapping altogether by setting `scrollSnap` to `false`.

```js
// - false:      No snapping, scrolling is continuous
// - proximity:  Snap when close to a slide
// - mandatory:  Always snap to the closest slide
scrollSnap: 'mandatory';
```

## Scroll Layout (experimental)

By default each slide will be sized to be as tall as the viewport. This looks great in most circumstances but can mean a bit of empty space above and below your slides (depending on the viewport and slide deck aspect ratio).

If you prefer a more dense layout with multiple slides visible in parallel, set the `scrollLayout` option to `compact`. This will size each slide to be as wide as the viewport and as tall as it needs to match your aspect ratio (slide width/height).

You can see the different between the two modes in the examples below. Starting with the compact layout.

```js
Reveal.initialize({
  view: 'scroll'
  scrollLayout: 'compact'
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "compact"}'>
  <div class="slides">
    <section>
      <h2>Slide one</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide two</h2>
    </section>
    <section data-background="salmon">
      <h2>Slide three</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide four</h2>
    </section>
  </div>
</div>

Here's the same content with `scrollLayout` set to the default (`'full'`).

```js
Reveal.initialize({
  view: 'scroll'
  scrollLayout: 'full' // this is the default value
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "full"}'>
  <div class="slides">
    <section>
      <h2>Slide one</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide two</h2>
    </section>
    <section data-background="salmon">
      <h2>Slide three</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide four</h2>
    </section>
  </div>
</div>

## Examples

If you're looking for examples of scrollable reveal.js decks here's a great one: https://slides.com/news/scroll-mode/scroll
````

## src/404.njk

- Characters: 268
- Tokens: 0

```text
---
id: 404
layout: default
permalink: 404.html
hidden: true
title: Oops!
---

<div class="content mb-6">
  <h1>{{ title }}</h1>
  <p>Sorry, we can't find that page.</p>
</div>
<iframe class="w-full" style="height: 70vh;" src="https://lab.hakim.se/fullstack"></iframe>
```

## src/keyboard.md

- Characters: 2150
- Tokens: 0

````markdown
---
id: keyboard
title: Keyboard
layout: default
---

# Keyboard Bindings

If you're unhappy with any of the default keyboard bindings you can override them using the `keyboard` config option.

```javascript/1-5
Reveal.configure({
  keyboard: {
    27: () => { console.log('esc') }, // do something custom when ESC is pressed
    13: 'next', // go to the next slide when the ENTER key is pressed
    32: null // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
  }
});
```

The keyboard object is a map of key codes and their corresponding _action_. The action can be of three different types.

| Type     | Action                                                     |
| :------- | :--------------------------------------------------------- |
| Function | Triggers a callback function.                              |
| String   | Calls the given method name in the [reveal.js API](/api/). |
| null     | Disables the key (blocks the default reveal.js action)     |

{.key-value}

## Adding Keyboard Bindings via JavaScript

Custom key bindings can also be added and removed using Javascript. Custom key bindings will override the default keyboard bindings, but will in turn be overridden by the user defined bindings in the `keyboard` config option.

```javascript
Reveal.addKeyBinding(binding, callback);
Reveal.removeKeyBinding(keyCode);
```

For example

```javascript
// The binding parameter provides the following properties
//      keyCode: the keycode for binding to the callback
//          key: the key label to show in the help overlay
//  description: the description of the action to show in the help overlay
Reveal.addKeyBinding(
  { keyCode: 84, key: 'T', description: 'Start timer' },
  () => {
    // start timer
  }
);

// The binding parameter can also be a direct keycode without providing the help description
Reveal.addKeyBinding(82, () => {
  // reset timer
});
```

This allows plugins to add key bindings directly to Reveal so they can:

- Make use of Reveal's pre-processing logic for key handling (for example, ignoring key presses when paused)
- Be included in the help overlay (optional)
````

## src/lightbox.md

- Characters: 4517
- Tokens: 0

````markdown
---
id: lightbox
title: Lightbox
layout: default
---

# Lightbox <span class="r-version-badge new">5.2.0</span>

A lightbox is a modal that displays an image or video in a full-screen overlay. It's great for things like clicking on thumbnails to view a larger [image](#image-lightbox) or [video](#video-lightbox).

## Image Lightbox

The simplest way to trigger a lightbox in reveal.js is to add the `data-preview-image` attribute to an `img` tag. Clicking on the image below, will open the same image in an overlay.

```html
<img src="reveal.png" data-preview-image>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image width="400px">
    </section>
  </div>
</div>

Lightboxes aren't limited to opening the image src. You can open any image you like by assigning a value to the `data-preview-image` attribute.

```html
<img src="reveal.png" data-preview-image="mastering.svg">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-image="/images/docs/mastering.svg" width="400px">
    </section>
  </div>
</div>


## Video Lightbox

Video lightboxes work the same way as image lightboxes except you use the `data-preview-video` attribute instead.

```html
<video src="video.mp4" data-preview-video></video>
<img src="reveal.png" data-preview-video="video.mp4">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-hstack" style="gap: 40px;">
        <video src="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" data-preview-video width="400px"></video>
        <img src="/images/logo/reveal-black-text-sticker.png" data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" width="400px">
      </div>
    </section>
  </div>
</div>

## Lightbox Media Size
The sizing of media in the lightbox can be controlled using the `data-preview-fit` attribute. The following fit modes are supported:

| Value                | Effect                                                                   |
| :------------------- | :----------------------------------------------------------------------- |
| scale-down (default) | Scale media down if needed to fit in the lightbox.                       |
| contain              | Scale media up and down to fit the lightbox without cropping.            |
| cover                | Scale media to cover the entire lightbox, even if some of it is cut off. |
```html
<img src="reveal.png" data-preview-image data-preview-fit="cover">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-white-text.svg" data-preview-image data-preview-fit="cover" width="400px">
    </section>
  </div>
</div>

## Works on Any Element

Note that the lightbox feature works on any element, not just images and videos. For example, you can trigger an image or video lightbox from clicking a button or link.

```html
<a data-preview-image="image.png">📸 Open Logo</a>
<button data-preview-video="video.mp4">🎥 Open Video</button>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a data-preview-image="/images/logo/reveal-black-text-sticker.png">📸 Open Logo</a>
      <br/>
      <br/>
      <button data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4">🎥 Open Video</button>
    </section>
  </div>
</div>

## Iframe Lightbox

It's possible to preview links in iframe lightboxes using the `data-preview-link` attribute. When this attribute is added to an `<a>` tag, reveal.js will automatically open the link's `href` in an iframe.

If you want to open an iframe lightbox from another element, you can set the iframe source as a value to the `data-preview-link` attribute.

```html
<a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
<img src="reveal.png" data-preview-link="https://hakim.se">
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
      <br />
      <br />
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-link="https://hakim.se" width="400px">
    </section>
  </div>
</div>

Note that this will only work if the link allows for embedding. Many websites prevent embedding via `x-frame-options` or `Content-Security-Policy`.
````

## src/fragments.md

- Characters: 5845
- Tokens: 0

````markdown
---
id: fragments
title: Fragments
layout: default
---

# Fragments

Fragments are used to highlight or incrementally reveal individual elements on a slide. Every element with the class `fragment` will be stepped through before moving on to the next slide.

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment.

```html
<p class="fragment">Fade in</p>
<p class="fragment fade-out">Fade out</p>
<p class="fragment highlight-red">Highlight red</p>
<p class="fragment fade-in-then-out">Fade in, then out</p>
<p class="fragment fade-up">Slide up while fading in</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment">Fade in</p>
      <p class="fragment fade-out">Fade out</p>
      <p class="fragment highlight-red">Highlight red</p>
      <p class="fragment fade-in-then-out">Fade in, then out</p>
      <p class="fragment fade-up">Slide up while fading in</p>
    </section>
  </div>
</div>

| Name                    | Effect                                              |
| :---------------------- | :-------------------------------------------------- |
| fade-out                | Start visible, fade out                             |
| fade-up                 | Slide up while fading in                            |
| fade-down               | Slide down while fading in                          |
| fade-left               | Slide left while fading in                          |
| fade-right              | Slide right while fading in                         |
| fade-in-then-out        | Fades in, then out on the next step                 |
| current-visible         | Fades in, then out on the next step                 |
| fade-in-then-semi-out   | Fades in, then to 50% on the next step              |
| grow                    | Scale up                                            |
| semi-fade-out           | Fade out to 50%                                     |
| shrink                  | Scale down                                          |
| strike                  | Strike through                                      |
| highlight-red           | Turn text red                                       |
| highlight-green         | Turn text green                                     |
| highlight-blue          | Turn text blue                                      |
| highlight-current-red   | Turn text red, then back to original on next step   |
| highlight-current-green | Turn text green, then back to original on next step |
| highlight-current-blue  | Turn text blue, then back to original on next step  |

{.key-value}

## Custom Fragments <span class="r-version-badge new">4.5.0</span>

Custom effects can be implemented by defining CSS styles for `.fragment.effectname` and `.fragment.effectname.visible` respectively. The `visible` class is added to each fragment as they are stepped through in the presentation.

For example, the following defines a fragment style where elements are initially blurred but become focused when stepped through.

```html
<style>
  .fragment.blur {
    filter: blur(5px);
  }
  .fragment.blur.visible {
    filter: none;
  }
</style>
<section>
  <p class="fragment custom blur">One</p>
  <p class="fragment custom blur">Two</p>
  <p class="fragment custom blur">Three</p>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <style>
      .fragment.blur {
        filter: blur(5px);
      }
      .fragment.blur.visible {
        filter: none;
      }
    </style>
    <section>
      <p class="fragment custom blur">One</p>
      <p class="fragment custom blur">Two</p>
      <p class="fragment custom blur">Three</p>
    </section>
  </div>
</div>

Note that we are adding a `custom` class to each fragment. This tells reveal.js to avoid applying its default fade-in fragment styles.

If you want all elements to remain blurred except the current fragment, you can substitute `visible` for `current-fragment`.

```css
.fragment.blur.current-fragment {
  filter: none;
}
```

## Nested Fragments

Multiple fragments can be applied to the same element sequentially by wrapping it, this will fade in the text on the first step, turn it red on the second and fade out on the third.

```html
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out"> Fade in > Turn red > Fade out </span>
  </span>
</span>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <span class="fragment fade-in">
        <span class="fragment highlight-red">
          <span class="fragment fade-out">
            Fade in > Turn red > Fade out
          </span>
        </span>
      </span>
    </section>
  </div>
</div>

## Fragment Order

By default fragments will be stepped through in the order that they appear in the DOM. This display order can be changed using the `data-fragment-index` attribute. Note that multiple elements can appear at the same index.

```html
<p class="fragment" data-fragment-index="3">Appears last</p>
<p class="fragment" data-fragment-index="1">Appears first</p>
<p class="fragment" data-fragment-index="2">Appears second</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment" data-fragment-index="3">Appears last</p>
      <p class="fragment" data-fragment-index="1">Appears first</p>
      <p class="fragment" data-fragment-index="2">Appears second</p>
    </section>
  </div>
</div>

## Events

When a fragment is either shown or hidden reveal.js will dispatch an event.

```javascript
Reveal.on('fragmentshown', (event) => {
  // event.fragment = the fragment DOM element
});
Reveal.on('fragmenthidden', (event) => {
  // event.fragment = the fragment DOM element
});
```
````

## src/presentation-size.md

- Characters: 2282
- Tokens: 0

````markdown
---
id: presentation-size
title: Presentation Size
layout: default
---

# Presentation Size

All presentations have a "normal" size, that is, the resolution at which they are authored. reveal.js will automatically scale presentations uniformly based on the normal size to ensure that everything fits on any given display or viewport without changing the aspect ratio or layout of your content.

See below for a list of [config options](/config/) related to sizing, including their default values:

```javascript
Reveal.initialize({
  // The "normal" size of the presentation, aspect ratio will
  // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around
  // the content
  margin: 0.04,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0,
});
```

## Center

Slides are vertically centered on the screen based on how much content they contain. To disable this and leave slides fixed at their configured height set `center` to `false`.

```js
Reveal.initialize({ center: false });
```

## Embedded

By default, reveal.js will assume that it should cover the full browser viewport. If you want to embed your presentation within a smaller portion of a web page, or show [multiple presentations](/initialization/#multiple-presentations) on the same page, you can use the `embedded` [config option](/config/).

```js
Reveal.initialize({ embedded: false });
```

An embedded presentation will base its size on the dimensions of its `.reveal` root. If the size of that element changes from a source other than the window `resize` event, you can call `Reveal.layout()` to manually trigger a layout update.

```js
// Change the size of our presentation
document.querySelector('.reveal').style.width = '50vw';

// Make reveal.js aware of the size change
Reveal.layout();
```

## BYOL

If you want disable the built-in scaling and centering and Bring Your Own Layout, set `disableLayout: true`. That will make your slides cover 100% of the available page width and height and leave the responsive styling up to you.

```javascript
Reveal.initialize({
  disableLayout: false,
});
```
````

## src/pdf-export.md

- Characters: 2519
- Tokens: 0

````markdown
---
id: pdf-export
title: PDF Export
layout: default
---

# PDF Export

Presentations can be exported to PDF via a special print stylesheet. Here's an example of an exported presentation that's been uploaded to SlideShare: https://slideshare.net/hakimel/revealjs-300.

Note: This feature has only been confirmed to work in [Google Chrome](https://google.com/chrome) and [Chromium](https://www.chromium.org/Home).

## Instructions

1. Open your presentation with `print-pdf` included in the query string, for example: `http://localhost:8000/?print-pdf`. You can test this at [revealjs.com/demo?print-pdf](/demo/?print-pdf).
1. Open the in-browser print dialog (CTRL/CMD+P).
1. Change the **Destination** setting to **Save as PDF**.
1. Change the **Layout** to **Landscape**.
1. Change the **Margins** to **None**.
1. Enable the **Background graphics** option.
1. Click **Save** 🎉

![Chrome Print Settings](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings-2.png)

## Speaker Notes

Your [speaker notes](/speaker-view/) can be included in the PDF export by enabling the `showNotes`.

```js
Reveal.configure({ showNotes: true });
```

Notes are printed in an overlay box on top of the slide. If you'd rather print them on a separate page, after the slide, set `showNotes` to `"separate-page"`.

```js
Reveal.configure({ showNotes: 'separate-page' });
```

## Page Numbers

If you want to number printed pages, make sure to enable [slide numbers](/slide-numbers/).

## Page Size

Export dimensions are inferred from the configured [presentation size](/presentation-size/). Slides that are too tall to fit within a single page will expand onto multiple pages. You can limit how many pages a slide may expand to using the `pdfMaxPagesPerSlide` config option. For example, to ensures that no slide ever grows to more than one printed page you can set it to 1.

```js
Reveal.configure({ pdfMaxPagesPerSlide: 1 });
```

## Separate Pages for Fragments

[Fragments](/fragments/) are printed on separate slides by default. Meaning if you have a slide with three fragment steps, it will generate three separate slides where the fragments appear incrementally.

If you prefer printing all fragments in their visible states on the same slide you can use the `pdfSeparateFragments` config option.

```js
Reveal.configure({ pdfSeparateFragments: false });
```

## Alternative Ways to Export

You can also use [decktape](https://github.com/astefanutti/decktape) to convert your presentation to PDF via the command line.
````

## src/math.md

- Characters: 5660
- Tokens: 0

````markdown
---
id: math
title: Math
layout: default
---

# Math

The Math plugin lets you include beautifully typeset math formulas in your slides. To get started, make sure that reveal.js is initialized with the math plugin enabled.

```html
<script src="plugin/math/math.js"></script>
<script>
  Reveal.initialize({ plugins: [RevealMath.KaTeX] });
</script>
```

We're using the KaTeX typesetter in this example but you can also choose from [MathJax 2](#mathjax-2) or [3](#mathjax-3-4.2.0).

Now that the plugin is registered we can start adding [LaTeX](https://en.wikipedia.org/wiki/LaTeX) formulas to our slides.

```html
<section>
  <h2>The Lorenz Equations</h2>
  \[\begin{aligned} \dot{x} &amp; = \sigma(y-x) \\ \dot{y} &amp; = \rho x - y -
  xz \\ \dot{z} &amp; = -\beta z + xy \end{aligned} \]
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>The Lorenz Equations</h2>
      \[\begin{aligned}
      \dot{x} &amp; = \sigma(y-x) \\
      \dot{y} &amp; = \rho x - y - xz \\
      \dot{z} &amp; = -\beta z + xy
      \end{aligned} \]
    </section>
  </div>
</div>

## Markdown

To include math inside of a presentation written in Markdown, wrap the equation using one the available math delimiters like `$$`:

```html
<section data-markdown>$$ J(\theta_0,\theta_1) = \sum_{i=0} $$</section>
```

## Typesetting Libraries

The math plugin offers three choices of math typesetting libraries that you can use to render your math. Each variant is its own plugin that can be accessed via `RevealMath.<Variant>`. If you don't have a preference, we recommend going with KaTeX.

| Library                                               | Plugin Name         | Config Property              |
| :---------------------------------------------------- | :------------------ | :--------------------------- |
| [KaTeX](https://katex.org/)                           | RevealMath.KaTeX    | [katex](#katex-4.2.0)        |
| [MathJax 2](https://docs.mathjax.org/en/v2.7-latest/) | RevealMath.MathJax2 | [mathjax2](#mathjax-2)       |
| [MathJax 3](https://www.mathjax.org/)                 | RevealMath.MathJax3 | [mathjax3](#mathjax-3-4.2.0) |

{.full-width}

### KaTeX <span class="r-version-badge new">4.2.0</span>

Adjust options through the `katex` configuration object. Below is how the plugin is configured by default. If you don't intend to change these values you do not need to include the `katex` config option at all.

```js
Reveal.initialize({
  katex: {
    version: 'latest',
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
  },
  plugins: [RevealMath.KaTeX],
});
```

Note that by default the latest KaTeX is loaded from a remote server (https://cdn.jsdelivr.net/npm/katex). To use a fixed version set `version` to, for example, `0.13.18`.

If you want to use KaTeX offline you'll need to download a copy of the library (e.g. with npm) and use the `local` configuration option (the `version` option will then be ignored), for example:

```js
Reveal.initialize({
  katex: {
    local: 'node_modules/katex',
  },
  plugins: [RevealMath.KaTeX],
});
```

### MathJax 2

Adjust options through the `mathjax2` configuration object. Below is how the plugin is configured by default. If you don't intend to change these values you do not need to include the `mathjax2` config option at all.

```js
Reveal.initialize({
  mathjax2: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    // pass other options into `MathJax.Hub.Config()`
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    },
  },
  plugins: [RevealMath.MathJax2],
});
```

Note that the latest MathJax 2 is loaded from a remote server. To use a fixed version set mathjax to, for example, https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js.

If you want to use MathJax offline you'll need to download a copy of the library (e.g. with npm) and point `mathjax` to the local copy.

### MathJax 3 <span class="r-version-badge new">4.2.0</span>

Adjust options through the `mathjax3` configuration object. Below is how the plugin is configured by default. If you don't intend to change these values you do not need to include the `mathjax3` config option at all.

```js
Reveal.initialize({
  mathjax3: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    tex: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    },
  },
  plugins: [RevealMath.MathJax3],
});
```

Note that the latest MathJax 3 is loaded from a remote server. To use a fixed version set `mathjax` to, for example, <https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js>. Additionally, the config is now part of of the url, by default `tex-mml-chtml` is loaded which recognizes mathematics in both TeX and MathML notation, and generates output using HTML with CSS (the CommonHTML output format). This is one of the most general configurations, but it is also one of the largest, so you might want to consider a smaller one that is more tailored to your needs, e.g. `tex-svg`.

If you want to use MathJax offline you'll need to download a copy of the library (e.g. with npm) and adjust `mathjax` accordingly.
````

## src/_layouts/home.njk

- Characters: 2232
- Tokens: 0

```text
<!doctype html>
<html lang="{{ locale }}" dir="{{ dir }}" class="text-sm sm:text-base">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>{{ title }} | {{ site.name }}</title>
    <meta name="description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">

    <link rel="stylesheet" href="/main.css{{ helpers.assetSuffix }}">

    {% include "meta.njk" %}

    <link rel="icon" type="image/svg+xml" href="{{ site.images.favicon }}">

    <link rel="canonical" href="{{ site.url }}{{ page.url }}">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.onload=null;this.removeAttribute('media');" rel="stylesheet" data-application-font="inter">
    <noscript>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" data-application-font="inter">
    </noscript>
</head>

<body data-page="{{ id }}" class="text-gray-900 leading-normal bg-gray-100">

    <section id="demo" class="reveal-demo overflow-hidden outline-none text-center" tabindex="-1">
        {% if locale %}
         {% include "demo."+locale+".html" %}
        {% else %}
        {% include "demo.html" %}
        {% endif %}
        {#
        <a class="homepage-promotion" href="/course">
            Become a pro in the reveal.js video course <span>Learn more</span>
        </a>
        #}
    </section>
    {% include "header.njk" %}

    <div class="w-full max-w-screen-xl mx-auto px-6 relative">

        <div class="lg:flex -mx-6">
            {% include "sidebar.njk" %}
            <main class="main py-24 w-full min-h-screen pt-8 lg:static lg:max-h-full lg:overflow-visible lg:w-3/5">
                <article class="article flex flex-1 flex-col focus:outline-none w-full max-w-6xl ml-auto mr-auto px-6" tabindex="-1">
                    {{ content | safe }}
                </article>
                {% include "footer.njk" %}
            </main>
            {% include "extras.njk" %}
        </div>

    </div>

    <script src="/main.js{{ helpers.assetSuffix }}" defer></script>

</body>
</html>
```

## src/_layouts/default.njk

- Characters: 1810
- Tokens: 0

```text
<!doctype html>
<html lang="{{ locale }}" dir="{{ dir }}" class="logo-visible text-sm sm:text-base">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>{{ title }} | {{ site.name }}</title>
    <meta name="description" content="{% if description %}{{ description }}{% else %}{{ excerpt }}{% endif %}">

    <link rel="stylesheet" href="/main.css{{ helpers.assetSuffix }}">

    {% include "meta.njk" %}

    <link rel="icon" type="image/svg+xml" href="{{ site.images.favicon }}">

    <link rel="canonical" href="{{ site.url }}{{ page.url }}">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.onload=null;this.removeAttribute('media');" rel="stylesheet" data-application-font="inter">
    <noscript>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" data-application-font="inter">
    </noscript>
</head>

<body data-page="{{ id }}" class="text-gray-900 leading-7 bg-gray-100">

    {% include "header.njk" %}

    <div class="w-full max-w-screen-xl mx-auto px-6 relative">

        <div class="lg:flex -mx-6">
            {% include "sidebar.njk" %}
            <main class="main py-24 w-full min-h-screen lg:static lg:max-h-full lg:overflow-visible lg:w-3/5">
                <article class="article flex flex-1 flex-col focus:outline-none w-full max-w-6xl ml-auto mr-auto px-6" tabindex="-1">
                    {{ content | safe }}
                </article>
                {% include "footer.njk" %}
            </main>
            {% include "extras.njk" %}
        </div>

    </div>

    <script src="/main.js{{ helpers.assetSuffix }}" defer></script>

</body>
</html>
```

## src/config.md

- Characters: 9404
- Tokens: 0

````markdown
---
id: config
title: Config
layout: default
---

# Configuration Options

Presentation behavior can be fine-tuned using a wide array of configuration options. These objects can be included where you [initialize](/initialization/) reveal.js. It's also possible to [change config values at runtime](#reconfiguring).

Note that **all** configuration values are **optional** and will default to the values specified below.

```javascript
Reveal.initialize({
  // Display presentation control arrows
  // - true: Display controls on all screens
  // - false: Hide controls on all screens
  // - "speaker-only": Only display controls in the speaker view
  controls: true,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: true,

  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout: 'bottom-right',

  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows: 'faded',

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  // - true:    Show slide number
  // - false:   Hide slide number
  //
  // Can optionally be set as a string that specifies the number formatting:
  // - "h.v":   Horizontal . vertical slide number (default)
  // - "h/v":   Horizontal / vertical slide number
  // - "c":   Flattened slide number
  // - "c/t":   Flattened slide number / total slides
  //
  // Alternatively, you can provide a function that returns the slide
  // number for the current slide. The function should take in a slide
  // object and return an array with one string [slideNumber] or
  // three strings [n1,delimiter,n2]. See #formatSlideNumber().
  slideNumber: false,

  // Can be used to limit the contexts in which the slide number appears
  // - "all":      Always show the slide number
  // - "print":    Only when printing to PDF
  // - "speaker":  Only in the speaker view
  showSlideNumber: 'all',

  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex: false,

  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: false,

  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges: true,

  // Enable support for jump-to-slide navigation shortcuts
  jumpToSlide: true,

  // Push each slide change to the browser history.  Implies `hash: true`
  history: false,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Optional function that blocks keyboard events when retuning false
  //
  // If you set this to 'focused', we will only capture keyboard events
  // for embedded decks when they are in focus
  keyboardCondition: null,

  // Disables the default reveal.js slide layout (scaling and centering)
  // so that you can use custom CSS layout
  disableLayout: false,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Changes the behavior of our navigation directions.
  //
  // "default"
  // Left/right arrow keys step between horizontal slides, up/down
  // arrow keys step between vertical slides. Space key steps through
  // all slides (both horizontal and vertical).
  //
  // "linear"
  // Removes the up/down arrows. Left/right arrows step through all
  // slides (both horizontal and vertical).
  //
  // "grid"
  // When this is enabled, stepping left/right from a vertical stack
  // to an adjacent vertical stack will land you at the same vertical
  // index.
  //
  // Consider a deck with six slides ordered in two vertical stacks:
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // If you're on slide 1.3 and navigate right, you will normally move
  // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
  // from 1.3 -> 2.3.
  navigationMode: 'default',

  // Randomizes the order of slides each time the presentation loads
  shuffle: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the question-mark
  // key is pressed
  help: true,

  // Flags if it should be possible to pause the presentation (blackout)
  pause: true,

  // Flags if speaker notes should be visible to all viewers
  showNotes: false,

  // Global override for autolaying embedded media (video/audio/iframe)
  // - null:   Media will only autoplay if data-autoplay is present
  // - true:   All media will autoplay, regardless of individual setting
  // - false:  No media will autoplay, regardless of individual setting
  autoPlayMedia: null,

  // Global override for preloading lazy-loaded iframes
  // - null:   Iframes with data-src AND data-preload will be loaded when within
  //           the viewDistance, iframes with only data-src will be loaded when visible
  // - true:   All iframes with data-src will be loaded when within the viewDistance
  // - false:  All iframes with data-src will be loaded only when visible
  preloadIframes: null,

  // Can be used to globally disable auto-animation
  autoAnimate: true,

  // Optionally provide a custom element matcher that will be
  // used to dictate which elements we can animate between.
  autoAnimateMatcher: null,

  // Default settings for our auto-animate transitions, can be
  // overridden per-slide or per-element via data arguments
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,

  // CSS properties that can be auto-animated. Position & scale
  // is matched separately so there's no need to include styles
  // like top/right/bottom/left, width/height or margin.
  autoAnimateStyles: [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset',
  ],

  // Controls automatic progression to the next slide
  // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
  //           is present on the current slide or fragment
  // - 1+:     All slides will progress automatically at the given interval
  // - false:  No auto-sliding, even if data-autoslide is present
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Use this method for navigation when auto-sliding (defaults to navigateNext)
  autoSlideMethod: null,

  // Specify the average time in seconds that you think you will spend
  // presenting each slide. This is used to show a pacing timer in the
  // speaker view
  defaultTiming: null,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Opens links in an iframe preview overlay
  // Add `data-preview-link` and `data-preview-link="false"` to customise each link
  // individually
  previewLinks: false,

  // Exposes the reveal.js API through window.postMessage
  postMessage: true,

  // Dispatches all reveal.js events to the parent window through postMessage
  postMessageEvents: false,

  // Focuses body when page changes visibility to ensure keyboard shortcuts work
  focusBodyOnPageVisibilityChange: true,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed: 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // The maximum number of pages a single slide can expand onto when printing
  // to PDF, unlimited by default
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

  // Prints each fragment on a separate slide
  pdfSeparateFragments: true,

  // Offset used to reduce the height of content within exported PDF pages.
  // This exists to account for environment differences based on how you
  // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
  // on precisely the total height of the document whereas in-browser
  // printing has to end one pixel before.
  pdfPageHeightOffset: -1,

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // Number of slides away from the current that are visible on mobile
  // devices. It is advisable to set this to a lower number than
  // viewDistance in order to save resources.
  mobileViewDistance: 2,

  // The display mode that will be used to show slides
  display: 'block',

  // Hide cursor if inactive
  hideInactiveCursor: true,

  // Time before the cursor is hidden (in ms)
  hideCursorTime: 5000,
});
```

## Reconfiguring

The configuration can be updated after initialization using the `configure` method.

```javascript
// Turn autoSlide off
Reveal.configure({ autoSlide: 0 });

// Start auto-sliding every 5s
Reveal.configure({ autoSlide: 5000 });
```
````

## src/backgrounds.md

- Characters: 7571
- Tokens: 0

````markdown
---
id: backgrounds
title: Backgrounds
layout: default
---

# Slide Backgrounds

Slides are contained within a limited portion of the screen by default to allow them to fit any display and scale uniformly. You can apply full page backgrounds outside of the slide area by adding a `data-background` attribute to your `<section>` elements. Four different types of backgrounds are supported: color, image, video and iframe.

## Color Backgrounds

All CSS color formats are supported, including hex values, keywords, `rgba()` or `hsl()`.

```html/0,3
<section data-background-color="aquamarine">
  <h2>🍦</h2>
</section>
<section data-background-color="rgb(70, 70, 255)">
  <h2>🍰</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-color="aquamarine">
      <h2 style="font-size: 4em;">🍦</h2>
    </section>
    <section data-background-color="rgb(70, 70, 255)">
      <h2 style="font-size: 4em;">🍰</h2>
    </section>
  </div>
</div>

## Gradient Backgrounds

All CSS gradient formats are supported, including `linear-gradient`, `radial-gradient` and `conic-gradient`.

```html/0,3
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
  <h2>🐟</h2>
</section>
<section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
  <h2>🐳</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐟</h2>
    </section>
    <section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐳</h2>
    </section>
  </div>
</div>

## Image Backgrounds

By default, background images are resized to cover the full page. Available options:

| Attribute                | Default <div style="width:80px"></div> | Description                                                                                       |
| :----------------------- | :------------------------------------- | :------------------------------------------------------------------------------------------------ |
| data-background-image    |                                        | URL of the image to show. GIFs restart when the slide opens.                                      |
| data-background-size     | cover                                  | See [background-size](https://developer.mozilla.org/docs/Web/CSS/background-size) on MDN.         |
| data-background-position | center                                 | See [background-position](https://developer.mozilla.org/docs/Web/CSS/background-position) on MDN. |
| data-background-repeat   | no-repeat                              | See [background-repeat](https://developer.mozilla.org/docs/Web/CSS/background-repeat) on MDN.     |
| data-background-opacity  | 1                                      | Opacity of the background image on a 0-1 scale. 0 is transparent and 1 is fully opaque.           |

{.nowrap-1st}

```html/0,3-4
<section data-background-image="http://example.com/image.png">
  <h2>Image</h2>
</section>
<section data-background-image="http://example.com/image.png"
          data-background-size="100px" data-background-repeat="repeat">
  <h2>This background image will be sized to 100px and repeated</h2>
</section>
```

## Video Backgrounds

Automatically plays a full size video behind the slide.

| Attribute                   | Default | Description                                                                             |
| :-------------------------- | :------ | :-------------------------------------------------------------------------------------- |
| data-background-video       |         | A single video source, or a comma separated list of video sources.                      |
| data-background-video-loop  | false   | Flags if the video should play repeatedly.                                              |
| data-background-video-muted | false   | Flags if the audio should be muted.                                                     |
| data-background-size        | cover   | Use `cover` for full screen and some cropping or `contain` for letterboxing.            |
| data-background-opacity     | 1       | Opacity of the background video on a 0-1 scale. 0 is transparent and 1 is fully opaque. |

{.nowrap-1st}

```html/0-1
<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
          data-background-video-loop data-background-video-muted>
  <h2>Video</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" 
          data-background-video-loop data-background-video-muted>
      <h2>Video</h2>
    </section>
  </div>
</div>

## Iframe Backgrounds

Embeds a web page as a slide background that covers 100% of the reveal.js width and height. The iframe is in the background layer, behind your slides, and as such it's not possible to interact with it by default. To make your background interactive, you can add the `data-background-interactive` attribute.

| Attribute                   | Default | Description                                                                                                                                     |
| :-------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| data-background-iframe      |         | URL of the iframe to load                                                                                                                       |
| data-background-interactive | false   | Include this attribute to make it possible to interact with the iframe contents. Enabling this will prevent interaction with the slide content. |

{.nowrap-1st}

```html/0-1
<section data-background-iframe="https://slides.com"
          data-background-interactive>
  <h2>Iframe</h2>
</section>
```

Iframes are lazy-loaded when they become visible. If you'd like to preload iframes ahead of time, you can append a `data-preload` attribute to the slide `<section>`. You can also enable preloading globally for all iframes using the `preloadIframes` configuration option.

## Background Transitions

We'll use a cross fade to transition between slide backgrounds by default. This can be changed using the [`backgroundTransition`](/transitions/#background-transitions) config option.

## Parallax Background

If you want to use a parallax scrolling background, set the first two properties below when initializing reveal.js (the other two are optional).

```javascript/1-11
Reveal.initialize({
  // Parallax background image
  parallaxBackgroundImage: '', // e.g. "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"

  // Parallax background size
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)

  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  parallaxBackgroundHorizontal: 200,
  parallaxBackgroundVertical: 50
});
```

Make sure that the background size is much bigger than screen size to allow for some scrolling. [View example](/demo?parallaxBackgroundImage=https%3A%2F%2Fs3.amazonaws.com%2Fhakim-static%2Freveal-js%2Freveal-parallax-1.jpg&parallaxBackgroundSize=2100px%20900px).
````

## src/jump-to-slide.md

- Characters: 1272
- Tokens: 0

````markdown
---
id: jump-to-slide
title: Jump to Slide
layout: default
---

# Jump to Slide <span class="r-version-badge coming">4.5.0</span>

You can skip ahead to a specific slide using reveal.js' jump-to-slide shortcut. Here's how it works:

1. Press G to activate
2. Type a slide number or id
3. Press Enter to confirm

## Navigating to Slide Number

When jumping to a slide you can either enter numeric value or a string. If you provide a number reveal.js will navigate to the desired slide number. If you type a string, reveal.js will try to locate a slide with a matching `id` and navigate to it.

Here are a couple of examples of different input and their resulting navigation.

| Input   | Result                                                      |
| :------ | :---------------------------------------------------------- |
| 5       | Navigate to slide number 5                                  |
| 6/2     | Navigate to horizontal slide 6, vertical slide 2            |
| the-end | Navigate to a slide with this id (`<section id="the-end">`) |

{.key-value}

## Disable Jump to Slide

Jump to Slide is enabled by default but if you want to turn it off you can set the `jumpToSlide` config value to `false`.

```javascript
Reveal.initialize({
  jumpToSlide: false,
});
```
````

## src/speaker-view.md

- Characters: 3672
- Tokens: 0

````markdown
---
id: speaker-view
title: Speaker View
layout: default
---

# Speaker View

reveal.js comes with a speaker notes plugin which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the »S« key on your keyboard to open the notes window.

A speaker timer starts as soon as the speaker view is opened. You can reset the timer by clicking on it.

Notes are defined by appending an `<aside>` element to a slide as seen below. You can add the `data-markdown` attribute to the aside element if you prefer writing notes using Markdown.

Alternatively you can add your notes in a `data-notes` attribute on the slide. Like `<section data-notes="Something important"></section>`.

When used locally, this feature requires that reveal.js [runs from a local web server](/installation/#full-setup).

```html/3-5
<section>
  <h2>Some Slide</h2>

  <aside class="notes">
    Shhh, these are your private notes 📝
  </aside>
</section>
```

If you're using the [Markdown](/markdown/) plugin, you can add notes with the help of a special delimiter:

```html/0-1,7-8
<section data-markdown="example.md" data-separator="^\n\n\n"
         data-separator-vertical="^\n\n" data-separator-notes="^Note:">
# Title
## Sub-title

Here is some content...

Note:
This will only display in the notes window.
</section>
```

## Adding the Speaker Notes Plugin

The plugin is already bundled with reveal.js. To enable the speaker notes plugin, add the plugin source to the `index.html` and add the plugin to the initialization of reveal.js.

```html
<script src="plugin/notes/notes.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealNotes],
  });
</script>
```

## Share and Print Speaker Notes

Notes are only visible to the speaker inside of the speaker view. If you wish to share your notes with others you can initialize reveal.js with the `showNotes` configuration value set to `true`. Notes will appear along the bottom of the presentations.

When `showNotes` is enabled notes are also included when you [export to PDF](/pdf-export/). By default, notes are printed in a box on top of the slide. If you'd rather print them on a separate page, after the slide, set `showNotes: "separate-page"`.

## Speaker Notes Clock and Timers

The speaker notes window will also show:

- Time elapsed since the beginning of the presentation. If you hover the mouse above this section, a timer reset button will appear.
- Current wall-clock time
- (Optionally) a pacing timer which indicates whether the current pace of the presentation is on track for the right timing (shown in green), and if not, whether the presenter should speed up (shown in red) or has the luxury of slowing down (blue).

The pacing timer can be enabled by configuring the `defaultTiming` parameter in the `Reveal` configuration block, which specifies the number of seconds per slide. 120 can be a reasonable rule of thumb. Alternatively, you can enable the timer by setting `totalTime`, which sets the total length of your presentation (also in seconds). If both values are specified, `totalTime` wins and `defaultTiming` is ignored. Regardless of the baseline timing method, timings can also be given per slide `<section>` by setting the `data-timing` attribute (again, in seconds).

## Server Side Speaker Notes

In some cases it can be desirable to run notes on a separate device from the one you're presenting on. The Node.js-based notes plugin lets you do this using the same note definitions as its client side counterpart. See <https://github.com/reveal/notes-server>.
````

## src/course.md

- Characters: 5522
- Tokens: 0

```markdown
---
id: course
title: Mastering reveal.js
description: An upcoming video course covering the reveal.js basics all the way up to advanced customization and features.
layout: default
hidden: true
hide_ads: true
---

# Mastering reveal.js

<iframe width="100%" height="405" src="https://www.youtube.com/embed/6-uWaBcqguc?color=white&controls=1&modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video course that will teach you how to everything you need to know to create great looking presentations with reveal.js.

We'll start from the basics of installing reveal.js, creating slides and configuring your presentation. Then we'll work our way up to more interesting topics like presenting syntax highlighted code, animating slide content with Auto-Animate and using the speaker view. In the advanced videos we'll explore the reveal.js JavaScript API, plugin creation and how to customize keyboard bindings. (See [full list of videos](#table-of-contents).)

### Who is this for?

The course is aimed at people who are new to reveal.js as well as those of you who already understand the fundamentals but are ready to explore the full feature set.

You'll need to have a basic understanding of HTML, CSS and JavaScript. HTML is the backbone of reveal.js and used extensively throughout the course. CSS and JavaScript are mostly used for advanced videos on topics such as creating custom themes, working with the reveal.js API and editing the source code.

### Who is presenting?

👋 I'm Hakim—a Swedish front-end developer and the creator of reveal.js. I co-founded and am currently working on [Slides.com](https://slides.com)—a presentation platform and graphical editor built on top of reveal.js. Beyond that I love to work on visual demos and experiments at [hakim.se](https://hakim.se).

I released the first version of reveal.js 10 years ago (!) and couldn't have imagined that it would eventually grow to be used by hundreds of thousands of people. I hope you'll join in and experience first hand why so many choose to create their presentations with reveal.js!

<div class="buy-course">
	<div class="buy-course-thumb">
		<img src="/images/docs/mastering.svg">
	</div>
	<div class="buy-course-action">
		<p class="buy-course-price">
			<span class="old-price"><sup>$</sup>99</span>
			<span><sup>$</sup>79</span>
		</p>
		<a class="gumroad-button" href="https://gum.co/reveal-js/v0sz80d?wanted=true" target="_blank" data-gumroad-single-product="true">Buy course</a>
	</div>
	<div class="buy-course-data">
		<ul>
			<li>22 videos</li>
			<li>5h 39m total runtime</li>
			<li>Stream in HD</li>
			<li>Download in 4K</li>
			<li>Free updates</li>
		</ul>
	</div>
</div>
<script src="https://gumroad.com/js/gumroad.js"></script>

The course is sold via [Gumroad](https://gumroad.com/). VAT is added at the time of purchase, if applicable. 100% money back if the course isn't a good fit for you—no questions asked.

## Table of Contents

The course is divided into relatively short videos so that you can easily skip topics that aren't relevant to you or that you are already familiar with. The total runtime is 5.5 hours.

| Getting Started                                                    | <!-- --> |
| :----------------------------------------------------------------- | -------: |
| **Getting Started**                                                | Duration |
| &nbsp; Installing reveal.js and setting up the development server. |     5:40 |
| &nbsp; Creating slides, linking between them and saving drafts.    |    10:04 |
| &nbsp; Configuring your presentation.                              |     8:23 |
| &nbsp; Working with vertical slides.                               |     9:05 |
| &nbsp; Creating slides using Markdown.                             |    16:34 |
| **Content Creation**                                               |
| &nbsp; Adding text, images, videos and iframes to your slides.     |    10:47 |
| &nbsp; Layout slide content using stacks and auto-sized text.      |    13:58 |
| &nbsp; Fullscreen background images, videos, colors and iframes.   |    16:26 |
| &nbsp; Presenting syntax highlighted code.                         |    21:51 |
| &nbsp; Using Fragments to build up slides in steps.                |    13:14 |
| &nbsp; Animating slide content with Auto-Animate.                  |    17:01 |
| **Configuration & Features**                                       |
| &nbsp; Presentation size and scale.                                |    14:34 |
| &nbsp; Slide transitions.                                          |    12:36 |
| &nbsp; Theming your content and creating your own theme.           |    16:12 |
| &nbsp; Speaker notes & using the speaker view.                     |    11:27 |
| &nbsp; Slide numbers & URLs.                                       |    19:55 |
| &nbsp; Converting your presentation to PDF.                        |    10:23 |
| **Advanced (JS)**                                                  |
| &nbsp; Initialization & running multiple presentations.            |    19:06 |
| &nbsp; Plugins; where to find and how to create them.              |    14:52 |
| &nbsp; Using the reveal.js API to control your presentation.       |    40:32 |
| &nbsp; Customizing keyboard shortcuts.                             |    15:04 |
| &nbsp; Working with the source code.                               |    21:09 |

{.toc .hide-header}
```

## src/index.md

- Characters: 1763
- Tokens: 0

```markdown
---
id: home
title: The HTML presentation framework
description: Documentation and demos for the open source reveal.js HTML presentation framework.
layout: home
hidden: true
---

# Create Stunning Presentations on the Web

reveal.js is an open source HTML presentation framework. It's a tool that enables anyone with a web browser to create fully-featured and beautiful presentations for free.

Presentations made with reveal.js are built on open web technologies. That means anything you can do on the web, you can do in your presentation. Change styles with CSS, include an external web page using an `<iframe>` or add your own custom behavior using our [JavaScript API](/api).

The framework comes with a broad range of features including [nested slides](/vertical-slides/), [Markdown support](/markdown/), [Auto-Animate](/auto-animate/), [PDF export](/pdf-export/), [speaker notes](/speaker-view/), [LaTeX support](/math/) and [syntax highlighted code](/code/).

## Ready to Get Started?

It only takes a minute to get set up. Learn how to create your first presentation in the [installation instructions](/installation/)!

## Online Editor

If you want the benefits of reveal.js without having to write HTML or Markdown try [https://slides.com](https://slides.com?ref=github). It's a fully-featured visual editor and platform for reveal.js, by the same creator.

## Supporting reveal.js

This project was started and is maintained by [@hakimel](https://github.com/hakimel/) with the help of many [contributions from the community](https://github.com/hakimel/reveal.js/graphs/contributors). The best way to support the project is to [become a paying member of Slides.com](https://slides.com/pricing)—the reveal.js presentation platform that Hakim is building.
```

## src/plugins.md

- Characters: 4230
- Tokens: 0

````markdown
---
id: plugins
title: Plugins
layout: default
---

# Plugins

Plugins can be used to extend reveal.js with additional functionality. To make use of a plugin, you'll need to do two things:

1. Include the plugin script in the document. (Some plugins may require styles as well.)
1. Tell reveal.js about the plugin by including it in the `plugins` array when initializing.

Here's an example:

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

If you're using ES modules, we also provide module exports for all built-in plugins:

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

## Built-in Plugins

A few common plugins which add support for [Markdown](/markdown/), [code highlighting](/code/) and [speaker notes](/speaker-view/) are included in our default [presentation boilerplate](https://github.com/hakimel/reveal.js/blob/master/index.html).

These plugins are distributed together with the reveal.js repo. Here's a complete list of all built-in plugins.

| Name            | Description                                                                                                             |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- |
| RevealHighlight | Syntax highlighted [code](/code/).<br><span class="text-gray-600">plugin/highlight/highlight.js</span>                  |
| RevealMarkdown  | Write content using [Markdown](/markdown/).<br><span class="text-gray-600">plugin/markdown/markdown.js</span>           |
| RevealSearch    | Press CTRL+Shift+F to search slide content.<br><span class="text-gray-600">plugin/search/search.js</span>               |
| RevealNotes     | Show a [speaker view](/speaker-view/) in a separate window.<br><span class="text-gray-600">plugin/notes/notes.js</span> |
| RevealMath      | Render [math equations](/math/).<br><span class="text-gray-600">plugin/math/math.js</span>                              |
| RevealZoom      | Alt+click to zoom in on elements (CTRL+click in Linux).<br><span class="text-gray-600">plugin/zoom/zoom.js</span>       |

{.key-value}

All of the above are available as ES modules if you swap `.js` for `.esm.js`.

## API

We provide API methods for checking which plugins that are currently registered. It's also possible to retrieve a reference to any registered plugin instance if you want to manually call a method on them.

```js
import Reveal from 'dist/reveal.esm.js';
import Markdown from 'plugin/markdown/markdown.esm.js';
import Highlight from 'plugin/highlight/highlight.esm.js';

Reveal.initialize({ plugins: [Markdown, Highlight] });

Reveal.hasPlugin('markdown');
// true

Reveal.getPlugin('markdown');
// { id: "markdown", init: ... }

Reveal.getPlugins();
// {
//   markdown: { id: "markdown", init: ... },
//   highlight: { id: "highlight", init: ... }
// }
```

## Dependencies <span class="r-version-badge deprecated">4.0.0</span> {id=dependencies}

This functionality is left in for backwards compatibility but has been deprecated as of reveal.js 4.0.0. In older versions we used a built-in dependency loader to load plugins. We moved away from this because how scripts are best loaded and bundled may vary greatly depending on use case. If you need to load a dependency, include it using a `<script defer>` tag instead.

Dependencies are loaded in the order they appear.

```js
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/markdown.js', condition: () => {
        return !!document.querySelector( ’[data-markdown]’ );
    } },
    { src: 'plugin/highlight/highlight.js', async: true }
  ]
});
```

The following properties are available for each dependency object:

- **src**: Path to the script to load
- **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
- **callback**: [optional] Function to execute when the script has loaded
- **condition**: [optional] Function which must return true for the script to be loaded
````

## src/themes.md

- Characters: 3038
- Tokens: 0

````markdown
---
id: themes
title: Themes
layout: default
---

# Themes

The framework comes with a few different themes included.

| Name            | Preview                                                                                                                            |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| black (default) | <img src="/images/docs/themes/black.png" width="150" height="150" alt="Black background, white text, blue links">                  |
| white           | <img src="/images/docs/themes/white.png" width="150" height="150" alt="White background, black text, blue links">                  |
| league          | <img src="/images/docs/themes/league.png" width="150" height="150" alt="Gray background, white text, blue links">                  |
| beige           | <img src="/images/docs/themes/beige.png" width="150" height="150" alt="Beige background, dark text, brown links">                  |
| night           | <img src="/images/docs/themes/night.png" width="150" height="150" alt="Black background, thick white text, orange links">          |
| serif           | <img src="/images/docs/themes/serif.png" width="150" height="150" alt="Cappuccino background, gray text, brown links">             |
| simple          | <img src="/images/docs/themes/simple.png" width="150" height="150" alt="White background, black text, blue links">                 |
| solarized       | <img src="/images/docs/themes/solarized.png" width="150" height="150" alt="Cream-colored background, dark green text, blue links"> |
| moon            | <img src="/images/docs/themes/moon.png" width="150" height="150" alt="Dark blue background, thick grey text, blue links">          |
| dracula         | <img src="/images/docs/themes/dracula.png" width="150" height="150">                                                               |
| sky             | <img src="/images/docs/themes/sky.png" width="150" height="150" alt="Blue background, thin dark text, blue links">                 |
| blood           | <img src="/images/docs/themes/blood.png" width="150" height="150" alt="Dark background, thick white text, red links">              |

{.key-value}

Each theme is available as a separate stylesheet. To change theme you will need to replace **black** below with your desired theme name in index.html:

```html
<link rel="stylesheet" href="dist/theme/black.css" />
```

## Custom Properties

All theme variables are exposed as CSS custom properties in the pseudo-class `:root`. See [the list of exposed variables](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss).

## Creating a Theme

If you want to add a theme of your own see the instructions here: [/css/theme/README.md](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md).

Alternatively, if you want a clean start, you can opt to start from a blank CSS document and customize everything from the ground up.
````

## src/media.md

- Characters: 4929
- Tokens: 0

````markdown
---
id: media
title: Media
layout: default
---

# Media

We provide convenient mechanics for autoplaying and lazy loading HTML media elements and iframes based on slide visibility and proximity. This works for [\<video\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), [\<audio\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [\<iframe\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) elements.

## Autoplay

Add `data-autoplay` to your media element if you want it to automatically start playing when the slide is shown:

```html
<video
  data-autoplay
  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
></video>
```

If you want to enable or disable autoplay globally, for all embedded media, you can use the `autoPlayMedia` configuration option. If you set this option to `true` ALL media will autoplay regardless of individual `data-autoplay` attributes. If you set it to `autoPlayMedia: false` NO media will autoplay.

```js
Reveal.initialize({
  autoPlayMedia: true,
});
```

Note that embedded HTML `<video>`/`<audio>` and YouTube/Vimeo iframes are automatically paused when you navigate away from a slide. This can be disabled by decorating your element with a `data-ignore` attribute.

## Lightbox

You can turn any element into a media lightbox by adding the `data‑preview‑image`, `data‑preview‑video` or `data‑preview‑link` attribute. This will cause the media to open in a full-screen overlay when clicked. Learn more in the [Lightbox docs](/lightbox).

```html
<img src="reveal.png" data-preview-video="video.mp4">
<a href="https://hakim.se" data-preview-link>Open Link</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-black-text-sticker.png" data-preview-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" width="400px">
      <br />
      <br />
      <a href="https://hakim.se" data-preview-link>Open Link</a>
    </section>
  </div>
</div>



## Lazy Loading

When working on presentations with a lot of media or iframe content it's important to load lazily. Lazy loading means that reveal.js will only load content for the few slides nearest to the current slide. The number of slides that are preloaded is determined by the `viewDistance` configuration option.

To enable lazy loading all you need to do is change your `src` attributes to `data-src` as shown below. This is supported for image, video, audio and iframe elements.

```html/1-2,4-5
<section>
  <img data-src="image.png">
  <iframe data-src="https://hakim.se"></iframe>
  <video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
  </video>
</section>
```

### Lazy Loading Iframes

Note that lazy loaded iframes ignore the `viewDistance` configuration and will only load when their containing slide becomes visible. Iframes are also unloaded as soon as the slide is hidden.

When we lazy load a video or audio element, reveal.js won't start playing that content until the slide becomes visible. However there is no way to control this for an iframe since that could contain any kind of content. That means if we loaded an iframe before the slide is visible on screen it could begin playing media and sound in the background.

You can override this behavior with the `data-preload` attribute. The iframe below will be loaded according to the `viewDistance`.

```html/1
<section>
  <iframe data-src="https://hakim.se" data-preload></iframe>
</section>
```

You can also change the default globally with the `preloadIframes` configuration option. If set to `true` ALL iframes with a `data-src` attribute will be preloaded when within the `viewDistance` regardless of individual `data-preload` attributes. If set to `false`, all iframes will only be loaded when they become visible.

## Iframes

Using iframes is a convenient way to include content from external sources, like a YouTube video or Google Sheet. reveal.js automatically detects YouTube and Vimeo embed URLs and autoplays them when the slide becomes visible.

If you add an `<iframe>` inside your slide it's constrained by the size of the slide. To break out of this constraint and add a full page iframe, you can use an [iframe slide background](/backgrounds/#iframe-backgrounds).

### Iframe Post Message

reveal.js automatically pushes two [post messages](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to embedded iframes. `slide:start` when the slide containing the iframe is made visible and `slide:stop` when it is hidden.

```js
// JavaScript inside of an iframe embedded within reveal.js
window.addEventListener('message', (event) => {
  if (event.data === 'slide:start') {
    // The slide containing this iframe is visible
  } else if (event.data === 'slide:stop') {
    // The slide containing this iframe is not visible
  }
});
```
````

## src/slide-numbers.md

- Characters: 2096
- Tokens: 0

````markdown
---
id: slide-numbers
title: Slide Numbers
layout: default
---

# Slide Numbers

You can display the page number of the current slide by setting the `slideNumber` config option to `true`.

```js
Reveal.initialize({ slideNumber: true });
```

<div class="reveal reveal-example" data-config='{"slideNumber": true}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>

## Format

The slide number format can be customized by setting `slideNumber` to one of the following values.

| Value | Description                                                           |
| :---- | :-------------------------------------------------------------------- |
| h.v   | Horizontal . Vertical slide number (default)                          |
| h/v   | Horizontal / Vertical slide number                                    |
| c     | Flattened slide number, including both horizontal and vertical slides |
| c/t   | Flattened slide number / total slides                                 |

{.key-value}

```js
Reveal.initialize({ slideNumber: 'c/t' });
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>

If none of the existing formats are to your liking, you can provide a custom slide number generator.

```js
Reveal.initialize({
  slideNumber: (slide) => {
    // Ignore numbering of vertical slides
    return [Reveal.getIndices(slide).h];
  },
});
```

## Context

When slide numbers are enabled, they will be included in all contexts by default. If you only want to show slide numbers in a specific context you can set `showSlideNumber` to one of the following:

| Value   | Description                                  |
| :------ | :------------------------------------------- |
| all     | Show slide numbers in all contexts (default) |
| print   | Only show slide numbers when printing to PDF |
| speaker | Only show slide numbers in the speaker view  |

{.key-value}

```js
Reveal.initialize({ showSlideNumber: 'print' });
```
````

## src/react.md

- Characters: 4238
- Tokens: 0

````markdown
---
id: react
title: React Framework
layout: default
---

# React Framework

Reveal.js can be added to a React project a few different ways.

1. [Install and setup reveal.js via npm](#installing-from-npm)
2. [Use third-party packages](#third-party-packages)

## Installing From npm

You can add and initialize reveal.js in a JavaScript/TypeScript source file like `main.tsx` or `app.tsx`.

You can do so globally i.e. outside of app/component functions or inside one of them. In the latter case, you have to be careful not to stack initializations. Only initialize a slide deck once. If you need to reconfigure, use the `configure` function or `destroy` the deck before initializing again.

To begin, install reveal using `npm`:

```bash
npm install reveal.js
```

If you are using TypeScript, you need to install the types as well:

```bash
npm i --save-dev @types/reveal.js
```

#### Imports

You will need the following imports:

```ts
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // "black" theme is just an example
```

#### Initialization

Finally, add the [initialization code](https://revealjs.com/initialization/) most suitable to your project's needs.

If you decide to initialize the slide deck inside an app or component function where slide deck containers are in the returned JSX, we recommended you use a `useEffect` hook to do so. This will ensure that initialization happens after the containers are first rendered.

It is also recommended to use refs to maintain a handle on the slide deck container `div` and the corresponding `reveal` instance. These refs can help make sure each slide deck is only initialized once.

#### Here's a full working example:

```ts
// App.tsx
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
    const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization in strict mode
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
            // other config options
        });

        deckRef.current.initialize().then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
        // Your presentation is sized based on the width and height of
        // our parent element. Make sure the parent is not 0-height.
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <section>Slide 1</section>
                <section>Slide 2</section>
            </div>
        </div>
    );
}

export default App;
```

Note the use of `deckDivRef` in the `Reveal` constructor. This is important if you want to add multiple decks to the the same React app.

## React Portals

If you only want to sprinkle a few components into specific slides, we recommend keeping the reveal.js DOM tree outside of React and using [React Portals](https://react.dev/reference/react-dom/createPortal) to place react component into specific sections.

## Third Party Packages

The following third-party packages might prove useful for adding Reveal.js presentations to React projects or for adding React components/apps to Reveal.js presentations:

- [revealjs-react](https://github.com/blakeanedved/revealjs-react) - A React wrapper for the RevealJS Presentation Library.
- [react-reveal-slides](https://github.com/bouzidanas/react-reveal-slides) - A React component for creating Reveal.js presentations entirely in React.
- [revealjs-react-boilerplate](https://github.com/cberthou/revealjs-react-boilerplate) - A boilerplate for creating revealJS presentations using React.
````

## src/vertical-slides.md

- Characters: 4201
- Tokens: 0

````markdown
---
id: vertical-slides
title: Vertical Slides
layout: default
---

# Vertical Slides

Your slides are stepped between using a horizontal sliding transition by default. These horizontal slides are considered the main, or _top-level_, slides in your deck.

It's also possible to nest multiple slides within a single top-level slide to create a vertical stack. This is a great way to logically group content in your presentation and makes it convenient to include optional slides.

When presenting, you use the left/right arrows to step through the top-level (horizontal) slides. When you arrive at a vertical stack you can optionally press the up/down arrows to view the vertical slides or skip past them by pressing the right arrow. Here's an example showing a bird's-eye view of what this looks like in action.

<picture>
  <img src="https://static.slid.es/support/reveal.js-vertical-slides.gif" alt="Slide layout with vertical slides">
</picture>

## Markup

Here's what the markup looks like for a simple vertical stack.

```html
<section>Horizontal Slide</section>
<section>
  <section>Vertical Slide 1</section>
  <section>Vertical Slide 2</section>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>

## Navigation Mode

You can fine tune the reveal.js navigation behavior by using the `navigationMode` config option. Note that these options are only useful for presentations that use a mix of horizontal and vertical slides. The following navigation modes are available:

| Value   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Left/right arrow keys step between horizontal slides. Up/down arrow keys step between vertical slides. Space key steps through all slides (both horizontal and vertical).                                                                                                                                                                                                                                                                                                                                   |
| linear  | Removes the up/down arrows. Left/right arrows step through all slides (both horizontal and vertical).                                                                                                                                                                                                                                                                                                                                                                                                       |
| grid    | When this is enabled, stepping left/right from a vertical stack to an adjacent vertical stack will land you at the same vertical index.<br><br>Consider a deck with six slides ordered in two vertical stacks:<br>`1.1`&nbsp;&nbsp;&nbsp;&nbsp;`2.1`<br>`1.2`&nbsp;&nbsp;&nbsp;&nbsp;`2.2`<br>`1.3`&nbsp;&nbsp;&nbsp;&nbsp;`2.3`<br><br>If you're on slide 1.3 and navigate right, you will normally move from 1.3 -> 2.1. With navigationMode set to "grid" the same navigation takes you from 1.3 -> 2.3. |
````

## src/api/search.njk

- Characters: 258
- Tokens: 0

```text
---
hidden: true
permalink: /api/search.json
---
[
{% for page in collections.searchPages %}
  {
     "title":"{{page.data.title}}",
     "url":"{{page.url}}",
     "content":"{% searchContent page %}"
  }{% if loop.last != true %},{% endif %}
{% endfor %}
]
```

## src/auto-slide.md

- Characters: 2182
- Tokens: 0

````markdown
---
id: auto-slide
title: Auto-Slide
layout: default
---

# Auto-Slide

Presentations can be configured to step through slides automatically, without any user input. To enable this you will need to specify an interval for slide changes using the `autoSlide` config option. The interval is provided in milliseconds.

```javascript
// Slide every five seconds
Reveal.initialize({
  autoSlide: 5000,
  loop: true,
});
```

<div class="reveal reveal-example" data-config='{"autoSlide": 5000, "loop": true}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
    <section>Slide 3</section>
  </div>
</div>

A play/pause control element will automatically appear for auto-sliding decks. Sliding is automatically paused if the user starts interacting with the deck. It's also possible to pause or resume sliding by pressing »A« on the keyboard (won't work in the embedded demo here).

You can disable the auto-slide controls and prevent sliding from being paused by specifying `autoSlideStoppable: false` in your [config options](/config/).

## Slide Timing

It's also possible to override the slide duration for individual slides and fragments by using the `data-autoslide` attribute.

```html
<section data-autoslide="2000">
  <p>After 2 seconds the first fragment will be shown.</p>
  <p class="fragment" data-autoslide="10000">
    After 10 seconds the next fragment will be shown.
  </p>
  <p class="fragment">
    Now, the fragment is displayed for 2 seconds before the next slide is shown.
  </p>
</section>
```

## Auto-Slide Method

The `autoSlideMethod` config option can be used to override the default function used for navigation when auto-sliding.

We step through all slides, both horizontal and [vertical](/vertical-slides/), by default. To only navigate along the top layer and ignore vertical slides, you can provide a method that calls `Reveal.right()`.

```js
Reveal.configure({
  autoSlideMethod: () => Reveal.right(),
});
```

## Events

We fire events whenever auto-sliding is paused or resumed.

```javascript
Reveal.on('autoslideresumed', (event) => {
  /* ... */
});
Reveal.on('autoslidepaused', (event) => {
  /* ... */
});
```
````

## src/links.md

- Characters: 2832
- Tokens: 0

````markdown
---
id: links
title: Links
layout: default
---

# Internal links

You can create links from one slide to another. Start by giving your target slide a unique `id` attribute. Next, you can create an anchor with an href in the format `#/<id>`. Here's a complete working example:

```html/1,8
<section>
	<a href="#/grand-finale">Go to the last slide</a>
</section>
<section>
	<h2>Slide 2</h2>
</section>
<section id="grand-finale">
	<h2>The end</h2>
	<a href="#/0">Back to the first</a>
</section>
```

<div class="reveal reveal-example" data-config='{"respondToHashChanges": true}'>
  <div class="slides">
    <section>
		<a href="#/grand-finale">Go to the last slide</a>
	</section>
	<section>
		<h2>Slide 2</h2>
	</section>
	<section id="grand-finale">
		<h2>The end</h2>
		<a href="#/0">Back to the first</a>
	</section>
  </div>
</div>

## Numbered Links

It's also possible to link to slides based on their slide index. The href format for an numbered link is `#/0` where 0 is the horizontal slide number. To link to a [vertical slide](/vertical-slides/) use `#/0/0` where the second number is the index of the vertical slide target.

```html
<a href="#/2">Go to 2nd slide</a>
<a href="#/3/2">Go to the 2nd vertical slide inside of the 3rd slide</a>
```

## Navigation Links

You can add relative navigation links that work similarly to the built in directional control arrows. This is done by adding one of the following classes to any clickable HTML element inside of the `.reveal` container.

```html
<button class="navigate-left">Left</button>
<button class="navigate-right">Right</button>
<button class="navigate-up">Up</button>
<button class="navigate-down">Down</button>

<!-- Previous vertical OR horizontal slide -->
<button class="navigate-prev">Prev</button>

<!-- Next vertical OR horizontal slide -->
<button class="navigate-next">Next</button>
```

Each navigation element is automatically given an `enabled` class when it's a valid navigation route based on the current slide. For example, if you're on the first slide only `navigate-right` will have the `enabled` class since it's not possible to navigate towards the left.

## Lightbox Links

If the website you're linking to supports iframe embedding, you can use the `data-preview-link` attribute to open the link in an iframe lightbox. This way you can show an external website without leaving the slide deck. Learn more in the [Lightbox docs](/lightbox/#iframe-lightbox).

```html
<a href="https://hakim.se" data-preview-link>Open Link</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
			<a href="https://hakim.se" data-preview-link>Open Link</a>
    </section>
  </div>
</div>

Note that this will only work if the link allows for embedding. Many websites prevent embedding via `x-frame-options` or `Content-Security-Policy`.
````

## src/_data/helpers.js

- Characters: 135
- Tokens: 0

```javascript
module.exports = {
  environment: process.env.NODE_ENV,
  assetSuffix: process.env.NODE_ENV == 'production' ? '?' + Date.now() : '',
};
```

## src/_data/i18n/index.js

- Characters: 3880
- Tokens: 0

```javascript
/** @format */

module.exports = {
  'Getting Started': {
    'zh-Hant': '開始',
    en: 'Getting Started',
  },
  Home: {
    'zh-Hant': '首頁',
    en: 'Home',
  },
  Demo: {
    'zh-Hant': '示範',
    en: 'Demo',
  },
  Installation: {
    'zh-Hant': '安裝',
    en: 'Installation',
  },
  Support: {
    'zh-Hant': '支援',
    en: 'Support',
  },
  'Video Course': {
    'zh-Hant': '視頻課程',
    en: 'Video Course',
  },
  Sponsor: {
    'zh-Hant': '贊助 reveal.js',
    en: 'Sponsor reveal.js',
  },
  Content: {
    'zh-Hant': '內容',
    en: 'Content',
  },
  Markup: {
    'zh-Hant': '標記',
    en: 'Markup',
  },
  Markdown: {
    'zh-Hant': 'Markdown',
    en: 'Markdown',
  },
  Backgrounds: {
    'zh-Hant': '背景',
    en: 'Backgrounds',
  },
  Media: {
    'zh-Hant': '媒體',
    en: 'Media',
  },
  Lightbox: {
    'zh-Hant': 'Lightbox',
    en: 'Lightbox',
  },
  Code: {
    'zh-Hant': '代碼',
    en: 'Code',
  },
  Math: {
    'zh-Hant': '數學',
    en: 'Math',
  },
  Fragments: {
    'zh-Hant': '片段',
    en: 'Fragments',
  },
  Links: {
    'zh-Hant': '鏈接',
    en: 'Links',
  },
  Layout: {
    'zh-Hant': '布局',
    en: 'Layout',
  },
  'Slide Visibility': {
    'zh-Hant': '幻燈片可見性',
    en: 'Slide Visibility',
  },

  Customization: {
    'zh-Hant': '自訂',
    en: 'Customization',
  },
  Themes: {
    'zh-Hant': '主題',
    en: 'Themes',
  },
  Transitions: {
    'zh-Hant': '過渡',
    en: 'Transitions',
  },
  'Config Options': {
    'zh-Hant': '配置選項',
    en: 'Config Options',
  },
  'Presentation Size': {
    'zh-Hant': '演示大小',
    en: 'Presentation Size',
  },
  Features: {
    'zh-Hant': '特性',
    en: 'Features',
  },
  'Vertical Slides': {
    'zh-Hant': '垂直幻燈片',
    en: 'Vertical Slides',
  },
  'Auto-Animate': {
    'zh-Hant': '自動動畫',
    en: 'Auto-Animate',
  },
  'Auto-Slide': {
    'zh-Hant': '自動滑動',
    en: 'Auto-Slide',
  },
  'Speaker View': {
    'zh-Hant': '演講者視圖',
    en: 'Speaker View',
  },
  'Scroll View': {
    'zh-Hant': '滾動視圖',
    en: 'Scroll View',
  },
  'Slide Numbers': {
    'zh-Hant': '幻燈片編號',
    en: 'Slide Numbers',
  },
  'Jump to Slide': {
    'zh-Hant': '跳至幻燈片',
    en: 'Jump to Slide',
  },
  'Touch Navigation': {
    'zh-Hant': '觸摸導航',
    en: 'Touch Navigation',
  },
  'PDF Export': {
    'zh-Hant': 'PDF 導出',
    en: 'PDF Export',
  },
  'Overview Mode': {
    'zh-Hant': '總覽模式',
    en: 'Overview Mode',
  },
  'Fullscreen Mode': {
    'zh-Hant': '全屏模式',
    en: 'Fullscreen Mode',
  },
  API: {
    'zh-Hant': 'API',
    en: 'API',
  },
  Initialization: {
    'zh-Hant': '初始化',
    en: 'Initialization',
  },
  'API Methods': {
    'zh-Hant': 'API 方法',
    en: 'API Methods',
  },
  Events: {
    'zh-Hant': '事件',
    en: 'Events',
  },
  Keyboard: {
    'zh-Hant': '鍵盤',
    en: 'Keyboard',
  },
  'Presentation State': {
    'zh-Hant': '演示狀態',
    en: 'Presentation State',
  },
  postMessage: {
    'zh-Hant': '發送消息',
    en: 'postMessage',
  },
  Plugins: {
    'zh-Hant': '插件',
    en: 'Initialization',
  },
  'Using Plugins': {
    'zh-Hant': '使用插件',
    en: 'Using Plugins',
  },
  'Built-in Plugins': {
    'zh-Hant': '內建插件',
    en: 'Built-in Plugins',
  },
  'Creating a Plugin': {
    'zh-Hant': '創建插件',
    en: 'Creating a Plugin',
  },
  Multiplex: {
    'zh-Hant': '多工',
    en: 'Multiplex',
  },
  'Third Party Plugins': {
    'zh-Hant': '第三方插件',
    en: 'Third Party Plugins',
  },

  Other: {
    'zh-Hant': '其他',
    en: 'Other',
  },
  'React Framework': {
    'zh-Hant': 'React 框架',
    en: 'React Framework',
  },
  'Upgrade Instructions': {
    'zh-Hant': '升級指南',
    en: 'Upgrade Instructions',
  },
  Changelog: {
    'zh-Hant': '變更日誌',
    en: 'Changelog',
  },
  'Edit this page': {
    'zh-Hant': '編輯這個頁面',
    en: 'Edit this page',
  },
  'Created by @hakimel': {
    'zh-Hant': '由 @hakimel 創建',
    en: 'Created by @hakimel',
  },
  Languages: {
    'zh-Hant': '語言',
    en: 'Languages',
  },
};
```

## src/_data/locales.js

- Characters: 117
- Tokens: 0

```javascript
module.exports = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: '繁體中文',
    code: 'zh-Hant',
  },
];
```

## src/code.md

- Characters: 6779
- Tokens: 0

````markdown
---
id: code
title: Presenting Code
layout: default
---

# Presenting Code

reveal.js includes a powerful set of features aimed at presenting syntax highlighted code — powered by [highlight.js](https://highlightjs.org/). This functionality lives in the highlight plugin and is included in our default presentation boilerplate.

Below is an example with clojure code that will be syntax highlighted. When the `data-trim` attribute is present, surrounding whitespace within the `<code>` is automatically removed.

HTML will be escaped by default. To avoid this, add `data-noescape` to the `<code>` element.

```html
<section>
  <pre><code data-trim data-noescape>
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <pre><code data-trim data-noescape>
      (def lazy-fib
        (concat
         [0 1]
         ((fn rfib [a b]
              (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
      </code></pre>
    </section>
  </div>
</div>

## Theming

Make sure that a syntax highlight theme is included in your document. We include Monokai by default, which is distributed with the reveal.js repo at [plugin/highlight/monokai.css](https://github.com/hakimel/reveal.js/tree/master/plugin/highlight/monokai.css). A full list of available themes can be found at <https://highlightjs.org/demo/>.

```html
<link rel="stylesheet" href="plugin/highlight/monokai.css" />
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealHighlight],
  });
</script>
```

## Line Numbers & Highlights

You can enable line numbers by adding `data-line-numbers` to your `<code>` tags. If you want to highlight specific lines you can provide a comma separated list of line numbers using the same attribute. For example, in the following example lines 3 and 8-10 are highlighted:

```html
<pre><code data-line-numbers="3,8-10">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3,8-10" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>

#### Line Number Offset <span class="r-version-badge new">4.2.0</span>

You can offset the line number if you want to showcase a excerpt of a longer set of code. In the example below, we set `data-ln-start-from="7"` to make the line numbers start from 7.

```html
<pre><code data-line-numbers data-ln-start-from="7">
<tr>
  <td>Oranges</td>
  <td>$2</td>
  <td>18</td>
</tr>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers data-ln-start-from="7" data-trim data-noescape>
&lt;tr&gt;
  &lt;td>Oranges&lt;/td&gt;
  &lt;td>$2&lt;/td&gt;
  &lt;td>18&lt;/td&gt;
&lt;/tr&gt;
</code></pre>
    </section>
  </div>
</div>

## Step-by-step Highlights

You can step through multiple code highlights on the same code block. Delimit each of your highlight steps with the `|` character. For example `data-line-numbers="1|2-3|4,6-10"` will produce three steps. It will start by highlighting line 1, next step is lines 2-3, and finally line 4 and 6 through 10.

```html
<pre><code data-line-numbers="3-5|8-10|13-15">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Kiwi</td>
    <td>$3</td>
    <td>1</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3-5|8-10|13-15" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Kiwi&lt;/td&gt;
    &lt;td>$3&lt;/td&gt;
    &lt;td>1&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>

## Language selection

By default, [highlight.js](https://highlightjs.org/) tries to automatically detect which language is used in the code snippet. It is however possible to overwrite this by adding a `language-XXX` attribute. The full list of supported languages is available on [their documentation](https://highlightjs.readthedocs.io/en/latest/supported-languages.html).

```html
<pre><code data-trim class="language-python">
>>> import antigravity
>>> print(b"\x01\x02\x03")
>>> a = 2
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-trim class="language-python">
>>> import antigravity
>>> print(b"\x01\x02\x03")
>>> a = 2
</code></pre>
    </section>
  </div>
</div>

## HTML Entities <span class="r-version-badge new">4.1.0</span>

Content added inside of a `<code>` block is parsed as HTML by the web browser. If you have HTML characters (<>) in your code you will need to escape them ($lt; $gt;).

To avoid having to escape these characters manually, you can wrap your code in `<script type="text/template">` and we'll handle it for you.

```html
<pre><code><script type="text/template">
sealed class Either<out A, out B> {
  data class Left<out A>(val a: A) : Either<A, Nothing>()
  data class Right<out B>(val b: B) : Either<Nothing, B>()
}
</script></code></pre>
```

## The highlight.js API & beforeHighlight <span class="r-version-badge new">4.2.0</span>

If you want to interact with highlight.js before your code is highlighted you can use the `beforeHighlight` callback. For example, this can be useful if you want to register a new language via the [highlight.js API](https://highlightjs.readthedocs.io/en/latest/api.html).

```js
Reveal.initialize({
  highlight: {
    beforeHighlight: (hljs) => hljs.registerLanguage(/*...*/),
  },
  plugins: [RevealHighlight],
});
```

## Manual Highlighting

All of your code blocks are automatically syntax highlighted when reveal.js starts. If you want to disable this behavior and trigger highlighting on your own you can set the `highlightOnLoad` flag to false.

```js
Reveal.initialize({
  highlight: {
    highlightOnLoad: false,
  },
  plugins: [RevealHighlight],
}).then(() => {
  const highlight = Reveal.getPlugin('highlight');
  highlight.highlightBlock(/* code block element to highlight */);
});
```
````

## src/markup.md

- Characters: 2435
- Tokens: 0

````markdown
---
id: markup
title: Markup
layout: default
---

# Markup

Here's a barebones example of a fully working reveal.js presentation:

```html
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

The presentation markup hierarchy needs to be `.reveal > .slides > section` where the `section` element represents one slide and can be repeated indefinitely.

If you place multiple `section` elements inside of another `section` they will be shown as [vertical slides](/vertical-slides/). The first of the vertical slides is the "root" of the others (at the top), and will be included in the horizontal sequence. For example:

```html
<div class="reveal">
  <div class="slides">
    <section>Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>

It's also possible to write presentations using [Markdown](/markdown/).

## Viewport

The reveal.js viewport is the wrapper DOM element that determines the size of your presentation on a web page. By default, this will be the `body` element. If you're including multiple presentations on the same page each presentations `.reveal` element will act as their viewport.

The viewport is always decorated with a `reveal-viewport` class reveal.js is initialized.

## Slide States

If you set `data-state="make-it-pop"` on a slide `<section>`, "make-it-pop" will be applied as a class on the [viewport element](#viewport) when that slide is opened. This allows you to apply broad style changes to the page based on the active slide.

```html
<section data-state="make-it-pop"></section>
```

```css
/* CSS */
.make-it-pop {
  filter: drop-shadow(0 0 10px purple);
}
```

You can also listen to these changes in state via JavaScript:

```javascript
Reveal.on('make-it-pop', () => {
  console.log('✨');
});
```
````

## src/auto-animate.md

- Characters: 12848
- Tokens: 0

````markdown
---
id: auto-animate
title: Auto-Animate
layout: default
---

# Auto-Animate <span class="r-version-badge new">4.0.0</span>

reveal.js can automatically animate elements across slides. All you need to do is add `data-auto-animate` to two adjacent slide `<section>` elements and Auto-Animate will animate all matching elements between the two.

Here's a simple example to give you a better idea of how it can be used.

```html
<section data-auto-animate>
  <h1>Auto-Animate</h1>
</section>
<section data-auto-animate>
  <h1 style="margin-top: 100px; color: red;">Auto-Animate</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>Auto-Animate</h1>
    </section>
    <section data-auto-animate>
      <h1 style="margin-top: 100px; color: red;">Auto-Animate</h1>
    </section>
  </div>
</div>

This example uses the `margin-top` property to move the element but internally reveal.js will use a CSS transform to ensure smooth movement. This same approach to animation works with most animatable CSS properties meaning you can transition things like `position`, `font-size`, `line-height`, `color`, `background-color`, `padding` and `margin`.

### Movement Animations

Animations are not limited to changes in style. Auto-Animate can also be used to automatically move elements into their new position as content is added, removed or rearranged on a slide. All without a single line of inline CSS.

```html
<section data-auto-animate>
  <h1>Implicit</h1>
</section>
<section data-auto-animate>
  <h1>Implicit</h1>
  <h1>Animation</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>Implicit</h1>
    </section>
    <section data-auto-animate>
      <h1>Implicit</h1>
      <h1>Animation</h1>
    </section>
  </div>
</div>

## How Elements are Matched

When you navigate between two auto-animated slides we'll do our best to automatically find matching elements in the two slides. For text, we consider it a match if both the text contents and node type are identical. For images, videos and iframes we compare the `src` attribute. We also take into account the order in which the element appears in the DOM.

In situations where automatic matching is not feasible you can give the objects that you want to animate between a matching `data-id` attribute. We prioritize matching `data-id` values above our automatic matching.

Here's an example where we've given both blocks a matching ID since automatic matching has no content to go on.

```html
<section data-auto-animate>
  <div data-id="box" style="height: 50px; background: salmon;"></div>
</section>
<section data-auto-animate>
  <div data-id="box" style="height: 200px; background: blue;"></div>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
	  <div data-id="box" style="height: 50px; background: salmon;"></div>
	</section>
	<section data-auto-animate>
	  <div data-id="box" style="height: 200px; background: blue;"></div>
	</section>
  </div>
</div>

## Animation Settings

You can override specific animation settings such as easing and duration either for the whole presentation, per-slide or individually for each animated element. The following configuration attributes can be used to change the settings for a specific slide or element:

| Attribute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  Default | Description                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | :--------------------------------------------------------------------------------------------------------------------------- |
| data-auto-animate-easing                                                                                                                                                                                                                                                          |     ease | A CSS [easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).                                   |
| data-auto-animate-unmatched                                                                                                                                                                                                                                                       |     true | Determines whether elements with no matching auto-animate target should fade in. Set to false to make them appear instantly. |
| data-auto-animate-duration                                                                                                                                                                                                                                                        |      1.0 | Animation duration in seconds.                                                                                               |
| data-auto-animate-delay                                                                                                                                                                                                                                                           |        0 | Animation delay in seconds (can only be set for specific elements, not at the slide level).                                  |
| data-auto-animate-id                                                                                                                                                                                                                                                              | _absent_ | An [id](#auto-animate-id-%26-restart) tying auto-animate slides together.                                                    |
| data-auto-animate-restart                                                                                                                                                                                                                                                         | _absent_ | [Breaks apart](#auto-animate-id-%26-restart) two adjacent auto-animate slides (even with the same id).                       |

If you'd like to change the defaults for the whole deck, use the following config options:

```javascript
Reveal.initialize({
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false,
});
```

## Auto-Animate Id & Restart

When you want separate groups of auto-animated slides right next to each other you can use the `data-auto-animate-id` and `data-auto-animate-restart` attributes.

With `data-auto-animate-id` you can specify arbitrary ids for your slides. Two adjacent slides will only auto-animate if they have the same id or if both don't have one.

Another way to control auto-animate is the `data-auto-animate-restart` attribute. Applying this attribute to a slide will prevent auto-animate between the previous slide and it (even if they have the same id) but _not_ between it and the next slide.

```html
<section data-auto-animate>
  <h1>Group A</h1>
</section>
<section data-auto-animate>
  <h1 style="color: #3B82F6;">Group A</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1>Group B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #10B981;">Group B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
  <h1>Group C</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #EC4899;">Group C</h1>
</section>
```

<div class="reveal reveal-example">
	<div class="slides">
		<section data-auto-animate>
			<h1>Group A</h1>
		</section>
		<section data-auto-animate>
			<h1 style="color: #3B82F6;">Group A</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1>Group B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #10B981;">Group B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
			<h1>Group C</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #EC4899;">Group C</h1>
		</section>
	</div>
</div>

## Events

The `autoanimate` event is dispatched each time you step between two auto-animated slides.

```javascript
Reveal.on('autoanimate', (event) => {
  // event.fromSlide, event.toSlide
});
```

## Example: Animating Between Code Blocks

We support animations between code blocks. Make sure that the code block has `data-line-numbers` enabled and that all blocks have a matching `data-id` value.

```html
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let circumferenceReducer = ( c, planet ) => {
      return c + planet.diameter * Math.PI;
    }

    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]

    let c = planets.reduce( circumferenceReducer, 0 )
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let circumferenceReducer = ( c, planet ) => {
          return c + planet.diameter * Math.PI;
        }
        &nbsp;
        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]
        &nbsp;
        let c = planets.reduce( circumferenceReducer, 0 )
      </code></pre>
    </section>
  </div>
</div>

## Example: Animating Between Lists

We match list items individually to let you animate new items being added or removed.

```html/2-4,10,12
<section data-auto-animate>
  <ul>
    <li>Mercury</li>
    <li>Jupiter</li>
    <li>Mars</li>
  </ul>
</section>
<section data-auto-animate>
  <ul>
    <li>Mercury</li>
    <li>Earth</li>
    <li>Jupiter</li>
    <li>Saturn</li>
    <li>Mars</li>
  </ul>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <ul>
        <li>Mercury</li>
        <li>Jupiter</li>
        <li>Mars</li>
      </ul>
    </section>
    <section data-auto-animate>
      <ul>
        <li>Mercury</li>
        <li>Earth</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Mars</li>
      </ul>
    </section>
  </div>
</div>

## Advanced: State Attributes

We add state attributes to the different elements involved in an auto-animation. These attributes can be tied into if you want to, for example, fine-tune the animation behavior with custom CSS.

Right before an auto-animation starts we add `data-auto-animate="pending"` to the slide `<section>` coming into view. At this point the upcoming slide is visible and all of the animated elements have been moved to their starting positions. Next we switch to `data-auto-animate="running"` to indicate when the elements start animating towards their final properties.

Each individual element is decorated with a `data-auto-animate-target` attribute. The value of the attribute is a unique ID for this particular animation OR "unmatched" if this element should animate as unmatched content.
````

## src/upgrading.md

- Characters: 2559
- Tokens: 0

````markdown
---
id: upgrading
title: Upgrade Instructions
layout: default
---

# Upgrading From Version 3 to 4.0

We make a strong effort to avoid breaking changes but there are a couple in version 4.0. If you want to migrate an existing presentation follow these instructions.

### Update Asset Locations

Our JS and CSS assets have moved. In your presentation HTML, update the following `<script>` and `<link>` paths:

| Old location                     | New location                      |
| :------------------------------- | :-------------------------------- |
| js/reveal.js                     | dist/reveal.js                    |
| css/reset.css                    | dist/reset.css                    |
| css/reveal.css                   | dist/reveal.css                   |
| css/theme/&lt;theme-name&gt;.css | dist/theme/&lt;theme-name&gt;.css |
| lib/css/monokai.css              | plugin/highlight/monokai.css      |
| lib/js/head.min.js               | Deleted in 3.8.0                  |

{.key-value}

### Remove Print CSS from `<head>`

In your presentation HTML, remove the following script from the `<head>`. These styles are now baked into the reveal.css file.

```html
<script>
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi)
    ? 'css/print/pdf.css'
    : 'css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
</script>
```

### Plugin Registration

If you keep a copy of the v3 /plugin directory there are _no breaking changes_. If you want to switch to the latest plugin versions, you'll need to update your `Reveal.initialize()` call to use the [new plugin registration syntax](/plugins/). Plugins are also available as ES modules.

```html
<script src="dist/reveal.js"></script>
<script src="plugin/markdown/markdown.js"></script>
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown, RevealHighlight],
  });
</script>
```

### Removed Multiplex and Notes Server

The Multiplex and Notes Server plugins have moved out of reveal.js core to their own repositories. See their corresponding README's for usage instructions.

- https://github.com/reveal/multiplex
- https://github.com/reveal/notes-server

### Other

- Removed `Reveal.navigateTo`, use `Reveal.slide` instead.
- We've switched build systems to gulp & rollup. Make sure to `npm install` to get the latest dependencies. The server is still started with `npm start`, just like before.
````

## src/installation.md

- Characters: 3136
- Tokens: 0

````markdown
---
id: installation
title: Installation
layout: default
---

# Installation

We provide three different ways to install reveal.js depending on your use case and technical experience.

1. The [basic setup](#basic-setup) is the easiest way to get started. No need to set up any build tools.
1. The [full setup](#full-setup) gives you access to the build tools needed to make changes to the reveal.js source code. It includes a web server which is required if you want to load external Markdown files (the basic setup paired with your own choice of local web server works too).
1. If you want to use reveal.js as a dependency in your project, you can [install from npm](#installing-from-npm).

#### Next Steps

Once reveal.js is installed, we recommend checking out the [Markup](/markup/) and [Config Option](/config/) guides.

## Basic Setup

We make a point of distributing reveal.js in a way that it can be used by as many people as possible. The basic setup is our most broadly accessible way to get started and only requires that you have a web browser. There's no need to go through a build process or install any dependencies.

1. Download the latest reveal.js version <https://github.com/hakimel/reveal.js/archive/master.zip>
1. Unzip and replace the example contents in index.html with your own
1. Open index.html in a browser to view it

That's it 🚀

## Full Setup <span class="text-gray-500 font-normal">- Recommended</span>{id="full-setup"}

Some reveal.js features, like external Markdown, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](https://nodejs.org/) (10.0.0 or later)

1. Clone the reveal.js repository

   ```shell
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

1. Move to the reveal.js folder and install dependencies

   ```shell
   $ cd reveal.js && npm install
   ```

1. Serve the presentation and monitor source files for changes

   ```shell
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

### Development Server Port

The development server defaults to port 8000. You can use the `port` argument to switch to a different one:

```shell
npm start -- --port=8001
```

## Installing From npm

The framework is published to, and can be installed from, [npm](https://www.npmjs.com/package/reveal.js). Note that reveal.js is targeted at the browser and includes CSS, fonts and other assets so the npm dependency use case may be limited.

```shell
npm install reveal.js
# or
yarn add reveal.js
```

Once installed, you can include reveal.js as an ES module:

```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

You'll also need to include the reveal.js styles and a [presentation theme](/themes/).

```html
<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css" />
```
````

## src/layout.md

- Characters: 4669
- Tokens: 0

````markdown
---
id: layout
title: Layout
layout: default
---

# Layout

We provide a few different helper classes for controlling the layout and styling your content. We're aiming to add more of these in upcoming versions so keep an eye out for that.

If you're looking to change the sizing, scaling and centering of your presentation please see [Presentation Size](/presentation-size/).

## Stack

The `r-stack` layout helper lets you center and place multiple elements on top of each other. This is intended to be used together with [fragments](/fragments/) to incrementally reveal elements.

```html
<div class="r-stack">
  <img
    class="fragment"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

If you want to show each of the stacked elements individually you can adjust the fragment settings:

```html
<div class="r-stack">
  <img
    class="fragment fade-out"
    data-fragment-index="0"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment current-visible"
    data-fragment-index="0"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment fade-out" data-fragment-index="0" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment current-visible" data-fragment-index="0" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

## Fit Text

The `r-fit-text` class makes text as large as possible without overflowing the slide. This is great when you want BIG text without having to manually find the right font size. Powered by [fitty](https://github.com/rikschennink/fitty) ❤️

```html
<h2 class="r-fit-text">BIG</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">BIG</h2>
    </section>
  </div>
</div>

```html
<h2 class="r-fit-text">FIT TEXT</h2>
<h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">FIT TEXT</h2>
      <h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
    </section>
  </div>
</div>

## Stretch

The `r-stretch` layout helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide. For example, in the below example our slide contains a **title**, an **image** and a **byline**. Because the **image** has the `.r-stretch` class, its height is set to the slide height minus the combined height of the **title** and **byline**.

```html
<h2>Stretch Example</h2>
<img class="r-stretch" src="/images/slides-symbol-512x512.png" />
<p>Image byline</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>Stretch Example</h2>
      <img class="r-stretch" style="display: inline-block;" src="/images/slides-symbol-512x512.png">
      <p>Image byline</p>
    </section>
  </div>
</div>

#### Stretch Limitations

- Only direct descendants of a slide section can be stretched
- Only one descendant per slide section can be stretched

## Frame

Decorate any element with `r-frame` to make it stand out against the background. If the framed element is placed inside an anchor, we'll apply a hover effect to the border.

```html
<img src="logo.svg" width="200" />
<a href="#">
  <img class="r-frame" src="logo.svg" width="200" />
</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-symbol.svg" width="200">
      <a href="#">
        <img class="r-frame" src="/images/logo/reveal-symbol.svg" width="200">
      </a>
    </section>
  </div>
</div>
````

## src/events.md

- Characters: 2446
- Tokens: 0

````markdown
---
id: events
title: Events
layout: default
---

# Events

We dispatch a number of events to make it easy for you to react to changes in the presentation. `Reveal.on()` is used to add event listeners, and `Reveal.off()` is used to remove them.

```js
Reveal.on('eventname', callbackFunction);
```

## Ready

The `ready` event is fired when reveal.js has loaded all non-async dependencies and is ready to accept API calls. To check if reveal.js is already 'ready' you can call `Reveal.isReady()`.

```javascript
Reveal.on('ready', (event) => {
  // event.currentSlide, event.indexh, event.indexv
});
```

We also add a `.ready` class to the `.reveal` element so that you can hook into this with CSS.

The `Reveal.initialize` method also returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves when the presentation is ready. The following is synonymous to adding a listener for the `ready` event:

```javascript
Reveal.initialize().then(() => {
  // reveal.js is ready
});
```

## Slide Changed

The `slidechanged` event is fired each time the slide changes. The event object holds the index values of the current slide as well as a reference to the previous and current slide HTML elements.

Some libraries, like MathJax (see [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)), get confused by the transforms and display states of slides. Often times, this can be fixed by calling their update or render function from this callback.

```javascript
Reveal.on('slidechanged', (event) => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
});
```

## Slide Transition End

The `slidechanged` event fires instantly as soon as the slide changes. If you'd rather invoke your event listener when the slide has finished transitioning and is fully visible, you can use the `slidetransitionend` event. The `slidetransitionend` event includes the same event data as `slidechanged`.

```javascript
Reveal.on('slidetransitionend', (event) => {
  console.log(event.currentSlide);
});
```

## Resize

The `resize` event is fired when reveal.js changes the scale of the presentation.

```javascript
Reveal.on('resize', (event) => {
  // event.scale, event.oldScale, event.size
});
```

## Feature-specific Events

- [Overview mode events](/overview/#events)
- [Fragment events](/fragments/#events)
- [Auto-Slide events](/auto-slide/#events)
````

## src/touch-navigation.md

- Characters: 788
- Tokens: 0

````markdown
---
id: touch-navigation
title: Touch Navigation
layout: default
---

# Touch Navigation

You can swipe to navigate through a presentation on any touch-enabled device. Horizontal swipes change between horizontal slides, vertical swipes change between vertical slides.

If you wish to disable this you can set the `touch` config option to false when initializing.

```javascript
Reveal.initialize({
  touch: false,
});
```

If there's some part of your content that needs to remain accessible to touch events you'll need to highlight this by adding a `data-prevent-swipe` attribute to the element. One common example where this is useful is elements that need to be scrolled.

```html
<section>
  <p data-prevent-swipe>Can't change slides by swiping across this element.</p>
</section>
```
````

## Statistics

- Total Files: 118
- Total Characters: 345388
- Total Tokens: 0
