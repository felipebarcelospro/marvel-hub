import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container, Banner } from '../../styles/pages/comics'
import { Comic } from '../../components/comic-list/components/comic-list-item'
import { getMarvelApiClient } from '../../services/marvelApi'
import { GetStaticPaths, GetStaticProps } from 'next'

interface SingleComicProps {
  id: number
  title: string
  cover: string
  publishedAt: string
  writer: string
  penciler: string
  coverArtist: string
  description: string
  readMore: Comic[]
}

export default function SingleComic (props: SingleComicProps): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub - {props.title}</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Banner>
            <Wrapper>
              <div className='thumbnail-container'>
                <NextImage src={props.cover} width={350} height={540} />
              </div>
              <div className='info-container'>
                <h1>{props.title}</h1>

                <div className="item">
                  <h1>Published:</h1>
                  <h2>{props.publishedAt}</h2>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md">
                    <div className="item">
                      <h1>Writer:</h1>
                      <h2>{props.writer}</h2>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="item">
                      <h1>Penciler:</h1>
                      <h2>{props.penciler}</h2>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="item">
                  <h1>Cover Artist:</h1>
                  <h2>{props.coverArtist}</h2>
                </div>

                {props.description && (
                  <>
                    <hr />

                    <div className="item">
                      <h1>Description:</h1>
                      <p>{props.description}</p>
                    </div>
                  </>
                )}

                <br />

                <Share />
              </div>
            </Wrapper>
          </Banner>

          <Wrapper>
            <ComicList title="Read More" data={props.readMore} />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
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
