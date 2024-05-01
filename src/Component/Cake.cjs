const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function cakeOrdered() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function cakeRestocked(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function iceCreamOrdered() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    };
}

function iceCreamRestocked(qty=1){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}


const cakeInitialState = {
    numOfCakes:10,
}

const iceCreamState = {
    numOfIceCreams: 20,
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };

        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        default:
            return state;
    }
};

const iceCreamReducer = (state = iceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };

        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators({cakeOrdered, cakeRestocked, iceCreamOrdered, iceCreamRestocked}, store.dispatch)

actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeRestocked(3)

actions.iceCreamOrdered()
actions.iceCreamOrdered()
actions.iceCreamOrdered()
actions.iceCreamRestocked(3)

unsubscribe();
