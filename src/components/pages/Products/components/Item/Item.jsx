// core
import React from 'react';


// assets
import styles from "./Item.module.scss";

export const Item = ({href, title, description}) => {


    return (
        <a href={href} className={styles.panelItem}>
            <div className={styles.panelItemImage} />
            <div>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </a>
    );
};

