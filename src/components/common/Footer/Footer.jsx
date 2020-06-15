// core
import React from 'react';

// components
import { useWindowSize } from "../../../hooks";

// assets
import styles from './Footer.module.scss';
import logo from '../../../assets/images/logo-white.svg'
import { routes } from "../../App/routes";

export const Footer = () => {
    const [width] = useWindowSize();

    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.topSection}>
                    <div>
                        <h2>Ready? Get Started</h2>
                        <p>
                            AIV is ready to help you accelerate your fundraising journey. Explore our products and
                            services and come partner with us.
                        </p>
                    </div>
                    <div className={styles.topSectionButtons}>
                        <a href={`${routes.products}#pitch_deck`} className='btn-primary'>Explore Products</a>
                        <a href={routes.contact} className='btn-second'>Need help?</a>
                    </div>
                </div>
                <hr />
                <div className={styles.bottomSection}>
                    <ul>
                        <li className={styles.logo}><img src={logo} alt='logo' /></li>
                        <li><a href='/'>99 Wall Street, New York <br /> NY 10005</a></li>
                        <li><a href="mailto:Info@aiv.llc">Info@aiv.llc</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottomSectionTitle}>PRODUCTS</li>
                        <ul className={styles.listWrapper1}>
                            <li><a href={`${routes.products}#pitch_deck`}>Pitch Deck</a></li>
                            <li><a href={`${routes.products}#data_room_checklist`}>Data Room Checklist</a></li>
                            <li><a href={`${routes.products}#convertible_notes`}>Convertible Notes</a></li>
                            <li><a href={`${routes.products}#investor_updates`}>Investor Update</a></li>
                            <li><a href={`${routes.products}#investor_crm`}>Investor CRM</a></li>
                            {width < 991.98 &&
                            <>
                                <li><a href={`${routes.products}#customer_accounts`}>Customer Accounts</a></li>
                                <li><a href={`${routes.products}#market_size_and_gtm`}>Market Size and GTM</a></li>
                                <li><a href={`${routes.products}#cap_table_scenarios`}>Cap Table Scenarios</a></li>
                                <li><a href={`${routes.products}#tech_due_diligence_q&a`}>Tech Due Diligence Q&A</a>
                                </li>
                                <li><a href={`${routes.products}#organizational_chart`}>Organizational Chart</a></li>
                                <li><a href={`${routes.products}#historical_financials`}>Historical Financials</a></li>
                                <li><a href={`${routes.products}#financial_kpis`}>Financial KPIs</a></li>
                                <li><a href={`${routes.products}#financial_forecast`}>Financial Forecast</a></li>
                                <li><a href={`${routes.products}#sales_pipeline_forecast`}>Sales Pipeline Forecast</a>
                                </li>
                                <li><a href={`${routes.products}#fund_usage`}>Fund Usage</a></li>
                            </>
                            }
                        </ul>
                    </ul>

                    {width > 991.98 &&
                    <>
                        <ul>
                            <li className={styles.bottomSectionTitle} />
                            <li><a href={`${routes.products}#customer_accounts`}>Customer Accounts</a></li>
                            <li><a href={`${routes.products}#market_size_and_gtm`}>Market Size and GTM</a></li>
                            <li><a href={`${routes.products}#cap_table_scenarios`}>Cap Table Scenarios</a></li>
                            <li><a href={`${routes.products}#tech_due_diligence_q&a`}>Tech Due Diligence Q&A</a></li>
                            <li><a href={`${routes.products}#organizational_chart`}>Organizational Chart</a></li>
                        </ul>
                        <ul>
                            <li className={styles.bottomSectionTitle} />
                            <li><a href={`${routes.products}#historical_financials`}>Historical Financials</a></li>
                            <li><a href={`${routes.products}#financial_kpis`}>Financial KPIs</a></li>
                            <li><a href={`${routes.products}#financial_forecast`}>Financial Forecast</a></li>
                            <li><a href={`${routes.products}#sales_pipeline_forecast`}>Sales Pipeline Forecast</a></li>
                            <li><a href={`${routes.products}#fund_usage`}>Fund Usage</a></li>
                        </ul>
                    </>
                    }
                    <div className={styles.listWrapper2}>
                        <ul>
                            <li className={styles.bottomSectionTitle}>CONTACT US</li>
                            <li><a href='mailto:Sales@quickraise.com'>Sales</a></li>
                            <li><a href='mailto:Media@quickraise.com'>Media</a></li>
                            <li><a href='mailto:Investment@quickraise.com'>Investment</a></li>
                            <li><a href='mailto:partnership@quickraise.com'>Partnership</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright © 2014 – 2019 Applied Innovation Ventures</p>
                    <p>
                        <span><a href='/'>Terms & Conditions</a></span>
                        <span className={styles.line}>/</span>
                        <span><a href='/'>Privacy Policy</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

