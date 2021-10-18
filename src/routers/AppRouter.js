import React, { useState, useEffect } from "react";
import {Puff} from 'react-loading-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Telemedicina} from '../components/Telemedicina';
import Login from '../components/Login';
import LoginAsesor from '../components/LoginAsesor';
import { Registro } from '../components/Registro';
import { ProgramaRetos } from "../components/ProgramaRetos";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {useDispatch} from 'react-redux';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { loginSincrono } from "../actions/actionLogin";
import Navbar from "../components/Navbar";
import AppTienda from "../components/AppTienda";
import { Detalle } from "../components/Detalle";
import { Coaches } from "../components/Coaches";
import { Listar } from "../actions/actionTipoAsesor";
import PortadaPrincipal from "../components/PortadaPrincipal";
import { listAct2 } from "../actions/actionRegProducto";
import { Comentarios } from "../components/Comentarios";
import { listRetos } from "../actions/actionRetos";
import { ListarCar } from "../actions/actionCarrito";
export default function AppRouter() {

const dispatch = useDispatch();

const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
     const auth = getAuth();
     dispatch(listAct2())
     onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
        dispatch(Listar(user.uid))
        dispatch(listRetos())
        dispatch(ListarCar(user.uid))
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false); 
    });
  }, [dispatch, setChecking,  setIsLoggedIn])

  if(checking){
    return(
      <div style={{display: 'flex', margin:"15rem 30rem",}}>
      <Puff stroke="#98ff98" strokeOpacity={.125} speed={.75} />
       <h1>Cargando....</h1>
         
</div>
    )
  }

  return (
    <Router>
        <Navbar />   
      <div>
      
        <Switch>
    
           <PublicRoute
           exact 
           path="/" 
           isAuthenticated={ isLoggedIn }
           component={PortadaPrincipal} />

           <Route 
           exact 
           path="/programaRetos" 
           component={ProgramaRetos} />

           <Route 
           exact 
           path="/comentarios" 
           component={Comentarios} />

          <Route 
           exact 
           path="/coaches" 
           component={Coaches} />

          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={ isLoggedIn }
          />
           <PublicRoute
            exact
            path="/loginasesor"
            component={LoginAsesor}
            isAuthenticated={ isLoggedIn }
          />
          <PublicRoute
            exact
            path="/registro"
            component={Registro} 
            isAuthenticated={ isLoggedIn }
            />
            <Route 
            exact 
            path="/telemedicina"  
            component={Telemedicina}/>
          <Route 
          exact 
          path="/apptienda"  
          component={AppTienda}/>
          <Route
          exact 
          path="/detalle"  
          component={Detalle}/>
          <PrivateRoute
            path="/auth"
            component={DashboardRouter}
           isAuthenticated={ isLoggedIn }
          />
        </Switch>
      </div>
    </Router>
  );
}