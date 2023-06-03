import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    button{
        cursor:pointer;
        border:none;
        background:transparent;
    }
    ul, ol{
        padding:0;
        margin:0;
        list-style:none;
    }
    li{
        list-style:0;
    }
`