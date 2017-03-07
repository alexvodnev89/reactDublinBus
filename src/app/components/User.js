import React from "react";
import highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";

import { browserHistory } from "react-router";

export class User extends React.Component {

  constructor(){
    super();
    this.state = {
      stops: ["4747","1882","7379","4903","7219","7218","7031","4897","4898","4574",
              "4575","1690","1681","1682","1683","1684","1685","1686","1687","1688",
              "1689","1690","1691","1692","1693","1694","1695","1696","1697","1698",
              "1699","1700","1701","1702","1703","1704","1705","1706","1707","1708",
              "1709","1528","1710","1711","1712","1713","1714","1715","7453","1478",
              "1479","315","404","747","843","845","846","7340"],
      lateness1: [5,3,5,8,2,1,7,4,1,0,4,6,3,12,2,4,6,3,7,2,2,5,4,6,7,2,1,3,5,0,
                3,2,4,5,7,1,9,3,6,2,4,1,2,4,3,2,6,4,9,1,4,6,5,3,4,5,6,1],
      lateness2: [3,4,1,6,8,2,4,5,6,4,7,9,3,2,4,6,0,0,6,3,5,7,5,3,5,6,7,8,3,2,
                4,5,3,6,8,3,1,2,3,6,3,1,8,4,5,9,5,3,4,2,1,4,6,0,8,0,4,6]
    };
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
          type: "spline",
          data: this.state.lateness1,
        },{
          name: "This week",
          type: "spline",
          data: this.state.lateness2
        }],
        title: {
          text: 'Dublin BUS Lateness Analitics'
        }
      }
      return (
        <div className="graph-container">
          <ReactHighcharts config={config}></ReactHighcharts>
        </div>
      )
    }
}
