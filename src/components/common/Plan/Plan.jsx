// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";

// assets
import styles from './Plan.module.scss';

const duration = 2;
export const Plan = () => {
    const [price, setPrice] = useState('Basic');

    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    const t6 = new TimelineLite();
    let services = useRef(null);

    useEffect(() => {
        if (width > 767) {

            if (scroll > (services.offsetTop - 600)) {
                t6.to(services, {opacity: 1, x: 0, ease: Power3.easeOut, duration: duration})
            }
        }
    }, [width, scroll, t6]);

    return (<>

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
                <a href='/'
                   className={[styles.pricingItem + ' ' + (price === 'Basic' && 'd-block')]}>
                    <div className={styles.price}><span>$</span>999</div>
                    <h4>Basic</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectet
                        adipiscing elit sed do eiusmod.
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
                    <button type='button' className='btn-primary'>Get Basic</button>
                </a>
                <a href='/'
                   className={[styles.pricingItem + ' ' + (price === 'Plus' && 'd-block')]}>
                    <div className={styles.price}><span>$</span>2,999</div>
                    <h4>Plus</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectet
                        adipiscing elit sed do eiusmod.
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
                    <button type='button' className='btn-primary'>Get Plus</button>
                </a>
                <a href='/'
                   className={[styles.pricingItem + ' ' + styles.highLighted + ' ' + (price === 'Premium' && 'd-block')]}>
                    <div className={styles.price}><span>$</span>4,999</div>
                    <h4>Premium</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectet
                        adipiscing elit sed do eiusmod.
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
                    <button type='button' className='btn-primary'>Get Premium</button>
                </a>
            </div>
        </>

    );
};

