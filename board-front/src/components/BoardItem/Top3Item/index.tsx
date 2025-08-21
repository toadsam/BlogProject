import React from 'react'
import './style.css'


//          component: Top 3 List Item 컴포넌트 렌더링
export default function Top3Item() {


  return (
    <div className = 'top3-3-list-item'>
        <div className = 'top-3-list-item-main-box'>
            <div className = 'top-3-list-item-top'>
                <div className = 'top-3-list-item-profile-box'>
                    <div className='top3-list-item-profile-image' style={{backgroundImage: 'url()'}}>
                    </div>
                    
                </div>  
                <div className = 'top-3-list-write-box'>
                    <div className='top-3-list-item-nickname'>{'안녕하세요나는주코야끼'}</div>
                    <div className = 'top-3-list-item-write-date'>{'2022. 05. 12'}<div/>
                </div>


                </div>
            </div>
            <div className = 'top-3-list-item-middle'>
                <div className = 'top-3-list-item-title'>{'오늘 점심 뭐먹지 맛있는 거 먹고 싶은데 추천.....'}</div>
                <div className = 'top-3-list-item-content'>{'오늘 점심을 뭐 먹을지 너무 고민이 되는 중이다'}</div>
        
            </div>
            <div className = 'top-3-list-item-bottom'>
                <div className ='top-3-list-item-counts'>
                    {'댓글 0 . 좋아요 0 . 조회수 0'}

                </div>
            </div>

        </div>


    </div>
  )
}
