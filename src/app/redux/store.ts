import { combineReducers, createStore } from "redux";

import { productsReducer } from "./products-state";

// Create an object containing all the reducers: 
// const reducers = combineReducers({ productsState: productsReducer, employeesState: employeesReducer, catState: catReducer });
const reducers = combineReducers({ productsState: productsReducer});

// Crete the store object:
const store = createStore(reducers); // composeWithDevTools() connects our Redux to Redux DevTool chrome extension

// Export the store:
export default store;