import * as d3 from "d3";
import { scaleOrdinal, svg } from "d3";
import sales from '../data/sales.json'
import schedule from '../data/schedule.json'

export const donutChart = () => {
  // set the dimensions and margins of the graph
  var width = 300
  var height = 300
  var margin = 20

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin

  // append the svg object to the div called 'chart2'


  var salesButton = d3.select("#chart2")
    .append('button')
    .text('Sales')
    .on('click', ()=> donut(sales))
  
  var scheduleButton = d3.select("#chart2")
    .append('button')
    .text('Schedule')
    .on('click', () => donut(schedule))

  function donut(data) {
    console.log('donut')
    d3.select('#donut').remove()
    d3.select('#donutLegend').remove()

    var svg = d3.select("#chart2")
      .append("svg")
      .attr('id', 'donut')
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    var legend = d3.select('#chart2')
      .append('svg')
      .attr('id', 'donutLegend')
      .attr("width", width)
      .attr("height", height/2)
    
          // set the color scale
    var color = scaleOrdinal()
      .domain(data)
      .range(['red', 'white', 'blue', 'yellow', 'green', 'pink', 'black'])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {return d.count; })
    var data_ready = pie(data)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(50).outerRadius(radius))
      .attr('fill', function(d,i){ return(color(i)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
    
  
    legend.selectAll('rect')
      .data(data_ready)
      .enter()
      .append('rect')
      .attr('fill', function (d, i) { return (color(i)) })
      .attr("width", 10)
      .attr("height", 10)
      .attr('x', 0)
      .attr('y', function (d, i) {
        return (i*20) + 10
      })
    
    legend.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(function (d) {
        return d.text
      })
      .attr('fill', function (d, i) { return (color(i)) })
      .attr('x', 20)
      .attr('y', function (d, i) {
        return (i*20) + 20
      })
    

  }   

  donut(sales);

}