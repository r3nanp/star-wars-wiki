import '@/styles/reset.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

import SEOConfig from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <NextSeo {...SEOConfig} />

      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
