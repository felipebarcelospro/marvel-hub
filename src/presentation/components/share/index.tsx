import { useEffect, useState } from 'react'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { Container } from './styles'

export function Share (): React.ReactElement {
  const [actualPath, setActualPath] = useState('')

  const shareOnFacebook = (): void => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${actualPath}`
    const encodedUrl = encodeURIComponent(window.location.href)
    window.open(`${url}${encodedUrl}`, '_blank')
  }

  const shareOnTwitter = (): void => {
    const url = `https://twitter.com/intent/tweet?url=${actualPath}`
    const encodedUrl = encodeURIComponent(window.location.href)
    window.open(`${url}${encodedUrl}`, '_blank')
  }

  useEffect(() => {
    setActualPath(window.location.href)
  }, [])

  return (
    <Container>
      <button className="btn btn-outline" onClick={shareOnFacebook}>
        <FiFacebook />
        Share on Facebook
      </button>
      <button className="btn btn-outline" onClick={shareOnTwitter}>
        <FiTwitter />
        Share on Twitter
      </button>
    </Container>
  )
}
