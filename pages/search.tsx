import { GetStaticProps } from 'next'
import { makeRemoteLoadComicsList } from '../src/main/factories/usecases/remote-load-comics'
import { SearchPage } from '../src/presentation/pages/search'

export default function Search (props): React.ReactElement {
  return <SearchPage {...props} />
}

export const getStaticProps: GetStaticProps = async ctx => {
  const remoteLoadComics = makeRemoteLoadComicsList()

  const comics = await remoteLoadComics.execute({
    limit: 5,
    dateRange: '2021-01-01,2021-12-31',
    offset: Math.floor(Math.random() * 100)
  })

  return {
    props: {
      comics: comics.data.results
    },
    revalidate: 60 * 60 * 24 * 30
  }
}
