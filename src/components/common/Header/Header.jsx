// core
import React, { useState, useEffect } from 'react';

// components
import { useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";


// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png'


const menus = [
    {url: routes.home, label: 'Home'},
    {url: routes.home, label: 'Products'},
    {url: routes.home, label: 'Services'},
    {url: routes.home, label: 'Pricing'},
    {url: routes.home, label: 'Contact'},
];
export const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);
    const [width] = useWindowSize();

    const addClass = () => {
        setActiveMobile(!activeMobile);
    };

    useEffect(() => {
        if (width <= 1640 && activeMobile) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [width, activeMobile]);

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.menuWrapper}>
                    <div className={styles.logo}>
                        <a href='/'> <img src={logo} alt='logo' /></a>
                    </div>
                    <menu className={activeMobile ? [styles.menu + ' ' + styles.active] : styles.menu}>
                        <ul>
                            {menus.map(item => <li key={item.label}>
                                <a href={item.url} className={styles.active}>
                                    {item.label}
                                </a>
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

