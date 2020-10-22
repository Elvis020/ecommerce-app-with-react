import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Homepage from "./components/pages/Homepage/Homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/Header/Header";
import SignIn_and_SignUp from './components/pages/sign-in-and-sign-up/SignIn_SignUp';

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn_and_SignUp} />
      </Switch>
    </>
  );
}

export default App;
