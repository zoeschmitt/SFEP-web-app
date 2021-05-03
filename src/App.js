import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Home />
      </Switch>
    </Router>
  );
}

export default App;

