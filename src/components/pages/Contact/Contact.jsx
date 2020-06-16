// core
import React, { useEffect, useRef } from 'react';

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
    };

    React.useEffect(() => {
        setSend(fullName && companyName && email && phone && validation)
    }, [fullName, companyName, email, phone, validation]);

    React.useEffect(() => {
        let num = phone;
        num = Number(num);
        isNaN(num) ? setValidation(false) : setValidation(true);
    }, [phone]);


    const form = useRef(null);
    const fixedPlaceholder = (input, index) => {
        const childrenElements = form.current.children;
        if (input === '') {
            childrenElements[index].children[1].style.top = '';
        } else {
            childrenElements[index].children[1].style.top = '0';
        }
    };

    useEffect(() => {
        fixedPlaceholder(fullName, 0);
        fixedPlaceholder(companyName, 1);
        fixedPlaceholder(email, 2);
        fixedPlaceholder(phone, 3);
    }, [fullName, companyName, email, phone]);

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
                            <form ref={form}>
                                <label>
                                    <input required type='text' value={fullName}
                                           onChange={(e) => setFullName(e.target.value)} />
                                    <span>Full Name</span>
                                </label>
                                <label>
                                    <input required type='text' value={companyName}
                                           onChange={(e) => setCompanyName(e.target.value)} />
                                    <span>Company Name</span>
                                </label>
                                <label>
                                    <input required type='email' value={email}
                                           onChange={(e) => setEmail(e.target.value)} />
                                    <span>Email address</span>
                                </label>
                                <label>
                                    <input className={!validation ? 'incorrectInput' : ''} maxLength='18' required
                                           type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <span>Phone Number</span>
                                    {!validation &&
                                    <label className="errorLabel">Incorrect Input, please use numbers</label>}
                                </label>
                                <textarea name='' id='' cols='30' rows='2' placeholder='Your message…' value={message}
                                          onChange={(e) => setMessage(e.target.value)} />
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
                            <SimpleMap />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};