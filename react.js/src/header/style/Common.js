import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  img {
      vertical-align: top;
      max-width: 100%;
  }

  strong {
      font-weight: 700;
  }

  ul,
  li,
  h3 {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  input {
      border: none;
      outline: none;
  }

  button {
      outline: none;
  }
  `;

export default Common;
