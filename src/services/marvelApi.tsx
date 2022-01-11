import axios, { AxiosInstance } from 'axios'
import md5 from 'md5'

export function getMarvelApiClient (): AxiosInstance {
  const publicKey = '1c7568a2a8d15659b8a393049d27a6ef'
  const privateKey = '026260f22b344b578ae7ef17b4cf7858cf4e6257'

  const timestamp = new Date().getTime()
  const hash = md5(timestamp + privateKey + publicKey)

  const marvelApiClient = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
      ts: timestamp,
      apikey: publicKey,
      hash
    }
  })

  marvelApiClient.interceptors.response.use(
    response => response,
    async error => {
      console.error(error)
      return await Promise.reject(error)
    }
  )

  return marvelApiClient
}
