import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 15px;
    }

    hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 10px 0 20px;
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

  > button {
    margin: 10px 0 0;
    width: 100%;
    height: 44px;
    background: #fb6f91;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: 200ms background;

    &:hover {
      background: ${darken(0.08, '#fb6f91')};
    }
  }
`;
