import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // styled-componentsでテーマを使用するためにThemeProviderを使用
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
