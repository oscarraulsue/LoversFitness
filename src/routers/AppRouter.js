import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import PortadaPrincipal from "../components/PortadaPrincipal";
import { ProgramaRetos } from "../components/ProgramaRetos";
import Programas from "../components/Programas";
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
          <Route exact path="/login"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/>
          <Route exact path="/cardio" component={Cardio} />
          <Route exact path="/dance" component={Dance} />
          <Route exact path="/kickboxing" component={Kickboxing} />
          <Route exact path="/meditacion" component={Meditacion} />
          <Route exact path="/pilates" component={Pilates} />
          <Route exact path="/yoga" component={Yoga} />
          <Route exact path="/programas" component={Programas} />
          <Route exact path="/" component={PortadaPrincipal} />
          <Route exact path="/programaRetos" component={ProgramaRetos} />

        </Switch>
    </Router>
  );
}