import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BoardItem from 'components/BoardItem';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/Commentitem';
import FavoriteItem from 'components/FavoriteItem';

function App() {
  return (
    <>
    <div style = {{display : 'flex', columnGap: '30px', rowGap: '20px'}}>

       {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}

    </div>
   

    </>
  );
}

export default App;
