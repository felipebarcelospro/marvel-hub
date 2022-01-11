import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Comic } from '../../components/comic-list/components/comic-list-item'
import { Container, Banner } from './styles'

interface SingleComicPageProps {
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

export function SingleComicPage (props: SingleComicPageProps): React.ReactElement {
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
