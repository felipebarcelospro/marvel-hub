import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { Container, Overlay } from './styles'

interface BannerProps {
  src: string
  title: string
  createdAt: string
  href: string
}

export function Banner ({ src, title, createdAt, href }: BannerProps): React.ReactElement {
  return (
    <NextLink href={href}>
      <Container>
        <NextImage src={src} alt={title} width={1800} height={600} objectFit='cover' />

        <Overlay>
          <h1>{title}</h1>
          <h2>Released at {createdAt}</h2>
        </Overlay>
      </Container>
    </NextLink>
  )
}
