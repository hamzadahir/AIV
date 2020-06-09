// core
import React, { useRef, useEffect } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";

// assets
import styles from './Products.module.scss';
import banner from '../../../assets/images/home/banner.svg'
import cloud1 from '../../../assets/images/home/cloud1.svg'
import cloud2 from '../../../assets/images/home/cloud2.svg'

const duration = 2;
export const Products = () => {
    const [width] = useWindowSize();
    const [scroll] = useScrollPosition();

    // animations
    gsap.registerPlugin();
    const t1 = new TimelineLite();
    let sectionOne = useRef(null);
    let bannerImage = useRef(null);
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
        <main className={styles.products}>
            <section className={styles.accelerate} ref={el => sectionOne = el}>
                <div className='container'>
                    <div className={styles.accelerateInner}>
                        <div className={styles.accelerateDescription} ref={el => bannerDescription = el}>
                            <h1>Accelerate
                                <span className='green'>Fundraising</span>
                            </h1>
                            <button type="button" className="btn-primary">Explore
                                Products
                            </button>
                        </div>
                        <div className={styles.image} ref={el => bannerImage = el}>
                            <img className={styles.cloud1} src={cloud1} alt='' />
                            <img className={styles.cloud2} src={cloud2} alt='' />
                            <img src={banner} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

