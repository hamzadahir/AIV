// core
import React, { useState, useEffect } from 'react';

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";


// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.svg'

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


const menus = [
    {url: routes.home, label: 'Home',},
    {url: `${routes.products}#pitch_deck`, label: 'Products', subMenu: true},
    {url: routes.pricing, label: 'Pricing'},
    {url: routes.contact, label: 'Contact'},
];

const products = [
    {id: 0, url: `${routes.products}#pitch_deck`, title: 'Pitch Deck', icon: deck},
    {id: 1, url: `${routes.products}#customer_accounts`, title: 'Customer Accounts', icon: accounts},
    {id: 2, url: `${routes.products}#historical_financials`, title: 'Historical Financials', icon: financials},
    {id: 3, url: `${routes.products}#data_room_checklist`, title: 'Data Room Checklist', icon: data},
    {id: 4, url: `${routes.products}#market_size_and_gtm`, title: 'Market Size and GTM', icon: gtm},
    {id: 5, url: `${routes.products}#financial_kpis`, title: 'Financial KPIs', icon: kpi},
    {id: 6, url: `${routes.products}#convertible_notes`, title: 'Convertible Notes', icon: notes},
    {id: 7, url: `${routes.products}#cap_table_scenarios`, title: 'Cap Table Scenarios', icon: scenarios},
    {id: 8, url: `${routes.products}#financial_forecast`, title: 'Financial Forecast', icon: forecast},
    {id: 9, url: `${routes.products}#investor_updates`, title: 'Investor Updates', icon: updates},
    {id: 10, url: `${routes.products}#tech_due_diligence_q&a`, title: 'Tech Due Diligence Q&A', icon: tech},
    {id: 11, url: `${routes.products}#sales_pipeline_forecast`, title: 'Sales Pipeline Forecast', icon: sales},
    {id: 12, url: `${routes.products}#investor_crm`, title: 'Investor CRM', icon: crm},
    {id: 13, url: `${routes.products}#organizational_chart`, title: 'Organizational Chart', icon: chart},
    {id: 14, url: `${routes.products}#fund_usage`, title: 'Fund Usage', icon: usage},
];

let classname;
export const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);
    const [toggleProducts, setToggleProducts] = useState(false);

    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    const addClass = () => {
        setActiveMobile(!activeMobile);
    };

    useEffect(() => {
        if (width <= 992 && activeMobile) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [width, activeMobile]);

    useEffect(() => {
        classname = scroll < 120;
    }, [scroll]);

    const showProducts = (e, label) => {
        if (label === 'Products') {
            if (width < 992) {
                e.preventDefault();
                setToggleProducts(!toggleProducts);
            }
        }
    };

    return (
        <header className={classname ? styles.header : [styles.header + ' ' + styles.headerFixed]}>
            <div className='container'>
                <div className={styles.menuWrapper}>
                    <div className={styles.logo}>
                        <a href='/'> <img src={logo} alt='logo' /></a>
                    </div>
                    <menu className={activeMobile ? [styles.menu + ' ' + styles.active] : styles.menu}>
                        <ul>
                            {menus.map(item =>
                                <li key={item.label}>
                                    <a href={item.url}
                                       onClick={(e) => showProducts(e, item.label)}
                                       className={`${styles.link} ${window.location.pathname === item.url ? styles.active : ''}`}>
                                        {item.label}
                                    </a>
                                    {item.subMenu &&
                                    <div
                                        className={!toggleProducts ? styles.subMenuWrapper : `${styles.subMenuWrapper} ${styles.show}`}>
                                        <ul className={styles.subMenu}>
                                            <li className={styles.subMenuTitle}>
                                                <h5>Fundraising Services</h5>
                                            </li>
                                            {products.map(product => (
                                                <li key={product.id}>
                                                    <a href={product.url}>
                                                        <div className={styles.image}>
                                                            <img src={product.icon} alt='' />
                                                        </div>
                                                        {product.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                </li>)}
                        </ul>
                        <a href='/' className='accelerateButton'>
                            <span className="btn-primary">Explore Products</span>
                            <span className='btn-primary--next' />
                        </a>
                    </menu>
                    <button type='button'
                            className={activeMobile ? [styles.burgerMenu + ' ' + styles.active] : styles.burgerMenu}
                            onClick={() => addClass()}>
                        <span className={styles.burgerMenuLines} />
                    </button>
                </div>
            </div>

        </header>
    );
};

