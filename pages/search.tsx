import NextHead from 'next/head'

import { ComicList } from '../src/presentation/components/comic-list'
import { SearchInput } from '../src/presentation/components/search-input'
import { Wrapper } from '../src/presentation/components/wrapper'
import { AppLayout } from '../src/presentation/layouts/app-layouts'
import { Container } from '../src/presentation/styles/pages/search'

export default function Search (): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub - Search</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Wrapper>
            <SearchInput />
            <ComicList
              title="Explore"
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
