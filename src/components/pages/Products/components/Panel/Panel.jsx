// core
import React from 'react';

// components
import { Item } from "..";


// assets
import styles from "./Panel.module.scss";

export const Panel = ({data, tab}) => {
    return (
        <div className={tab === data.header.title ? [styles.panel] : `${styles.panel}  d-none`}>
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
                        url={item.url}
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
                        <p>{data.info.description}</p>
                    </div>
                    <a href={data.info.url} className={styles.link}>
                        <button type="button" className="btn-primary">Download Now</button>
                        <button className='btn-primary--next' />
                    </a>
                </div>
            </div>
        </div>
    );
};

