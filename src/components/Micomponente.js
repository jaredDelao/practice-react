import React, { Component } from 'react';

class Micomponente extends Component {

    render() {

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomato', 'milk', 'chocolate'],
            calorias: 2200
        }

        return (
            <React.Fragment>
                <h2>{'Nombre: ' + receta.nombre}</h2>
                <h4>{'Calorias: ' + receta.calorias}</h4>

                <ul>
                    {receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}> {ingrediente} </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Micomponente;