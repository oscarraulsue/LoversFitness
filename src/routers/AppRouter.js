import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';
import AtencionMedica from '../components/AtencionMedica';
import { About } from "../components/About";
import { loginSincrono } from "../actions/actionLogin";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthRouter } from "./AuthRouter";
import {  getAuth,onAuthStateChanged } from "firebase/auth";

// import Loading from "../components/Loading";


export default function AppRouter() {

  const auth = getAuth();
  const [checking, setChecking] = useState(true)
  const [isLooggedIn, setsIsLoogedIn] = useState(false)
  const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if (user?.uid) {
                dispatch(loginSincrono(user.uid, user.displayName))
                setsIsLoogedIn(true)
                // dispatch(...(user.uid))
                console.log(user.uid)
            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        // return <Loading />
    }


    return (
         <Router>
            <div>
                <Switch>
                    <PublicRouter
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated ={isLooggedIn}
                    />
                    <PublicRouter
                        path="/about"
                        component={About}
                        isAuthenticated ={isLooggedIn}
                    />

                    <PublicRouter
                        path="/login"
                        component={Login}
                        isAuthenticated ={isLooggedIn}
                    />

                    <PublicRouter
                        path="/registro"
                        component={Registro}
                        isAuthenticated ={isLooggedIn}
                    />

                    {/* <PrivateRouter
                        exact
                        path="/"
                        component={}
                        isAuthenticated ={isLooggedIn}
                    /> */}

                    <Redirect to="/auth/about" />
                </Switch>
            </div>
        </Router>
  );
}