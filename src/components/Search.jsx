import React, { Component } from 'react';
import axios from 'axios';

import Slider from './Slider';
import Sidebar from './Siderbar';
import Articles from './Articles';


class Search extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {
        // Parámetro que viene por url
        var searched = this.props.match.params.search;

        return (
            <div id="blog">
                <Slider 
                    title={'Búsqueda: '+searched} 
                    size="slider-small" 
                />
                <div className="center">
                    <div id="content">

                        {/* Listado de articulos desde API */}
                        <Articles
                            search={searched}     
                        />

                    </div>

                    <Sidebar blog="true" />
                </div>
            </div>
        )
    }
}

export default Search;