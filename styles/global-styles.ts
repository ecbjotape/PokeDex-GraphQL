import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #fff;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #fff; 
      border-radius: 10px;

    }
  
    ::-webkit-scrollbar-thumb {
      background: #04043c;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      opacity: 0.5;
      cursor: pointer;
    }
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
