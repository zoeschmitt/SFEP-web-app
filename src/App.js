import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(false) 
  return (
    <Router>
      {
        isLoggedIn ? <Home token={token} user={user}/> :
          <Switch>
            <Route path="/login">
              <Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} setUser={setUser}/>
            </Route>
            <Route path="/signup">
              <Signup setIsLoggedIn={setIsLoggedIn} setToken={setToken} setUser={setUser}/>
            </Route>
          </Switch>
      }
    </Router>
  );
}

export default App;

