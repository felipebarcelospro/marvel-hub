import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

export function SearchInput (): React.ReactElement {
  return (
    <Container>
      <FiSearch size={32} />
      <input type="text" placeholder="Search a comic" />
    </Container>
  )
}
