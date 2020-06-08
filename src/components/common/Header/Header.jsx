// core
import React, { useState, useEffect } from 'react';

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";


// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.svg'

import introductions from '../../../assets/images/home/introductions.svg'
import room from '../../../assets/images/home/room.svg'
import report from '../../../assets/images/home/report.svg'
import rebranding from '../../../assets/images/home/rebranding.svg'


const menus = [
    {url: routes.home, label: 'Home',},
    {url: routes.home, label: 'Products', subMenu: true},
    {url: routes.home, label: 'Services'},
    {url: routes.home, label: 'Pricing'},
    {url: routes.home, label: 'Contact'},
];

let classname;
export const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);
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
                                    <a href={item.url} className={styles.link}>{item.label}</a>
                                    {item.subMenu &&
                                    <ul className={styles.subMenu}>
                                        <li>
                                            <div className={styles.image}><img src={introductions} alt='' /></div>
                                            Investor Introductions
                                        </li>
                                        <li>
                                            <div className={styles.image}><img src={room} alt='' /></div>
                                            Data Room Preparation
                                        </li>
                                        <li>
                                            <div className={styles.image}><img src={report} alt='' /></div>
                                            Technical Due Diligence Report
                                        </li>
                                        <li>
                                            <div className={styles.image}><img src={rebranding} alt='' /></div>
                                            Corporate Rebranding
                                        </li>
                                    </ul>}
                                </li>)}
                        </ul>
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

