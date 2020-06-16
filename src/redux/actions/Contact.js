import { SEND_MAIL_EROOR, SEND_MAIL_SUCCESS, CLOSE_POPUP_MESSAGE } from './types'
import { postData } from '../../utils/common'

const API_KEY = process.env.REACT_APP_API;

export const sendMessage = (payload) => {
    return function action(dispatch){
        postData(API_KEY + '/contact', payload)
            .then(
                response => dispatch({
                    type: SEND_MAIL_SUCCESS,
                    message: response.message,
                }),
                err => dispatch({
                    type: SEND_MAIL_EROOR,
                    message: 'Error'
                })
            )
    }
}

export const closePopup = () => {
    return function action(dispatch){
        dispatch({
            type: CLOSE_POPUP_MESSAGE,
        })
    }
};