import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import AtencionMedica from '../components/AtencionMedica';
import About from "../components/About";
import MedicinaDeportiva from '../components/MedicinaDeportiva';
import SupportAdmin from '../supportadmin/SupportAdmin';
import Nutricionista from '../components/Nutricionista';

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth"  component={About}/> 
                <Route exact path="/auth/atencionmedica"  component={AtencionMedica}/>
                <Route exact path="/auth/nutricionista"  component={Nutricionista}/>
                <Route exact path="/auth/medicinadeportiva"  component={MedicinaDeportiva}/>
                <Route exact path="/auth/supportadmin"  component={SupportAdmin}/>
                <Redirect to="/auth" />
            </Switch>
        </div>  
    )
}
