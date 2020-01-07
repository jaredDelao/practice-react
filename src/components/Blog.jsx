import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Siderbar';


class Blog extends Component {

    render() {

        return (
            <div id="blog">
                <Slider title="Blog" size="slider-small" />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos desde API */}
                    </div>

                    <Sidebar blog="true"/>
                </div>
            </div>
        )
    }
}

export default Blog;