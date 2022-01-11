import { GetStaticPaths, GetStaticProps } from 'next'
import { SingleComicPage } from '../../src/presentation/pages/comics'
import { makeRemoteLoadComicById } from '../../src/main/factories/usecases/remote-load-comic-by-id'
import { makeRemoteLoadComicsList } from '../../src/main/factories/usecases/remote-load-comics'

export default function SingleComic (props): React.ReactElement {
  return <SingleComicPage {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const remoteLoadComics = makeRemoteLoadComicsList()
  const comics = await remoteLoadComics.execute({
    limit: 5,
    offset: Math.floor(Math.random() * 1000)
  })

  const paths = comics.data.results.map(comic => {
    return {
      params: {
        id: String(comic.id)
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params

  const remoteLoadComicById = makeRemoteLoadComicById()
  const remoteLoadComics = makeRemoteLoadComicsList()

  const comic = await remoteLoadComicById.execute({ id: String(id) })
  const readMore = await remoteLoadComics.execute({
    limit: 5,
    offset: Math.floor(Math.random() * 1000)
  })

  return {
    props: {
      comic,
      readMore: readMore.data.results
    },
    revalidate: 60 * 60 * 24 * 30
  }
}