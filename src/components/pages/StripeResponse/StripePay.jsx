// core
import React, { useState } from 'react';

// assets
import styles from './Stripe.module.scss';
import logo from '../../../assets/images/logo-white.svg';
import close from '../../../assets/images/stripe/close.svg';
import question from '../../../assets/images/stripe/help-circle.svg';

import visa from '../../../assets/images/stripe/visa.svg';
import mastercard from '../../../assets/images/stripe/mastercard.svg';
import amex from '../../../assets/images/stripe/amex.svg';
import discover from '../../../assets/images/stripe/discover.svg';

import norton from '../../../assets/images/stripe/norton.png';
import mcafee from '../../../assets/images/stripe/mcafee.png';
import securePayments from '../../../assets/images/stripe/secure-payments.png';


export const StripePay = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && <section className={styles.stripe}>
                <div className={styles.stripePayInner}>
                    <button className={styles.close} onClick={() => setShow(!show)}>
                        <img src={close} alt='' />
                    </button>
                    <div className={styles.stripeLeft}>
                        <div className={styles.logo}>
                            <img src={logo} alt='' />
                        </div>
                        <h2 className={styles.price}><span>$ </span> 999</h2>
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
                        <form action=''>
                            <label>
                                <input type='text' placeholder='Email address' />
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
                                <input type='text' placeholder='Name on Card' />
                            </label>
                            <label>
                                <input type='text' placeholder='Country or Region' />
                            </label>
                            <button type='button' className='btn-primary'>Pay 999,00 $US</button>
                        </form>
                    </div>
                </div>
            </section>}
        </>
    );
};
