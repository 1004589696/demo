import { UP_NAME, UP_AVATAR, UP_PHONE } from './action-type';

export default { //导出ActionCreators
    upd_name: function (payload) {
        console.log({ type: UP_NAME, ...payload });
        return { type: UP_NAME, ...payload };
    },
    upd_avatar: function (payload) {
        return { type: UP_AVATAR, payload };
    },
    upd_phone: function (payload) {
        return { type: UP_PHONE, payload };
    }
};