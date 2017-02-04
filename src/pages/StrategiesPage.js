import React from "react";

export default class StrategiesPage extends React.Component {
  render() {
    console.log("strategies page");

    const { query } = this.props.location;
    const { params } = this.props;
    const { strategy } = params;
    const { date, filter } = query;

    return (
        <div>
            <h2>Strategies Page</h2>
               strategy: {strategy}, date: {date}, filter: {filter}
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
        </div>
    );
  }
}