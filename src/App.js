import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// Components
import Homepage from "./components/pages/Homepage/Homepage";
import ShopPage from "./components/pages/shop/shop";
import Header from "./components/Header/Header";
import SignIn_and_SignUp from './components/pages/sign-in-and-sign-up/SignIn_SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  let unsubscribeFromAuth=null;
  
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        // taking a snapshot of the userRef
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // setCurrentUser({currentUser: snapShot.data()})
          // console.log(snapShot.data())
          console.log({currentUser,userAuth})
        });
      }
      setCurrentUser(userAuth)
    })
    return () => unsubscribeFromAuth()
  }, [])




  return (
    <>
    <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn_and_SignUp} />
      </Switch>
    </>
  );
}

export default App;
