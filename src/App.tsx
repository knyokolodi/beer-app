import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Beers from './components/Beers/Beers';
import BeerDetails from './components/Beers/BeerDetails/BeerDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Beers} />
        <Route exact path='/beer/:id' component={BeerDetails} />
      </Switch>
    </Router>
  );
};

export default App;
