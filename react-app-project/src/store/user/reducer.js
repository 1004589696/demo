import { combineReducers } from 'redux';
import { UP_NAME, UP_AVATAR, UP_PHONE } from './action-type';

const initState = {
    name: "默认姓名--小莫",
    avatar: null,
    phone: null
};


function userInfo(state = initState, action) {
    switch (action.type) {
        case UP_NAME:
            return {
                ...state,
                name: action.data
            };
        case UP_AVATAR:
            return action.data;
        case UP_PHONE:
            return action.data;
        default:
            return state
    }
}


const initReducer = combineReducers({
    userInfo
})

export default initReducer;