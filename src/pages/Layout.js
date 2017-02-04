import React from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import StrategyStore from "./../flux/store/StrategyStore"

export default class Layout extends React.Component {
    constructor() {
      super();
      this.state = {
        title: "Welcome",
        strategies: StrategyStore.getAll()
      };
    }
    
    componentWillMount () {
      StrategyStore.on("change", () => {
        this.setState({
          strategies:  StrategyStore.getAll()
        })
      })
    }

    changeTitle(title) {
      this.setState({title});
    }

    render() {
      const containerStyle = {
        marginTop: "60px"
    };    

    const strategies = this.state.strategies.map(strategy => {
      return <div key={strategy.id}>{strategy.id} {strategy.status} - {strategy.symbol} - {strategy.type} </div>
    })

    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />      
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {strategies}
              <h3>KillerNews.net</h3>
              {this.props.children}
            </div>
          </div>
          <Footer/>          
        </div>
      </div> 
    );
  }
}


