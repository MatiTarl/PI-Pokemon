import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';


const rootElement = document.getElementById('root')
const root = createRoot(rootElement);


root.render(
  <Provider store={store}>
    <BrowserRouter>
     <App></App>
    </BrowserRouter>
  </Provider>
)

reportWebVitals();
