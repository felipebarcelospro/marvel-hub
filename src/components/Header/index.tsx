import NextImage from 'next/image'
import NextLink from 'next/link'

import { Wrapper } from '../wrapper'
import { MenuLink } from './components/menu-link'
import { Container, Menu } from './styles'
import { FiHome, FiSearch } from 'react-icons/fi'

export function Header (): React.ReactElement {
  return (
    <Container>
      <Wrapper>
        <div className="header-logo">
          <NextLink href='/'>
              <NextImage src="/logo.svg" alt="Marvel Hub" width={90} height={33} />
          </NextLink>
        </div>

        <Menu>
          <MenuLink path="/" icon={<FiHome />} exact>Main</MenuLink>
          <MenuLink path="/search" icon={<FiSearch />}>Search</MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
