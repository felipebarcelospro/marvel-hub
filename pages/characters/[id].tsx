import { GetStaticPaths, GetStaticProps } from 'next'
import { getMarvelApiClient } from '../../src/services/marvelApi'
import { SingleCharacterPage } from '../../src/presentation/pages/character'

export default function SingleCharacter (props): React.ReactElement {
  return <SingleCharacterPage {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const marvelApi = getMarvelApiClient()
  const { data: responseData } = await marvelApi.get('/characters', {
    params: {
      limit: 5
    }
  })

  const characters = responseData.data.results

  const paths = characters.map(character => {
    return {
      params: {
        id: String(character.id)
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
  const { data: responseData } = await marvelApi.get(`/characters/${String(id)}`)

  if (responseData.code !== 200) {
    return {
      notFound: true
    }
  }

  const { data: responseComicsData } = await marvelApi.get(`/characters/${String(id)}/comics`)

  const comicsData = responseComicsData.data.results
  const characterData = responseData.data.results[0]

  const comics = comicsData.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description,
      author: comic.creators.items[0]?.name ?? null
    }
  })

  const character = {
    id: characterData.id,
    avatarUrl: `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`,
    name: characterData.name,
    description: characterData.description,
    comics: comics
  }

  return {
    props: {
      character
    }
  }
}
