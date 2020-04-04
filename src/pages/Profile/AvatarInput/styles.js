import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-top: 30px;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    transition: 100ms ease-in;

    &:hover {
      opacity: 0.6;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background-color: #eee;
    }

    input {
      display: none;
    }
  }
`;
