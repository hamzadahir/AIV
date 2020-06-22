import { SET_CLIENT_SECRET_KEY, SEND_NOTIFICATION_ERROR, SEND_NOTIFICATION_SUCCESS, CLOSE_POPUP_MESSAGE_NOTIFICATION } from './types'
import { postData } from '../../utils/common'

const API_KEY = process.env.REACT_APP_API;

export const createPaymentIntent = (payload) => {
    return function action(dispatch){
        postData(API_KEY + '/create-payment-intent', payload)
      .then(res => dispatch({
        type: SET_CLIENT_SECRET_KEY,
        key: res.clientSecret,
    }))
    }
}

export const sendNotification = (payload) => {
  return function action(dispatch){
      postData(API_KEY + '/notification', payload)
          .then(
              response => dispatch({
                  type: SEND_NOTIFICATION_SUCCESS,
                  message: response.message,
              }),
              err => dispatch({
                  type: SEND_NOTIFICATION_ERROR,
                  message: 'Error'
              })
          )
  }
}

export const closePopupNotification = () => {
  return function action(dispatch){
      dispatch({
          type: CLOSE_POPUP_MESSAGE_NOTIFICATION,
      })
  }
};