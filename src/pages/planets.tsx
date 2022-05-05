import { usePlanetsInfiniteQuery } from '@/hooks/useSWRInfiniteQuery'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../services/api'

export default function Homeworld() {
  const { data, fetchMore, isLoading } = usePlanetsInfiniteQuery()

  return isLoading ? (
    <h1 className="text-2xl">Loading...</h1>
  ) : (
    <section></section>
  )
}
