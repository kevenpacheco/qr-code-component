import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: hsl(0, 0%, 100%);
    --color-light-gray: hsl(212, 45%, 89%);
    --color-grayish-blue: hsl(220, 15%, 55%);
    --color-dark-blue: hsl(218, 44%, 22%);
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    font: 15px Outfit, Arial, sans-serif;
  }

  #root {
    background-color: var(--color-light-gray);
    display: grid;
    place-items: center;
  }
`;
