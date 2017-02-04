import React from "react";

/*
export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
         -------------- no match --------------------
      </div>
    );
  }
}
*/

const NoMatch = React.createClass({
  render() {
    return <h2>Not found -  <p>Go to <Link to="/">Home Page</Link></p></h2>
  }
})

export default NoMatch;