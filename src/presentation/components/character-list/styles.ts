import styled from 'styled-components'

export const Container = styled.section`
  padding: var(--space-xl) 0;

  > h1 {
    font-size: var(--size-xs);
    text-transform: uppercase;
    opacity: 0.4;
    margin-bottom: var(--space-sm);
  }
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: var(--space-sm);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    padding-bottom: var(--space-md);
  }
`
