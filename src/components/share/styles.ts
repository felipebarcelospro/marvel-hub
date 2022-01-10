import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: var(--size-xs);
    text-transform: uppercase;
    opacity: 0.4;
    margin-right: var(--space-xs);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--size-md);
    padding: var(--space-xs) var(--space-sm);
    border: 2px solid var(--color-border);
    color: var(--color-white);
    border-radius: var(--radius-base);
    background: #222534;
    text-decoration: none;
    line-height: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: var(--font-size-md);

    :not(:last-child) {
      margin-right: var(--space-xs);
    }

    :hover {
      border-color: white;
    }

    svg {
      margin-right: var(--space-xs);
    }
  }
`
