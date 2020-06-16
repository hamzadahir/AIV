// core
import React from 'react';

// components
import { Item } from "../../common";

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
export const Contact = ({closePopup, isSending, isError, responseMessage, sendMessage}) => {
    const [fullName, setFullName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [send, setSend] = React.useState(false);
    const [validation, setValidation] = React.useState(true);

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
        setSend(fullName && companyName && email && phone && validation)
    }, [fullName, companyName, email, phone, validation]);

    React.useEffect(() => {
        let num = phone;
        num = Number(num);
        isNaN(num) ? setValidation(false) : setValidation(true);
    }, [phone]);

    return (
        <main className={styles.contact}>
            <section className={styles.help}>
                {(isSending || isError) &&
                    <div className='popupContainer'>
                        <div className={isSending ? 'successPopup' : 'errorPopup'}>
                            {isSending ? 'Message sent!' : 'Sorry, we were unable to send the message, please try again later.'}
                            <button onClick={() => closePopup()} className='closePopupButton'>
                                    <span>✘</span>
                            </button>
                        </div>
                    </div>
                }
                <div className='container'>
                    <div className={styles.helpInner}>
                        <div className={styles.formWrapper}>
                            <h2>Need help? <br />
                                Get in touch</h2>
                            <form>
                                <label>
                                    <input placeholder="Full Name" required type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </label>
                                <label>
                                    <input placeholder="Company Name" required type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                </label>
                                <label>
                                    <input placeholder="Email address" required type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                                <label>
                                    {!validation && <label className="errorLabel">Incorrect Input, please use numbers</label>}
                                    <input className={!validation ? 'incorrectInput' : ''} placeholder="Phone Number" maxLength='18' required type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.600008555743!2d-74.00946988395926!3d40.70480617933278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a161aaa68c5%3A0x7326c6b80e0fc527!2s99%20Wall%20St%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2sua!4v1592271638221!5m2!1sen!2sua"
                                width="600" height="280" style={{border: 0}} allowFullScreen=""
                                aria-hidden="false" tabIndex="0"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

