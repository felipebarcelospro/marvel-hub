import NextLink from 'next/link'

import { Comic } from '../../../comic-list/components/comic-list-item'
import { Container } from './styles'

export interface Character {
  id: string
  avatarUrl: string
  name: string
  description: string
  comicsCount: number
  comics: Comic[]
}

interface CharacterListItemProps {
  data: Character
}

export function CharacterListItem ({ data }: CharacterListItemProps): React.ReactElement {
  const { id, avatarUrl, name, comicsCount } = data

  return (
    <NextLink href={`/characters/${id}`}>
      <Container>
        <div className='avatar'>
          <img src={avatarUrl} alt={name} />
        </div>
        <div className='info'>
          <h1>{name}</h1>
          <h2>{comicsCount} comics</h2>
        </div>
      </Container>
    </NextLink>
  )
}
