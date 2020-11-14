import * as d3 from "d3";
import us_data from '../data/us.json'
import visited from '../data/visited.json'

export const map = () => {
  // set the dimensions and margins of the graph
  var width = 800
  var height = 500


  var colors = ["grey", "green"]

  //to position and scale the map
  var projection = d3.geoAlbersUsa()
    .scale([width])
    .translate([width/2, height/2]);

  var path = d3.geoPath()
    .projection(projection);
  
  var svg = d3.select('#chart4')
    .append('svg')
    .attr('width', width)
    .attr('height', height)



  us_data.features.forEach((us_e, us_i) => {
    visited.forEach((v_e, v_i) => {
      if (us_e.properties.name !== v_e.state) {
        return null;
      }
      us_data.features[us_i].properties.visited = parseFloat(v_e.num);
     
    }
   )
  })
  

  svg.selectAll('path')
    .data(us_data.features)
    .enter()
    .append('path')
    .attr("d", path)
    .attr('fill', function (d) {
      return colors[d.properties.visited]
    })
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
  
}