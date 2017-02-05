import React from "react";
import Strategy from "./../components/Strategy";

export default class StrategiesPage extends React.Component {


    getInitialState() {
        return {
            items: []
        }
    } 

    componentDidMount() {
        /*
        getPeople().then(results => {
            this.setState({
            items: results.data.results
            })
        })
        */
    }


  render() {
    console.log("strategies page");

    const { query } = this.props.location;
    const { params } = this.props;
    const { id } = params;
    const { date, filter } = query;

    let itemStrategy = {
        dateCreated: new Date,
        symbol: "EURUSD",
        type: "BUY",
        interval: "W",
        status: "pending",
        description: "-",
        valueEntryStart: 1.234,
        valueEntryEnd: 1.238,
        valueEntryTolerance: 0.002,
        valueExit: 1.290,
        valueExitTolerance: 0.002
    }

    console.log(this.props);
    console.table(itemStrategy);
    return (
        <div>
            <h2>Strategies Page</h2>
               strategy: {id}, date: {date}, filter: {filter}
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
               <Strategy symbol={itemStrategy.symbol}  
                            type={itemStrategy.type} 
                            interval={itemStrategy.interval} 
                            status={itemStrategy.status}  
                            description={itemStrategy.description}    />
        </div>
    );
  }
}
 //