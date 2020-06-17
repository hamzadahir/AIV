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
export const Contact = ({ closePopup, isSending, isError, responseMessage, sendMessage }) => {
    const { useState } = React;
    const initialState = {
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: '',
        send: false,
        validation: true,
    };

    const [
        {
            fullName,
            email,
            phone,
            message,
            companyName,
            send,
            validation
        },
        setState
    ] = useState(initialState);

    const handleSendMessage = () => {
        sendMessage({
            name: fullName,
            company: companyName,
            email: email,
            phone: phone,
            message: message
        });
        clearState();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const clearState = () => {
        setState({ ...initialState });
    };

    React.useEffect(() => {
        setState(prevState => (
            { ...prevState, send: fullName && companyName && email && phone && validation }
        ))
    }, [fullName, companyName, email, phone, validation]);

    React.useEffect(() => {
        let num = phone;
        num = Number(num);

        isNaN(num) ?
            setState(prevState => ({ ...prevState, validation: false })) :
            setState(prevState => ({ ...prevState, validation: true }));
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
                                    <input name='fullName' placeholder="Full Name" required type='text' value={fullName} onChange={handleChange} />
                                </label>
                                <label>
                                    <input name='companyName' placeholder="Company Name" required type='text' value={companyName} onChange={handleChange} />
                                </label>
                                <label>
                                    <input name='email' placeholder="Email address" required type='email' value={email} onChange={handleChange} />
                                </label>
                                <label>
                                    {!validation && <label className="errorLabel">Incorrect Input, please use numbers</label>}
                                    <input name='phone' className={!validation ? 'incorrectInput' : ''}
                                        placeholder="Phone Number" maxLength='18' required type='tel' value={phone} onChange={handleChange}
                                    />
                                </label>
                                <textarea name='message' id='' cols='30' rows='2' placeholder='Your message…' value={message} onChange={handleChange} />
                            </form>
                            <button disabled={!send} onClick={handleSendMessage} className='accelerateButton'>
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
                                width="600" height="280" style={{ border: 0 }} allowFullScreen=""
                                aria-hidden="false" tabIndex="0" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

