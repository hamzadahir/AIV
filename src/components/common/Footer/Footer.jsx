// core
import React from 'react';


// assets
import styles from './Footer.module.scss';
import logo from '../../../assets/images/logo-white.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.topSection}>
                    <div>
                        <h2>Ready? Get Started</h2>
                        <p>
                            AIV is ready to help you accelerate your fundraising j ourney. <br />
                            Explore our products and services and come partner with us.
                        </p>
                    </div>
                    <div className={styles.topSectionButtons}>
                        <button type='button' className='btn-primary'>Explore Products</button>
                        <button type='button' className='btn-second'>Need help?</button>
                    </div>
                </div>
                <hr />
                <div className={styles.bottomSection}>
                    <ul>
                        <li className={styles.logo}><img src={logo} alt='logo' /></li>
                        <li>99 Wall Street, New York <br /> NY 10005</li>
                        <li><a href='mailto:Info@aiv.llc'>Info@aiv.llc</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottomSectionTitle}>OVERVIEW</li>
                        <li><a href='/'>Data</a></li>
                        <li><a href='/'>Taxonomy</a></li>
                        <li><a href='/'>NLP Models</a></li>
                        <li><a href='/'>Deployment</a></li>
                        <li><a href='/'>Integrations</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottomSectionTitle}>PRODUCTS</li>
                        <li><a href='/'>Financial Markets</a></li>
                        <li><a href='/'>Banking</a></li>
                        <li><a href='/'>Insurance</a></li>
                        <li><a href='/'>Technology</a></li>
                        <li><a href='/'>Government</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottomSectionTitle}>PRODUCTS</li>
                        <li><a href='/'>Company</a></li>
                        <li><a href='/'>Customers</a></li>
                        <li><a href='/'>Careers</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottomSectionTitle}>CONTACT US</li>
                        <li><a href='/'>Sales</a></li>
                        <li><a href='/'>Media</a></li>
                        <li><a href='/'>Investment</a></li>
                        <li><a href='/'>Partnership</a></li>
                    </ul>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright © 2014 – 2019 Applied Innovation Ventures</p>
                    <p>
                        <span><a href='/'>TERMS & CONDITIONS</a></span>
                        <span className={styles.line}>/</span>
                        <span><a href='/'>PRIVACY POLICY</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

