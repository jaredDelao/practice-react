import React, { Component } from 'react';

import Micomponente from "./Micomponente";
import Peliculas from "./Peliculas";


class SeccionPruebas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 2
        }
    }


    holamundo(nombre) {
        var presentacion = <h2>Hola soy {nombre}</h2>;
        return presentacion;
    }

    sumar() {
        
        this.setState({
            contador: (this.state.contador+1)
        })
    }

    // fucion de flecha para no implementar el (this)
    restar = () => {
        this.setState({
            contador: (this.state.contador-1)
        })
    }




    render() {
        var nombre = "Jared De la O";

        this.sumar = this.sumar.bind(this)

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                {this.holamundo(nombre)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <Micomponente />
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>


            </section>
        )
    }
}

export default SeccionPruebas;