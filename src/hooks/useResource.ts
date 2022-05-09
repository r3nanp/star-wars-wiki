import useSWR from 'swr'
import { Resource } from '@/types/Resource'
import { fetchResource } from '@/api'
import { urlToIdAndType } from '@/utils'

export const useResource = <T extends Resource>(url: string) => {

  const [id, type] = urlToIdAndType(url)
  const { data, error } = useSWR([type, id], () => fetchResource<T>(url))

  if (data) {
    data.id = id
    data.type = type
  }

  return {
    data,
    isLoading: !data,
    isFetching: !data,
    isError: !!error,
    isSuccess: !!data,
  }
}
