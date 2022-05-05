import '@/styles/reset.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

import SEOConfig from '../next-seo.config'
import { Container } from '@/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <NextSeo {...SEOConfig} />

      <Container>
        <Component {...pageProps} />
      </Container>
    </AnimatePresence>
  )
}

export default MyApp
