import { combineReducers } from 'redux';
import { ReducerMovie } from './ReducerMovie';

const rootReducer = combineReducers({
    initState: ReducerMovie
})

export default rootReducer;