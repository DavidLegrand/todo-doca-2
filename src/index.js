import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/index.css';
import App from 'components/App';
import { UserProvider } from 'contexts/User'
import { ListProvider } from 'contexts/List';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from 'store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <ListProvider>
          <Router>
            <App />
          </Router>
        </ListProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

