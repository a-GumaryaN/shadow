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

  .App{
    width: 100%;
  }
`;

export default GlobalStyle;