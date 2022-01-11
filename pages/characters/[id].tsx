import { GetStaticPaths, GetStaticProps } from 'next'
import { SingleCharacterPage } from '../../src/presentation/pages/character'
import { makeRemoteLoadCharacterById } from '../../src/main/factories/usecases/remote-load-character-by-id'
import { makeRemoteLoadComicsList } from '../../src/main/factories/usecases/remote-load-comics'
import { withSSGErrorHandler } from '../../src/presentation/utils/withSSGErrorHandler'

export default function SingleCharacter (props): React.ReactElement {
  return <SingleCharacterPage {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = withSSGErrorHandler(async ctx => {
  const characterId = String(ctx.params.id)

  const remoteLoadCharacter = makeRemoteLoadCharacterById()
  const character = await remoteLoadCharacter.execute({
    id: characterId
  })

  const remoteLoadComics = makeRemoteLoadComicsList()
  const characterComics = await remoteLoadComics.execute({
    characters: characterId,
    offset: Math.floor(Math.random() * 100)
  })

  return {
    props: {
      character,
      characterComics: characterComics
    },
    revalidate: 60 * 60 * 24 * 30
  }
})
