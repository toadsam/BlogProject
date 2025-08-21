import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BoardItem from 'components/BoardItem';
import { latestBoardListMock } from 'mocks';
import Top3Item from 'components/BoardItem/Top3Item';

function App() {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', gap: '24px'}}>
        <Top3Item/>
        <Top3Item/>
        <Top3Item/>

    </div>
    </>
  );
}

export default App;
