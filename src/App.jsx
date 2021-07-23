import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { IFrame } from './pages/IFrame';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={IFrame} />
      </Switch>
    </Router>
  );
}

