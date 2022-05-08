import { Button, Card, Heading, Spinner } from '@/components'
import { usePlanetsInfiniteQuery } from '@/hooks/useSWRInfiniteQuery'

export default function Homeworld() {
  const { data, fetchMore, isLoading, canFetchMore, isFetchingMore } =
    usePlanetsInfiniteQuery()

  return isLoading ? (
    <div className="container-center my-2">
      <Spinner />
    </div>
  ) : (
    <section className="w-full py-2">
      <div className="h-screen pt-8">
        <Heading className="mb-4 border-b-2 border-primary text-primary">
          Planets
        </Heading>

        {data?.map(planets => (
          <Card
            path={`/planets/${planets.id}`}
            key={planets.id}
            name={planets.name}
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
