import styled from 'styled-components';
import BGimg from './assets/images/Background/morocco.png'

export const StyledApp = styled.div`
background-image: url(${BGimg});
font-size: 16px;
    .appWrapper {
        display: grid;
        width: 1200px;
        margin: 0 auto;
        grid-template-rows: 60px 14fr;
        grid-template-columns: 1fr;
        grid-template-areas:
        "h"
        "c";
        background-color: #116979;
        
    }
`



