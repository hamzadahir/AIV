// core
import React from 'react';


// assets
import styles from './Home.module.scss';
import banner from '../../../assets/images/home/banner.png'
import templates from '../../../assets/images/home/templates.png'
import network from '../../../assets/images/home/network.png'
import work from '../../../assets/images/home/work.png'
import month from '../../../assets/images/home/month.png'
import deck from '../../../assets/images/home/deck.svg'
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
    {id: 1, title: 'Customer Accounts', icon: deck},
    {id: 2, title: 'Historical Financials', icon: deck},
    {id: 3, title: 'Data Room Checklist', icon: deck},
    {id: 4, title: 'Market Size and GTM', icon: deck},
    {id: 5, title: 'Financial KPIs', icon: deck},
    {id: 6, title: 'Convertible Notes', icon: deck},
    {id: 7, title: 'Cap Table Scenarios', icon: deck},
    {id: 8, title: 'Financial Forecast', icon: deck},
    {id: 9, title: 'Investor Updates', icon: deck},
    {id: 10, title: 'Tech Due Diligence Q&A', icon: deck},
    {id: 11, title: 'Sales Pipeline Forecast', icon: deck},
    {id: 12, title: 'Investor CRM', icon: deck},
    {id: 13, title: 'Organizational Chart', icon: deck},
    {id: 14, title: 'Fund Usage', icon: deck},
];
export const Home = () => {
    return (
        <main className={styles.home}>
            <section className={styles.accelerate}>
                <div className='container'>
                    <div className={styles.accelerateInner}>
                        <div className={styles.accelerateDescription}>
                            <h1>Accelerate
                                <span className='green'>Fundraising</span>
                            </h1>
                            <button type="button" className="btn-primary">Explore Products</button>
                        </div>
                        <img src={banner} alt='' />
                    </div>
                </div>
            </section>
            <section className={styles.overview}>
                <div className='container'>
                    <div className={styles.overviewInner}>
                        <h2>Overview</h2>
                        <p>
                            Applied Innovation help accelerate venture financing for startups
                            by providing them with the necessary financing templates and
                            services to get ahead start.
                        </p>
                        <div className={styles.overviewItemWrapper}>
                            {overviewItems.map(overview => (
                                <div key={overview.id} className={styles.overviewItem}>
                                    <img src={overview.image} alt='' />
                                    <p>{overview.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.products}>
                <div className='container'>
                    <div className={styles.productsInner}>
                        <h2>Fundraising Products</h2>
                        <p>
                            AIV provides you with pre-built investor-ready templates which
                            you can utilize to build out your data room. No need to spend time creating materials from
                            scratch.
                        </p>
                        <div className={styles.productsItemWrapper}>
                            {productsItems.map(product => (
                                <div key={product.id} className={styles.productsItem}>
                                    <div><img src={product.icon} alt='' /></div>
                                    <p>{product.title}</p>
                                </div>
                            ))}
                        </div>
                        <a href='/'>
                            Explore Fundraising Services
                            <img src={arrow} alt='' />
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.overview}>
                <div className='container' >
                    <div className={styles.overviewInner}>
                        <h2>Fundraising Services</h2>
                        <p>
                            AIV provides you with services you can utilize to accelerate your fundraising so you can
                            spend more time getting back to business.
                        </p>
                        <div className={styles.overviewItemWrapper}>
                            {servicesItems.map(service => (
                                <div key={service.id} className={styles.overviewItem}>
                                    <img src={service.image} alt='' />
                                    <p>{service.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

