import React from 'react';
import  styles from './index.module.css'
import LanguageCard from '@components/language-card';


type LanguageCardProps = {
    id: number,
    banner: string,
    title: string,
  }

type Props = {
    languageData : LanguageCardProps[],
    hoverColor?: string,
    backgroundColor?: string
}

const LanguageCardList = ({ languageData, hoverColor, backgroundColor }: Props) => {
   
    return (
        <div className={styles.list}>
            <div className={styles['language-grid']}>
                {
                    languageData && languageData?.map((language: any) => (
                            <LanguageCard  banner={language.banner} title={language.title} backgroundColor={backgroundColor} hoverColor={hoverColor}/>
                    ))
                }
            </div>
        </div>
    );
}

export default LanguageCardList;