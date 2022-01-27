import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </switch>
    </div>
  );
}

export default App;
