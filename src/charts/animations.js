import * as d3 from "d3";
import debt from "../data/debt.json"

export const animate = () => {
  // set the dimensions and margins of the graph
  var width = 700
  var height = 500

  const debt_scale = d3.scaleLinear()
    .domain([0,26477])
    .range([0, 800])
  
  const year_scale = d3.scaleLinear()
    .domain([2000,2010])
    .range([0, 500])

  let svg = d3.select('#chart3')
    .append('svg')
    .attr('id', 'barChart')
    .attr('width', width)
    .attr('height', height);
  
  
  svg.selectAll('text.year')
    .data(debt)
    .enter()
    .append('text')
    .text(function (d) {
      return Object.keys(d)[0]
    })
    .attr('fill', 'white')
    .attr('font-size', 10)
    .attr('x', function (d) {
      return year_scale(Object.keys(d)[0])  + 50
    })
    .attr('y', function () {
      return height
    })
  
  svg.selectAll('circle')
    .data(debt)
    .enter()
    .append('circle')
    .attr('fill', 'grey')
    .attr('stroke', 'white')
    .attr('stroke-widht', '2px')
    .attr('r', function () {
      return (width/debt.length)**(1/2)
    })
    .attr('cx', function (d, i) {
      return year_scale(Object.keys(d)[0]) + (width/debt.length)**(1/2) + 50
    })
    .attr('cy', function (d) {
      return height - 20;
    })
    .transition()
    .attr('cy', function (d) {
      return height - debt_scale(Object.values(d)[0])
    })
    .duration(2000)
    .delay(3000)

}