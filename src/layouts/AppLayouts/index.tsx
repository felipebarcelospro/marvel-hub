import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout ({ children }: AppLayoutProps): React.ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
