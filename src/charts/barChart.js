import * as d3 from "d3";
import sales from '../data/sales.json'

export const drawBarChart = () => {
    // your first chart - bar chart

    var chart_width = 800;
    var chart_height = 500;

    let svg = d3.select('#chart1')
        .append('svg')
        .attr('width', chart_width)
        .attr('height', chart_height)


    const scale = d3.scaleLinear()
        .domain([0, 3000]) //things that go in
        .range([0, 400]) //things that come out

    svg.selectAll('rect')
        .data(sales)
        .enter()
        .append('rect')
        .attr('fill', 'grey')
        .attr('width',
            function (d, i) {
                return (chart_width / sales.length) / 2;
            })
        .attr('height',
            function (d, i) {
                return scale(d.count);
            })
        .attr('x',
            function (d, i) {
                return (i + 1) * (chart_width / sales.length) - 100;
            })
        .attr('y',
            function (d, i) {
                var bar_height = scale(d.count);
                return chart_height - bar_height;
            })


}