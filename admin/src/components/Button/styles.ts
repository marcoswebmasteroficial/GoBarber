import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
`;

export const Container = styled.button`
  padding: 16px;
  width: 100%;
  margin-top: 16px;
  background: rgb(130, 87, 229);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  -webkit-transition: background 0.2s ease 0s, color 0.2s ease 0s;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  text-transform: uppercase;
  &:disabled {
    background: rgb(65, 53, 107);
    color: rgba(255, 255, 255, 0.35);
    cursor: not-allowed;
  }
  &:hover {
    background: ${shade(0.2, '#8257e5')};
  }

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;