import './App.css';
import {
  BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
  import {Homepage} from './components/Homepage.js';
  import {Lessons} from './components/Lessons.js';
  import {Oops} from './components/Oops.js';
  import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/lessons' component={Lessons} />
        <Route path='/Landing' component={LandingPage} />
        <Route component = {Oops} />
  

      </Switch>
    </Router>
    </>
  );
}

export default App;
