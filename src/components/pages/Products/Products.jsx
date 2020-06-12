// core
import React, { useRef, useEffect } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { Pricing } from "../../common";

// assets
import styles from './Products.module.scss';
import deck from '../../../assets/images/home/products/deck.svg'
import powerPoint from '../../../assets/images/products/powerPoint.png'

const duration = 2;
export const Products = () => {
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    // animations
    gsap.registerPlugin();
    const t1 = new TimelineLite();
    let sectionOne = useRef(null);
    let bannerImage = useRef(null);
    let bannerDescription = useRef(null);


    useEffect(() => {
        if (width > 767) {
            if (scroll > (sectionOne.offsetTop - 300)) {
                t1.to(bannerImage, {opacity: 1, x: 0, ease: Power3.easeOut, duration: duration})
                    .to(bannerDescription, {
                        opacity: 1,
                        y: 0,
                        ease: Power3.easeOut,
                        duration: duration
                    }, `-=${duration}`);
            }
        }
    }, [width, scroll, t1]);

    return (
        <main className={styles.products}>
            <Pricing
                banner={false}
                title={['Fundraising', 'Products']}
                subTitle={false}
                description='AIV provides you with pre-built investor-ready templates which you can utilize to build out your  data room. No need to spend time creating materials from scratch.'
                link={{url: '/', label: 'Purchase Now'}} />

            <section className={styles.fundraising}>
                <div className='container'>
                    <div className={styles.fundraisingInner}>
                        <div className={styles.tabs}>
                            <ul>
                                <li className={styles.active}>Pitch Deck</li>
                                <li>Financials KPIs</li>
                                <li>Financial Forecast</li>
                                <li>Customer Accounts</li>
                                <li>Cap Table Scenarios</li>
                                <li>Convertible Notes</li>
                                <li>Investor Updates</li>
                                <li>Investor CRM</li>
                                <li>Tech Due Diligence Q&A</li>
                                <li>Company Org Chart</li>
                                <li>Data Room Checklist</li>
                            </ul>
                        </div>
                        <div className={styles.panel}>
                            <h2 className={styles.panelTitle}>
                                <img src={deck} alt='' />
                                Pitch Deck
                            </h2>
                            <p className={styles.panelDescription}>
                                AIV provides a pre-built investor-ready pitch deck template for you to customize and
                                start your fundraising journey.
                            </p>
                            <div className={styles.panelInner}>
                                <div className={styles.panelItem}>
                                    <div className={styles.panelItemImage} />
                                    <div>
                                        <h4>Title</h4>
                                        <p>
                                            Use the title slide to gain investors attention and get a kick start into
                                            your pitch!
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.panelItem}>
                                    <div className={styles.panelItemImage} />
                                    <div>
                                        <h4>Title</h4>
                                        <p>
                                            Use the title slide to gain investors attention and get a kick start into
                                            your pitch!
                                        </p>
                                    </div>
                                </div>
                                <a href='/' className={styles.panelItem}>
                                    <div className={styles.panelItemImage} />
                                    <div>
                                        <h4>Title</h4>
                                        <p>
                                            Use the title slide to gain investors attention and get a kick start into
                                            your pitch!
                                        </p>
                                    </div>
                                </a>
                                <div className={styles.panelItem}>
                                    <div className={styles.panelItemImage} />
                                    <div>
                                        <h4>Title</h4>
                                        <p>
                                            Use the title slide to gain investors attention and get a kick start into
                                            your pitch!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fundraisingInfo}>
                                <p>Available in:</p>
                                <div className={styles.fundraisingAvailable}>
                                    <img src={powerPoint} alt='' />
                                </div>
                                <div className={styles.fundraisingLink}>
                                    <div>
                                        <h4>Start building your Pitch Deck today!</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    </div>
                                    <a href='/' className={styles.link}>
                                        <button type="button" className="btn-primary">Download Now</button>
                                        <button className='btn-primary--next' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

