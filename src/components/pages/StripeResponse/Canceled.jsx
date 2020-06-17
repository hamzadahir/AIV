// core
import React from 'react';

// assets
import styles from './Strip.module.scss';

export const Canceled = () => {
  return (
    <main>
      <section className={styles.choose}>
        <div className='container'>
          <h1>
            Nothing, maybe next time.
                </h1>
        </div>
        <div className={styles.buttonBackContainer}>
          <a href='/pricing'>
            <button type='button' className='btn-primary'>Try payment again</button>
          </a>
          <a href='/'>
            <button type='button' className='btn-primary'>Back to home</button>
          </a>
        </div>
      </section>
    </main>
  );
};

