import React from 'react'
import './style.css';
//  component : 헤더 레이아웃  //
export default function Header() {


    // render : 헤더 레이아웃 렌더링 //
  return (
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box'>
          <div className ='icon-box'>
            <div className='icon logo-dark-icon'></div>
          </div>
          <div className = 'header-logo'>{'Hoons Board'}</div>
        </div>
        <div className='header-right-box'></div>
      </div>
    </div>    
  )
}
