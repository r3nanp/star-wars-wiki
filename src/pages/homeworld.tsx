import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../services/api'

export default function Homeworld() {
  return (
    <main className="h-screen">
      <h1>hahaha</h1>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  const { data: worlds } = await api.get(`/planets`)

  return {
    props: {
      worlds,
    },
  }
}
