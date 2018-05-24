import React, { Component } from 'react';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

var store = createStore(counter);
console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{ value }</h1>
        <button onClick = { onIncrement }> + </button>
        <button onClick = { onDecrement }> - </button>
    </div>
)

class App extends Component {
  render() {
    return (
        <Counter
            value = { store.getState() }
            onIncrement = { () => {
                    store.dispatch({
                        type: 'INCREMENT'
                    });
                    console.log('INCREMENT: ' + store.getState());
                }
            }
            onDecrement = {() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        >
        </Counter>
    );
  }
}

export default App;
