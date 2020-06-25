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
import gtm from "../../../assets/images/home/products/gtm.svg";
import financials from "../../../assets/images/home/products/financials.svg";
import sales from "../../../assets/images/home/products/sales.svg";
import usage from "../../../assets/images/home/products/usage.svg";

import work from "../../../assets/images/home/work.svg";
import box from "../../../assets/images/products/box-1.svg";
import box1 from "../../../assets/images/products/box.svg";
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
import law from '../../../assets/images/products/law.svg'
import cornerRightUp from '../../../assets/images/products/corner-right-up.svg'
import lock from '../../../assets/images/products/lock.svg'
import shoppingCart from '../../../assets/images/products/shopping-cart.svg'
import server from '../../../assets/images/products/server.svg'
import moreHorizontal from '../../../assets/images/products/more-horizontal.svg'


import powerPoint from "../../../assets/images/products/powerPoint.svg";
import exel from "../../../assets/images/products/exel.svg";
import word from "../../../assets/images/products/word.svg";

const tabs = [
    'Pitch Deck',
    'Data Room Checklist',
    'Convertible Notes',
    'Investor Updates',
    'Investor CRM',
    'Customer Accounts',
    'Market Size and GTM',
    'Cap Table Scenarios',
    'Tech Due Diligence Q&A',
    'Organizational Chart',
    'Historical Financials',
    'Financial KPIs',
    'Financial Forecast',
    'Sales Pipeline Forecast',
    'Fund Usage'
];

