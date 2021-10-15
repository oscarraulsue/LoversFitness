import React from 'react'
import App from './App'
import Navbar from './Navbar'
import Programas from './Programas'

export const ProgramaRetos = () => {
    return (
        <div>
            <h2 className="titulo_prog" text-center>Programas</h2>
            <Programas />
            <App />
        </div>
    )
}
