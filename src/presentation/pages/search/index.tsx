import NextHead from 'next/head'
import { ComicModel } from '../../../domain/models/comic'

import { ComicList } from '../../components/comic-list'
import { SearchInput } from '../../components/search-input'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container } from './styles'

interface SearchPageProps {
  comics: ComicModel[]
}

export function SearchPage ({ comics }: SearchPageProps): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel Hub - Search</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Wrapper>
            <SearchInput />
            <ComicList
              title="Explore"
              data={comics}
            />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
