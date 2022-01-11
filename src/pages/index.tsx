import { GetStaticProps } from 'next'
import NextHead from 'next/head'

import { Banner } from '../components/banner'
import { CharacterList } from '../components/character-list'
import { Character } from '../components/character-list/components/character-list-item'
import { ComicList } from '../components/comic-list'
import { Comic } from '../components/comic-list/components/comic-list-item'
import { Wrapper } from '../components/wrapper'
import { AppLayout } from '../layouts/app-layouts'
import { getMarvelApiClient } from '../services/marvelApi'

interface MainProps {
  characters: Character[]
  comics: Comic[]
  spiderManComics: Comic[]
  ironManComics: Comic[]
  featuredComics: Comic[]
}

export default function Main ({ characters, comics, spiderManComics, ironManComics, featuredComics }: MainProps): React.ReactElement {
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

export const getStaticProps: GetStaticProps = async ctx => {
  const marvelApi = getMarvelApiClient()

  const { data: responseCharactersData } = await marvelApi.get('/characters', {
    params: {
      limit: 10,
      offset: Math.floor(Math.random() * 1000)
    }
  })

  const { data: responseComicsData } = await marvelApi.get('/comics', {
    params: {
      limit: 5,
      offset: Math.floor(Math.random() * 1000)
    }
  })

  const { data: responseFeaturedComicsData } = await marvelApi.get('/comics', {
    params: {
      limit: 5,
      offset: Math.floor(Math.random() * 1000),
      dateRange: '2021-01-01,2021-12-31'
    }
  })

  const { data: responseComicsSpiderManData } = await marvelApi.get('/characters/1014858/comics', {
    params: {
      limit: 5,
      offset: Math.floor(Math.random() * 20)
    }
  })

  const { data: responseComicsIronManData } = await marvelApi.get('/characters/1009368/comics', {
    params: {
      limit: 5,
      offset: Math.floor(Math.random() * 20)
    }
  })

  const charactersData = responseCharactersData.data.results
  const characters = charactersData.map(character => {
    return {
      id: character.id,
      avatarUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      name: character.name,
      description: character.description,
      comicsCount: character.comics.available,
      comics: []
    }
  })

  const comicsData = responseComicsData.data.results
  const comics = comicsData.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      author: comic.creators.items[0]?.name ?? null
    }
  })

  const featuredComicsData = responseFeaturedComicsData.data.results
  const featuredComics = featuredComicsData.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      author: comic.creators.items[0]?.name ?? null
    }
  })

  const spiderManComicsData = responseComicsSpiderManData.data.results
  const spiderManComics = spiderManComicsData.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      author: comic.creators.items[0]?.name ?? null
    }
  })

  const ironManComicsData = responseComicsIronManData.data.results
  const ironManComics = ironManComicsData.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      author: comic.creators.items[0]?.name ?? null
    }
  })

  return {
    props: {
      characters,
      comics,
      featuredComics,
      spiderManComics,
      ironManComics
    }
  }
}
