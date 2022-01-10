import NextLink from 'next/link'

import { Container } from './styles'

export interface Character {
  id: string
  avatarUrl: string
  name: string
  comicsCount: string
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
