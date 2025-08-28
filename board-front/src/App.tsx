import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from 'layouts/Footer';

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
    <>
      <Footer/>
   

    </>
  );
}

export default App;
