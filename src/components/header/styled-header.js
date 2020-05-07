import styled from 'styled-components';


export const StyledHeader = styled.div`
  grid-area: h;
    .headerWrapper {
        display: flex;
        background-color: #de7119;
        width: 800px;
        height: 60px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

    }
     .sortWrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .previewWrapper {
       display: flex;
       justify-content: space-between;
       margin-right: 100px;
    }
   
    .sortWrapper_inner {
        width: 700px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
        
    }
    .sortWrapper_innerBot {
        display: flex;
        width: 400px;
        justify-content: space-between;
    }
    
   .id,
   .name,
   .age {
        padding-top: 2px;
        width: 100px;
        display: block;
        border-radius: 6px;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
    }

    .sortByLess,
    .sortByGreat {
        display: block;
        padding-top: 2px;
        background-color: #18b0b0;
        width: 10em;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
    }

    .id {
        background-color: ${props => (props.sortType === 'id' ? '#dee3e2' : '#18b0b0')};
        box-shadow: ${props => (props.sortType === 'id' ? 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)' : 'none')}; 
        transition: .1s linear; 
    }
    .name {
        background-color: ${props => (props.sortType === 'name' ? '#dee3e2' : '#18b0b0')}; 
        box-shadow: ${props => (props.sortType === 'name' ? 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)' : 'none')};
        transition: .1s linear;  
    }
    .age {
        background-color: ${props => (props.sortType === 'age' ? '#dee3e2' : '#18b0b0')}; 
        box-shadow: ${props => (props.sortType === 'age' ? 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)' : 'none')}; 
        transition: .1s linear; 
    }
    .sortByGreat {
        background-color: ${props => (props.sortOrder === 'fromGreat' ? '#dee3e2' : '#18b0b0')}; 
        box-shadow: ${props => (props.sortOrder === 'fromGreat' ? 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)' : 'none')}; 
        transition: .1s linear; 
    }
    .sortByLess {
        background-color: ${props => (props.sortOrder === 'toGreat' ? '#dee3e2' : '#18b0b0')}; 
        box-shadow: ${props => (props.sortOrder === 'toGreat' ? 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)' : 'none')}; 
        transition: .1s linear; 
    }
  
    .id:hover,
    .name:hover,
    .age:hover,
    .sortByLess:hover,
    .sortByGreat:hover {
        background-color: #dee3e2;
        transition: .1s linear;
    }
    .id:active,
    .name:active,
    .age:active,
    .sortByLess:active,
    .sortByGreat:active {
        transition: .1s linear;
        box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.8)
    }

`