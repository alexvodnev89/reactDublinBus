import React from "react";


var Halogen = require('halogen');
export class Spinner extends React.Component {

  render() {
      var color = '#ff6600';

      return (
        <div className="spinnerContainer">
          <div className="spinnerStyle">
            <Halogen.PacmanLoader color={color} float="right"/>
          </div>
          <div className="waitText">
            <h2> Please wait, retrieving data from the server...</h2>
          </div>
        </div>
      );
    }
}
