import { Container } from './styles'

interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper ({ children }: WrapperProps): React.ReactElement {
  return (
    <Container>
      {children}
    </Container>
  )
}
