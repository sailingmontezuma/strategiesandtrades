import dispatcher from "../dispatcher";


export function createStrategy(data) {
  dispatcher.dispatch({
    type: "CREATE_STRATEGY",
    data,
  });
}

export function deleteStrategy(id) {
  dispatcher.dispatch({
    type: "DELETE_STRATEGY",
    id,
  });
}


export function reloadStrategies() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_STRATEGIES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_STRATEGIES", data: [
        {
            id: 394,
            symbol: "EURUSD",
            type: "BUY",
            status: "active"
        },
        {
            id: 722,
            symbol: "EURUSD",
            type: "SELL",
            status: "pending"
        }
    ]});
  }, 1800);
}
