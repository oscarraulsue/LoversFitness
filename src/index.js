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
// import  AtencionMedica from './components/AtencionMedica';


ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  // <AtencionMedica />,
  document.getElementById('root')
);
