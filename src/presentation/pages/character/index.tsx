import NextImage from 'next/image'
import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { Share } from '../../components/share'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Banner, Container } from './styles'
import { CharacterModel } from '../../../domain/models/character'
import { ComicModel } from '../../../domain/models/comic'

interface SingleCharacterProps {
  character: CharacterModel
  characterComics: ComicModel[]
}

export function SingleCharacterPage ({ character, characterComics }: SingleCharacterProps): React.ReactElement {
  const { name, description, cover } = character

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
                  <NextImage src={cover} width={350} height={350} />
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
            <ComicList title={`Comics of ${name}`} data={characterComics} />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
