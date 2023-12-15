import React from 'react'
import Check from "../../../public/img/about-check-icon.svg"
import { useTranslation } from 'react-i18next'

function AboutInfo() {
    const { t } = useTranslation()
        

    return (
        <div className='flex flex-wrap items-start gap-[50px] w-full 2xl:w-[calc((100%-100px)/2-100px)]'>
            <div data-aos="fade-right" className='w-full md:w-[calc((100%-50px)/2)]'>
                <div className='flex items-center gap-[10px] pb-[16px]'>
                    <img src={Check} className='w-[30px] h-[30px]' alt="check" />
                    <h4 className='text-[18px]'>{t("technical-support")}</h4>
                </div>
                <p className=''>{t("technical-support-text")}</p>
            </div>
            <div data-aos="fade-right" className='w-full md:w-[calc((100%-50px)/2)]'>
                <div className='flex items-center gap-[10px] pb-[16px]'>
                    <img src={Check} className='w-[30px] h-[30px]' alt="check" />
                    <h4 className='text-[18px]'>{t("reliable-work")}</h4>
                </div>
                <p className=''>{t("reliable-work-text")}</p>
            </div>
        </div>
    )
}

export default AboutInfo