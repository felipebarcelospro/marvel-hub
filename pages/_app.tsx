
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/presentation/styles/global'

function MyApp ({ Component, pageProps }): React.ReactElement {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
