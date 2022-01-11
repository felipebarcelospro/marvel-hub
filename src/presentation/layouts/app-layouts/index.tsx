import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { PageWrapper } from './styles'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout ({ children }: AppLayoutProps): React.ReactElement {
  return (
    <>
      <Header />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
    </>
  )
}
