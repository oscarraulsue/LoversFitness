import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import { Cardio } from "../components/programas/Cardio";
import { Dance } from "../components/programas/Dance";
import { Kickboxing } from "../components/programas/Kickboxing";
import { Meditacion } from "../components/programas/Meditacion";
import { Pilates } from "../components/programas/Pilates";
import { Yoga } from "../components/programas/Yoga";
import {Registro} from '../components/Registro';

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/>
          <Route exact path="/cardio" component={Cardio} />
          <Route exact path="/dance" component={Dance} />
          <Route exact path="/kickboxing" component={Kickboxing} />
          <Route exact path="/meditacion" component={Meditacion} />
          <Route exact path="/pilates" component={Pilates} />
          <Route exact path="/yoga" component={Yoga} />
        </Switch>
    </Router>
  );
}