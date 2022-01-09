import Head from 'next/head'
import { Banner } from '../components/banner'
import { CharacterList } from '../components/character-list'
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
                name: 'Wanda Maximoff',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
                count: '250'
              },
              {
                name: 'Vision',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg',
                count: '250'
              },
              {
                name: 'Captain America',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/cap_ons_crd_01.jpg',
                count: '250'
              },
              {
                name: 'Winter Soldier',
                avatarUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg',
                count: '250'
              }
            ]}
          />
        </Wrapper>
      </AppLayout>
    </>
  )
}
