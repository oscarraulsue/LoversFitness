import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Provider} from 'react-redux';
import { RegistroApp } from './RegistroApp';
import { store } from './store/store';
import './styles/app.css'
import './styles/coaches.css'
import './styles/pintarCard.css'
import './styles/programas.css'
import './styles/poradaPrincipal.css'



ReactDOM.render(
  <Provider store={store}>
  <RegistroApp />
  </Provider>,

  document.getElementById('root')
);
