import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Siderbar';
import Articles from './Articles';


class Home extends Component {

    render() {

        return (
            <div id="home">
                <Slider title="Web Developer" size="slider-big" />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos articulos</h1>
                        <Articles 
                            home="true"    
                        />
                    </div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Home;