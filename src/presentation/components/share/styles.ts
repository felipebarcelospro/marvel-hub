import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;

    > button {
      width: 100%;
      margin: 0!important;
      margin-bottom: var(--space-sm)!important;
    }
  }

  h1 {
    font-size: var(--size-xs);
    text-transform: uppercase;
    opacity: 0.4;
    margin-right: var(--space-xs);
  }

  > button:not(:last-child) {
    margin-right: var(--space-sm);
  }
`
