import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ContentContainer from './components/content/ContentContainer';
import { StyledApp } from './styled-app';


const App = (props) => {
  return (
    <StyledApp>
      <div className='appWrapper'>
        <Header />
        <ContentContainer />
      </div>
    </StyledApp>


  );
}

export default App;
