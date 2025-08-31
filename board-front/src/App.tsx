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
import { MAIN_PATH } from 'constant';
import { AUTH_PATH } from 'constant';
import { SEARCH_PATH } from 'constant';
import { USER_PATH } from 'constant';
import { BOARD_PATH } from 'constant';
import { BOARD_WRITE_PATH } from 'constant';
import { BOARD_DETAIL_PATH } from 'constant';
import { BOARD_UPDATE_PATH } from 'constant';

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
        <Route path={MAIN_PATH()} element={<Main/>} />
        <Route path={AUTH_PATH()} element={<Authentication/>} />
        <Route path={SEARCH_PATH(':searchWord')} element={<Search/>}/>
        <Route path={USER_PATH(':userEmail')} element={<User/>}/>
        <Route path={BOARD_PATH()}>
        <Route path ={BOARD_WRITE_PATH()} element={<BoardWrite/>} />
        <Route path ={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardUpdate/>}/>
        <Route path = {BOARD_UPDATE_PATH(':boardNumber')} element={<BoardDetail/>} />
        
      </Route>
      <Route path='*' element = {<h1>404 Not Found</h1>} />

      </Route>
      


    </Routes>
  );
}

export default App;
