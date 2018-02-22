import * as d3 from "d3";
export const projection = d3.geoMercator()
                                        .scale(10000)
                                        .translate([0, 500])

export const Path = d3.geoPath().projection(projection);