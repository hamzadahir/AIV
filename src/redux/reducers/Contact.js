import { SEND_MAIL_EROOR, SEND_MAIL_SUCCESS } from "../actions/types";

const initState = {
    isSending: '',
    message: '',
}

export default function (state = initState, action) {
    switch (action.type) {
        case SEND_MAIL_EROOR:
            return {
                ...state,
                isSending: 'Error',
                message: action.message
            }
        case SEND_MAIL_SUCCESS:
            return {
                ...state,
                isSending: 'Sending',
                message: action.message
            }
        default:
            return state;
    }
}
