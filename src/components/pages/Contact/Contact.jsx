// core
import React from 'react';

// components
import { Item } from "../../common";

// assets
import styles from './Contact.module.scss';
import banner from '../../../assets/images/contacts/contact-banner.svg'
import america from '../../../assets/images/contacts/america.svg'
import mail from '../../../assets/images/contacts/mail.svg'
import phone from '../../../assets/images/contacts/phone.svg'

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
                url: '/',
                title: 'Info@aiv.llc',
                image: mail
            },
            {
                url: '/',
                title: '+1 (000) 000-0000',
                image: phone
            },
        ],
    }
];
export const Contact = ({sendMessage}) => {
    const [fullName, setFullName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [send, setSend] = React.useState(false);
    const handleSendMessage = () => {
        sendMessage({
            name: fullName,
            company: companyName,
            email: email,
            phone: phone,
            message: message
        });
    }

    React.useEffect(() => {
        setSend(fullName && companyName && email && phone)
    }, [fullName, companyName, email, phone]);

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
                                    <input required type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    <span>Full Name</span>
                                </label>
                                <label>
                                    <input required type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                    <span>Company Name</span>
                                </label>
                                <label>
                                    <input required type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <span>Email address</span>
                                </label>
                                <label>
                                    <input required type='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <span>Phone Number</span>
                                </label>
                                <textarea name='' id='' cols='30' rows='2' placeholder='Your message…' value={message} onChange={(e) => setMessage(e.target.value)} />
                            </form>
                            <button disabled={!send} onClick={() => handleSendMessage()} className='accelerateButton'>
                                    <span className="btn-primary">Submit message</span>
                                    <span className='btn-primary--next' />
                            </button>
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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5998238741063!2d-74.00946988416092!3d40.704810245991446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a161aaa68c5%3A0x7326c6b80e0fc527!2zOTkgV2FsbCBTdCwgTmV3IFlvcmssIE5ZIDEwMDA1LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1592077344457!5m2!1sru!2sua"
                                width="600" height="280" style={{border: 0}} allowFullScreen=""
                                aria-hidden="false" tabIndex="0" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

