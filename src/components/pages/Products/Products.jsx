// core
import React, { useRef, useEffect, useState } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { Banner } from "../../common";
import { routes } from "../../App/routes";

// assets
import styles from './Products.module.scss';
import { Panel } from "./components/Panel/Panel";
import deck from "../../../assets/images/home/products/deck.svg";
import accounts from "../../../assets/images/home/products/accounts.svg";
import accountsGreen from "../../../assets/images/home/products/accounts.svg";
import scenarios from "../../../assets/images/home/products/scenarios.svg";
import notes from "../../../assets/images/home/products/notes.svg";
import updates from "../../../assets/images/home/products/updates.svg";
import crm from "../../../assets/images/home/products/crm.svg";
import tech from "../../../assets/images/home/products/tech.svg";
import chart from "../../../assets/images/home/products/chart.svg";
import dataRoom from "../../../assets/images/home/products/data.svg";

import work from "../../../assets/images/home/work.svg";
import box from "../../../assets/images/products/box.svg";
import box1 from "../../../assets/images/products/box-1.svg";
import user from "../../../assets/images/products/user.svg";
import gross from "../../../assets/images/products/gross.svg";
import file from "../../../assets/images/products/file-text.svg";
import trending from "../../../assets/images/products/trending-up.svg";
import cost from "../../../assets/images/products/cost.svg";
import risk from "../../../assets/images/products/risk.svg";
import growth from "../../../assets/images/products/growth.svg";
import rate from "../../../assets/images/products/rate.svg";
import dollar from "../../../assets/images/products/dollar.svg";
import burn from "../../../assets/images/products/burn.svg";
import percent from "../../../assets/images/products/percent.svg";

import forecast from '../../../assets/images/home/products/forecast.svg'
import five from '../../../assets/images/products/5.svg'
import operating from '../../../assets/images/products/operating.svg'
import users from '../../../assets/images/products/users.svg'
import calendar from '../../../assets/images/products/calendar.svg'
import calendarFill from '../../../assets/images/products/calendar-fill.svg'
import fileFill from '../../../assets/images/products/file-text.svg'

import investment from '../../../assets/images/products/investment.svg'
import checkSquare from '../../../assets/images/products/check-square.svg'

import checkCircle from '../../../assets/images/products/check-circle.svg'
import minimize from '../../../assets/images/products/minimize.svg'

import crosshair from '../../../assets/images/products/crosshair.svg'
import development from '../../../assets/images/products/development.svg'
import key from '../../../assets/images/products/key.svg'

import watch from '../../../assets/images/products/watch.svg'

import pieChart from '../../../assets/images/products/pie-chart.svg'
import barChart from '../../../assets/images/products/bar-chart.svg'


import powerPoint from "../../../assets/images/products/powerPoint.svg";
import exel from "../../../assets/images/products/exel.svg";
import word from "../../../assets/images/products/word.svg";

