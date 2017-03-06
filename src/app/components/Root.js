import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export class Root extends React.Component {
  render(){
    return(
      <div>

          <div className="">
            <Header />
          </div>

        <hr/>
        <main>
          <div className="navElement">
            {this.props.children}
          </div>
        </main>
        <hr/>
        <footer>
          <Footer />
        </footer>
      </div>


    );
  }
}
