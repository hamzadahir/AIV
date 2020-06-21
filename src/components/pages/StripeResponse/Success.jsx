// core
import React, { useState } from 'react';

// assets
import styles from './Stripe.module.scss';
import close from "../../../assets/images/stripe/close.svg";
import checked from "../../../assets/images/stripe/checked.svg";

export const Success = () => {
    const [show, setShow] = useState(true);

    return (
        <main>
            {show && <section className={`${styles.stripe} ${styles.payment}`}>
                <div className={styles.paymentInner}>
                    <button className={styles.close} onClick={() => setShow(!show)}>
                        <img src={close} alt='' />
                    </button>
                    <div className={styles.paymentContent}>
                        <div className={styles.icon}>
                            <img src={checked} alt='' />
                        </div>
                        <h3>Payment Successful!</h3>
                        <p className={styles.description}>Congrats, your payment was successfully released,
                            We just emailed you your templates, your order
                            number is <span className='colorBlack'>#18712768</span>
                        </p>
                        <button type='button' className='btn-primary'>Download Templates</button>
                        <p className={styles.notice}>If you didn’t receive any email, please contact us on:</p>
                        <a href='mailto:help@quickraise.com'>Help@quickraise.com</a>
                    </div>
                </div>
            </section>}
        </main>
    );
};
