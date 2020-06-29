// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import StripeForm from "../../containers/StripePay";

// assets
import styles from './Plan.module.scss';

const duration = 2;
export const Plan = () => {
    const [price, setPrice] = useState('General');
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();
    const t6 = new TimelineLite();
    let services = useRef(null);
    const [isError, setError] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (width > 767) {

            if (scroll > (services.offsetTop - 600)) {
                t6.to(services, {opacity: 1, x: 0, ease: Power3.easeOut, duration: duration})
            }
        }
    }, [width, scroll, t6]);

    const handleClick = async (plan) => {
        setIsShow(true);
        setPrice(plan);
    };

    const closePopup = () => {
        setError(false)
    };

    return (<>
            {isShow && <StripeForm plan={price} close={() => setIsShow(false)} />}
            {(isError) &&
            <div className='popupContainer'>
                <div className={'errorPopup'}>
                    Sorry, we could not transfer you to the payment page.
                    <button onClick={() => closePopup()} className='closePopupButton'>
                        <span>✘</span>
                    </button>
                </div>
            </div>}
            <div className={styles.pricingItemWrapper}>
                <div
                    className={styles.pricingItem}>
                    <div className={styles.price}><span>$</span>399</div>
                    <h4>General</h4>
                    <p>
                        Our General pack is best suited for startups just beginning their fundraising.
                    </p>
                    <hr />
                    <ul className={styles.checked}>
                        <li className={styles.done}>Pitch Deck</li>
                        <li className={styles.done}>Data Room Checklist</li>
                        <li className={styles.done}>Investor Updates</li>
                        <li className={styles.done}>Investor CRM</li>
                        <li className={styles.done}>Market Size and GTM</li>
                        <li className={styles.done}>Organizational Chart</li>
                        <li className={styles.done}>Convertible Notes</li>
                        <li className={styles.done}>Cap Table Scenarios</li>
                    </ul>
                    <button type='button' onClick={() => handleClick('General')} className='btn-primary'>
                        Get Pack
                    </button>
                </div>
                <div
                    className={styles.pricingItem}>
                    <div className={styles.price}><span>$</span>499</div>
                    <h4>Financials</h4>
                    <p>
                        Our Financials pack is best suited for startups engaging in business due diligence with
                        investors.
                    </p>
                    <hr />
                    <ul className={styles.checked}>
                        <li className={styles.done}>Customer Accounts</li>
                        <li className={styles.done}>Monthly Financials</li>
                        <li className={styles.done}>Quarterly Financials</li>
                        <li className={styles.done}>Yearly Financials</li>
                        <li className={styles.done}>Financial KPI Dashboard</li>
                        <li className={styles.done}>Financial Forecast</li>
                        <li className={styles.done}>Sales Pipeline Forecast</li>
                        <li className={styles.done}>Fund Usage</li>
                    </ul>
                    <button type='button' onClick={() => handleClick('Financials')} className='btn-primary'>
                        Get Pack
                    </button>
                </div>
                <div
                    className={styles.pricingItem}>
                    <div className={styles.price}><span>$</span>399</div>
                    <h4>Technical Q&A</h4>
                    <p>
                        Our Technical Q&A pack is best suited for startups engaging in technical due diligence with
                        investors.
                    </p>
                    <hr />
                    <ul className={styles.checked}>
                        <li className={styles.done}>Product</li>
                        <li className={styles.done}>AI/ML Components</li>
                        <li className={styles.done}>Competitive Advantage</li>
                        <li className={styles.done}>Infrastructure</li>
                        <li className={styles.done}>IT Security & Compliance</li>
                        <li className={styles.done}>Team</li>
                        <li className={styles.done}>12-Month Roadmap</li>
                        <li className={styles.done}>Testimonials</li>
                    </ul>
                    <button type='button' onClick={() => handleClick('Technical Q&A')} className='btn-primary'>
                        Get Pack
                    </button>
                </div>
            </div>
        </>

    );
};

