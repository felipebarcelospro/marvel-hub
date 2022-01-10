import NextImage from 'next/image'

import { Container } from './styles'

export interface Comic {
  cover: string
  title: string
  author: string
}

interface ComicListItemProps {
  data: Comic
}

export function ComicListItem ({ data }: ComicListItemProps): React.ReactElement {
  const { cover, title, author } = data

  return (
    <Container>
      <NextImage src={cover} width={300} height={400} />

      <div className="info">
        <h1>{title}</h1>
        <h2>By {author}</h2>
      </div>
    </Container>
  )
}
