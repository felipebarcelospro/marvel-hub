import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: calc(100vh - 180px);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--space-xl);
    align-items: center;
    width: 900px;

    .info-container {
      > h1 {
        font-size: 4rem;
        color: var(--color-primary-400);
        margin-bottom: var(--space-xl);
      } 

      > span {
        display: block;
        font-size: 1rem;
        margin-bottom: var(--space-xs);
        font-weight: bold;
        color: var(--color-primary-400);
      }

      > p {
        font-size: 1em;
        opacity: 0.6;
        margin-bottom: var(--space-lg);
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: var(--radius-base);

        height: var(--size-md);
        padding: var(--space-md);

        transition: all ease-in 0.4s;

        font-weight: 500;

        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--color-white);
        width: fit-content;

        text-transform: uppercase;
        text-decoration: none;
        font-weight: 800;
        transition: all ease-in 0.3s;

        :hover {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`
