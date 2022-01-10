import NextImage from 'next/image'
import NextLink from 'next/link'

import { Container } from './styles'

export interface Comic {
  id: string
  cover: string
  title: string
  author: string
}

interface ComicListItemProps {
  data: Comic
}

export function ComicListItem ({ data }: ComicListItemProps): React.ReactElement {
  const { id, cover, title, author } = data

  return (
    <NextLink href={`/comics/${id}`}>
      <Container>
        <NextImage src={cover} width={300} height={400} />

        <div className="info">
          <h1>{title}</h1>
          <h2>By {author}</h2>
        </div>
      </Container>
    </NextLink>
  )
}
