import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
position: relative;
flex: 1 1 0%;
border-radius: 3px;
border: 2px solid #212329;
    > svg{
      position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    fill: rgb(40, 39, 44);
    font-size: 14px;
    transition: fill 0.2s ease 0s;
    stroke: #121214;
    }
    >i {
      display: block;
      position: absolute;
      background: none;
      border: 0px;
      right: 0;
      top: 55%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-transition: opacity 0.2s ease 0s;
      transition: opacity 0.2s ease 0s;
      cursor: pointer;
    }
  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #8257e5;
      svg {
        fill: #8257e5;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
      svg {
        fill: '#8257e5';
      }
    `}

  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: rgb(18, 18, 20);
    border-color: rgb(18, 18, 20);
    color: rgb(255, 255, 255);
    padding: 0px 1em 0px 2.65em;
    border-radius: 5px;
    
    &::focus{
      border-color: #8257e5;
    }
    &::placeholder {
      color: #666360;
    }

    /* Fazendo o autocomplete do input ter a mesma cor do input */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
      -webkit-text-fill-color: #f4ede8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: absolute;
  top: 15px;
  right: 16px;

  svg {
    margin: 0;
    transition: color 2s;
    fill: none;
  }

  span {
    background: #c53030;
    color: #fff;

    border-color: #c53030 transparent;
  }
`;
export const TXTError = styled.span`
  display: inline-block;
  color: rgb(211, 66, 66);
  padding-top: 7px;
  font-size: 14px;
`;