import * as d3 from "d3";
import sales from '../data/sales.json'

export const drawBarChart = () => {
  var chart_width = 800;
  var chart_height = 500;

  let svg = d3.select('#chart1')
    .append('svg')
    .attr('id', 'barChart')
    .attr('width', chart_width)
    .attr('height', chart_height);
  
  
  const scale = d3.scaleLinear()
    .domain([0,3000])
    .range([0,400])
  
  // draw the chart
  svg.selectAll('rect')
    .data(sales)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
      return (i +1 ) * (chart_width / (sales.length + 2));
    })
    .attr('y', function (d) {
      return chart_height - scale(d.count) - 20;
    })
    .attr('width', function (d) {
      return (chart_width/(sales.length +2))/2
    })
    .attr('height', function (d) {
      return scale(d.count)
    })
    .attr('fill', 'grey')
    .attr('stroke', 'white')
    .attr('stroke-widht', '2px')
  
  
  svg.selectAll('text.count')
    .data(sales)
    .enter()
    .append('text')
    .attr('x', function (d, i) {
      return (i +1 ) * (chart_width / (sales.length + 2)) + (chart_width/(sales.length +2))/8;
    })
    .attr('y', function (d) {
      return chart_height - scale(d.count) - 25;
    })
    .text(function (d) {
      return d.count
    })
    .attr('font-size', '10px')
    .attr('fill', 'white')
  
  svg.selectAll('text.product')
    .data(sales)
    .enter()
    .append('text')
    .attr('x', function (d, i) {
      return (i +1 ) * (chart_width / (sales.length + 2)) + (chart_width/(sales.length +2))/14;
    })
    .attr('y', function (d) {
      return chart_height - 5;
    })
    .text(function (d) {
      return d.text
    })
    .attr('font-size', '10px')
    .attr('fill', 'white')


}