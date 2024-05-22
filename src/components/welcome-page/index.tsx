import React from 'react';
import Image from 'next/image';
// import h_animation from '@public/assests/'
import horecLogo from './assets/webImages/horecah wt 1.png'
import styles from './index.module.css'
import { horeca } from '@public/assests';

// const desktopNavbarProps = {
//     logo: horecahWT,
//     rightNavItems: [
//         {
//             id: 1,
//             type: "link",
//             title: "Hire",
//             path: '/hire'
//         },
//         {
//             id: 2,
//             type: "link",
//             title: "Become Supplier",
//             path: '/supplier'
//         },
//         {
//             id: 3,
//             type: "link",
//             title: "Job / Internship",
//             path: '/job'
//         }
//     ],
//     leftNavItems: [
//         {
//             id: 1,
//             type: "dropdown",
//             title: "Jobs",
//             path: 'jobs',
//             links: [
//                 {
//                     id: 1,
//                     type: "link",
//                     title: "Search Jobs",
//                     path: "/search-jobs",
//                 },
//                 {
//                     id: 2,
//                     type: "link",
//                     title: "Manage Jobs",
//                     path: "/manage-jobs",
//                 }
//             ]
//         },
//         {
//             id: 2,
//             type: "link",
//             title: "Learning",
//             path: '/learning'
//         }
//     ],
// }

const WelcomePage = () => {
  return (
    <div className={styles.kyc}>
            <div className={styles.desktopNav}>
                {/* <DesktopNavbar {...desktopNavbarProps} /> */}
            </div>
            <div className={styles['logo-wel']}>
               <Image src={horeca} alt='no img' />
            </div>
            <div className={styles['kyc-info-wel']}>
                <Image src={''} alt='no img' />
                <h2>Welcome To&nbsp;
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