// core
import React from 'react';

// components
import { Item } from "../../../../common";


// assets
import styles from "./Panel.module.scss";

export const Panel = ({data}) => {
    return (
        <div
            className={window.location.hash.replace("#", "") === data.header.title.toLowerCase().replace(/ /g, '_') ? [styles.panel] : `${styles.panel}  d-none`}>
            <h2 className={styles.panelTitle}>
                <img src={data.header.image} alt='' />
                {data.header.title}
            </h2>
            <p className={styles.panelDescription}>{data.header.description}</p>
            <div className={styles.panelInner}>
                {data.items.map((item, index) => (
                    <Item
                        key={index}
                        type={data.itemType}
                        title={item.title}
                        image={item.image}
                        description={item.description} />
                ))}
            </div>
            <div className={styles.fundraisingInfo}>
                <p>Available in:</p>
                <a href={data.info.url} className={styles.fundraisingAvailable}>
                    <img src={data.info.image} alt='' />
                </a>
                <div className={styles.fundraisingLink}>
                    <div>
                        <h4>{data.info.title}</h4>
                        <p>
                            Select a pricing pack to get started with, and we'll email you a downloadable link.
                        </p>
                    </div>
                    <a href={data.info.url} className={`${styles.link} darkButton`}>
                        <button type="button" className="btn-dark">Purchase Now</button>
                        <button className='btn-primary--nextDark' />
                    </a>
                </div>
            </div>
        </div>
    );
};

