import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }

  html, body, #root{
    min-height: 100%;
  }
  body {
    background: -webkit-linear-gradient(-90deg,  #9B59B6  0%, #1ABC9C 100%);
    font-size: 22px;
    font-family: 'MuseoModerno', cursive;
    
  }
  h1, p, label {
    color: #2a2d32;
  }
  button {
    cursor: pointer;
  }
`