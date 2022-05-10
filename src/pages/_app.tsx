import '@/styles/reset.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'

import SEOConfig from '../next-seo.config'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo {...SEOConfig} />

      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="keywords" content="star wars, nerd, wiki" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
