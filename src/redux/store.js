import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    users: usersReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store

export default store