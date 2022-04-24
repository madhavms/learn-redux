import counterReducer from './counter';
import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rootReducer;
