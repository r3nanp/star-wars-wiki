import useSWR from 'swr'
import { Resource } from '@/types/Resource'
import { fetchProxyResourceById } from '@/api'

export interface ResourceQueryHookConfig<T extends Resource> {
  initialData?: T
  enabled?: boolean
}

export interface ResourceQueryHookResult<T extends Resource> {
  data?: T
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  isSuccess: boolean
}

export const useResourceById = <T extends Resource>(
  id: string,
  type: string,
  queryConfig?: ResourceQueryHookConfig<T>
) => {
  let key: string[] | null = [type, id]
  if (queryConfig) {
    key = queryConfig?.enabled ? [type, id] : null
  }

  const { data, error } = useSWR(key, () => fetchProxyResourceById<T>(id, type))
  if (data) {
    data.id = id
    data.type = type
  }
  return {
    data,
    isLoading: !data && !error,
    isFetching: !data && !error,
    isError: !!error,
    isSuccess: !!data,
  }
}
