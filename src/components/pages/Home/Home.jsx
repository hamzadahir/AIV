// core
import React, { useRef, useEffect, useState } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { Banner, Plan } from "../../common";
import { routes } from "../../App/routes";

// assets
import styles from './Home.module.scss';
import banner from '../../../assets/images/home/banner.svg'
import cloud1 from '../../../assets/images/home/cloud1.svg'
import cloud2 from '../../../assets/images/home/cloud2.svg'

import templates from '../../../assets/images/home/templates.svg'
import network from '../../../assets/images/home/network.svg'
import work from '../../../assets/images/home/work.svg'
import month from '../../../assets/images/home/month.svg'

import deck from '../../../assets/images/home/products/deck.svg'
import accounts from '../../../assets/images/home/products/accounts.svg'
import financials from '../../../assets/images/home/products/financials.svg'
import data from '../../../assets/images/home/products/data.svg'
import gtm from '../../../assets/images/home/products/gtm.svg'
import kpi from '../../../assets/images/home/products/kpi.svg'
import notes from '../../../assets/images/home/products/notes.svg'
import scenarios from '../../../assets/images/home/products/scenarios.svg'
import forecast from '../../../assets/images/home/products/forecast.svg'
import updates from '../../../assets/images/home/products/updates.svg'
import tech from '../../../assets/images/home/products/tech.svg'
import sales from '../../../assets/images/home/products/sales.svg'
import crm from '../../../assets/images/home/products/crm.svg'
import chart from '../../../assets/images/home/products/chart.svg'
import usage from '../../../assets/images/home/products/usage.svg'

import arrow from '../../../assets/images/arrow-green.svg'

const overviewItems = [
    {id: 0, title: 'Pre-Built Financing Templates', image: templates},
    {id: 1, title: 'Extended Investor Network', image: network},
    {id: 2, title: 'Save Thousands of Hours of Work', image: work},
    {id: 3, title: 'Accelerate Funding By Months', image: month},
];

const productsItems = [
    {id: 0, title: 'Pitch Deck', icon: deck},
    {id: 1, title: 'Customer Accounts', icon: accounts},
    {id: 2, title: 'Historical Financials', icon: financials},
    {id: 3, title: 'Data Room Checklist', icon: data},
    {id: 4, title: 'Market Size and GTM', icon: gtm},
    {id: 5, title: 'Financial KPIs', icon: kpi},
    {id: 6, title: 'Convertible Notes', icon: notes},
    {id: 7, title: 'Cap Table Scenarios', icon: scenarios},
    {id: 8, title: 'Financial Forecast', icon: forecast},
    {id: 9, title: 'Investor Updates', icon: updates},
    {id: 10, title: 'Tech Due Diligence Q&A', icon: tech},
    {id: 11, title: 'Sales Pipeline Forecast', icon: sales},
    {id: 12, title: 'Investor CRM', icon: crm},
    {id: 13, title: 'Organizational Chart', icon: chart},
    {id: 14, title: 'Fund Usage', icon: usage},
];

