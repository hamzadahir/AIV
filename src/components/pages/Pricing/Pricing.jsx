// core
import React from 'react';

// components
import { Plan } from "../../common";

// assets
import styles from './Pricing.module.scss';

export const Pricing = () => {
    return (
        <main>
            <section className={styles.choose}>
                <div className='container'>
                    <h1>
                        Choose a <span className='normalTitle'>plan</span> <br />
                        that’s right for <span className='greenTitle'>you.</span>
                    </h1>
                    <p>
                        Choose from our flexible product pricing plans and services
                        to get started with your fundraising journey
                    </p>
                </div>
            </section>
            <section className={styles.pricing}>
                <div className='container'>
                    <Plan />
                </div>
            </section>
        </main>
    );
};

