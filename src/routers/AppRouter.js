import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';
import AtencionMedica from '../components/AtencionMedica';

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/> 
          <Route exact path="/atencionmedica"  component={AtencionMedica}/> 
        </Switch>
    </Router>
  );
}