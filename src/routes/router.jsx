import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// importar componentes
import Micomponente from '../components/Micomponente';
import ErrorPage from '../components/Error';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Home from '../components/Home';
import Blog from '../components/Blog';
import Peliculas from '../components/Peliculas';
import Formulario from '../components/Formulario';



class Router extends Component {

    render() {

        return (

            // Configurar rutas y paginas
            <BrowserRouter>

                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />


                    <Route exact path="/segunda-ruta" component={Micomponente} />

                    <Route exact path="/pagina1" render={() => (
                        <h1>Hola desde pagina1</h1>
                    )} />

                    {/* Ruta con parametros */}
                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h3 className="subheader">Página de pruebas</h3>
                                <h2>{nombre} {apellidos}</h2>

                                {nombre && !apellidos &&
                                    <span>{nombre}</span>
                                }
                                {nombre && apellidos &&
                                    <span>{nombre}-{apellidos}</span>
                                }
                            </div>
                        )
                    }
                    } />
                    <Route component={ErrorPage} />
                </Switch>

                <div className="clearfix">
                    <Footer />
                </div>


            </BrowserRouter >

        )
    }
}

export default Router;