const tabs = [
    'Pitch Deck',
    'Financial KPIs',
    'Financial Forecast',
    'Customer Accounts',
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
                description: 'Use the title slide to gain investors attention and get a kick start into your pitch!',
            },
            {
                url: '/',
                title: 'Problem',
                description: 'What is the problem your are trying to solve and is it really a problem worth solving?',
            },
            {
                url: '/',
                title: 'Solution',
                description: 'Show off how you solve the big problem you just described with your business.',
            },
            {
                url: '/',
                title: 'Product',
                description: 'You\'ve got something to show? The product slide is the right slide to do it!',
            },
            {
                url: '/',
                title: 'Market',
                description: 'Is the market big enough for huge growth? An important question you should answer!',
            },
            {
                url: '/',
                title: 'Competition',
                description: 'There is no business without competition. Learn how to show it the right way.',
            },
            {
                url: '/',
                title: 'Traction',
                description: 'One thing that helps you to convince investors to love your startup is to show traction!',
            },
            {
                url: '/',
                title: 'Business Model',
                description: 'What\'s the business model that drives your startup? We show ways to show it the right way!',
            },
            {
                url: '/',
                title: 'Team',
                description: 'Investors invest in people. Impress them with your kick-ass team full of experience.',
            },
            {
                url: '/',
                title: 'Milestones',
                description: 'Learn how to display all information regarding your next steps and developments.',
            },
            {
                url: '/',
                title: 'Financials',
                description: 'Learn how to design a compelling Financials Slide that leaves no questions open.',
            },
            {
                url: '/',
                title: 'Ask',
                description: 'How much money do you need for the next growth step and what are you going to do with it?',
            },
            {
                url: '/',
                title: 'Contact',
                description: 'The contact slide is the last thing the investor will see. Don\'t forget the CTA!',
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
            image: accounts,
            title: 'Financial KPIs',
            description: 'AIV provides pre-built investor-ready financial KPIs templates to tell your growth story to investors.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Bookings',
                image: work,
            },
            {
                url: '/',
                title: 'Annual Recurring Revenue (ARR)',
                image: box,
            },
            {
                url: '/',
                title: 'Monthly Recurring Revenue (MRR)',
                image: box1,
            },
            {
                url: '/',
                title: 'Annual Revenue Per Account (ARPA)',
                image: user,
            },
            {
                url: '/',
                title: 'Gross Margins',
                image: gross,
            },
            {
                url: '/',
                title: 'Total and Annual Contract Value (TCV/ACV)',
                image: file,
            },
            {
                url: '/',
                title: 'Lifetime Value (LTV)',
                image: trending,
            },
            {
                url: '/',
                title: 'Customer Acquisition Cost (CAC)',
                image: cost,
            },
            {
                url: '/',
                title: 'Customer Concentration Risk (CCR)',
                image: risk,
            },
            {
                url: '/',
                title: 'Month-on-Month Growth (MoM)',
                image: growth,
            },
            {
                url: '/',
                title: 'Monthly Churn Rate (MCR)',
                image: rate,
            },
            {
                url: '/',
                title: 'Gross and Net Churn Rate',
                image: dollar,
            },
            {
                url: '/',
                title: 'Gross and Net Burn',
                image: burn,
            },
            {
                url: '/',
                title: 'Annual Run Rate',
                image: percent,
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Financials KPIs today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: forecast,
            title: 'Financial Forecast',
            description: 'AIV provides pre-built investor-ready financial forecast templates to explain how you will grow your business. '
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: '5 Year Financial Forecast',
                image: five
            },
            {
                url: '/',
                title: 'Customer Growth Assumption',
                image: user
            },
            {
                url: '/',
                title: 'Sales Growth Assumption',
                image: trending
            },
            {
                url: '/',
                title: 'Cost Per Customer Assumption',
                image: cost
            },
            {
                url: '/',
                title: 'Operating Expense Assumption',
                image: operating
            },
            {
                url: '/',
                title: 'Employees Growth Assumption',
                image: rate
            },
            {
                url: '/',
                title: 'Team Breakdown Analysis',
                image: users
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Financials Forecast today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: accountsGreen,
            title: 'Customer Accounts',
            description: 'AIV provides pre-built investor-ready customer accounts templates to explain your existing customer accounts and growth.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Financial Growth Analysis Summary',
                image: trending
            },
            {
                url: '/',
                title: 'Gross and Net Bookings Per Account',
                image: calendar
            },
            {
                url: '/',
                title: 'ARR Per Account',
                image: user
            },
            {
                url: '/',
                title: 'Recognized Revenues Per Account',
                image: cost
            },
            {
                url: '/',
                title: 'Contract Terms',
                image: fileFill
            },
            {
                url: '/',
                title: 'Contract Status',
                image: file
            },
            {
                url: '/',
                title: 'Account Segmented by Calendar Year',
                image: calendarFill
            },
            {
                url: '/',
                title: 'Account Segmented by Calendar YeaChurn Customers',
                image: dollar
            },
            {
                url: '/',
                title: 'Up-Sell and Cross-Sell Customers',
                image: rate
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Customer Accounts today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: scenarios,
            title: 'Cap Table Scenarios',
            description: 'AIV provides pre-built investor-ready cap table and scenarios built-in to forecast dilution for you and your shareholders.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Investment Terms and New Cash Allocation',
                image: investment
            },
            {
                url: '/',
                title: 'Model for Dilution Per Funding Series',
                image: box
            },
            {
                url: '/',
                title: 'Valuation Analysis Per Funding Series',
                image: checkSquare
            },
            {
                url: '/',
                title: 'Stock Options Segmented by Advisors and Employees',
                image: trending
            },
            {
                url: '/',
                title: 'Shares Purchased Segmented by Investor Series',
                image: rate
            },
            {
                url: '/',
                title: 'Pro-Forma Series Pricing Analysis',
                image: cost
            },
            {
                url: '/',
                title: 'Major Shareholder Voting Power Analysis',
                image: user
            },
            {
                url: '/',
                title: 'Accounting for Convertible Notes and SAFEs',
                image: operating
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Cap Table Scenarios today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: notes,
            title: 'Convertible Notes',
            description: 'AIV provides pre-built investor-ready convertible notes templates which you can customize and get a head start with your fundraising.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Valuation Cap',
                image: checkCircle
            },
            {
                url: '/',
                title: 'Discounts',
                image: percent
            },
            {
                url: '/',
                title: 'Interest',
                image: trending
            },
            {
                url: '/',
                title: 'Maturity Date',
                image: calendar
            },
            {
                url: '/',
                title: 'Conversion',
                image: minimize
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Convertible Notes today!',
            description: 'AIV provides pre-built investor-ready convertible notes templates which you can customize and get a head start with your fundraising.',
            link: '/'
        },
    },
    {
        header: {
            image: updates,
            title: 'Investor Updates',
            description: 'AIV provides pre-built investor-ready e-mail and report updates for you to keep your investors in the loop of your progress.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'CEO Updates',
                image: user
            },
            {
                url: '/',
                title: 'Financial Performance',
                image: investment
            },
            {
                url: '/',
                title: 'Sales Growth Assumption',
                image: trending
            },
            {
                url: '/',
                title: 'Top Active Deals',
                image: crosshair
            },
            {
                url: '/',
                title: 'Corporate Marketing',
                image: trending
            },
            {
                url: '/',
                title: 'Hiring',
                image: users
            },
            {
                url: '/',
                title: 'Business Development',
                image: development
            },
            {
                url: '/',
                title: 'Product',
                image: box
            },
            {
                url: '/',
                title: 'Key Issues and Ask',
                image: key
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Investor Updates today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: crm,
            title: 'Investor CRM',
            description: 'AIV provides pre-built investor-ready CRM for you to keep track of your fundraising progress.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Goals and Targets',
                image: crosshair
            },
            {
                url: '/',
                title: 'Timeline and Commitment Forecast',
                image: watch
            },
            {
                url: '/',
                title: 'Stage Tracker',
                image: trending
            },
            {
                url: '/',
                title: 'Stage Confidence Analysis',
                image: gross
            },
            {
                url: '/',
                title: 'Pipeline for Convertible Note Financing',
                image: minimize
            },
            {
                url: '/',
                title: 'Pipeline for Equity Financing',
                image: dollar
            },
            {
                url: '/',
                title: 'Pipeline Post Lead Investor',
                image: user
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Investor CRM today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: tech,
            title: 'Tech Due Diligence Q&A',
            description: 'AIV provides pre-built investor-ready tech due diligence Q&A for you to assess your technology stack and show investors how you compare to others.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Tech Stack Analysis',
                image: development
            },
            {
                url: '/',
                title: 'AI/ML Analysis',
                image: gross
            },
            {
                url: '/',
                title: 'Product Roadmap',
                image: box
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Tech Due Diligence Q&A today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: chart,
            title: 'Company Org Chart',
            description: 'AIV provides pre-built investor-ready tech due diligence Q&A for you to assess your technology stack and show investors how you compare to others.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Org Chart for Seed',
                image: pieChart
            },
            {
                url: '/',
                title: 'Org Chart for Series A',
                image: rate
            },
            {
                url: '/',
                title: 'Org Chart for Series B and Beyond',
                image: barChart
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Company Org Chart today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
    {
        header: {
            image: dataRoom,
            title: 'Data Room Checklist',
            description: 'AIV provides an extensive data room checklist on what you will need to fully complete your fundraising.'
        },
        itemType: 1,
        items: [
            {
                url: '/',
                title: 'Convertible Notes Financing',
                image: minimize
            },
            {
                url: '/',
                title: 'Equity Seed Financing',
                image: dollar
            },
            {
                url: '/',
                title: 'Equity Series A Financing',
                image: rate
            },
            {
                url: '/',
                title: 'Equity Series B and Beyond Financing',
                image: barChart
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Data Room Checklist today!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            link: '/'
        },
    },
];

const duration = 2;
export const Products = () => {
    const [toggleSelect, setToggleSelect] = useState(false);
    const [currentSelect, setCurrentSelect] = useState('Pitch Deck');
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


    const handleSelect = (title) => {
        setToggleSelect(!toggleSelect);
        setCurrentSelect(title);
        window.location = `${routes.products}#${title.toLowerCase().replace(/ /g, '_')}`
    };
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
                                    <li key={tabItem}
                                        className={window.location.hash.replace("#", "") === tabItem.toLowerCase().replace(/ /g, '_') ? styles.active : ''}>
                                        <a href={`#${tabItem.toLowerCase().replace(/ /g, '_')}`}>
                                            {tabItem}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.panelSelect}>
                            <div
                                className={!toggleSelect ? styles.panelSelectCurrent : `${styles.panelSelectCurrent} ${styles.active}`}
                                onClick={() => setToggleSelect(!toggleSelect)}>
                                <img src={deck} alt='' />
                                <h4>{currentSelect}</h4>
                            </div>
                            <div
                                className={!toggleSelect ? styles.panelSelectItems : `${styles.panelSelectItems} ${styles.active}`}>
                                {data.map((item, index) => (
                                    <div key={index}
                                         className={styles.panelSelectItem}
                                         onClick={() => handleSelect(item.header.title)}>
                                        <img src={item.header.image} alt='' />
                                        <h4 className={currentSelect === item.header.title ? 'greenTitle' : ''}>{item.header.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {data.map((item, index) => (
                            <Panel key={index} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

