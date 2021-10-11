import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Provider} from 'react-redux';
import { RegistroApp } from './RegistroApp';
import { store } from './store/store';
import { Tienda } from './components/Tienda';

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Tienda />
  </QueryClientProvider>,

document.getElementById('root')
);
