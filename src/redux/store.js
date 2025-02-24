// import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { CollapseReducer } from './reducers/CollapseReducer';
import { LoadingReducer } from '@/redux/reducers/LoadingReducer'
import { combineReducers } from 'redux';

// const reducer = combineReducers({
//     reducer: CollapseReducer,
// })pppppp
const reducer = combineReducers({
    collapse: CollapseReducer,
    loading: LoadingReducer,
});


const store = configureStore({
    reducer: reducer
});
export default store

// store.dispatch 分发