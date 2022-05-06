import type { NextPage } from 'next'

import { Button, Card } from '@/components'
import { useCharactersInfiniteQuery } from '@/hooks/useSWRInfiniteQuery'

export const Home: NextPage = () => {
  const { isLoading, fetchMore, canFetchMore, data, isFetchingMore } =
    useCharactersInfiniteQuery()

  return isLoading ? (
    <>
      <h1 className="text-xl">Loading...</h1>
    </>
  ) : (
    <section className="w-full py-2">
      <div className="h-screen pt-8 rounded-lg align-center">
        <h1 className="text-2xl mb-4 font-bold border-b-2 border-black">
          Characters
        </h1>

        {data?.map(character => (
          <Card
            path={`/characters/${character.id}`}
            key={character.name}
            name={character.name}
          />
        ))}

        <Button
          onClick={fetchMore}
          disabled={!canFetchMore || !!isFetchingMore}
          content={
            isFetchingMore
              ? 'Carregando mais personagens...'
              : canFetchMore
              ? 'Carregue mais personagens!'
              : 'Acabou :('
          }
        />
      </div>
    </section>
  )
}

export default Home
