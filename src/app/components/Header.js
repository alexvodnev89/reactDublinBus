import React from "react";
import {Link} from "react-router"

export const Header = (props) => {
    return(
      <div className="myHeader">
        <div className="page-header">
          <h1>Dublin Bus Analitics App</h1>
        </div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar navbar-header">
              <ul className="nav navbar-nav">
                <li><Link to={"/home"} activeClassName={"active"}>Home</Link></li>
                <li><Link to={"/user"} activeClassName={"active"}>User</Link></li>
                <li><Link to={"/realtime"} activeClassName={"active"}>Real Time Info</Link></li>
                <li><Link to={"/chart"} activeClassName={"active"}>Graphical analytics</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};
