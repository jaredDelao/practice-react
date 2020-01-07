import React, { Component, useState } from 'react';
import Sidebar from './Siderbar';


class Formulario extends Component {

    state = {
        user: {}
    }

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    recibirFormulario = (e) => {
        e.preventDefault();
        var genero;

        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else if (this.generoOtroRef.current.checked) {
            genero = this.generoOtroRef.current.value;
        } else {
            genero = null
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })

        let returned = Object.entries(user).reduce((acc, v) => {
            acc.push({ [v[0]] : v[1]  });
            return acc;
        }, [])

        console.log(returned)

    }

    render() {



        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/* Mostrar datos del formulario */}

                        <div id="user-data">
                            {this.state.user.nombre && <p>Nombre: <strong>{this.state.user.nombre}</strong></p>}
                            {this.state.user.apellidos && <p>Apellidos: <strong>{this.state.user.apellidos}</strong></p>}
                            {this.state.user.bio && <p>bio: <strong>{this.state.user.bio}</strong></p>}
                            {this.state.user.genero && <p>genero: <strong>{this.state.user.genero}</strong></p>}
                        </div>


                        {/* Creación de Formulario */}
                        <form className="mid-form" onSubmit={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>

                    </div>

                    <Sidebar blog="false" />
                </div>
            </div>
        )
    }
}

export default Formulario;