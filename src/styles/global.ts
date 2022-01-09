import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #171A27;
    --color-bg-accent: #f50057;

    --color-text: #fff;
    --color-text-secondary: rgba(255, 255, 255, 0.6);

    --color-border: rgba(255, 255, 255, 0.1);

    --color-primary-500: #ED1D24;
    --color-primary-400: #ED1F69;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-bg);
    font-size: 14px;
    color: var(--color-white);
    font-family: sans-serif;
  }
`

export { GlobalStyle }
