import React from "react";
import { browserHistory } from "react-router"

import Request from "superagent";
import _ from "lodash"

export class RealTime extends React.Component {

  constructor(){
    super();
    this.state = {
      busStop: "1712"
    };
  }
  clicked(){
    this.setState({
      busStop: this.refs.inputBox.value
    });
    this.onApiButtonClick();
  }

  onApiButtonClick(){
    // only called at the very start when component is added to the page.
    console.log(this.state.busStop);
    var url="https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid="+this.state.busStop+"&format=json";
    Request.get(url).then((response) => {
      this.setState({
        dbResults: response.body.results
      });
    });
  }

  render(){
    var busResults = _.map(this.state.dbResults, (result) => {
      return <li>{"Bus No : " + result.route + " Full expected time : " + result.arrivaldatetime + " DUE in " + result.duetime + " min"}</li>;
    });

    return(
      <div>
        <h3>Real time Page</h3>
          <div>
            <input ref="inputBox" type="text"/>
            <button id="apiCallButton" onClick={(e) => {this.clicked();}}>Button</button>
          </div>
            <div>
              <ul className="apiUl">{busResults}</ul>
            </div>
          <hr/>

      </div>
    );
  }
}
