import Head from 'next/head'
import { Banner } from '../components/banner'
import { Wrapper } from '../components/wrapper'
import { AppLayout } from '../layouts/app-layouts'

export default function Main (): React.ReactElement {
  return (
    <>
      <Head>
        <title>Marvel Hub</title>
      </Head>

      <AppLayout>
        <Wrapper>
          <Banner
            href="#"
            src="/banner-spiderman.jpeg"
            title="The Amazing Spider-Man (2018) #74"
            createdAt="09 Jan 2022"
          />
        </Wrapper>
      </AppLayout>
    </>
  )
}
