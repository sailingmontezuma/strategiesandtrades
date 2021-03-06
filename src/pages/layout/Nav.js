import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const ordersClass = location.pathname.match(/^\/orders/) ? "active" : "";
    const tradesClass = location.pathname.match(/^\/trades/) ? "active" : "";
    const strategiesClass = location.pathname.match(/^\/strategies/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass} onClick={this.toggleCollapse.bind(this)} >
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
              </li>
              <li class={ordersClass}>
                <Link to={'/orders'} onClick={this.toggleCollapse.bind(this)} activeStyle={{color:"red"}}>Orders</Link>
              </li>
              <li class={tradesClass}>
                <Link to= {{ pathname: '/trades' }} onClick={this.toggleCollapse.bind(this)}>Trades</Link>
              </li>
              <li class={strategiesClass}>
                <Link to= {{ pathname: '/strategies', query: { showAge: true } }} onClick={this.toggleCollapse.bind(this)}>Strategies</Link>
              </li>             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
