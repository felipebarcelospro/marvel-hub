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
  }
`
