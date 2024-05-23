import React from 'react';
import horecaLogo from './assets/webImages/horecah wt 1.png'
import Image from 'next/image';;
import styles from './index.module.css'
import { banglore, delhi, horeca, hydrabad, kolkata, mumbai } from '@public/assests';
import LanguageCard from '@components/language-card';
import { DesktopNavbar } from '@components/desktop-navbar';

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

type LanguageCardProps = {
    id: number,
    banner: string,
    title: string,
}

type Props = {
    languageData: LanguageCardProps[],
    hoverColor?: string,
    backgroundColor?: string
}

const LanguageSelection = ({ languageData, hoverColor, backgroundColor }: Props) => {


    return (
        <div className={styles['main-page']}>
            <div className='navbar'><DesktopNavbar /></div>
            <div className={styles['language-list']}>
                <div className={styles['list-image']}>
                    <Image src={horeca} alt='no image' width={200} height={100}/>
                </div>
                <h1 className={styles.heading}>Choose Language</h1>
                <div className={styles['languages-grid']}>
                    {
                        languageData && languageData?.map((language: any) => (
                            <LanguageCard banner={language.banner} title={language.title} backgroundColor={backgroundColor} hoverColor={hoverColor} />
                        ))
                    }
                </div>
                <div className={styles.cities}>
                    <p>Cities we are in</p>
                    <Image src={delhi} alt='no img'/>
                    <Image src={mumbai} alt='no img'/>
                    <Image src={banglore} alt='no img'/>
                    <Image src={kolkata} alt='no img'/>
                    <Image src={hydrabad} alt='no img'/>
                </div>
            </div>
        </div>
    );
}

export default LanguageSelection;