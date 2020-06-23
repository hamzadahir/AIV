import { SET_CLIENT_SECRET_KEY, SEND_NOTIFICATION_ERROR, SEND_NOTIFICATION_SUCCESS } from "../actions/types";

const initState = {
    key: '',
}

export default function (state = initState, action) {
    switch (action.type) {
        case SEND_NOTIFICATION_ERROR:
            return {
                ...state,
            }
        case SEND_NOTIFICATION_SUCCESS:
            return {
                ...state,
            }
        case SET_CLIENT_SECRET_KEY:
            return {
                ...state,
                key: action.key
            }
        default:
            return state;
    }
}
