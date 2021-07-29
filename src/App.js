import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/NavBar/NavBar';
import Insight from './pages/Result/Insight/Insight';
import Sumary from './pages/Result/Sumary/Sumary';

function App() {
  return (
    <Router>
      <div className="App">
      <NavbarHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/insight">
            <Insight />
          </Route>
          <Route path="/summary">
            <Sumary />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
