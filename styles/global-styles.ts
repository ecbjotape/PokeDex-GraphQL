import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  html {
    height: 100%;
  }
  
  button{
    cursor:pointer;
    &:hover{
      opacity:0.7;
    }
  }
  
`;

export default GlobalStyles;
