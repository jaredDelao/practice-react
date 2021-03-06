import React, { Component } from 'react';
import axios from 'axios';

import Slider from './Slider';
import Sidebar from './Siderbar';
import Articles from './Articles';


class Blog extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        axios.get('http://localhost:3900/api/articles')
            .then(resp => {
                this.setState({
                    articles: resp.data.articles,
                    status: 'success'
                });
            });

        return (
            <div id="blog">
                <Slider title="Blog" size="slider-small" />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos desde API */}

                        <Articles />
                    </div>

                    <Sidebar blog="true" />
                </div>
            </div>
        )
    }
}

export default Blog;