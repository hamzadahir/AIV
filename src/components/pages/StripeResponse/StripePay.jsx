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
import selectIcon from '../../../assets/images/stripe/select-icon.svg';

import norton from '../../../assets/images/stripe/norton.png';
import guaranteed from '../../../assets/images/stripe/guaranteed.svg';
import mcafee from '../../../assets/images/stripe/mcafee.png';
import securePayments from '../../../assets/images/stripe/secure-payments.png';

import { country } from '../../../utils/constans';

//component
import { Canceled } from './Canceled';
import { Success } from './Success';

export const StripePay = ({ send, createPaymentIntent, secretKey, plan, close }) => {
    const [error, setError] = useState(null);
    const [errorPopup, setErrorPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [id, setId] = useState('');
    const initialState = {
        email: "",
        region: "",
        validate: true,
    };
    const [
        {
            email,
            region,
            validate,
        },
        setState
    ] = useState(initialState);

    useEffect(() => {
        setState(prevState => (
            { ...prevState, validate: !(region && email) }
        ))
    }, [region, email]);
console.log(process.env)
    useEffect(() => {
        setClientSecret(secretKey);
        !secretKey && createPaymentIntent({ planForBuy: plan, currency: process.env.REACT_APP_CURRENCY });
    }, [secretKey, plan])

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
                region: region,
                email: email,
                id: payload.error.payment_intent.id,
                status: `Payment failed.`
            });
            clearState();
        } else {
            setId(payload.paymentIntent.id);
            setSuccessPopup(true);
            setError(null);
            send({
                region: region,
                email: email,
                id: payload.paymentIntent.id,
                status: `Payment success.`
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
                return '799'
            case 'Premium':
                return '999'
            default:
                return '499'
        }
    };

    const setDescription = () => {
        switch (plan) {
            case 'Plus':
                return 'Our plus plan is best suited for startups engaging in preliminary due diligence with investors.'
            case 'Premium':
                return 'Our premium plan is best suited for startups in deep dive due diligence discussions with investors'
            default:
                return 'Our basic plan is best suited for startups just starting the fundraising process.'
        }
    };

    return (
        <>
            <section className={styles.stripe}>
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
                        <div className={styles.divPlan}>
                        <h2 className={styles.price}><span>$ </span> {setPrice()} </h2>
                        <h3 className={styles.title}>{plan} Plan</h3>
                        <p>
                        {setDescription()}
                        </p>
                        </div>
                        <div className={styles.copyright}>
                            <p>Powered by <span>stripe</span></p>
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
                                <input value={email} required name='email' type='email' placeholder='Email address' onChange={handleChangeInput} />
                            </label>
                            <label>
                                <select name='region' value={region} onChange={handleChangeInput}>
                                    {country.map((val) => 
                                        <option value={val.value}>{val.label}</option>
                                    )}
                                </select>
                                    <img src={selectIcon} alt=""/>
                                    <span className={region && styles.spanTop}>Country or Region</span>
                            </label>
                            <button disabled={validate || disabled} id="submit" type='submit' className='btn-primary'>Pay {setPrice()},00 $US</button>
                        </form>
                        <div className={styles.secure}>
                            <img className={styles.norton} src={norton} alt='' />
                            <img className={styles.mcafee} src={mcafee} alt='' />
                            <img className={styles.securePayments} src={securePayments} alt='' />
                            <img className={styles.guaranteed} src={guaranteed} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};