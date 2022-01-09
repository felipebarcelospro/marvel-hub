import Head from 'next/head'
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
          <h1>Hello, Marvel Hub</h1>
        </Wrapper>
      </AppLayout>
    </>
  )
}
