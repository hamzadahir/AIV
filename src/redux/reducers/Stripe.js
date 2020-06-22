import { SET_CLIENT_SECRET_KEY } from "../actions/types";

const initState = {
    key: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case SET_CLIENT_SECRET_KEY:
            return {
                ...state,
                key: action.key
            }
        default:
            return state;
    }
}
