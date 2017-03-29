
import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { RealTime } from "./components/RealTime";
import { Chart } from "./components/Chart";
import Request from "superagent";
import io from 'socket.io-client';''

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      stops: ["4747","1882","7379","4903","7219","7218","7031","4897","4898","4574",
              "4575","1690","1681","1682","1683","1684","1685","1686","1687","1688",
              "1689","1690","1691","1692","1693","1694","1695","1696","1697","1698",
              "1699","1700","1701","1702","1703","1704","1705","1706","1707","1708",
              "1709","1528","1710","1711","1712","1713","1714","1715","7453","1478",
              "1479","315","404","747","843","845","846","7340"],
      // average: [5,3,5,8,2,1,7,4,1,0,4,6,3,12,2,4,6,3,7,2,2,5,4,6,7,2,1,3,5,0,
      //           3,2,4,5,7,1,9,3,6,2,4,1,2,4,3,2,6,4,9,1,4,6,5,3,4,5,6,1],
      // timeZone: [0.43,0.32,0.2,6,8,2,4,5,6,4,7,9,3,2,4,6,0,0,6,3,5,7,5,3,5,6,7,8,3,2,
      //           4,5,3,6,8,3,1,2,3,6,3,1,8,4,5,9,5,3,4,2,1,4,6,0,8,-0.45,-4,-10],
      timeZoneString: "This week",
      from: "Blanchardstown",
      to: "Baggot street",
      routeNumber: "1712"
    };


  }




  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={"user"} component={User}/>
          <Route path={"home"} component={Home} name={this.state.name}/>
          <Route path={"realtime"} component={RealTime}/>
          <Route path={"chart"} component={Chart}
            stops={this.state.stops}
            average={this.state.average}
            time={this.state.timeZone}
            timeName={this.state.timeZoneString}
            info={"Bus "+this.state.routeNumber + " From " +this.state.from + " To " + this.state.to}
          />
        </Route>
        <Route path={"home"} component={Home}/>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
