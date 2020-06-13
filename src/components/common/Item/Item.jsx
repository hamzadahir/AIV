// core
import React from 'react';


// assets
import styles from "./Item.module.scss";

export const Item = ({type, url, title, image, description}) => {

    return (
        type === 0 ?
            <a href={url} className={styles.panelItem}>
                <div className={styles.panelItemImage} />
                <div>
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </a> : <a href={url} className={[styles.panelItem + ' ' + styles.panelItemMod]}>
                <div className={styles.panelItemImage}>
                    <img src={image} alt='' />
                </div>
                <div><h5>{title}</h5></div>
            </a>
    );
};

