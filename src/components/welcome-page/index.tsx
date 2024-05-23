import React from 'react';
import Image from 'next/image';
import ani_img from '@public/assests/h_animation.gif'
import styles from './index.module.css'
import { PrimaryLogo } from '@public/assests';
import { DesktopNavbar } from '@components/desktop-navbar';

const desktopNavbarProps = {
    logo: PrimaryLogo,
    rightNavItems: [
        {
            id: 1,
            type: "link",
            title: "Hire",
            path: '/hire'
        },
        {
            id: 2,
            type: "link",
            title: "Become Supplier",
            path: '/supplier'
        },
        {
            id: 3,
            type: "link",
            title: "Job / Internship",
            path: '/job'
        }
    ],
    leftNavItems: [
        {
            id: 1,
            type: "dropdown",
            title: "Jobs",
            path: 'jobs',
            links: [
                {
                    id: 1,
                    type: "link",
                    title: "Search Jobs",
                    path: "/search-jobs",
                },
                {
                    id: 2,
                    type: "link",
                    title: "Manage Jobs",
                    path: "/manage-jobs",
                }
            ]
        },
        {
            id: 2,
            type: "link",
            title: "Learning",
            path: '/learning'
        }
    ],
}

const WelcomePage = () => {
  return (
    <div className={styles.kyc}>
            <div className={styles.desktopNav}>
                <DesktopNavbar {...desktopNavbarProps}/>
            </div>
            <div className={styles['logo-wel']}>
               <Image src={PrimaryLogo} alt='no img' width={200} height={100}/>
            </div>
            <div className={styles['kyc-info-wel']}>
                <Image src={ani_img} alt='no img' width={500} height={450}/>
                <h2 className='py-14'>Welcome to&nbsp;
                    <span className={styles.h}>H</span>
                    <span className={styles.o}>o</span>
                    <span className={styles.o}>r</span>
                    <span className={styles.e}>e</span>
                    <span className={styles.c}>c</span>
                    <span className={styles.o}>a</span>
                    <span className={styles.h}>h</span>
                    &nbsp;Family</h2>
            </div>
        </div>
  );
}

export default WelcomePage;