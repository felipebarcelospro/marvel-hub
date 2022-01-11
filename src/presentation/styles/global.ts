import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */
    --color-bg: #171A27;
    --color-bg-accent: #121520;

    --color-text: #fff;
    --color-text-secondary: rgba(255, 255, 255, 0.6);

    --color-border: rgba(255, 255, 255, 0.1);

    --color-primary-500: #ED1D24;
    --color-primary-400: #ED1F69;

    --color-black: #000000;
    --color-white: #ffffff;

    --color-gray-100: #f6f6f9;
    --color-gray-200: #f1f1f3;
    --color-gray-300: #e2e8f0;
    --color-gray-400: #a0aec0;
    --color-gray-500: #2d3748;

    --color-red-100: #fff5f5;
    --color-red-200: #feb2b2;
    --color-red-300: #f56565;
    --color-red-400: #9b2c2c;
    --color-red-500: #63171b;

    --color-orange-100: #fffaf0;
    --color-orange-200: #fbd38d;
    --color-orange-300: #ed8936;
    --color-orange-400: #9c4221;
    --color-orange-500: #652b19;

    --color-green-100: #f0fff4;
    --color-green-200: #9ae6b4;
    --color-green-300: #48bb78;
    --color-green-400: #276749;
    --color-green-500: #1c4532;

    --color-blue-100: #ebf8ff;
    --color-blue-200: #90cdf4;
    --color-blue-300: #4299e1;
    --color-blue-400: #2c5282;
    --color-blue-500: #1a365d;

    /* FONT-SIZE */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;

    /* LINE-HEIGHT */
    --line-height-xs: 1;
    --line-height-md: 1.5;
    --line-height-lg: 2;

    /* BREAKPOINTS */
    --breakpoints-sm: 30em;
    --breakpoints-md: 48em;
    --breakpoints-lg: 62em;
    --breakpoints-xl: 80em;

    /* SPACE */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 2.5rem;

    /* SIZES */
    --size-sm: 2rem;
    --size-md: 3rem;
    --size-lg: 4rem;

    /* BORDER-RADIUS */
    --radius-base: 0.8rem;
    --radius-full: 50%;

    /* Z-INDEX */
    --zindex-hide: -1;
    --zindex-dropdown: 1000;
    --zindex-sticky: 1100;
    --zindex-banner: 1200;
    --zindex-overlay: 1300;
    --zindex-modal: 1400;
    --zindex-popover: 1500;
    --zindex-toast: 1700;
    --zindex-tooltip: 1800;

    /* SIZES */
    --shadow: 0 .6rem .6rem 0 rgba(0, 0, 0, 0.25);

    /* FONT-FAMILY */
    --font-family: 'Inter', sans-serif;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    margin: 0;
    
    line-height: 140%;
    font-weight: 400;

    background: var(--color-bg);
    
    color: var(--color-white);
    font-family: sans-serif;
  }

  .row {
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin: 0 var(--space-sm);

      &:first-child {
        margin-left: 0;
        margin-right: var(--space-sm);
      }

      &:last-child {
        margin-left: var(--space-sm);
        margin-right: 0;
      }

      @media only screen and (max-width: 468px) {
        padding: 0;
        width: 100% !important;
      }
    }

    .col-sm {
      width: calc(25% - var(--space-sm)) !important;
    }

    .col-md {
      width: calc(50% - var(--space-sm)) !important;
    }

    .col-lg {
      width: calc(75% - var(--space-sm)) !important;
    }

    .col-xl {
      width: calc(100% - var(--space-sm)) !important;
    }
  }
`

export { GlobalStyle }
