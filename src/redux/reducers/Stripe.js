import { SET_CLIENT_SECRET_KEY, SEND_NOTIFICATION_ERROR, SEND_NOTIFICATION_SUCCESS, CLOSE_POPUP_MESSAGE_NOTIFICATION } from "../actions/types";

const initState = {
    key: '',
    isSending: false,
    isError: false,
}

export default function (state = initState, action) {
    switch (action.type) {
        case SEND_NOTIFICATION_ERROR:
            return {
                ...state,
                isSending: false,
                isError: true,
            }
        case SEND_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isSending: true,
                isError: false,
            }
        case SET_CLIENT_SECRET_KEY:
            return {
                ...state,
                key: action.key
            }
        case CLOSE_POPUP_MESSAGE_NOTIFICATION:
            return {
                ...state,
                isSending: false,
                isError: false,
            }
        default:
            return state;
    }
}
