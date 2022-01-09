import styled from 'styled-components'

export const Container = styled.header`
  border-top: 1px solid var(--color-border);
  margin-top: auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 90px;

    > span {
      opacity: 0.6;
    }

    > a{
      display: flex;
      align-items: center;

      text-decoration: none;

      background: #222534;
      border: 1px solid var(--color-border);
      padding: var(--space-xs) var(--space-sm);
      border-radius: 25px;
      margin-left: var(--space-sm);

      color: white;

      > b {
        margin-left: var(--space-xs);
      }

      > svg {
        margin-right: var(--space-xs);
      }
    }
  }
`
