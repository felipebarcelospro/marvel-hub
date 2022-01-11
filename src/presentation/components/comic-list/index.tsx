import React from 'react'

import { ComicModel } from '../../../domain/models/comic'
import { ComicListItem } from './components/comic-list-item'
import { Container, Grid } from './styles'

interface ComicListProps {
  title: string
  data: ComicModel[]
}

export function ComicList ({ title, data }: ComicListProps): React.ReactElement {
  return (
    <Container>
      <h1>{title}</h1>
      <Grid>
        {data.map((data, index) => (
          <ComicListItem key={index} data={data} />
        ))}
      </Grid>
    </Container>
  )
}
