import { GetStaticProps } from 'next'
import { MainPage } from '../src/presentation/pages/main'
import { makeRemoteLoadComicsList } from '../src/main/factories/usecases/remote-load-comics'

export default function Main (props): React.ReactElement {
  return <MainPage {...props} />
}

export const getStaticProps: GetStaticProps = async ctx => {
  const remoteLoadComics = makeRemoteLoadComicsList()

  const comics = await remoteLoadComics.execute({
    limit: 5
  })

  const featuredComics = await remoteLoadComics.execute({
    limit: 5,
    dateRange: '2021-01-01,2021-12-31'
  })

  const spiderManComics = await remoteLoadComics.execute({
    characters: '1014858',
    limit: 5
  })

  const ironManComics = await remoteLoadComics.execute({
    characters: '1009368',
    limit: 5
  })

  return {
    props: {
      characters: [],
      comics: comics.data.results,
      featuredComics: featuredComics.data.results,
      spiderManComics: spiderManComics.data.results,
      ironManComics: ironManComics.data.results
    }
  }
}
