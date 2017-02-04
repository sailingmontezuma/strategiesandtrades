import React, {Component} from 'react'
import { EventEmitter } from "events";

import dispatcher from "./../dispatcher"

class StrategyStore extends EventEmitter {
    constructor(){
    super()
    this.strategies = 
        [
            {
                id: 443,
                symbol: "EURHKD",
                type: "BUY",
                status: "active"
            },
            {
                id: 236,
                symbol: "EURCHF",
                type: "SELL",
                status: "pending"
            },
            {
                id: 543,
                symbol: "USDPLN",
                type: "SELL",
                status: "closed"
            },
            {
                id: 553,
                symbol: "CHFEUR",
                type: "BOY",
                status: "active"
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
        console.log("Strategy store handleActions received");
        console.log(action);

        switch(action.type) {            
            case "CREATE_STRATEGY": {
                this.createStrategy(action.data);
                break;
            }
            case "RECEIVE_STRATEGIES": {
                this.strategies = action.data;
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

 