import axios, { AxiosResponse } from 'axios'
import md5 from 'md5'

import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http/http-client'
import { MarvelHttpResponse } from '../../data/protocols/http/marvel-http-response'

export class MarvelHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse<MarvelHttpResponse>> {
    const publicKey = process.env.NEXT_PUBLIC_MARVELAPI_PUBLIC_TOKEN
    const privateKey = process.env.NEXT_PUBLIC_MARVELAPI_PRIVATE_TOKEN

    const timestamp = new Date().getTime()
    const hash = md5(timestamp + privateKey + publicKey)

    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: `https://gateway.marvel.com:443/v1/public/${data.url}`,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash,
          ...data.params
        }
      })
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
