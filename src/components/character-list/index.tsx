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
        {data.map(({ id, avatarUrl, name, comicsCount }, index) => (
          <CharacterListItem
            key={index}
            data={{
              id,
              avatarUrl,
              name,
              comicsCount
            }}
          />
        ))}
      </Grid>
    </Container>
  )
}
