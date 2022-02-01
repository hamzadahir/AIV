// core
import React, { useRef, useEffect, useState } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";

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

import introductions from '../../../assets/images/home/introductions.svg'
import room from '../../../assets/images/home/room.svg'
import report from '../../../assets/images/home/report.svg'
import rebranding from '../../../assets/images/home/rebranding.svg'
import arrow from '../../../assets/images/arrow-green.svg'

const overviewItems = [
    {id: 0, title: 'Pre-Built Financing Templates', image: templates},
    {id: 1, title: 'Extended Investor Network', image: network},
    {id: 2, title: 'Save Thousands of Hours of Work', image: work},
    {id: 3, title: 'Accelerate Funding By Months', image: month},
];

const servicesItems = [
    {id: 0, title: 'Investor\n' + 'Introductions', image: introductions},
    {id: 1, title: 'Data Room\n' + 'Preparation', image: room},
    {id: 2, title: 'Technical Due\n' + 'Diligence Report', image: report},
    {id: 3, title: 'Corporate\n' + 'Rebranding', image: rebranding},
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

    const [price, setPrice] = useState('Basic');
    const [products, setProducts] = useState(1);

    // animations
    gsap.registerPlugin();
    const t1 = new TimelineLite();
    let sectionOne = useRef(null);
    let bannerImage = useRef(null);
    let bannerDescription = useRef(null);
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
    let pricingItem = useRef(null);
    const t6 = new TimelineLite();
    let services = useRef(null);


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
                    .to(pricingItem, {opacity: 1, y: 0, ease: Power3.easeOut, duration: duration}, `-=${duration}`)
            }
            if (scroll > (services.offsetTop - 600)) {
                t6.to(services, {opacity: 1, x: 0, ease: Power3.easeOut, duration: duration})
            }
        }
    }, [width, scroll, t1, t2, t3, t4, t5, t6]);


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
        if (width < 567) {
            for (let i = 0; i < single.length; i++) {
                single[i].style.display = 'none';
                if (products === 1) {
                    for (let k = 0; k <= 5; k++) {
                        single[k].style.display = 'flex';
                    }
                } else if (products === 2) {
                    for (let k = 5; k <= 10; k++) {
                        single[k].style.display = 'flex';
                    }
                } else {
                    for (let k = 10; k <= 14; k++) {
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
            <section className={styles.accelerate} ref={el => sectionOne = el}>
                <div className='container'>
                    <div className={styles.accelerateInner}>
                        <div className={styles.accelerateDescription} ref={el => bannerDescription = el}>
                            <h1>Accelerate
                                <span className='green'>Fundraising</span>
                            </h1>
                            <button type="button" className="btn-primary">Explore
                                Products
                            </button>
                        </div>
                        <div className={styles.image} ref={el => bannerImage = el}>
                            <img className={styles.cloud1} src={cloud1} alt='' />
                            <img className={styles.cloud2} src={cloud2} alt='' />
                            <img src={banner} alt='' />
                        </div>
                    </div>
                </div>
            </section>
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
                                <a href='/' key={overview.id} className={styles.overviewItem}>
                                    <div className={styles.image}><img src={overview.image} alt='' /></div>
                                    <p>{overview.title}</p>
                                </a>
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
                        <a href='/' className={styles.productsItemWrapper} ref={el => productsItem = el}>
                            {productsItems.map(product => (
                                <div key={product.id} className={styles.productsItem}>
                                    <div><img src={product.icon} alt='' /></div>
                                    <p>{product.title}</p>
                                </div>
                            ))}
                        </a>
                    </div>
                    <div className={styles.pagination}>
                        <button className='btn-primary--prev' onClick={() => prevProduct()} />
                        <button type='button' className='btn-primary'>{products} / 3
                        </button>
                        <button className='btn-primary--next' onClick={() => nextProduct()} />
                    </div>
                    <a href='/' className={styles.link}>Explore Fundraising Products
                        <img src={arrow} alt='' />
                    </a>
                </div>
            </section>
            <section className={styles.overview} ref={el => sectionFour = el}>
                <div className='container'>
                    <div className={styles.overviewInner}>
                        <div className={styles.overviewTitle} ref={el => servicesTitle = el}>
                            <h2>Fundraising Services</h2>
                            <p>
                                AIV provides you with services you can utilize to accelerate your fundraising so you can
                                spend more time getting back to business.
                            </p>
                        </div>
                        <div className={styles.overviewItemWrapper} ref={el => servicesItem = el}>
                            {servicesItems.map(service => (
                                <a href='/' key={service.id} className={styles.overviewItem}>
                                    <div className={styles.image}><img src={service.image} alt='' /></div>
                                    <p>{service.title}</p>
                                </a>
                            ))}
                        </div>
                        <a href='/' className={styles.link}>Explore Fundraising Services
                            <img src={arrow} alt='' />
                        </a>
                    </div>
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
                        <div className={styles.pricingItemWrapper} ref={el => pricingItem = el}>
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
                            <div className={styles.services} ref={el => services = el}>
                                <h3>Services Pricing</h3>
                                <div className={styles.servicesInner}>
                                    <ul className={styles.checked}>
                                        <li className={styles.done}>Investor Introductions</li>
                                        <li className={styles.done}>Technical Due Diligence Report</li>
                                        <li className={styles.done}>Data Room Preparation</li>
                                        <li className={styles.done}>Corporate Rebranding</li>
                                    </ul>
                                    <button type="button" className='btn-primary'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <a href='/' className={styles.link}>Explore Pricing Plans
                            <img src={arrow} alt='' />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

