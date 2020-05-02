import styled from 'styled-components';


export const StyledApp = styled.div`

    .appWrapper {
        display: grid;
        width: 1200px;
        margin: 0 auto;
        grid-template-rows: 100px 14fr;
        grid-template-columns: 1fr;
        grid-template-areas:
        "h"
        "c";
        border: 1px solid red;
        
    }
`



