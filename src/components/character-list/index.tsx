import { Character, CharacterListItem } from './components/character-list-item'
import { Container, Grid } from './styles'

interface CharacterListProps {
  title: string
  data: Character[]
}

export function CharacterList ({ title, data }: CharacterListProps): React.ReactElement {
  return (
    <Container>
      <h1>{title}</h1>
      <Grid>
        {data.map((character, index) => (
          <CharacterListItem key={index} data={character} />
        ))}
      </Grid>
    </Container>
  )
}
