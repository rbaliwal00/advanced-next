import React from 'react';
import back from './assets/webImages/backIcons.png'
import { action } from '@storybook/addon-actions';
import Image from 'next/image';
import successLogo from './assets/webImages/kycSucess.png'
import { LogoutIcon, PrimaryLogo, kycSucess, rejectLogo } from '@public/assests';

import './index.module.css'
import Topbar from '@components/top-bar';
import styles from './index.module.css'
import { DesktopNavbar } from '@components/desktop-navbar';



const desktopNavbarProps = {
    logo: PrimaryLogo,
    primary: true,
    rightNavItems: [
      {
        id: 1,
        type: "link",
        title: "Hire",
        path: "/hire",
      },
      {
        id: 2,
        type: "link",
        title: "Become Supplier",
        path: "/supplier",
      },
      {
        id: 3,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
    ],
    leftNavItems: [
      {
        id: 1,
        type: "dropdown",
        title: "Jobs",
        path: "jobs",
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
          },
        ],
      },
      {
        id: 2,
        type: "link",
        title: "Learning",
        path: "/learning",
      },
    ],
  };
const topBar = {
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: LogoutIcon,
    logo: PrimaryLogo,
    progress: '30%',
}
const KYCSucess = () => {
    return (
        <div className={styles.kyc}>
            <div className={styles.desktopNav}>
                <DesktopNavbar {...desktopNavbarProps}/>
            </div>
            <div className={styles.topBar}>
                <Topbar {...topBar} />
            </div>
            <h1>Verification</h1>
            <div className={styles['kyc-info']}>
                <Image src={kycSucess} alt='no img' />
                <h3 className='py-7 text-3xl'>KYC has been accepted</h3>
                <h2>Welcome To <br />
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

export default KYCSucess;
