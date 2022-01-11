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

      {data.length > 0 && (
        <Grid className="carousel-wrapper">
          {data.map((data, index) => (
            <ComicListItem key={index} data={data} />
          ))}
        </Grid>
      )}

      {data.length === 0 && (
        <p>No comics found</p>
      )}

    </Container>
  )
}
