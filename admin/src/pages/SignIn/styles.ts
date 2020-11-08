import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const Container = styled.div`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(18, 18, 20);
  padding: 28px 0px 50px;
  animation: ${appearFromLeft} 1.5s ease;
  img {
    margin: 0 auto 20px;
  }
  form {
    width: 400px;
    background: rgb(32, 32, 36);
    border-radius: 5px;
    padding: 20px 34px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;

  a {
    font-size: 14px;
    font-weight: 600;
    color: rgb(130, 87, 230);
    margin: 8px 0px 0px;
    opacity: 0.8;
    -webkit-transition: opacity 0.2s ease 0s;
    transition: opacity 0.2s ease 0s;
    text-decoration: none;
  }
`;