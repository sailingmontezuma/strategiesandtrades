function Candle(props) {
  return (
      <div>
         <div>open: {props.open}</div>
         <div>close: {props.close}</div>
         <div>high: {props.high}</div>
         <div>low: {props.low}</div>
      </div>
  );
}