import Head from 'next/head'
import { AppLayout } from '../layouts/app-layouts'

export default function Main (): React.ReactElement {
  return (
    <>
      <Head>
        <title>Marvel Hub</title>
      </Head>

      <AppLayout>
        <h1>Hello, Marvel Hub</h1>
      </AppLayout>
    </>
  )
}
