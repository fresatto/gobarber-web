import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 20px;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    h3 {
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

    h3 {
      font-size: 15px;
    }

    a {
      text-align: right;
      display: block;
      font-size: 13px;
      color: #999;
    }
  }

  img {
    border-radius: 50%;
    height: 34px;
    margin-left: 10px;
  }
`;
