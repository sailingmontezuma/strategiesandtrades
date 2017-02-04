import React from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import StrategyStore from "./../flux/store/StrategyStore";
import * as StrategyActions from "./../flux/actions/StrategyActions";

export default class Layout extends React.Component {
    constructor() {
      super();
      this.getStrategies = this.getStrategies.bind(this);
      this.state = {
        title: "Welcome",
        //strategies: []
        strategies: StrategyStore.getAll()
      };
    }
    
    componentWillMount () {
      StrategyStore.on("change", () => {
          this.getStrategies()
      });
      console.log("strategy store - listenerCount: ", StrategyStore.listenerCount("change"));

    }
    componentWillUnmount() {
      StrategyStore.removeListener("change", this.getAll());
    }    

    changeTitle(title) {
      this.setState({title});
    }
    createStrategy(){
          StrategyActions.createStrategy({symbol:"AUDUSD", type: "BUY"});
    }
    reloadStrategies(){
           StrategyActions.reloadStrategies();
    }
    deleteStrategy(){
          StrategyActions.deleteStrategy(123);
    }
    getStrategies() {
      console.log('getStrategies()');
        this.setState({
          strategies: StrategyStore.getAll()
        });
    }    
    render() {
    const containerStyle = {
      marginTop: "60px"
    };    
    const { location } = this.props;

 
      const strategies = this.state.strategies.map(strategy => {
         return <div key={strategy.id}>{strategy.id} {strategy.status} - {strategy.symbol} - {strategy.type} </div>
      });
 
 
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />  

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {strategies ? strategies : " - "}
              <button onClick={this.createStrategy.bind(this)}>Create Strategy </button>
              <button onClick={this.reloadStrategies.bind(this)}>Reload Strategies </button>
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


