import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
    *,*::before,*::after{
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

`;
