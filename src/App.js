import { Switch, Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Landing from './views/Landing';
import About from './views/About';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/about" component={ About } />
      </Switch>
    </div>
  );
}

export default App;
