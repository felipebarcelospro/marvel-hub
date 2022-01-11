import NextImage from 'next/image'
import NextLink from 'next/link'

import { ComicModel } from '../../../../../domain/models/comic'
import { Container } from './styles'

interface ComicListItemProps {
  data: ComicModel
}

export function ComicListItem ({ data }: ComicListItemProps): React.ReactElement {
  const { id, cover, title, writer } = data

  return (
    <NextLink href={`/comics/${id}`}>
      <Container>
        <NextImage src={cover} width={300} height={400} />

        <div className="info">
          <h1>{title}</h1>
          <h2>By {writer}</h2>
        </div>
      </Container>
    </NextLink>
  )
}
