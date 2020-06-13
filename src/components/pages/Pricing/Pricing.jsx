// core
import React from 'react';

// components
import { Plan } from "../../common";

// assets
// import styles from './Pricing.module.scss';

export const Pricing = () => {
    return (
        <main>
            <section>
                <h1>
                    Choose a plan
                    that’s right for you.
                </h1>
                <p>
                    Choose from our flexible product pricing plans and services
                    to get started with your fundraising journey
                </p>
            </section>
            <section>
                <div className='container'>
                    <Plan />
                </div>
            </section>
        </main>
    );
};

