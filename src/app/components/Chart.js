import React from "react";
import highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";

import { browserHistory } from "react-router";

export class Chart extends React.Component {

  constructor(props){
    super();
    this.state = {
      stops: props.route.stops,
      average: props.route.average,
      timeGiven: props.route.time,
      timeName: props.route.timeName,
      type: "line",
      info: props.route.info
    };
  }
  radioSelect(e){
    this.setState({
      type: e.target.value
    })
  }

  render() {
      var config = {
        xAxis: {
          categories: this.state.stops,
          title: {
            text: "Dublin Bus Stop Numbers"
          }
        },
        series: [{
          name: "Average",
          type: this.state.type,
          data: this.state.average,
        },{
          name: this.state.timeName,
          type: this.state.type,
          data: this.state.timeGiven
        }],
        title: {
          text: 'Dublin BUS Lateness Analitics'
        },
        subtitle: {
          text: this.state.info
        },
        yAxis: {
          title: {
            text: "Minutes"
          }
        }
      }
      return (
        <div className="graph-container">
          <div className="graphRadioBtns">
            <div onChange={this.radioSelect.bind(this)}>
              <div className="radioContainer">
                <input type="radio" value="column" name="chartRadio"/> Column
              </div>
              <div className="radioContainer">
                <input type="radio" value="spline" name="chartRadio"/> Spline
              </div>
              <div className="radioContainer">
                <input type="radio" value="line" name="chartRadio"/> Line
              </div>
              <div className="radioContainer">
                <input type="radio" value="scatter" name="chartRadio"/> Scatter
              </div>
              <div className="radioContainer">
                <input type="radio" value="areaspline" name="chartRadio"/> Areaspline
              </div>
            </div>
          </div>
          <ReactHighcharts config={config}></ReactHighcharts>
        </div>
      )
    }
}