const data = [
    {
        header: {
            image: deck,
            title: 'Pitch Deck',
            description: 'QuickRaise provides a pre-built investor-ready pitch deck template for you to customize and start your fundraising journey.'
        },
        itemType: 0,
        items: [
            {
                title: 'Title',
                description: 'Use the title slide to gain investors attention and kick start your pitch!',
            },
            {
                title: 'Problem',
                description: 'What is the problem you are trying to solve, and is it really a problem worth solving?',
            },
            {
                title: 'Solution',
                description: 'Show off how you solve the big problem you just described with your business.',
            },
            {
                title: 'Product',
                description: 'You\'ve got something to show? The product slide is the right slide to do it!',
            },
            {
                title: 'Market',
                description: 'Is the market big enough for huge growth? An important question you should answer!',
            },
            {
                title: 'Competition',
                description: 'There is no business without competition. Learn how to show it the right way.',
            },
            {
                title: 'Traction',
                description: 'One thing that helps you to convince investors to love your startup is to show traction!',
            },
            {
                title: 'Business Model',
                description: 'What\'s the business model that drives your startup? We show you the right way to present it.',
            },
            {
                title: 'Team',
                description: 'Investors invest in people. Impress them with your kick-ass team\'s experience.',
            },
            {
                title: 'Milestones',
                description: 'Learn how to display information about your next steps and goals.',
            },
            {
                url: '/',
                title: 'Financials',
                description: 'Design a compelling Financials slide that leaves no questions open.',
            },
            {
                title: 'Ask',
                description: 'How much money do you need for the next growth step, and what are you going to do with it?',
            },
            {
                title: 'Contact',
                description: 'The contact slide is the last thing the investor will see. Don\'t forget the call to action!',
            }
        ],
        info: {
            url: '/',
            image: powerPoint,
            title: 'Start building your Pitch Deck today!',
            link: '/'
        },
    },
    {
        header: {
            image: accounts,
            title: 'Financial KPIs',
            description: 'QuickRaise provides pre-built investor-ready financial KPIs templates to tell your growth story to investors.'
        },
        itemType: 1,
        items: [
            {
                title: 'Bookings',
                image: work,
            },
            {
                title: 'Annual Recurring Revenue (ARR)',
                image: box,
            },
            {
                title: 'Monthly Recurring Revenue (MRR)',
                image: box1,
            },
            {
                title: 'Annual Revenue Per Account (ARPA)',
                image: user,
            },
            {
                title: 'Gross Margins',
                image: gross,
            },
            {
                title: 'Total and Annual Contract Value (TCV/ACV)',
                image: file,
            },
            {
                title: 'Lifetime Value (LTV)',
                image: trending,
            },
            {
                title: 'Customer Acquisition Cost (CAC)',
                image: cost,
            },
            {
                title: 'Customer Concentration Risk (CCR)',
                image: risk,
            },
            {
                title: 'Month-over-Month Growth (MoM)',
                image: growth,
            },
            {
                url: '/',
                title: 'Monthly Churn Rate (MCR)',
                image: rate,
            },
            {
                title: 'Gross and Net Churn Rates',
                image: dollar,
            },
            {
                title: 'Gross and Net Burn',
                image: burn,
            },
            {
                title: 'Annual Run Rate',
                image: percent,
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Financials KPIs today!',
            link: '/'
        },
    },
    {
        header: {
            image: forecast,
            title: 'Financial Forecast',
            description: 'QuickRaise provides pre-built investor-ready financial forecast templates to explain how you will grow your business. '
        },
        itemType: 1,
        items: [
            {
                title: '5-Year Financial Forecast',
                image: five
            },
            {
                title: 'Customer Growth Assumption',
                image: user
            },
            {
                title: 'Sales Growth Assumption',
                image: trending
            },
            {
                title: 'Cost Per Customer Assumption',
                image: cost
            },
            {
                title: 'Operating Expense Assumption',
                image: operating
            },
            {
                title: 'Employees Growth Assumption',
                image: rate
            },
            {
                title: 'Team Breakdown Analysis',
                image: users
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Financial Forecast today!',
            link: '/'
        },
    },
    {
        header: {
            image: sales,
            title: 'Sales Pipeline Forecast',
            description: 'QuickRaise provides pre-built investor-ready sales pipeline forecast for investors to understand how your revenues will grow in the coming months.'
        },
        itemType: 1,
        items: [
            {
                title: 'Sales Pipeline Summary',
                image: rate
            },
            {
                title: 'Revenue Type',
                image: dollar
            },
            {
                title: 'Stage',
                image: cornerRightUp
            },
            {
                title: 'Closing Confidence',
                image: lock
            },
            {
                title: 'Timeline',
                image: watch
            },
            {
                title: 'Forecasted Sales and Bookings',
                image: calendarFill
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Sales Pipeline Forecast today!',
            link: '/'
        },
    },
    {
        header: {
            image: accountsGreen,
            title: 'Customer Accounts',
            description: 'QuickRaise provides pre-built investor-ready templates to explain your existing customer accounts and growth.'
        },
        itemType: 1,
        items: [
            {
                title: 'Financial Growth Analysis Summary',
                image: trending
            },
            {
                title: 'Gross and Net Bookings Per Account',
                image: calendar
            },
            {
                title: 'ARR Per Account',
                image: user
            },
            {
                title: 'Recognized Revenues Per Account',
                image: cost
            },
            {
                title: 'Contract Terms',
                image: fileFill
            },
            {
                title: 'Contract Status',
                image: file
            },
            {
                title: 'Account Segmented by Calendar Year',
                image: calendarFill
            },
            {
                title: 'Account Segmented by Calendar Churn Customers',
                image: dollar
            },
            {
                title: 'Up-Sell and Cross-Sell Customers',
                image: rate
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Customer Accounts today!',
            link: '/'
        },
    },
    {
        header: {
            image: gtm,
            title: 'Market Size and GTM',
            description: 'QuickRaise provides pre-built investor-ready customer accounts templates to explain your existing customer accounts and growth.'
        },
        itemType: 1,
        items: [
            {
                title: 'Market Size by Industry',
                image: trending
            },
            {
                title: 'Market Need',
                image: box
            },
            {
                title: 'Market Segment',
                image: checkSquare
            },
            {
                title: 'User Personas',
                image: users
            },
            {
                title: 'End User Applications',
                image: user
            },
            {
                title: 'Competitors',
                image: investment
            },
            {
                title: 'Market Size',
                image: development
            },
            {
                title: 'Overall Size Analysis',
                image: trending
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Market Size and GTM today!',
            link: '/'
        },
    },
    {
        header: {
            image: scenarios,
            title: 'Cap Table Scenarios',
            description: 'QuickRaise provides pre-built investor-ready cap table and scenarios built in to forecast dilution for you and your shareholders.'
        },
        itemType: 1,
        items: [
            {
                title: 'Investment Terms and New Cash Allocation',
                image: investment
            },
            {
                title: 'Model for Dilution Per Funding Series',
                image: box
            },
            {
                title: 'Valuation Analysis Per Funding Series',
                image: checkSquare
            },
            {
                title: 'Stock Options Segmented by Advisors and Employees',
                image: trending
            },
            {
                title: 'Shares Purchased Segmented by Investor Series',
                image: rate
            },
            {
                title: 'Pro-Forma Series Pricing Analysis',
                image: cost
            },
            {
                title: 'Major Shareholder Voting Power Analysis',
                image: user
            },
            {
                title: 'Accounting for Convertible Notes and SAFEs',
                image: operating
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Cap Table Scenarios today!',
            link: '/'
        },
    },
    {
        header: {
            image: notes,
            title: 'Convertible Notes',
            description: 'QuickRaise provides pre-built investor-ready convertible notes templates that you can customize to get a head start with your fundraising.'
        },
        itemType: 1,
        items: [
            {
                title: 'Valuation Cap',
                image: checkCircle
            },
            {
                title: 'Discounts',
                image: percent
            },
            {
                title: 'Interest',
                image: trending
            },
            {
                title: 'Maturity Date',
                image: calendar
            },
            {
                title: 'Conversion',
                image: minimize
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Convertible Notes today!',
            link: '/'
        },
    },
    {
        header: {
            image: updates,
            title: 'Investor Updates',
            description: 'QuickRaise provides pre-built investor-ready reports and updates so you can keep your investors in the loop.'
        },
        itemType: 1,
        items: [
            {
                title: 'CEO Updates',
                image: user
            },
            {
                title: 'Financial Performance',
                image: investment
            },
            {
                title: 'Sales Growth Assumption',
                image: trending
            },
            {
                title: 'Top Active Deals',
                image: crosshair
            },
            {
                title: 'Corporate Marketing',
                image: trending
            },
            {
                title: 'Hiring',
                image: users
            },
            {
                title: 'Business Development',
                image: development
            },
            {
                title: 'Product',
                image: box
            },
            {
                title: 'Key Issues and Ask',
                image: key
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Investor Updates today!',
            link: '/'
        },
    },
    {
        header: {
            image: crm,
            title: 'Investor CRM',
            description: 'QuickRaise provides pre-built investor-ready Customer Management Software (CRM) for you to keep track of your fundraising progress.'
        },
        itemType: 1,
        items: [
            {
                title: 'Goals and Targets',
                image: crosshair
            },
            {
                title: 'Timeline and Commitment Forecast',
                image: watch
            },
            {
                title: 'Stage Tracker',
                image: trending
            },
            {
                title: 'Stage Confidence Analysis',
                image: gross
            },
            {
                title: 'Pipeline for Convertible Note Financing',
                image: minimize
            },
            {
                title: 'Pipeline for Equity Financing',
                image: dollar
            },
            {
                title: 'Pipeline Post Lead Investor',
                image: user
            },
        ],
        info: {
            image: exel,
            title: 'Start building your Investor CRM today!',
            link: '/'
        },
    },
    {
        header: {
            image: tech,
            title: 'Tech Due Diligence Q&A',
            description: 'QuickRaise provides pre-built investor-ready tech due diligence Q&A for you to assess your technology stack and show investors how you compare to others.'
        },
        itemType: 1,
        items: [
            {
                title: 'Product',
                image: box
            },
            {
                title: 'AI/ML Components',
                image: development
            },
            {
                title: 'Competitive Advantage',
                image: gross
            },
            {
                title: 'Infrastructure',
                image: server
            },
            {
                title: 'IT Security & Compliance',
                image: lock
            },
            {
                title: 'Team',
                image: users
            },
            {
                title: '12-Month Roadmap',
                image: calendar
            },
            {
                title: 'Testimonials',
                image: minimize
            },

        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Tech Due Diligence Q&A today!',
            link: '/'
        },
    },
    {
        header: {
            image: chart,
            title: 'Organizational Chart',
            description: 'QuickRaise provides pre-built investor-ready tech due diligence Q&A for you to assess your technology stack and show investors how you compare to others.'
        },
        itemType: 1,
        items: [
            {
                title: 'Org Chart for Seed',
                image: pieChart
            },
            {
                title: 'Org Chart for Series A',
                image: rate
            },
            {
                title: 'Org Chart for Series B and Beyond',
                image: barChart
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Organizational Chart today!',
            link: '/'
        },
    },
    {
        header: {
            image: financials,
            title: 'Historical Financials',
            description: 'QuickRaise provides pre-built investor-ready historical financial templates to tell your growth story to investors.'
        },
        itemType: 1,
        items: [
            {
                title: '5-Year Income Statement',
                image: trending
            },
            {
                title: '5-Year Balance Sheet',
                image: law
            },
            {
                title: '5-Year Cash Flow Statement',
                image: cost
            },
            {
                title: 'Monthly, Quarterly, and Annually',
                image: calendarFill
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Historical Financials today!',
            link: '/'
        },
    },
    {
        header: {
            image: dataRoom,
            title: 'Data Room Checklist',
            description: 'QuickRaise provides an extensive data room checklist on what you will need to fully complete your fundraising.'
        },
        itemType: 1,
        items: [
            {
                title: 'Convertible Notes Financing',
                image: minimize
            },
            {
                title: 'Equity Seed Financing',
                image: dollar
            },
            {
                title: 'Equity Series A Financing',
                image: rate
            },
            {
                title: 'Equity Series B and Beyond Financing',
                image: barChart
            },
        ],
        info: {
            url: '/',
            image: word,
            title: 'Start building your Data Room Checklist today!',
            link: '/'
        },
    },
    {
        header: {
            image: usage,
            title: 'Fund Usage',
            description: 'QuickRaise provides pre-built investor-ready fund usage templates to help investors understand how you will spend the capital.'
        },
        itemType: 1,
        items: [
            {
                title: 'Payroll',
                image: cost
            },
            {
                title: 'New Hires',
                image: users
            },
            {
                title: 'Vendors',
                image: shoppingCart
            },
            {
                title: 'Infrastructure',
                image: server
            },
            {
                title: 'Others',
                image: moreHorizontal
            },
            {
                title: 'Annual Budget',
                image: dollar
            },
        ],
        info: {
            url: '/',
            image: exel,
            title: 'Start building your Fund Usage today!',
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
                description='QuickRaise provides you with pre-built investor-ready templates that you can use to build out your  data room. No need to spend time creating materials from scratch.'
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

