import * as d3 from "d3";
//npm i d3-cloud
import * as cloud from "d3-cloud"
import all_words from '../data/words.json'
import colors from '../data/colors'

// original code from here: https://github.com/jasondavies/d3-cloud

export const wordBubble = () => {
//write your word bubble code here


    var layout = cloud()
        .size([800, 500])
        .words([
            "Hello", "world", "normally", "you", "want", "more", "words",
            "than", "this", "world", "normally", "you", "want", "more", "words",
            "than", "this", "world", "normally", "you", "want", "more", "words",
            "than", "this", "world", "normally", "you", "want", "more", "words",
            "than", "this", "world", "normally", "you", "want", "more", "words",
            "than", "this"].map(function (d) {
            return {text: d, size: 10 + Math.random() * 90, test: "haha"};
        }))
        .padding(5)
        .rotate(function () {
            return ~~(Math.random() * 2) * 90;
        })
        .font("Impact")
        .fontSize(function (d) {
            return d.size;
        })
        .on("end", draw);

    layout.start();

    function draw(words) {
        d3.select('#chart5').append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) {
                return d.size + "px";
            })
            .style("font-family", "Impact")
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .attr('fill',
                function (d, i) {
                    let colors = ['red', 'blue', 'green', 'orange', 'pink', 'magenta'];
                    return colors[Math.floor(Math.random() * colors.length)];
                })
            .text(function (d) {
                return d.text;
            });
    }


}