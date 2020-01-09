import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Siderbar';
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {

    state = {
        article: false,
        status: null
    };

    url = Global.url;

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                })
            })
    }

    render() {

        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">

                    {this.state.article &&

                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment fromNow>{article.date}</Moment>
                            </span>
                            <p>{article.content}</p>

                            <a href="" className="btn btn-danger">Eliminar</a>
                            <a href="" className="btn btn-warning">Editar</a>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Intentalo de nuevo mas tarde</p>
                        </div>
                    }

                    {this.state.status === null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos</p>
                        </div>

                    }


                </section>
                <Sidebar />
            </div>
        )
    }
}

export default Article;