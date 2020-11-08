import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    background: rgb(18, 18, 20);
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px;
  }
  input, textarea {
    outline: 0px;
    background: rgb(18, 18, 20);
    border: 2px solid rgb(40, 39, 44);
    outline: 0px;
    transition: border 0.2s ease 0s;
}

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;