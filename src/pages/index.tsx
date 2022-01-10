import Head from 'next/head'
import { Banner } from '../components/banner'
import { CharacterList } from '../components/character-list'
import { ComicList } from '../components/comic-list'
import { Wrapper } from '../components/wrapper'
import { AppLayout } from '../layouts/app-layouts'

export default function Main (): React.ReactElement {
  return (
    <>
      <Head>
        <title>Marvel Hub</title>
      </Head>

      <AppLayout>
        <Wrapper>
          <Banner
            href="#"
            src="/banner-spiderman.jpeg"
            title="The Amazing Spider-Man (2018) #74"
            createdAt="09 Jan 2022"
          />
          <CharacterList
            title="BEST CHARACTERS"
            data={[
              {
                id: '1',
                name: 'Wanda Maximoff',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
                comicsCount: '250'
              },
              {
                id: '1',
                name: 'Vision',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg',
                comicsCount: '250'
              },
              {
                id: '1',
                name: 'Captain America',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/cap_ons_crd_01.jpg',
                comicsCount: '250'
              },
              {
                id: '1',
                name: 'Winter Soldier',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg',
                comicsCount: '250'
              },
              {
                id: '1',
                name: 'Black Window',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
                comicsCount: '250'
              }
            ]}
          />
          <ComicList
            title="Featured"
            data={[
              {
                id: '1',
                title: 'Captain America/Iron Man #2',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/9/50/61d4c516beb76/portrait_uncanny.jpg',
                author: 'Landy, Unzueta'
              },
              {
                id: '1',
                title: 'Star Wars: Doctor Aphra #17',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/5/c0/61ae1d0674d31/portrait_uncanny.jpg',
                author: 'Landy, Unzueta'
              },
              {
                id: '1',
                title: 'Luke Cage: City of Fire #1',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/e/50/61ae2bc0a4c3e/portrait_uncanny.jpg',
                author: 'Landy, Unzueta'
              },
              {
                id: '1',
                title: 'Inferno #4',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/8/f0/61d4c4fa3053f/portrait_uncanny.jpg',
                author: 'Hickman, Schiti'
              },
              {
                id: '1',
                title: 'Elektra: Black, White & Blood #1',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/2/b0/61d4c4193a204/portrait_uncanny.jpg',
                author: 'Soule, DARMINI'
              }
            ]}
          />
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
          <ComicList
            title="Best of 2021"
            data={[
              {
                id: '1',
                title: 'Warhammer 40,000: Sisters of Battle #5',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/61d4c4de544f0/portrait_uncanny.jpg',
                author: 'Gronbekk, Salazar'
              },
              {
                id: '1',
                title: 'X-Men #6',
                cover: 'https://i.annihil.us/u/prod/marvel/i/mg/c/20/61d4c4de3be62/portrait_uncanny.jpg',
                author: 'Duggan, Larraz'
              }
            ]}
          />
        </Wrapper>
      </AppLayout>
    </>
  )
}
