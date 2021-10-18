import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {AtencionMedica} from '../components/AtencionMedica';
import SupportAdmin from '../supportadmin/SupportAdmin';
import {AtencionNutricion} from '../components/AtencionNutricion';
import {RegProducto} from '../components/RegProducto';
import {Editar} from '../components/Editar';
import MapView from '../components/MapView';
import PortadaPrincipal from "../components/PortadaPrincipal";
import { Cardio } from "../components/programas/Cardio";
import { Dance } from "../components/programas/Dance";
import { Kickboxing } from "../components/programas/Kickboxing";
import { Meditacion } from "../components/programas/Meditacion";
import { Pilates } from "../components/programas/Pilates";
import { Yoga } from "../components/programas/Yoga";
import RetoAbsmax from '../components/retos/RetoAbsmax';
import AbsDay1 from '../components/retos/absmax/AbsDay1';
import RegistroReto from '../components/RegistroReto';
import CardRetos from '../components/CardRetos';
import DetalleReto from '../components/DetalleReto';
import Carrito from '../components/Carrito';
import { FormDetalle } from '../components/FormDetalle';


export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth"  component={PortadaPrincipal}/> 
                <Route exact path="/auth/atencionnutricion"  component={AtencionNutricion}/>
                <Route exact path="/auth/atencionmedica"  component={AtencionMedica}/>
                <Route exact path="/auth/supportadmin"  component={SupportAdmin}/>
                <Route exact path="/auth/regproducto"  component={RegProducto}/>
                <Route exact path="/auth/editar"  component={Editar}/>
                <Route exact path="/auth/map"  component={MapView}/>
                <Route exact path="/auth/cardio" component={Cardio} />
                <Route exact path="/auth/dance" component={Dance} />
                <Route exact path="/auth/kickboxing" component={Kickboxing} />
                <Route exact path="/auth/meditacion" component={Meditacion} />
                <Route exact path="/auth/pilates" component={Pilates} />
                <Route exact path="/auth/yoga" component={Yoga} />
                <Route exact path="/auth/retoabsmax" component={RetoAbsmax}/>
                <Route exact path="/auth/absday1" component={AbsDay1}/>
                <Route exact path="/auth/registroreto" component={RegistroReto}/>
                <Route exact path="/auth/cardreto" component={CardRetos}/>
                <Route exact path="/auth/detallereto" component={DetalleReto}/>
                <Route exact path="/auth/carrito" component={Carrito}/>
                <Route exact path="/auth/formdetalle" component={FormDetalle}/>
                <Redirect to="/auth" />
            </Switch>
        </div>  
    )
}
