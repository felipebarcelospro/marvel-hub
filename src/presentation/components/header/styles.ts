import styled from 'styled-components'

export const Container = styled.header`
  background: var(--color-bg-accent);
  border-bottom: 1px solid var(--color-border);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 90px;

    .header-logo {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;

      :hover {
        opacity: 0.6;
      }
    }
  }
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  > a:not(:last-child) {
    margin-right: var(--space-md);
  }
`
