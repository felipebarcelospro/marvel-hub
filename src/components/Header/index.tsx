import NextImage from 'next/image'

import { Wrapper } from '../wrapper'
import { MenuLink } from './components/menu-link'
import { Container, Menu } from './styles'
import { FiHome, FiSearch } from 'react-icons/fi'

export function Header (): React.ReactElement {
  return (
    <Container>
      <Wrapper>
        <NextImage src="/logo.svg" alt="Marvel Hub" width={163} height={33} />

        <Menu>
          <MenuLink path="/" icon={<FiHome />} exact>Main</MenuLink>
          <MenuLink path="/search" icon={<FiSearch />}>Search</MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
