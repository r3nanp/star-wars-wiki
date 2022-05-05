export type ResourceFetcher = <T>(url: string) => Promise<T>

export type ResourceFetcherById = <T>(id: string, type: string) => Promise<T>
