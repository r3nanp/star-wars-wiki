import { GetStaticProps } from 'next'
import { api } from '../services/api'

export default function Home({ characters }) {
  return (
    <main className="h-screen px-6 bg-gray-500">
      {characters.map(character => (
        <div key={character.name}>
          <h1>{character.homeworld}</h1>
          <strong>{character.name}</strong>
        </div>
      ))}

    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/people')

  const characters = data.results

  return {
    props: {
      characters,
    },
  }
}
