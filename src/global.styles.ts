import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: black;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: black;
  }

  body{
    font-family: 'Raleway' , sans-serif;
  }

  .wrapped{
    max-width: 1100px;
  }

  .App{
    width: 100%;
  }

  .paralax{
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position:center ;
    background-size: cover;
  }
`;

export default GlobalStyle;