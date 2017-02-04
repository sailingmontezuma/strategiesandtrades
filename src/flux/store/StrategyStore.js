import React, {Component} from 'react'
import { EventEmitter } from "events";

import dispatcher from "./../dispatcher"

class StrategyStore extends EventEmitter {
    constructor(){
    super()
    this.strategies = 
        [
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
            },
            {
                id: 132,
                symbol: "USDJPY",
                type: "BUY",
                status: "closed"
            }                
        ]
    }

    getAll(){
        return this.strategies;
    }

    createStrategy({symbol, type}) {
        const id = Date.now();

        this.strategies.push({
            id,
            symbol,
            type,
            status: "pending"
        });

        this.emit("change");
    }
    handleActions(action) {
        console.log("handleActions received");
        console.log(action);
        console.log(action.type);

        switch(action.type) {
            
            case "CREATE_STRATEGY": {
                this.createStrategy(action.data);
                break;
            }
            case "RECEIVE_STRATEGIES": {
                this.strategies = action.strategies;
                this.emit("change");
                break;
            }
        } 
    } 
}

const strategyStore = new StrategyStore;
dispatcher.register(strategyStore.handleActions.bind(strategyStore));

window.startegyStore = strategyStore;
window.dispatcher = dispatcher;
export default strategyStore

 