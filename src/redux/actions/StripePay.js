import { SET_CLIENT_SECRET_KEY, SEND_NOTIFICATION_ERROR, SEND_NOTIFICATION_SUCCESS } from './types'
import { postData } from '../../utils/common'

const API_KEY = process.env.REACT_APP_API;

export const createPaymentIntent = (payload) => {
    return function action(dispatch) {
        postData(API_KEY + '/create-payment-intent', payload)
            .then(res => dispatch({
                type: SET_CLIENT_SECRET_KEY,
                key: res.clientSecret,
            }))
    }
}

export const downloadFile = (payload) => {
    return async function action(dispatch) {
        await fetch(`${API_KEY}/download?id=${payload.payload.paymentIntent.id}&method=${payload.payload.paymentIntent.payment_method}&plan=${payload.plan}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/zip'
            },
        })
        .then(response => response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = `${payload.plan}.zip`;
            a.click();
        }))
    }
}

export const sendNotification = (payload) => {
    return function action(dispatch) {
        postData(API_KEY + '/notification', payload)
            .then(
                response => dispatch({
                    type: SEND_NOTIFICATION_SUCCESS,
                }),
                err => dispatch({
                    type: SEND_NOTIFICATION_ERROR,
                })
            )
    }
}