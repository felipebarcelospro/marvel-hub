import NextHead from 'next/head'

import { ComicList } from '../../components/comic-list'
import { SearchInput } from '../../components/search-input'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container } from './styles'

export function SearchPage (): React.ReactElement {
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
              data={[]}
            />
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
