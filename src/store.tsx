import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {}

const middleware: Array<any> = [/* thunk */]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;