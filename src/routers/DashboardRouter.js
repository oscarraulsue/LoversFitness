import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import AtencionMedica from '../components/AtencionMedica';
import About from "../components/About";
import MedicinaDeportiva from '../components/MedicinaDeportiva';
import SupportAdmin from '../supportadmin/SupportAdmin';
import Nutricionista from '../components/Nutricionista';
import AppTienda from '../components/AppTienda';
import {RegProducto} from '../components/RegProducto';
import {Editar} from '../components/Editar';
import MapView from '../components/MapView';

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth"  component={About}/> 
                <Route exact path="/auth/atencionmedica"  component={AtencionMedica}/>
                <Route exact path="/auth/nutricionista"  component={Nutricionista}/>
                <Route exact path="/auth/medicinadeportiva"  component={MedicinaDeportiva}/>
                <Route exact path="/auth/supportadmin"  component={SupportAdmin}/>
                <Route exact path="/auth/apptienda"  component={AppTienda}/>
                <Route exact path="/auth/regproducto"  component={RegProducto}/>
                <Route exact path="/auth/editar"  component={Editar}/>
                <Route exact path="/auth/map"  component={MapView}/>
                <Redirect to="/auth" />
            </Switch>
        </div>  
    )
}
