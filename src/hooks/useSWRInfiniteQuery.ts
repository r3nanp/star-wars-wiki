import useSWRInfinite from 'swr/infinite'

import { fetchCharacterList, fetchPlanetsList } from '@/api'
import { BaseQueryHookResult, Planets, Character } from '@/types'
import { urlToIdAndType } from '@/utils'

interface CharactersQueryHookResult extends BaseQueryHookResult<Character> {}

interface PlanetsQueryHookResult extends BaseQueryHookResult<Planets> {}

export const useCharactersInfiniteQuery = (): CharactersQueryHookResult => {
  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    index => `https://swapi.dev/api/people/?page=${index + 1}`,
    fetchCharacterList
  )

  let result: Character[] = []
  data?.forEach(page => {
    const characters = page?.results.map((character: Character) => {
      const [id, type] = urlToIdAndType(character.url)

      character.id = id
      character.type = type
      return character
    })

    if (characters?.length) {
      result = result.concat(characters)
    }
  })

  return {
    data: result,
    fetchMore: () => {
      setSize(size + 1)
    },
    isLoading: !data && !error,
    isFetching: !data && !error,
    isError: !!error,
    isSuccess: !!data,
    canFetchMore: !!(data && data[data?.length - 1].next),
    isFetchingMore: !!(data && data[data?.length - 1].next) && isValidating,
  }
}

export const usePlanetsInfiniteQuery = (): PlanetsQueryHookResult => {
  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    index => `https://swapi.dev/api/planets/?page=${index + 1}`,
    fetchPlanetsList
  )

  let result: Planets[] = []

  data?.forEach(page => {
    const planets = page?.results.map((planet: Planets) => {
      const [id, type] = urlToIdAndType(planet.url)

      planet.id = id
      planet.type = type
      return planet
    })
    if (planets?.length) {
      result = result.concat(planets)
    }
  })

  return {
    data: result,
    fetchMore: () => {
      setSize(size + 1)
    },
    isLoading: !data && !error,
    isFetching: !data && !error,
    isError: !!error,
    isSuccess: !!data,
    canFetchMore: !!(data && data[data?.length - 1].next),
    isFetchingMore: !!(data && data[data?.length - 1].next) && isValidating,
  }
}
