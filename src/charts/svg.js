import * as d3 from "d3";

export const drawSVG = () => {
  var chart_width = 800;
  var chart_height = 400;

  let svg = d3.select('#svgFun')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);
  
}