// core
import React from 'react';

// assets
import styles from './Contact.module.scss';
import banner from '../../../assets/images/contacts/contact-banner.svg'
import map from '../../../assets/images/contacts/map.svg'
import america from '../../../assets/images/contacts/america.svg'
import mail from '../../../assets/images/contacts/mail.svg'
import phone from '../../../assets/images/contacts/phone.svg'

export const Contact = () => {
    return (
        <main className={styles.contact}>
            <section className={styles.help}>
                <div className='container'>
                    <div className={styles.helpInner}>
                        <div className={styles.formWrapper}>
                            <h2>Need help? <br />
                                Get in touch</h2>
                            <form>
                                <label>
                                    <input type='text' placeholder='Full Name' />
                                </label>
                                <label>
                                    <input type='text' placeholder='Company Name' />
                                </label>
                                <label>
                                    <input type='email' placeholder='Email address' />
                                </label>
                                <label>
                                    <input type='phone' placeholder='Phone Number' />
                                </label>
                                <textarea name='' id='' cols='30' rows='2' placeholder='Your message…' />
                                <button type="submit" className='accelerateButton'>
                                    <span className="btn-primary">Submit message</span>
                                    <span className='btn-primary--next' />
                                </button>
                            </form>
                        </div>
                        <div className={styles.image}>
                            <img src={banner} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.information}>
                <div className='container'>
                    <div className={styles.informationInner}>
                        <div className={styles.informationItemWrapper}>
                            <a href='/' className={styles.informationItem}>
                                <div className={styles.informationImage}>
                                    <img src={america} alt='' />
                                </div>
                                <div><h5>99 Wall Street, New York, NY 10005</h5></div>
                            </a>
                            <a href='mailto:Info@aiv.llc' className={styles.informationItem}>
                                <div className={styles.informationImage}>
                                    <img src={mail} alt='' />
                                </div>
                                <div><h5>Info@aiv.llc</h5></div>
                            </a>
                            <a href='tel:+1 (000) 000-0000' className={styles.informationItem}>
                                <div className={styles.informationImage}>
                                    <img src={phone} alt='' />
                                </div>
                                <div><h5>+1 (000) 000-0000</h5></div>
                            </a>
                        </div>
                        <div className={styles.map}>
                            <img src={map} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

