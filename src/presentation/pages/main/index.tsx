import NextHead from 'next/head'

import { Banner } from '../../components/banner'
import { CharacterList } from '../../components/character-list'
import { Character } from '../../components/character-list/components/character-list-item'
import { ComicList } from '../../components/comic-list'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { ComicModel } from '../../../domain/models/comics'

interface MainPageProps {
  characters: Character[]
  comics: ComicModel[]
  spiderManComics: ComicModel[]
  ironManComics: ComicModel[]
  featuredComics: ComicModel[]
}

export function MainPage ({ characters, comics, spiderManComics, ironManComics, featuredComics }: MainPageProps): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub</title>
      </NextHead>

      <AppLayout>
        <Wrapper>
          <Banner
            href="#"
            src="/banner-spiderman.webp"
            title="The Amazing Spider-Man (2018) #74"
            createdAt="09 Jan 2022"
          />
          <CharacterList title="BEST CHARACTERS" data={characters} />

          <ComicList title="Featured" data={comics} />
          <ComicList title="Best Of 2021" data={featuredComics} />
          <ComicList title="Comics of Spider Man" data={spiderManComics} />
          <ComicList title="Comics of Iron Man" data={ironManComics} />
        </Wrapper>
      </AppLayout>
    </>
  )
}
