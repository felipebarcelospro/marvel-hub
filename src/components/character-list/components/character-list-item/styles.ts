import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  align-items: center;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border: 3px solid #3a3c48;
  border-radius: var(--radius-base);
  padding: 0.6rem;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    border-color: var(--color-white);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
  }

  > span {
    opacity: 0.6;
    font-weight: bold;
  }

  .avatar {
    height: 4rem;
    width: 4rem;
    border-radius: var(--radius-base);
    overflow: hidden;
    
    margin-right: var(--space-sm);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .info {
    h1, h2 {
      font-size: var(--font-size-md);
      line-height: 120%;
    }

    h2 {
      opacity: 0.6;

      font-weight: 400;
      font-size: var(--font-size-sm);
    }
  }
`
