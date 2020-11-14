import * as d3 from "d3";

export const drawSVG = () => {
  var chart_width = 800;
  var chart_height = 500;

  let svg = d3.select('#svgFun')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);
  
  // draw an organge rectangle with purple outline and place it at the
  // top left of your chart
  
  svg.append('rect')
    .attr('width', '200px')
    .attr('height', '100px')
    .attr('fill', '#fa8703')
    .attr('stroke', '#61449e')
    .attr('stroke-width', '2px')
    .attr('x', '20px')
    .attr('y', '20px')
  
  // draw a circle with no color and thick blue outline and place
  // it at the bottom right of your chart
  // give it a radius of 100px

  var radius = 50
  var circle_x = chart_width - radius - 20
  var circle_y = chart_height - radius - 20
  
  svg.append('circle')
    .attr('r', `${radius}px`)
    .attr('stroke', '#61449e')
    .attr('stroke-width', '2px')
    .attr('cx', `${circle_x}px`)
    .attr('cy', `${circle_y}px`)
  
  // give our chart a yellow border
  svg.append('path')
    .attr('d', `M ${chart_width} 0 L 0 0 L 0 ${chart_height} L ${chart_width} ${chart_height} L ${chart_width} 0`)
    .attr('stroke', 'yellow')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')
    
  
  // draw a mountain range silhouette using a thick white line
  // and place it at the center of the chart

  svg.append('path')
    .attr('stroke', 'white')
    .attr('d', `M 200 300 L 250 200 L 300 300 L 350 200 L 400 300 L 450 200 L 500 300 `)
    .attr('fill', 'green')
    .attr('stroke-width', '5px')
  
  
  //write your name and place it wherever you'd like
  svg.append('text')
    .text("Lia Kapanadze")
    .attr('fill', 'purple')
    .attr("font-size", 50)
    .attr('x', 200)
    .attr('y', 400)

}