import { SEND_MAIL_EROOR, SEND_MAIL_SUCCESS, CLOSE_POPUP_MESSAGE } from "../actions/types";

const initState = {
    isSending: false,
    isError: false,
    message: '',
}

export default function (state = initState, action) {
    switch (action.type) {
        case SEND_MAIL_EROOR:
            return {
                ...state,
                isSending: false,
                isError: true,
                message: action.message
            }
        case SEND_MAIL_SUCCESS:
            return {
                ...state,
                isSending: true,
                isError: false,
                message: action.message
            }
        case CLOSE_POPUP_MESSAGE:
            return {
                ...state,
                isSending: false,
                isError: false,
            }
        default:
            return state;
    }
}
