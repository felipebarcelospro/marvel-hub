import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: var(--size-lg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-base);
  background: #222534;
  padding: 0 var(--space-xs);

  svg {
    opacity: 0.4;
    margin-right: var(--space-xs);
  }

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: var(--font-size-lg);
    color: white;
    border: 0;

    :focus {
      outline: 0;
      box-shadow: none;
    }

    ::placeholder { 
      color: white;
      opacity: 0.4; 
    }
  }
`
