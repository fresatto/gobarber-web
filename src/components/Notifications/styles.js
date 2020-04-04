import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 4px;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  background: rgba(0, 0, 0, 0.6);
  left: calc(100% - 130px);
  top: 50px;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 30px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 200px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + div {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 10px;
    padding-top: 10px;
  }

  p {
    color: #fff;
    font-size: 12px;
    line-height: 1.4;
  }

  time {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 12px;
    margin-left: 5px;
    padding-left: 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    position: relative;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    ${(props) =>
      props.unread &&
      css`
        &::after {
          content: '';
          height: 5px;
          width: 5px;
          border-radius: 50px;
          background-color: #ff892e;
          display: inline-block;
          margin-left: 5px;
          margin-bottom: 2px;
        }
      `}
  }
`;
