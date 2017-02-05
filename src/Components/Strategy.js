import React from "react";

function Strategy(props) {
  return (
      <div>
        Strategy
          <div>
          startDate
          endDate

          status:
          - started / closed / planned

          result:
          - sucessful / failed  / neutral / unknown

          symbol
          entry value
          buy/sell
          value to entry
          min value (accepted losses)
          max value (expected profits)

          interval (M, W, D, 4H, 1H)
              <div>  {props.symbol}     </div>
              <div>  {props.type}     </div>
              <div>  {props.interval}     </div>     
              <div>  {props.status}     </div>
              <div>  {props.description}     </div>
              <div>  {props.dateCreated}     </div>
       
       
          </div>

      </div>
  );
}

export default Strategy

/*
<div> {props.item.dateCreated} </div>
<div> {props.item.symbol} </div> 
<div> {props.item.type} </div> 
<div> {props.item.interval} </div> 
<div> {props.item.status} </div> 
<div> {props.item.description} </div> 
*/