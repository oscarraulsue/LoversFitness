import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { About } from '../components/About';
// import Login from '../components/Login';
// import { Registro } from '../components/Registro';
import { Telemedicina } from '../components/Telemedicina';


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    {/* <Route 
                        exact
                        path="/auth/about"
                        component={ About }
                    />

                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/registro"
                        component={ Registro }
                    /> */}

                    <Route 
                        exact
                        path="/auth/telemedicina"
                        component={ Telemedicina }
                    />

                    <Redirect to="/auth/telemedicina" />

                </Switch>
            </div>

        </div>
    )
}