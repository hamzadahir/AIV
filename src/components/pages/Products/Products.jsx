// core
import React, { useRef, useEffect } from 'react';


// library
import { gsap, TimelineLite, Power3 } from 'gsap'

// components
import { useScrollPosition, useWindowSize } from "../../../hooks";
import { Pricing } from "../../common";

// assets
import styles from './Products.module.scss';

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
            <Pricing
                banner={false}
                title={['Fundraising', 'Products']}
                subTitle={false}
                description='AIV provides you with pre-built investor-ready templates which you can utilize to build out your  data room. No need to spend time creating materials from scratch.'
                link={{url: '/', label: 'Purchase Now'}} />
        </main>
    );
};

