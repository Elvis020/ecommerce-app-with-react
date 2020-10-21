import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

// Components
import Homepage from './components/pages/Homepage/Homepage';
import ShopPage from './components/pages/shop/shop';



function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route  path="/shop" component={ShopPage} />
    </>
  );
}

export default App;
