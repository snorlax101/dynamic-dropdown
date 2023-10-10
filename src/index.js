import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import rootReducer from './reducers/reducers';
import { Provider } from 'react-redux';
import store from './store';


// Replace ReactDOM.render with createRoot().render
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

