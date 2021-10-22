import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/index.css';
import './styles/styleProductos.css';
import './styles/styleTienda.css';
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
import './styles/carrito.css'




ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById('root')
);
