// core
import React, { useEffect, useRef } from 'react';

// library
import { TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";

// assets
import styles from './Banner.module.scss';
import { BannerImage } from "../../pages/Products/components";

const duration = 2;
export const Banner = ({image, title, subTitle, link, description}) => {
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    const t1 = new TimelineLite();
    let bannerImage = useRef(null);
    let sectionOne = useRef(null);
    let bannerDescription = useRef(null);


    useEffect(() => {
        if (width > 767) {
            if (scroll > (sectionOne.offsetTop - 300)) {
                t1.to(bannerImage, {opacity: 1, x: 0, ease: Power3.easeOut, duration: duration})
                    .to(bannerDescription, {
                        opacity: 1,
                        y: 0,
                        ease: Power3.easeOut,
                        duration: duration
                    }, `-=${duration}`);
            }
        }
    }, [width, scroll, t1]);

    return (
        <section className={styles.accelerate} ref={el => sectionOne = el}>
            <div className='container'>
                <div className={styles.accelerateInner}>
                    <div className={styles.accelerateDescription} ref={el => bannerDescription = el}>
                        <h1>{title[0]}
                            <div className={subTitle ? 'greenTitle' : 'normalTitle'}>{title[1]}</div>
                        </h1>
                        {description && <p>{description}</p>}
                        <a href={link.url} className='accelerateButton'>
                            <span className="btn-primary">{link.label}</span>
                            <span className='btn-primary--next' />
                        </a>
                    </div>
                    <div className={styles.image} ref={el => bannerImage = el}>
                        {Array.isArray(image) ?
                            <>
                                <img className={styles.cloud1} src={image[1]} alt='' />
                                <img className={styles.cloud2} src={image[2]} alt='' />
                                <img src={image[0]} alt='' />
                            </> : <BannerImage />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

