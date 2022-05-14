export interface BaseQueryHookResult<T> {
  data?: T[]
  fetchMore: () => void
  isLoading: boolean
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  canFetchMore?: boolean
  isFetchingMore?: string | boolean
}
