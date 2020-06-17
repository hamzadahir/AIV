// core
import React from 'react';

// assets
import styles from './Strip.module.scss';

export const Success = () => {

    return (
        <main>
            <section className={styles.choose}>
                <div className='container'>
                    <h1>
                        Thanks for the payment!
                    </h1>
                </div>
                <a href='/'>
                    <button type='button' className='btn-primary'>Back to home</button>
                </a>
            </section>
        </main>
    );
};
