export interface MarvelHttpResponse<T = any> {
  code: number
  status: string
  etag: string
  data: {
    offset: 0
    limit: 20
    total: 30920
    count: 20
    results: T
  }
}
