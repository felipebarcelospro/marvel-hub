import { CharacterListItem } from './components/character-list-item'
import { Container, Grid } from './styles'

interface Character {
  avatarUrl: string
  name: string
  count: string
}

interface CharacterListProps {
  title: string
  data: Character[]
}

export function CharacterList ({ title, data }: CharacterListProps): React.ReactElement {
  return (
    <Container>
      <h1>{title}</h1>
      <Grid>
        {data.map(({ avatarUrl, name, count }, index) => (
          <CharacterListItem
            key={index}
            data={{
              index: `${index + 1}`,
              avatarUrl,
              name,
              count
            }}
          />
        ))}
      </Grid>
    </Container>
  )
}
