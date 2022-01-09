import styled from 'styled-components'

export const Container = styled.header`
  background: var(--color-bg-accent);
  border-bottom: 1px solid var(--color-border);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 90px;
  }
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  > a:not(:last-child) {
    margin-right: var(--space-md);
  }
`
