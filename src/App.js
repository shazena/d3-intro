import React, {Component} from 'react';
import './App.css';
import { drawSVG } from './charts/svg'
import { drawBarChart } from './charts/barChart'
import { donutChart } from './charts/donutChart'
import {animate} from './charts/animations'
import {map} from './charts/map'
import { wordBubble } from './charts/wordBubble'


class App extends Component{
  constructor() {
    super();
  }

  componentDidMount() {
    drawSVG()
    drawBarChart()
    donutChart()
    animate()
    map()
    wordBubble()
  }

  render() {
    return (
      <div className="App">
      <header>
        <h1>Intro to D3.js</h1>
        <i>by Lia Kapanadze</i>
      </header>
      <div className="chart" id="svgFun">
        <h3>SVG Playground</h3>
      </div>
      <div className="chart" id="chart1">
        <h3>Chart #1</h3>
      </div>
      <div className="chart" id="chart2">
      <h3>Chart #2</h3>
      </div>
      <div className="chart" id="chart3">
      <h3>Chart #3</h3>
      </div>
      <div className="chart" id="chart4">
      <h3>Chart #4</h3>
      </div>
      <div className="chart" id="chart5">
      <h3>Chart #5</h3>
      </div>
      </div>
    )
}
}

export default App;