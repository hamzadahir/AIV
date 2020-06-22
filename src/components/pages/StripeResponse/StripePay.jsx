// core
import React, { useEffect, useState } from 'react';

//library
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

// assets
import styles from './Stripe.module.scss';
import logo from '../../../assets/images/logo-white.svg';
import closeImg from '../../../assets/images/stripe/close.svg';
import question from '../../../assets/images/stripe/help-circle.svg';

import visa from '../../../assets/images/stripe/visa.svg';
import mastercard from '../../../assets/images/stripe/mastercard.svg';
import amex from '../../../assets/images/stripe/amex.svg';
import discover from '../../../assets/images/stripe/discover.svg';

import norton from '../../../assets/images/stripe/norton.png';
import mcafee from '../../../assets/images/stripe/mcafee.png';
import securePayments from '../../../assets/images/stripe/secure-payments.png';

//component
import { Canceled } from './Canceled';
import { Success } from './Success';

export const StripePay = ({ closePopup, isSending, isError, send, createPaymentIntent, secretKey, plan, close }) => {
    const [error, setError] = useState(null);
    const [errorPopup, setErrorPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [id, setId] = useState('');
    const initialState = {
        name: "",
        email: "",
        region: "",
        validate: true,
    };
    const [
        {
            name,
            email,
            region,
            validate,
        },
        setState
    ] = useState(initialState);

    useEffect(() => {
        setState(prevState => (
            { ...prevState, validate: !(name && email) }
        ))
    }, [name, region, email]);

    useEffect(() => {
        setClientSecret(secretKey);
        !secretKey && createPaymentIntent({ planForBuy: plan, currency: process.env.REACT_APP_CURRENCY });
    }, [secretKey])

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async ev => {
        ev.preventDefault();
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        });
        
        if (payload.error) {
            setId(payload.error.payment_intent.id);
            setError(`Payment failed ${payload.error.message}`);
            setErrorPopup(true);
            send({
                name: name,
                region: region,
                email: email,
                message: `Payment failed. ID purchase: ${payload.error.payment_intent.id}`
            });
            clearState();
        } else {
            setId(payload.paymentIntent.id);
            setSuccessPopup(true);
            setError(null);
            send({
                name: name,
                region: region,
                email: email,
                message: `Payment success. ID purchase: ${payload.paymentIntent.id}`
            });
            clearState();
        }
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const clearState = () => {
        setState({ ...initialState });
    };

    const setPrice = () => {
        switch (plan) {
            case 'Plus':
                return '2999'
            case 'Premium':
                return '4999'
            default:
                return '999'
        }
    };

    return (
        <>
            <section className={styles.stripe}>
                {(isSending || isError) &&
                    <div className='popupContainer'>
                        <div className={isSending ? 'successPopup' : 'errorPopup'}>
                            {isSending ? 'Message sent!' : 'Sorry, we were unable to send the message, please try again later.'}
                            <button onClick={() => closePopup()} className='closePopupButton'>
                                <span>✘</span>
                            </button>
                        </div>
                    </div>
                }
                {successPopup && <Success close={close} id={id} />}
                {errorPopup && <Canceled close={close} />}
                <div className={styles.stripePayInner}>
                    <button className={styles.close} onClick={() => close()}>
                        <img src={closeImg} alt='' />
                    </button>
                    <div className={styles.stripeLeft}>
                        <div className={styles.logo}>
                            <img src={logo} alt='' />
                        </div>
                        <h2 className={styles.price}><span>$ </span> {setPrice()} </h2>
                        <h3 className={styles.title}>Basic Plan</h3>
                        <p>
                            Our basic plan is best suited for startups
                            just starting the fundraising process.
                        </p>
                        <div className={styles.secure}>
                            <img src={norton} alt='' />
                            <img src={mcafee} alt='' />
                            <img src={securePayments} alt='' />
                        </div>
                        <div className={styles.copyright}>
                            <p>Powered by Stripe</p>
                            |
                            <a href=''>Terms</a>
                            <a href=''> Privacy</a>
                        </div>
                    </div>
                    <div className={styles.stripeRight}>
                        <h3>Pay with Card</h3>

                        <form id="payment-form" onSubmit={handleSubmit} >
                            <label>
                                <div>
                                    <CardElement className="card-element" onChange={handleChange} />
                                    {error && (
                                        <div className="card-error" role="alert">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </label>
                            <label>
                                <input value={email} name='email' type='email' placeholder='Email address' onChange={handleChangeInput} />
                            </label>
                            <label>
                                <input className={styles.cards} type='text' placeholder='Card Number' />
                                <span className={styles.cardsIcons}>
                                    <img src={visa} alt='' />
                                    <img src={mastercard} alt='' />
                                    <img src={amex} alt='' />
                                    <img src={discover} alt='' />
                                </span>
                            </label>
                            <label className={styles.width50}>
                                <input type='text' placeholder='Expiration Date' />
                            </label>
                            <label className={styles.width50}>
                                <input className={styles.question} type='text' placeholder='CVC' />
                                <img className={styles.questionIcon} src={question} alt='' />
                            </label>
                            <label>
                                <input value={name} name='name' type='text' placeholder='Name on Card' onChange={handleChangeInput} />
                            </label>
                            <label>
                                <input value={region} name='region' type='text' placeholder='Country or Region' onChange={handleChangeInput} />
                            </label>
                            <button disabled={validate || disabled} id="submit" type='submit' className='btn-primary'>Pay {setPrice()},00 $US</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};
