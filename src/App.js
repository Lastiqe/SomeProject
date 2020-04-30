import React from 'react';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import { StyledApp } from './styled-app';


const App = () => {
  return (
    <StyledApp>
      <div className='appWrapper'>
        <Header />
        <Content />
      </div>
    </StyledApp>


  );
}

export default App;
