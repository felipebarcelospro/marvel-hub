import React from 'react'

import { Container } from './styles'

interface Name {
  firstName: string
  lastName: string
}

interface AvatarProps {
  name: Name
}

export function Avatar ({ name }: AvatarProps): React.ReactElement {
  const [initials, setInitials] = React.useState('')

  React.useEffect(() => {
    const { firstName, lastName } = name
    const initials = `${firstName[0]}${lastName[0]}`
    setInitials(initials)
  }, [name])

  return (
    <Container>
      {initials}
    </Container>
  )
}
