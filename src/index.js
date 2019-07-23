import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <h1 className="major">
    	Major Minor
    </h1>
    <App/>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();