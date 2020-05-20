import initReducer from './user/reducer';
import { createStore } from 'redux';


const store = createStore(initReducer);

store.asyncReducers = {initReducer};

export default store;