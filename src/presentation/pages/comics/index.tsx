import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container, Banner } from './styles'
import { ComicModel } from '../../../domain/models/comic'

interface SingleComicPagecomic {
  comic: ComicModel
  readMore: ComicModel[]
}

export function SingleComicPage ({ comic, readMore }: SingleComicPagecomic): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub - {comic.title}</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Banner>
            <Wrapper>
              <div className='thumbnail-container'>
                <NextImage src={comic.cover} width={350} height={540} />
              </div>
              <div className='info-container'>
                <h1>{comic.title}</h1>

                <div className="item">
                  <h1>Published:</h1>
                  <h2>{comic.publishedAt}</h2>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md">
                    <div className="item">
                      <h1>Writer:</h1>
                      <h2>{comic.writer}</h2>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="item">
                      <h1>Penciler:</h1>
                      <h2>{comic.penciler}</h2>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="item">
                  <h1>Cover Artist:</h1>
                  <h2>{comic.coverArtist}</h2>
                </div>

                {comic.description && (
                  <>
                    <hr />

                    <div className="item">
                      <h1>Description:</h1>
                      <p>{comic.description}</p>
                    </div>
                  </>
                )}

                <br />

                <Share />
              </div>
            </Wrapper>
          </Banner>

          <Wrapper>
            <ComicList title="Read More" data={readMore} />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
