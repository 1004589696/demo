import { UPDATE_STATE } from './action-type';

export default { //导出ActionCreators
    UPDATE_STATE: function (payload) {
        return { type: UPDATE_STATE, ...payload };
    }
};