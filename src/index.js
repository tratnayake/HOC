//Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

//Import Components
import App from './components/app';
import Resources from './components/resources'
//Import Reducers (state)
import reducers from './reducers';
//Import Higher Order Components(HOC's)
import requireAuth from './components/require_authentication';

//Include middleware (none for this project)
// Create the Redux data store (don't worry about this for now)
const createStoreWithMiddleware = applyMiddleware()(createStore);

//BrowserHistory is what keeps track of the URL (i.e. localhost:8080/** <-
//everything after slash)

//{ } 's are JSX so injecting our components.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
