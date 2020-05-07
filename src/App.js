import React, { useEffect } from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import ContentContainer from './components/content/ContentContainer';
import { StyledApp } from './styled-app';


const App = (props) => {

  return (
    <StyledApp>
      <div className='appWrapper'>
        <HeaderContainer />
        <ContentContainer />
      </div>
    </StyledApp>
  );
}
export default App