const duration = 2;
export const Home = () => {
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    const [products, setProducts] = useState(1);

    // animations
    gsap.registerPlugin();
    const t2 = new TimelineLite();
    let sectionTwo = useRef(null);
    let overviewTitle = useRef(null);
    let overviewItem = useRef(null);
    const t3 = new TimelineLite();
    let sectionThree = useRef(null);
    let productsTitle = useRef(null);
    let productsItem = useRef(null);
    const t4 = new TimelineLite();
    let sectionFour = useRef(null);
    let servicesTitle = useRef(null);
    let servicesItem = useRef(null);
    const t5 = new TimelineLite();
    let sectionFive = useRef(null);
    let pricingTitle = useRef(null);
    // let pricingItem = useRef(null);


    useEffect(() => {
        if (width > 767) {
            if (scroll > (sectionTwo.offsetTop - 300)) {
                t2.to(overviewTitle, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration})
                    .to(overviewItem, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration}, `-=${duration}`)
            }
            if (scroll > (sectionThree.offsetTop - 300)) {
                t3.to(productsTitle, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration})
                    .to(productsItem, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration}, `-=${duration}`)
            }
            if (scroll > (sectionFour.offsetTop - 300)) {
                t4.to(servicesTitle, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration})
                    .to(servicesItem, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration}, `-=${duration}`)
            }
            if (scroll > (sectionFive.offsetTop - 300)) {
                t5.to(pricingTitle, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration})
                // .to(pricingItem, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration}, `-=${duration}`)
            }
        }
    }, [width, scroll, t2, t3, t4, t5]);


    // Fundraising Products
    const prevProduct = () => {
        if (products > 1) {
            setProducts(prev => prev - 1)
        }
    };
    const nextProduct = () => {
        if (products < 3) {
            setProducts(prev => prev + 1)
        }
    };
    useEffect(() => {
        const single = productsItem.children;
        if (width < 768) {
            for (let i = 0; i < single.length; i++) {
                single[i].style.display = 'none';
                if (products === 1) {
                    for (let k = 0; k < 5; k++) {
                        single[k].style.display = 'flex';
                    }
                } else if (products === 2) {
                    for (let k = 5; k < 10; k++) {
                        single[k].style.display = 'flex';
                    }
                } else {
                    for (let k = 10; k < 15; k++) {
                        single[k].style.display = 'flex';
                    }
                }
            }
        } else {
            for (let i = 0; i < single.length; i++) {
                single[i].style.display = 'flex';
            }
        }
    }, [width, products]);

    return (
        <main className={styles.home}>
            <Banner
                image={[banner, cloud1, cloud2]}
                title={['Accelerate', 'Fundraising']}
                subTitle={true}
                description={false}
                link={{url: `${routes.products}#pitch_deck`, label: 'Explore Products'}} />
            <section className={styles.overview} ref={el => sectionTwo = el}>
                <div className='container'>
                    <div className={styles.overviewInner}>
                        <div className={styles.overviewTitle} ref={el => overviewTitle = el}>
                            <h2>Overview</h2>
                            <p>
                                Applied Innovation help accelerate venture financing for startups
                                by providing them with the necessary financing templates and
                                services to get ahead start.
                            </p>
                        </div>
                        <div className={styles.overviewItemWrapper} ref={el => overviewItem = el}>
                            {overviewItems.map(overview => (
                                <div key={overview.id} className={styles.overviewItem}>
                                    <div className={styles.image}><img src={overview.image} alt='' /></div>
                                    <p>{overview.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.products} ref={el => sectionThree = el}>
                <div className='container'>
                    <div className={styles.productsInner}>
                        <div className={styles.productsTitle} ref={el => productsTitle = el}>
                            <h2>Fundraising Products</h2>
                            <p>
                                AIV provides you with pre-built investor-ready templates which
                                you can utilize to build out your data room. No need to spend time creating materials
                                from
                                scratch.
                            </p>
                        </div>
                        <div className={styles.productsItemWrapper} ref={el => productsItem = el}>
                            {productsItems.map(product => (
                                <a href={`${routes.products}#${product.title.toLowerCase().replace(/ /g, '_')}`}
                                   key={product.id} className={styles.productsItem}>
                                    <div><img src={product.icon} alt='' /></div>
                                    <p>{product.title}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        <button className='btn-primary--prev' onClick={() => prevProduct()} />
                        <button type='button' className='btn-primary'>{products} / 3
                        </button>
                        <button className='btn-primary--next' onClick={() => nextProduct()} />
                    </div>
                    <a href={`${routes.products}#pitch_deck`} className={styles.link}>Explore Fundraising Products
                        <img src={arrow} alt='' />
                    </a>
                </div>
            </section>
            <section className={styles.pricing} ref={el => sectionFive = el}>
                <div className='container'>
                    <div className={styles.pricingInner}>
                        <div className={styles.pricingTitle} ref={el => pricingTitle = el}>
                            <h2>Pricing Plans</h2>
                            <p>
                                Choose from our flexible product pricing plans and services
                                to get started with your fundraising journey
                            </p>
                        </div>
                        <Plan />
                        <a href={routes.pricing} className={styles.link}>Explore Pricing Plans
                            <img src={arrow} alt='' />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

