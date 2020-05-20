import { combineReducers } from 'redux';
import { UPDATE_STATE } from './action-type';


const initState = {};


function home(state = initState, action) {
    switch (action.type) {
        case UPDATE_STATE:
            return action.data;
        default:
            return state
    }
}


export default combineReducers({
    home
});