import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
}

export const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>

      <link rel="shortcut icon" href="/logo.svg" />
      <meta name="keywords" content="star wars, nerd, wiki" />
      <meta name="description" content={description} />
    </Head>
  )
}
