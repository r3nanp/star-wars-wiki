import type { NextPage } from 'next'

import { Button, Card, Heading } from '@/components'
import { useCharactersInfiniteQuery } from '@/hooks'

export const Home: NextPage = () => {
  const { data, fetchMore, isLoading, canFetchMore, isFetchingMore } =
    useCharactersInfiniteQuery()

  return isLoading ? (
    <>
      <h1 className="text-xl">Loading...</h1>
    </>
  ) : (
    <section className="w-full py-2">
      <div className="h-screen pt-8">
        <Heading className="mb-4 border-b-2 border-primary text-primary">
          Characters
        </Heading>

        {data?.map(character => (
          <Card
            key={character.id}
            name={character.name}
            path={`/characters/${character.id}`}
          />
        ))}

        <div className="flex justify-center pb-4 items-center">
          <Button
            onClick={fetchMore}
            disabled={!canFetchMore || !!isFetchingMore}
            isLoading={!!isFetchingMore}
          >
            {isFetchingMore
              ? 'Loading more...'
              : canFetchMore
              ? 'Load more, please!'
              : 'My job is done'}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
