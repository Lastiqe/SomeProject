import styled from 'styled-components';


export const StyledContent = styled.div`
      .contentWrapper {
            grid-area: c;
            margin: 0 auto;
            width: 800px;
            height: 80vh;
            text-align: center;
            border: 1px solid green;
            margin-top: 10px;
           
      } 
       .userWrapper {
            display: grid;
            grid-template-columns: 1fr;
            width: 760px;
            margin: 0 auto;
            border: 1px solid blue;
            padding: 0;
      }
`

export const StyledUser = styled.div`
     
      .user {
            display: grid;
            grid-template-columns: ${props => (props.fullDisplayToggle ? '1fr  1fr ' : '  1fr')};
            width: ${props => (props.fullDisplayToggle ? '740px' : '360px')};
            margin: 0 auto;
            height: 200px;
            border: 1px solid red;
            align-items: center;
            padding: 0 10px;    
            box-sizing: border-box;     
      }
      .player {
            display: ${props => (!props.fullDisplayToggle && 'none')};
      }
      .name,
      .age,
      .phone,
      .description {
            display: block;
            margin: 4px 0 4px 2px;
            text-align: left;
            
      }

`