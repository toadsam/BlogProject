import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import User from 'views/User';
import Search from 'views/Search';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import BoardDetail from 'views/Board/Detail';
import Container from 'layouts/Container';

// component : Application 컴포넌트 //
function App() {
  
  // render: Application 컴포넌트 렌더링 //
  // description : 메인 화면 : '/' - Main //
  // description : 로그인 + 회원가입 화면 : '/auth' - Authentication //
  // description : 검색 화면 : '/search/: searchWord' - Search//
  // description : 유저 페이지 : '/user/:userEmail' - User//
  // description : 게시물 상세보기 : '/board/detail/:boardNumber'- BoardDetail//
  // description : 게시물 작성하기 : '/board/write' - BoardWrite //
  // description : 게시물 수정하기 : '/board/update/:boardnumber' - BoardUpdate //

  return (
    <Routes>
      <Route element = {<Container/>}>
        <Route path='/' element={<Main/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/search' element={<User/>}/>
        <Route path='/board'>
        <Route path ='write' element={<BoardWrite/>} />
        <Route path ='update/:boardNumber' element={<BoardUpdate/>}/>
        <Route path =':boardNumber' element={<BoardDetail/>} />
        
      </Route>

      </Route>
      


    </Routes>
  );
}

export default App;
