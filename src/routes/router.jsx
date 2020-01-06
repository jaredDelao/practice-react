import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from '../components/SeccionPruebas';
import Micomponente from '../components/Micomponente';
import Peliculas from '../components/Peliculas';
import ErrorPage from '../components/Error';


class Router extends Component {

    render() {

        return (

            // Configurar rutas y paginas
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/segunda-ruta" component={Micomponente} />
                    <Route exact path="/segunda-ruta" component={Micomponente} />

                    <Route exact path="/pagina1" render={() => (
                        <h1>Hola desde pagina1</h1>
                    )}/>

                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Router;