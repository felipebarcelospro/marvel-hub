import { GetStaticPaths, GetStaticProps } from 'next'
import { SingleComicPage } from '../../src/presentation/pages/comics'
import { makeRemoteLoadComicById } from '../../src/main/factories/usecases/remote-load-comic-by-id'
import { makeRemoteLoadComicsList } from '../../src/main/factories/usecases/remote-load-comics'
import { withSSGErrorHandler } from '../../src/presentation/utils/withSSGErrorHandler'

export default function SingleComic (props): React.ReactElement {
  return <SingleComicPage {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const remoteLoadComics = makeRemoteLoadComicsList()
  const comics = await remoteLoadComics.execute({
    limit: 5,
    offset: Math.floor(Math.random() * 1000)
  })

  const paths = comics.map(comic => {
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

export const getStaticProps: GetStaticProps = withSSGErrorHandler(async ctx => {
  const comicId = String(ctx.params.id)

  const remoteLoadComicById = makeRemoteLoadComicById()
  const comic = await remoteLoadComicById.execute({
    id: comicId
  })

  const remoteLoadComics = makeRemoteLoadComicsList()
  const readMore = await remoteLoadComics.execute({
    limit: 5,
    offset: Math.floor(Math.random() * 1000)
  })

  return {
    props: {
      comic,
      readMore: readMore
    },
    revalidate: 60 * 60 * 24 * 30
  }
})
