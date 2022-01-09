import { Container } from './styles'

interface CharacterListItemProps {
  data: {
    index: string
    avatarUrl: string
    name: string
    count: string
  }
}

export function CharacterListItem ({ data }: CharacterListItemProps): React.ReactElement {
  const { avatarUrl, name, count } = data

  return (
    <Container>
      <div className='avatar'>
        <img src={avatarUrl} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{count} comics</h2>
      </div>
    </Container>
  )
}
