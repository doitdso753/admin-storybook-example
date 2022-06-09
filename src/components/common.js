import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { box-sizing:border-box; }
    html, body { width:100%; height:100%; overflow-x:none; }
    body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select, a { margin:0; padding:0; outline:none; }
    body, input, textarea, select, button, table { font-family:'Malgun Gothic', 'NanumGothic', 'Roboto', 'AppleGothic', 'Dotum', sans-serif; font-size:13px; color:#333; letter-spacing:-0.5px; line-height:1.5; }
    a:link, a:active, a:visited { color:#333; text-decoration:none; }
    a:hover { text-decoration:none; }
    form { clear:both; }
    legend { visibility:hidden; overflow:hidden; position:absolute; top:0; left:0; width:0; height:0; padding:0; font-size:0; line-height:0; }
    img, fieldset { border:0; vertical-align:middle; }
    ul, ol { list-style:none; }
    em, address { font-style:normal; }
    a { text-decoration:none; }
    label { cursor:pointer; }
    h1 { font-size:24px; }
    h2 { font-size:20px; }
    h3 { font-size:17px; }
    h4 { font-size:15px; }
    h5 { font-size:14px; }
    
    ::-webkit-input-placeholder { color:#8f8f8f; }
    ::-moz-placeholder { color:#8f8f8f; }
    :-ms-input-placeholder { color:#8f8f8f; }
    :-moz-placeholder { color:#8f8f8f; }
    ::-webkit-input-title { color:#8f8f8f; }
    ::-moz-title { color:#8f8f8f; }
    :-ms-input-title { color:#8f8f8f; }
    :-moz-title { color:#8f8f8f; }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
    
    /* Firefox */
    input[type=number] { -moz-appearance:textfield; }
`;