import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      box-sizing: border-box;
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
    height: 100%;
  }
`;

export default GlobalStyle;