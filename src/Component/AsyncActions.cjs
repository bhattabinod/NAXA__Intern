const redux = require('redux')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')

const applyMiddleware = redux.applyMiddleware


// -----------------Define Initial State-----------
const initialState = {
    loading: true,
    data:[],
    error: '',
}

// ------Define all the Actions---------------------

const FETCH_USERS_REQUESTED= 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEDED = 'FETCH_USERS_SUCCEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// ---------------Define the Action Creators---------------

const fetchUsersRequested = () =>{
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSucceded = (users) =>{
    return {
        type: FETCH_USERS_SUCCEDED,
        payload: users,
    }
}

const fetchUsersFailed = (error) =>{
    return{
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

// --------------- Define Reducer Now ----------------
const reducer = (state=initialState, action)=> {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USERS_SUCCEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_USERS_FAILED:
            return{
                loading: false,
                users: [],
                error: '',
                
            }
    }

}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequested())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSucceded(users))
        }).catch(error=>{
            //error message
            dispatch(fetchUsersFailed(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(()=> {console.log(store.getState())})

store.dispatch(fetchUsers())