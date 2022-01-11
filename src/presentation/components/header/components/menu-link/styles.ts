import styled, { css } from 'styled-components'

export const Container = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;

  ${props => props.active && css`
    opacity: 1;
  `}

  :hover {
    opacity: 1;
  }

  > svg {
    margin-right: var(--space-xs);
  }
`
