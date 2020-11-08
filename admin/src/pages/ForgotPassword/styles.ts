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
  h1 {
    color: rgb(255, 255, 255);
    font-size: 25px;
    text-align: center;
    margin: 10px 20px;
  }
  form {
    width: 400px;
    width: 360px;
    background: rgb(32, 32, 36);
    border-radius: 5px;
    padding: 20px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;

  a {
    font-size: 14px;
    text-align: center;
    color: #87868b;
    margin: 8px 0px 0px;
    opacity: 0.8;
    -webkit-transition: opacity 0.2s ease 0s;
    transition: opacity 0.2s ease 0s;
    text-decoration: none;
  }
`;
