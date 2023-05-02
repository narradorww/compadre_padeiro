import React from 'react'
import { useTranslation } from 'react-i18next';


const Welcome = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <div>{t('welcome.title')}</div>
            <div>{t('welcome.copy1')}</div>
        
        </div>
    )
    }