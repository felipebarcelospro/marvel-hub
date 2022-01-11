import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Banner, Container } from '../../styles/pages/characters'
import { Character } from '../../components/character-list/components/character-list-item'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getMarvelApiClient } from '../../services/marvelApi'

interface SingleCharacterProps {
  character: Character
}

export default function SingleCharacter ({ character }: SingleCharacterProps): React.ReactElement {
  const { name, description, comics, avatarUrl } = character

  return (
    <>
      <NextHead>
        <title>Marvel Hub - {name}</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Banner>
            <Wrapper>
              <div className='thumbnail-container'>
                <div className="thumbnail">
                  <NextImage src={avatarUrl} width={350} height={350} />
                </div>
              </div>
              <div className='info-container'>
                <h1>{name}</h1>

                {description && (
                  <>
                    <hr />

                    <div className="item">
                      <h1>Description:</h1>
                      <p>{description}</p>
                    </div>

                    <br />
                  </>
                )}

                <Share />
              </div>
            </Wrapper>
          </Banner>

          <Wrapper>
            <ComicList
              title={`Comics of ${name}`}
              data={comics}
            />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
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
