import { api } from '@/services/api'
import { Character } from '@/types/Character'
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
  const resp = await api.get(url)
  const data = resp.data
  return data as T
}

export const fetchCharacterList = async (
  url = '/people'
) => {
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
