import { Button, Card } from '@/components'
import { usePlanetsInfiniteQuery } from '@/hooks/useSWRInfiniteQuery'

export default function Homeworld() {
  const { data, fetchMore, isLoading, canFetchMore, isFetchingMore } = usePlanetsInfiniteQuery()

  return isLoading ? (
    <h1 className="text-2xl">Carregando...</h1>
  ) : (
    <section className="w-full py-2">
      <div className="h-screen pt-8 rounded-lg align-center">
        <h1 className="text-2xl mb-4 font-bold border-b-2 border-black">
          Planets
        </h1>

        {data?.map(planets => (
          <Card
            path={`/planets/${planets.id}`}
            key={planets.name}
            name={planets.name}
          />
        ))}

        <Button
          onClick={fetchMore}
          disabled={!canFetchMore || !!isFetchingMore}
          content={
            isFetchingMore
              ? 'Carregando mais planetas...'
              : canFetchMore
              ? 'Carregue mais planetas!'
              : 'Acabou :('
          }
        />
      </div>
    </section>

  )
}
