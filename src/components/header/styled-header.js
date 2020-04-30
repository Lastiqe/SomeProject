import styled from 'styled-components';


export const StyledHeader = styled.div `
  grid-area: h;
    .headerWrapper {
        display: flex;
        background-color: white;
        width: 800px;
        margin: 0 auto;   
        justify-content: space-between;  
    }
    .previewWrapper {
       display: flex;
       justify-content: space-between;
       margin-right: 100px;
    }
    .sortWrapper {
        display: block;
    }
    .sortWrapper_innerTop {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 'i n a';
        margin-bottom: 10px;
    }
    .sortWrapper_innerBot {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'sg sl'
    }
    
   .id,
   .name,
   .age,
   .sortByGreat,
   .sortByLess {
        display: flex;
        border: 1px solid black;
        box-sizing: border-box;
        border-left: none;
    }
    .id {
        grid-area: i;
        border-left: 1px solid black;
    }
    .name {
        grid-area: n;
    }
    .age {
        grid-area: a;
    }
    .sortByGreat {
        grid-area: sg;
        width: 10em;
        border-left: 1px solid black;
    }
    .sortByLess  {  
        grid-area: sl;
        width: 10em;
    }

    .table,
    .preview {
        display: inline-block;
        border: 1px solid black;
        box-sizing: border-box;
    }









`