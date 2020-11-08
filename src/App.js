import React, {Component} from 'react';
import './App.css';
import {drawSVG} from './charts/svg'

class App extends Component{
  constructor() {
    
  }

  componentDidMount() {
    drawSVG()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Intro to D3.js</h1>
          <i>by Lia Kapanadze</i>
        </header>
        <div className="chart">
          <h3>SVG Playground</h3>
        </div>
        <div className="chart">
          <h3>Chart #1</h3>
        </div>
        <div className="chart">
          <h3>Chart #2</h3>
        </div>
        <div className="chart">
          <h3>Chart #3</h3>
        </div>
        <div className="chart">
          <h3>Chart #4</h3>
        </div>
        <div className="chart">
          <h3>Chart #5</h3>
        </div>
        <div className="chart">
          <h3>Chart #6</h3>
        </div>
      </div>
    );
  }
}

export default App;
