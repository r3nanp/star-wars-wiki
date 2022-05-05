import { api } from '@/services/api'
import { Character } from '@/types/Character'
import { Planets } from '@/types/Planets'
import { urlToIdAndType } from '@/utils/urlToTypeAndId'
import { ResourceFetcher, ResourceFetcherById } from './types'

export const fetchResourceById: ResourceFetcherById = async <T>(
  id: string,
  type: string
) => {
  const url = `https://swapi.dev/api/${type}/${id}`
  return fetchResource<T>(url)
}

export const fetchResource: ResourceFetcher = async <T>(url: string) => {
  const response = await api.get(url)
  const data = response.data
  return data as T
}

export const fetchPlanetsList = async (url = '/planets') => {
  const resp = await api.get(url)

  const data = resp.data

  data.results.forEach((planet: Planets) => {
    const [id, type] = urlToIdAndType(planet.url)

    planet.id = id
    planet.type = type

    return planet
  })

  return data
}
export const fetchCharacterList = async (url = '/people') => {
  const resp = await api.get(url)

  const data = resp.data

  data.results.forEach((character: Character) => {
    const [id, type] = urlToIdAndType(character.url)

    character.id = id
    character.type = type

    return character
  })

  return data
}

export const fetchPlanets = async () => {
  const { data: worlds } = await api.get(`/planets`)
}

export const fetchProxyResourceById: ResourceFetcherById = async <T>(
  id: string,
  type: string
) => {
  const url = `/api/${type}/${id}`
  return fetchResource<T>(url)
}
