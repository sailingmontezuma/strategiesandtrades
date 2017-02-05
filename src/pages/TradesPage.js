import React from "react";
import { browserHistory } from "react-router";

export default class TradesPage extends React.Component {
  onNavigateHome(){
    browserHistory.push("/");
  }
/*
  componentDidMount() {
    axios.get('http://swapi.co/api/people').then(results => {
      this.setState({
        users: results.data.results
      })
    })
  }
*/
  render() {
    console.log("trades page");
    return (
        <div>
            <h2>Trades Page</h2>
                <div>
                Maecenas nec arcu a augue ultricies mattis vel in eros. Pellentesque eu convallis odio. 
                Pellentesque porta erat non lorem efficitur porttitor. Nunc posuere aliquet elit, vel facilisis ligula posuere venenatis. 
                Vivamus consequat id eros eget hendrerit. Nulla sed orci diam. Fusce eros mi, ultricies ac semper non, aliquet sed mauris. 
                In faucibus et nulla sit amet finibus. Maecenas fermentum pellentesque metus, at hendrerit lorem iaculis tempus. 
                Praesent nec nisi vel orci laoreet consectetur. <br/>
                Donec vestibulum, nibh vel porttitor porta, arcu odio convallis dolor, ut pretium lorem urna vel nibh. Nullam rutrum lacinia felis. <br/>
                Nullam interdum ex finibus semper tincidunt. Phasellus elementum facilisis tempus. Sed vitae nisl auctor magna vehicula scelerisque in a lorem. 
                Cras metus sem, lobortis eget nisl id, feugiat facilisis orci.                 
                </div>
                <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary"> go back home</button>
        </div>
    );
  }
}
/*

let User = function(props) {
  return (
    <div className="user">
      <div>Name: {props.name}</div>
    </div>
  )
}


let Users = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    axios.get('http://swapi.co/api/people').then(results => {
      this.setState({
        users: results.data.results
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>Star Wars Characters:</h3>
        <Link to="/other">Other</Link>
        {this.state.users.map(user => {
          return <User name={user.name} key={user.name} />
        })}
      </div>
    )
  }
})







import axios from 'axios'

let getPeople = function() {
  return axios.get('http://swapi.co/api/people')
}

let getPerson = function() {

}

export { getPeople, getPerson }






*/

