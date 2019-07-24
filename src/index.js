import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App/>
    <h1 className="major">
    	Major Minor
    </h1>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();