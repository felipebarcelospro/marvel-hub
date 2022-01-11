import NextLink from 'next/link'
import { CharacterModel } from '../../../../../domain/models/character'

import { Container } from './styles'

interface CharacterListItemProps {
  data: CharacterModel
}

export function CharacterListItem ({ data }: CharacterListItemProps): React.ReactElement {
  const { id, cover, name, comicsCount } = data

  return (
    <NextLink href={`/characters/${id}`}>
      <Container>
        <div className='avatar'>
          <img src={cover} alt={name} />
        </div>
        <div className='info'>
          <h1>{name}</h1>
          <h2>{comicsCount} comics</h2>
        </div>
      </Container>
    </NextLink>
  )
}
