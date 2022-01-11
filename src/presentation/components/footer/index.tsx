import { FiGithub } from 'react-icons/fi'
import { Wrapper } from '../wrapper'
import { Container } from './styles'

export function Footer (): React.ReactElement {
  return (
    <Container>
      <Wrapper>
        <span>Created By <b>@felipebarcelospro</b></span>

        <a className="btn btn-outline" href="#">
          <FiGithub />
          Open on Github
        </a>
      </Wrapper>
    </Container>
  )
}
