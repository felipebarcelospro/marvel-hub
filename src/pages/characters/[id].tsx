import NextImage from 'next/image'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Banner, Container } from '../../styles/pages/characters'

export default function SingleCharacter (): React.ReactElement {
  return (
    <AppLayout>
      <Container>
        <Banner>
          <Wrapper>
            <div className='thumbnail-container'>
              <div className="thumbnail">
                <NextImage src='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' width={350} height={350} />
              </div>
            </div>
            <div className='info-container'>
              <h1>3-D Man</h1>

              <hr />

              <div className="item">
                <h1>Description:</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum nam assumenda eos, asperiores cupiditate velit ipsam fuga iste sunt rem alias, minus laboriosam neque quia beatae atque. Eos, eaque.</p>
              </div>

              <br />

              <Share />
            </div>
          </Wrapper>
        </Banner>

        <Wrapper>
          <ComicList
            title="Comics of 3-D Man"
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
  )
}
