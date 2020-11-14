import * as d3 from "d3";
//npm i d3-cloud
import * as cloud from "d3-cloud"
import all_words from '../data/words.json'
import colors from '../data/colors'

// original code from here: https://github.com/jasondavies/d3-cloud

export const wordBubble = () => {
  // set the dimensions and margins of the graph
  var width = 800
  var height = 500

  var words_object = {}
  var words_array = []

  all_words.map(function (word) {
    words_object[word] = !words_object[word] ? 1 : words_object[word]+1
  })

  console.log(words_object, typeof(words_object))
  for (let i = 0; i < Object.keys(words_object).length; i++){
    words_array.push([Object.keys(words_object)[i], ""])
  }

  for (let i = 0; i < Object.values(words_object).length; i++){
    words_array[i][1] = Object.values(words_object)[i]
  }

  console.log(words_array)


  var layout = cloud()
    .size([width, height])
    .words(words_array.map(function(d) {
      return {text: d[0], size: d[1]*30, test: "haha", color: "#FF00FF"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("#chart5").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
    .attr('fill', function () {
        var random = Math.floor(Math.random() * Math.floor(colors.length))
        console.log(random)
        return colors[random]
      })
      .text(function(d) { return d.text; })
      ;
}


}

