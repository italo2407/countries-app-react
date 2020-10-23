import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/main.css';
import Header from './components/Header'
import { StateProvider } from './context/AppContext';
import ApolloProvider from './context/ApolloClient';
import Countries from './views/Countries';
import CountryDetail from './views/CountryDetail';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <StateProvider>
        <ApolloProvider>
          <Header />
          <Switch>
              <Route path="/" exact component={Countries} />
              <Route path="/country/:id" exact component={CountryDetail} />
              <Route component={PageNotFound} />
          </Switch>
        </ApolloProvider>      
      </StateProvider>
    </Router>
    
    
  );
}

export default App;
