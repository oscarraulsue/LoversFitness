import React from 'react'
import Retos from './Retos'
import Programas from './Programas'

export const ProgramaRetos = () => {
    return (
        <div>
            <h2 className="titulo_prog" text-center>Programas</h2>
            <Programas />
            <Retos />
        </div>
    )
}
