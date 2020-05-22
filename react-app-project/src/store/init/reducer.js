import { combineReducers } from "redux";
import { GET_ITEM, UP_LIST } from "./action-type";

const initState = {};

function enumInfo(state = initState, action) {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        name: action.data,
      };
    case UP_LIST:
      return action.data;
    default:
      return state;
  }
}

const initReducer = combineReducers({
  enumInfo
});

export default initReducer;
