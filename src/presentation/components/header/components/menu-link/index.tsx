import React from 'react'
import NextLink from 'next/link'

import { Container } from './styles'
import { useRouter } from 'next/router'

interface MenuLinkProps {
  children: React.ReactNode
  icon: React.ReactNode
  path: string
  exact?: boolean
}

export function MenuLink ({ icon, children, path, exact }: MenuLinkProps): React.ReactElement {
  const router = useRouter()

  return (
    <NextLink href={path}>
      <Container active={exact ? router.pathname === path : router.pathname.includes(path)}>
        {icon}
        {children}
      </Container>
    </NextLink>
  )
}
