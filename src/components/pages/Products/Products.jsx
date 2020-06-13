// core
import React, { useRef, useEffect, useState } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { Banner } from "../../common";

// assets
import styles from './Products.module.scss';
import { Panel } from "./components/Panel/Panel";
import deck from "../../../assets/images/home/products/deck.svg";
import accounts from "../../../assets/images/home/products/accounts.svg";
import chart from "../../../assets/images/home/products/chart.svg";

import work from "../../../assets/images/home/work.svg";


import powerPoint from "../../../assets/images/products/powerPoint.svg";

const tabs = [
    'Pitch Deck',
    'Financials KPIs',
    'Financials Forecast',
    'Cap Table Scenarios',
    'Convertible Notes',
    'Investor Updates',
    'Investor CRM',
    'Tech Due Diligence Q&A',
    'Company Org Chart',
    'Data Room Checklist'
];

const data = [
    {
        header: {
            image: deck,
            title: 'Pitch Deck',
            description: 'AIV provides a pre-built investor-ready pitch deck template for you to customize and start your fundraising journey.'
        },
        itemType: 0,
        items: [
            {
                url: '/',
                title: 'Title',
                description: ['Use the title slide to gain investors attention and get a kick start into your pitch!'],
            },
            {
                url: '/',
                title: 'Title',
                description: ['Use the title slide to gain investors attention and get a kick start into your pitch!'],
            },
            {
                url: '/',
                title: 'Title',
                description: ['Use the title slide to gain investors attention and get a kick start into your pitch!'],
            }
        ],
        info: {
            url: '/',
            image: powerPoint,
            title: ['Start building your Pitch Deck today!'],
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'],
            link: '/'
        },
    },
    {
        header: {
            image: accounts,
            title: 'Financials KPIs',
            description: 'AIV provides pre-built investor-ready financial KPIs templates to tell your growth story to investors.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Title',
                image: work,
                description: 'Use the title slide to gain investors attention and get a kick start into your pitch!',
            },
            {
                url: '/',
                title: 'Title',
                image: work,
                description: 'Use the title slide to gain investors attention and get a kick start into your pitch!',
            }
        ],
        info: {
            url: '/',
            image: powerPoint,
            title: 'Start building your Pitch Deck today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: chart,
            title: 'Financials Forecast',
            description: 'AIV provides pre-built investor-ready financial forecast templates to explain how you will grow your business.'
        },
        itemType: 0,
        items: [{
            url: '/',
            title: 'Title',
            description: 'Use the title slide to gain investors attention and get a kick start into your pitch!',
        }],
        info: {
            url: '/',
            image: powerPoint,
            title: 'Start building your Pitch Deck today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    }

];

const duration = 2;
export const Products = () => {
    const [tab, seTab] = useState('Pitch Deck');
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
            <Banner
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
                                {tabs.map((tabItem) => (
                                    <li key={tabItem} className={tab === tabItem ? styles.active : ''}
                                        onClick={() => seTab(tabItem)}>{tabItem}</li>
                                ))}
                            </ul>
                        </div>
                        {data.map((item, index) => (
                            <Panel key={index} data={item} tab={tab} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

