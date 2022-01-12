import { GetStaticProps } from 'next'
import { MainPage } from '../src/presentation/pages/main'
import { makeRemoteLoadComicsList } from '../src/main/factories/usecases/remote-load-comics'
import { makeRemoteLoadCharactersList } from '../src/main/factories/usecases/remote-load-characters'

export default function Main (props): React.ReactElement {
  return <MainPage {...props} />
}

export const getStaticProps: GetStaticProps = async ctx => {
  const remoteLoadComics = makeRemoteLoadComicsList()
  const remoteLoadCharacters = makeRemoteLoadCharactersList()

  const characters = await remoteLoadCharacters.execute({
    limit: 10,
    offset: Math.floor(Math.random() * 100)
  })

  const comics = await remoteLoadComics.execute({
    limit: 5,
    offset: Math.floor(Math.random() * 100)
  })

  const featuredComics = await remoteLoadComics.execute({
    limit: 5,
    dateRange: '2021-01-01,2021-12-31',
    offset: Math.floor(Math.random() * 100)
  })

  const spiderManComics = await remoteLoadComics.execute({
    characters: '1014858',
    limit: 5,
    offset: Math.floor(Math.random() * 100)
  })

  const ironManComics = await remoteLoadComics.execute({
    characters: '1009368',
    limit: 5,
    offset: Math.floor(Math.random() * 100)
  })

  return {
    props: {
      characters: characters,
      comics: comics,
      featuredComics: featuredComics,
      spiderManComics: spiderManComics,
      ironManComics: ironManComics
    },
    revalidate: 60 * 60 * 24 * 30
  }
}
