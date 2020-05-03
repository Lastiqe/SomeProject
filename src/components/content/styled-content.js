import styled from 'styled-components';


export const StyledContent = styled.div`
      .loader {
            height: 80px;
            width: 100px;
            text-align: top;
            margin-top: -30px;
      }
      .contentWrapper {
            grid-area: c;
            margin: 0 auto;
            width: 800px;
            text-align: center;
            margin-top: 10px;
           
      } 
      
    


`
export const StyledPreview = styled.div`
 .userWrapper {
            display: grid;
            grid-template-columns:1fr 1fr;
            width: 760px;
            margin: 10px auto;
            padding: 0;
            
      }
       .leftside-enter {
            opacity: 0;
            transform: translate(-100px, 0);
            transform: translate3d(-100px, 0, 0);
        
      }
      .rightside-enter {
            opacity: 0;
            transform: translate(100px, 0);
            transform: translate3d(100px, 0, 0);
        
      }
      .rightside-enter-active,
     .leftside-enter-active {
            opacity: 1; 
            transition: opacity .1s ease;
            transform: translate(0, 0);
            transform: translate3d(0, 0, 0);
            transition-property: transform, opacity;
            transition-duration: .6s;
            transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1.2), linear;
      }
`

export const StyledUser = styled.div`
     

      .avatar {
            height: 60px;
            background-color: #aeaeae;
            border-radius: 10em;
            object-fit: scale-down;
      }
      .user {
            display: grid;
            width: 360px;  
            margin: 10px auto;
            height: 230px;
            background-color: #dee3e2;
            align-items: top;
            padding: 10px 10px;    
            box-sizing: border-box;    
            transition: ease .4s; 
            box-shadow: 4px 5px 5px 0px #000000;
            border-radius: 10px;
      }
      .player {
            display: ${props => (!props.fullDisplayToggle && 'none')};
      }
      .name,
      .age,
      .phone,
      .description,
      .avatar {
            display: block;
            margin: 4px 0 4px 2px;
            text-align: left;
            
      }

`