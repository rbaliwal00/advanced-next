import React from 'react';
import Image from 'next/image';
import Topbar from '@components/top-bar';
import { LogoutIcon, horecaHLogo, rejectLogo } from '@public/assests';
import styles from './index.module.css'
import { DesktopNavbar } from '@components/desktop-navbar';

type Props = {
    contact: () => void
}

const desktopNavbarProps = {
    logo: horecaHLogo,
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
const topBar = {
    label: "Label",
    backgroundColor: "#113B73",
    color: "white",
    button: LogoutIcon,
    logo: horecaHLogo,
    progress: '30%',
    // onBack: alert('Back button clicked')
}

const KYCReject = ({ contact }: Props) => {
    return (
        <div className={styles.kyc}>
            <div className={styles.desktopNav}>
            {/* <DesktopNavbar {...desktopNavbarProps} /> */}
            </div>
            <div className={styles.topBar}>
                <Topbar {...topBar} />
            </div>
                <h1>Verification</h1>
            <div className={styles['kyc-info']}>
                <Image src={rejectLogo} alt='no img'/>
                <h3>Your KYC has been <br/> rejected</h3>
                <button type='button' onClick={contact}>Contact Us</button>
            </div>
        </div>
    );
}

export default KYCReject;