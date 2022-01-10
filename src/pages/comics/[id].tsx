import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container, Banner } from '../../styles/pages/comics'

export default function SingleComic (): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub - Comic</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Banner>
            <Wrapper>
              <div className='thumbnail-container'>
                <NextImage src='https://i.annihil.us/u/prod/marvel/i/mg/5/c0/61ae1d0674d31/clean.jpg' width={350} height={540} />
              </div>
              <div className='info-container'>
                <h1>Star Wars: Doctor Aphra (2020) #17</h1>

                <div className="item">
                  <h1>Published:</h1>
                  <h2>January 05, 2022</h2>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md">
                    <div className="item">
                      <h1>Writer:</h1>
                      <h2>Alyssa Wong</h2>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="item">
                      <h1>Penciler:</h1>
                      <h2>Minkyu Jung</h2>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="item">
                  <h1>Cover Artist:</h1>
                  <h2>Sara Pichelli</h2>
                </div>

                <hr />

                <div className="item">
                  <h1>Cover Artist:</h1>
                  <p>EVOCATIONS! DOCTOR APHRA and SANA STARROS stumble upon a STRANGE RITUAL...And STRANGER ENEMY! Will they fall victim to a practitioner of an ANCIENT CULT?</p>
                </div>

                <br />

                <Share />
              </div>
            </Wrapper>
          </Banner>

          <Wrapper>
            <ComicList
              title="Best of Spider Man"
              data={[
                {
                  id: '1',
                  title: 'Black Widow #13',
                  cover: 'https://i.annihil.us/u/prod/marvel/i/mg/3/90/61d4c5184d772/portrait_uncanny.jpg',
                  author: 'Thompson, Pimentel'
                },
                {
                  id: '1',
                  title: 'The Amazing Spider-Man #84',
                  cover: 'https://i.annihil.us/u/prod/marvel/i/mg/f/40/61d4c41cded7e/portrait_uncanny.jpg',
                  author: 'Ziglar, Medina'
                },
                {
                  id: '1',
                  title: 'Wastelanders: Doom #1',
                  cover: 'https://i.annihil.us/u/prod/marvel/i/mg/9/70/61d4c517ae86c/portrait_uncanny.jpg',
                  author: 'Gronbekk, Ohta'
                },
                {
                  id: '1',
                  title: 'Shang-Chi #7',
                  cover: 'https://i.annihil.us/u/prod/marvel/i/mg/c/00/61d4c4fa11be9/portrait_uncanny.jpg',
                  author: 'Yang, Ruan'
                },
                {
                  id: '1',
                  title: 'Captain Marvel #35',
                  cover: 'https://i.annihil.us/u/prod/marvel/i/mg/3/d0/61d4c4386681f/portrait_uncanny.jpg',
                  author: 'Thompson, Davila'
                }
              ]}
            />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
