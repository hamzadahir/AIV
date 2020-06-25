// core
import React, { useState } from 'react';

// assets
import styles from './Stripe.module.scss';
import closeImg from "../../../assets/images/stripe/close.svg";
import error from "../../../assets/images/stripe/error.svg";

export const Canceled = ({ close }) => {
    const [show, setShow] = useState(true);

    const handleCloseModal = () => {
        setShow(!show);
        close(false);
    };

    return (
        <main>
            {show && <section className={`${styles.stripe} ${styles.payment} ${styles.paymentCanceled}`}>
                <div className={styles.paymentInner}>
                    <button className={styles.close} onClick={() => handleCloseModal()}>
                        <img src={closeImg} alt='' />
                    </button>
                    <div className={styles.paymentContent}>
                        <div className={styles.icon}>
                            <img src={error} alt='' />
                        </div>
                        <h3>Payment Failure!</h3>
                        <p className={styles.description}>
                            Sorry, we couldn’t proceed with your payment,
                            please use another card or get in Touch with your bank.
                        </p>
                        <button type='button' className='btn-primary' onClick={() => handleCloseModal()}>Try again?</button>
                        <p className={styles.notice}>Need any help? Please contact us on:</p>
                        <a href='mailto:help@quickraise.com'>Help@quickraise.com</a>
                    </div>
                </div>
            </section>}
        </main>
    );
};

