import type { GetStaticProps, NextPage } from 'next'

import { api } from '@/services/api'
import { SEO } from '@/components/SEO'
import { Card } from '../components/Card'
import { Header } from '@/components/Header'
import { Character } from '@/types/Character'
import { urlToIdAndType } from '@/utils/urlToTypeAndId'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { fetchCharacterList } from '@/api/fetcher'

type HomeProps = {
  characters: Character[]
}

export const Home: NextPage<HomeProps> = ({ characters }) => {
  return (
    <main>
      <Header />

      <section className="flex flex-col align-center justify-center">
        <div className="grid place-items-center grid-rows-1 gap-2 px-4 md:grid-cols-2 md:grid-rows-1">
          {characters.map(character => (
            <Card
              path={`/${character.id}`}
              key={character.id}
              name={character.name}
              description="haha"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchCharacterList()

  return {
    props: {
      characters: data,
    },
  }
}

export default Home
