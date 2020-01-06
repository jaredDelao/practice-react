import React, { Component } from 'react';

import Pelicula from './Pelicula';


class Peliculas extends Component {

    state = {
        peliculas: [
            { title: 'Batman', image: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/12/Dc-Rebirth-Batman-Header-Image.jpg' },
            { title: 'Sherlock Holmes', image: 'https://is5-ssl.mzstatic.com/image/thumb/Video60/v4/be/9a/80/be9a809d-8f0e-9ed6-e997-9a8b42b33aec/pr_source.lsr/268x0w.png' },
            { title: 'League of Legends', image: 'https://i.blogs.es/19ba21/league-of-legends/450_1000.jpg' }
        ],
        year: 2020,
        nombre: 'Jared',
        favorita: ''
    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].title = "Batman Begins";

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, i) => {
        console.log(pelicula)
        this.setState({
            favorita: pelicula.title
        })
    }

    componentWillMount() {
        // Equivalente a OnInit
    }
    componentDidMount() {
        // Equivalente a AfterViewContent
    }

    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                {/* crear componente peliculas */}

                <button onClick={this.cambiarTitulo}>Cambiar titulo</button>

                {/* Ejemplo de un condicional IF */}
                {this.state.favorita != ''
                    ? (
                        <p className="favorita" style={{
                            background: 'green',
                            color: 'white',
                            padding: '10px'
                        }}>
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita}</span>
                        </p>
                    )
                    : (<p>No hay pelicula favorita</p>)

                }


                <div id="articles" className="peliculas">

                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                    indice={i}
                                />
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default Peliculas;