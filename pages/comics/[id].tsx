import { getMarvelApiClient } from '../../src/services/marvelApi'
import { GetStaticPaths, GetStaticProps } from 'next'
import { SingleComicPage } from '../../src/presentation/pages/comics'

export default function SingleComic (props): React.ReactElement {
  return <SingleComicPage {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const marvelApi = getMarvelApiClient()
  const { data: responseData } = await marvelApi.get('/comics', {
    params: {
      limit: 5,
      offset: Math.floor(Math.random() * 1000)
    }
  })

  const comics = responseData.data.results

  const paths = comics.map(comic => {
    return {
      params: {
        id: String(comic.id)
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const marvelApi = getMarvelApiClient()

  const { id } = ctx.params
  const { data: responseData } = await marvelApi.get(`/comics/${String(id)}`)

  if (responseData.code !== 200) {
    return {
      notFound: true
    }
  }

  const { data: responseComicsData } = await marvelApi.get('/comics', {
    params: {
      offset: Math.floor(Math.random() * 1000)
    }
  })

  const comicData = responseData.data.results[0]
  const comicsData = responseComicsData.data.results
  const readMoreData = comicsData.filter(comic => comic.id !== comicData.id)

  return {
    props: {
      id: comicData.id,
      title: comicData.title,
      cover: comicData.thumbnail.path + '.' + comicData.thumbnail.extension,
      publishedAt: comicData.dates[0].date,
      description: comicData.description,
      writer: comicData.creators.items.find(creator => creator.role === 'writer')?.name ?? 'Unknown',
      penciler: comicData.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
      coverArtist: comicData.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
      readMore: readMoreData.map(comic => {
        return {
          id: comic.id,
          title: comic.title,
          cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          description: comic.description,
          author: comicData.creators.items.find(creator => creator.role === 'writer')?.name ?? 'Unknown'
        }
      })
    },
    revalidate: 60 * 60 * 24 * 30
  }
}
