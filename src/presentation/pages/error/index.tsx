import NextImage from 'next/image'
import NextLink from 'next/link'

import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container } from './styles'

export function ErrorPage (): React.ReactElement {
  return (
    <>
      <AppLayout>
        <Container>
          <Wrapper>
            <div className="image-container">
              <NextImage src="/error.svg" width={326} height={326} />
            </div>
            <div className="info-container">
              <h1>404...</h1>

              <span>STATION ANSWERS:</span>
              <p>I think you've reached the edge of the universe. The page you requested was not found.</p>

              <NextLink href="/" passHref>
                <a>Back to the front page</a>
              </NextLink>
            </div>
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
