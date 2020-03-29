import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;

  form {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 15px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      border-radius: 4px;
      border: 0;
      padding: 0 10px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 200ms background;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      margin-top: 10px;
      text-align: center;
      color: #fff;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
