// core
import React, { useState } from 'react';

// assets
import styles from './Stripe.module.scss';
import close from "../../../assets/images/stripe/close.svg";
import error from "../../../assets/images/stripe/error.svg";

export const Canceled = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && <section className={`${styles.stripe} ${styles.payment} ${styles.paymentCanceled}`}>
                <div className={styles.paymentInner}>
                    <button className={styles.close} onClick={() => setShow(!show)}>
                        <img src={close} alt='' />
                    </button>
                    <div className={styles.paymentContent}>
                        <div className={styles.icon}>
                            <img src={error} alt='' />
                        </div>
                        <h3>Payment Failure!</h3>
                        <p className={styles.description}>
                            Sorry, we couldn’t proceed with your payment,
                            please use another card or get in touch with your bank.
                        </p>
                        <button type='button' className='btn-primary'>Try again?</button>
                        <p className={styles.notice}>Need any help? Please contact us on:</p>
                        <a href='mailto:help@quickraise.com'>Help@quickraise.com</a>
                    </div>
                </div>
            </section>}
        </>
    );
};

