import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/index.css';
import App from 'components/App';
import { UserProvider } from 'contexts/User'
import { ListProvider } from 'contexts/List';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

