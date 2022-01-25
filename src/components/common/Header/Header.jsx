// core
import React, { useState, useEffect } from 'react';

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";


// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.svg'


const menus = [
    {url: routes.home, label: 'Home'},
    {url: routes.home, label: 'Products'},
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
        console.log(classname);
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

