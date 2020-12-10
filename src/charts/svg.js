import * as d3 from "d3";

export const drawSVG = () => {
    //practice with svgs here

    var chart_width = 800;
    var chart_height = 500;

    let svg = d3.select('#svgFun')
        .append('svg')
        .attr('width', chart_width)
        .attr('height', chart_height);

    svg.append('rect')
        .attr('width', 200)
        .attr('height', 100)
        .attr('fill', '#21ffff')
        .attr('stroke-width', '10px')
        .attr('stroke', 'red')

    svg.append('rect')
        .attr('width', 50)
        .attr('height', 50)
        .attr('fill', 'green')
        .attr('x', 200)
        .attr('y', 0)

    svg.append('circle')
        .attr('r', 80)
        .attr('stroke', 'purple')
        .attr('stroke-width', 10)
        .attr('fill', 'cyan')
        .attr('cx', chart_width / 2)
        .attr('cy', chart_height / 2)

    svg.append('text')
        .text("Shazena")
        .attr('fill', 'white')
        .attr('font-size', 70)
        .attr('x', 0)
        .attr('y', chart_height - 10)


    svg.append('path')
        .attr('d', 'M 0 500 L 200 400 L 400 500 L 600 400 L 800 500')
        .attr('stroke', 'red')
        .attr('fill', 'none')


}