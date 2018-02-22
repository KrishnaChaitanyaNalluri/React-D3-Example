import React, { Component } from 'react';
import * as d3 from "d3";
import axios from 'axios';
import arteriesJSON from '../json/arteries.json';
import freewaysJSON from '../json/freeways.json';
import neighborhoodsJSON from '../json/neighborhoods.json';
import streetsJSON from '../json/streets.json';

class Commutemap extends Component {
    constructor(){
        super();
        this.state = {
            muni_map: null,            
            path: {},
            routes: null, 
            _timer: null,
            time: 0    
        };
    }

    componentDidMount(){
        let mapSvg = d3.select('div.sfomap-section')
        .append('svg')
        .attr('width', 600)
        .attr('height', 500);
    
    var projection = d3.geoMercator().scale(1).translate([0, 0]).precision(0);
    projection.fitSize([600, 500], neighborhoodsJSON);
    const geoPath = d3.geoPath().projection(projection);        
  
    mapSvg.append("g")
            .selectAll('path')
            .data(streetsJSON.features)
            .enter()
            .append('path')
            .attr('class', 'streets')
            .attr('d', geoPath);
            
    mapSvg.append("g")
            .selectAll('path')
            .data(freewaysJSON.features)
            .enter()
            .append('path')
            .attr('class', 'freeways')
            .attr('d', geoPath);
    mapSvg.append("g")
            .selectAll('path')
            .data(arteriesJSON.features)
            .enter()
            .append('path')
            .attr('class', 'arteries')
            .attr('d', geoPath);
    mapSvg.append("g")
            .selectAll('path')
            .data(neighborhoodsJSON.features)
            .enter()
            .append('path')
            .attr('class', 'neighborhoods')
            .attr('d', geoPath);
    let muni_vehicles = mapSvg.append("g");
    this.setState({
        muni_map: muni_vehicles,
        path: geoPath
    });        
}
    

    render(){

        return (
            <div className="transit">
                <div className = 'selected-routes-section'>
                </div>            
                <div className = 'sfomap-section'>                
                </div>
            </div>
        );
    }
}

export default Commutemap;