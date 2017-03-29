import React from "react";
import highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";
import Request from "superagent";

import { browserHistory } from "react-router";
import { Spinner } from "./Spinner";

export class Chart extends React.Component {

  constructor(props){
    super();
    this.state = {
      stops: props.route.stops,
      average: props.route.average,
      timeGiven: props.route.time,
      timeName: props.route.timeName,
      type: "line",
      info: props.route.info,
      gettingData: false
    };
  };
  radioSelect(e){
    this.setState({
      type: e.target.value
    })
  };
  clickTest(){
    this.setState({
      gettingData: true
    });

    var url="http://localhost:8888?param=averageday";
    Request.get(url).then((response) => {
      //console.log(response);
      var myObject = JSON.parse(response.text);
      this.setState({
        average: myObject.valuesAverage,
        timeGiven: myObject.valuesDay,
        gettingData: false
      });
    },(response) => {
      this.setState({
        gettingData: false
      });
    }


    );
  };


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
          {this.state.gettingData ? (<h1></h1>) :
          (<div className="graphRadioBtns">
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
          </div>)}
          {this.state.gettingData ?
            (<Spinner/>) : (<ReactHighcharts config={config}></ReactHighcharts>)}
          {this.state.gettingData ? (<h1></h1>) :
          (<div className="statsButtons">
            <button className="statButton" onClick={this.clickTest.bind(this)}>Today / Average Stats</button>
            <button className="statButton" onClick={this.clickTest.bind(this)}>This week / Average Stats</button>
          </div>)}
        </div>

      )
    }
}
