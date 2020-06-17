// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Power3 } from 'gsap'
import { loadStripe } from '@stripe/stripe-js';

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";

// assets
import styles from './Plan.module.scss';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const duration = 2;
export const Plan = () => {
    const [price, setPrice] = useState('Basic');
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();
    const t6 = new TimelineLite();
    let services = useRef(null);
    const [isError, setError] = useState(false);

    const setPriceID = (plan) => {
        switch (plan) {
            case 'Plus':
                return process.env.REACT_APP_PRICE_ID_PLUS;
            case 'Premium':
                return process.env.REACT_APP_PRICE_ID_PREMIUM;
            default:
                return process.env.REACT_APP_PRICE_ID_BASE;
        }
    }

    useEffect(() => {
        if (width > 767) {

            if (scroll > (services.offsetTop - 600)) {
                t6.to(services, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration })
            }
        }
    }, [width, scroll, t6]);

    const handleClick = async (plan) => {
            const stripe = await stripePromise;

            const { error } = await stripe.redirectToCheckout({
                mode: 'payment',
                lineItems: [{ price: setPriceID(plan), quantity: 1 }],
                successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancelUrl: `${window.location.origin}/canceled`,
            });
            if (error) {
                setError(true);
            }
    };

    const closePopup = () => {
        setError(false)
    }

    return (<>
        {(isError) &&
        <div className='popupContainer'>
            <div className={'errorPopup'}>
                Sorry, we could not transfer you to the payment page.
                <button onClick={() => closePopup()} className='closePopupButton'>
                    <span>✘</span>
                </button>
            </div>
        </div>
        }

        <div className={styles.pricingButtons}>
            <button type='button'
                className={`btn-primary  ${price === 'Basic' && styles.active}`}
                onClick={() => setPrice('Basic')}>Basic
                </button>
            <button type='button'
                className={`btn-primary  ${price === 'Plus' && styles.active}`}
                onClick={() => setPrice('Plus')}>Plus
                </button>
            <button type='button'
                className={`btn-primary  ${price === 'Premium' && styles.active}`}
                onClick={() => setPrice('Premium')}>Premium
                </button>
        </div>
        <div className={styles.pricingItemWrapper}>
            <div
                className={[styles.pricingItem + ' ' + (price === 'Basic' && 'd-block')]}>
                <div className={styles.price}><span>$</span>999</div>
                <h4>Basic</h4>
                <p>
                    Our basic plan is best suited for startups just starting the fundraising process.
                    </p>
                <hr />
                <ul className={styles.checked}>
                    <li className={styles.done}>Pitch Deck</li>
                    <li className={styles.done}>Data Room Checklist</li>
                    <li className={styles.done}>Convertible Notes</li>
                    <li className={styles.done}>Investor Updates</li>
                    <li className={styles.done}>Investor CRM</li>
                    <li>Customer Accounts</li>
                    <li>Market Size and GTM</li>
                    <li>Cap Table Scenarios</li>
                    <li>Tech Due Diligence Q&A</li>
                    <li>Organizational Chart</li>
                    <li>Historical Financials</li>
                    <li>Financial KPIs</li>
                    <li>Financial Forecast</li>
                    <li>Sales Pipeline Forecast</li>
                    <li>Fund Usage</li>
                </ul>
                <button type='button'  onClick={() => handleClick('Basic')} className='btn-primary'>Get Basic</button>
            </div>
            <div
                className={[styles.pricingItem + ' ' + (price === 'Plus' && 'd-block')]}>
                <div className={styles.price}><span>$</span>2,999</div>
                <h4>Plus</h4>
                <p>
                    Our plus plan is best suited for startups engaging in preliminary due diligence with investors.
                    </p>
                <hr />
                <ul className={styles.checked}>
                    <li className={styles.done}>Pitch Deck</li>
                    <li className={styles.done}>Data Room Checklist</li>
                    <li className={styles.done}>Convertible Notes</li>
                    <li className={styles.done}>Investor Updates</li>
                    <li className={styles.done}>Investor CRM</li>
                    <li className={styles.done}>Customer Accounts</li>
                    <li className={styles.done}>Market Size and GTM</li>
                    <li className={styles.done}>Cap Table Scenarios</li>
                    <li className={styles.done}>Tech Due Diligence Q&A</li>
                    <li className={styles.done}>Organizational Chart</li>
                    <li>Historical Financials</li>
                    <li>Financial KPIs</li>
                    <li>Financial Forecast</li>
                    <li>Sales Pipeline Forecast</li>
                    <li>Fund Usage</li>
                </ul>
                <button type='button'  onClick={() => handleClick('Plus')} className='btn-primary'>Get Plus</button>
            </div>
            <div
                className={[styles.pricingItem + ' ' + styles.highLighted + ' ' + (price === 'Premium' && 'd-block')]}>
                <div className={styles.price}><span>$</span>4,999</div>
                <h4>Premium</h4>
                <p>
                    Our premium plan is best suited for startups in deep dive due diligence discussions with
                    investors.
                    </p>
                <hr />
                <ul className={styles.checked}>
                    <li className={styles.done}>Pitch Deck</li>
                    <li className={styles.done}>Data Room Checklist</li>
                    <li className={styles.done}>Convertible Notes</li>
                    <li className={styles.done}>Investor Updates</li>
                    <li className={styles.done}>Investor CRM</li>
                    <li className={styles.done}>Customer Accounts</li>
                    <li className={styles.done}>Market Size and GTM</li>
                    <li className={styles.done}>Cap Table Scenarios</li>
                    <li className={styles.done}>Tech Due Diligence Q&A</li>
                    <li className={styles.done}>Organizational Chart</li>
                    <li className={styles.done}>Historical Financials</li>
                    <li className={styles.done}>Financial KPIs</li>
                    <li className={styles.done}>Financial Forecast</li>
                    <li className={styles.done}>Sales Pipeline Forecast</li>
                    <li className={styles.done}>Fund Usage</li>
                </ul>
                <button type='button' onClick={() => handleClick('Premium')} className='btn-primary'>Get Premium</button>
            </div>
        </div>
    </>

    );
};

