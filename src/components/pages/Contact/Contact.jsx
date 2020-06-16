// core
import React from 'react';

// components
import { Item } from "../../common";
import { SimpleMap } from "./components/SimpleMap/SimpleMap";

// assets
import styles from './Contact.module.scss';
import banner from '../../../assets/images/contacts/contact-banner.svg'
import america from '../../../assets/images/contacts/america.svg'
import mail from '../../../assets/images/contacts/mail.svg'

const data = [
    {
        itemType: 1,
        items: [
            {
                url: '/',
                title: '99 Wall Street, New York, NY 10005',
                image: america
            },
            {
                url: 'mailto:info@quickraise.com',
                title: 'Info@quickraise.com',
                image: mail
            },
        ],
    }
];
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
                                    <input type='text' />
                                    <span>Full Name</span>
                                </label>
                                <label>
                                    <input type='text' />
                                    <span>Company Name</span>
                                </label>
                                <label>
                                    <input type='email' />
                                    <span>Email address</span>
                                </label>
                                <label>
                                    <input type='phone' />
                                    <span>Phone Number</span>
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
                            {data[0].items.map((item, index) =>
                                <Item
                                    key={index}
                                    type={data.itemType}
                                    url={item.url}
                                    title={item.title}
                                    image={item.image} />
                            )}

                        </div>
                        <div className={styles.map}>
                            <SimpleMap />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};