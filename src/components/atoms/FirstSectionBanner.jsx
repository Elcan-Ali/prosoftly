import React from 'react'
import sectionBg from "../../../public/img/main-first-section.png"
import { useTranslation } from 'react-i18next'

function FirstSectionBanner() {
    const { t } = useTranslation()
    const handlePassage = () => {
        const element = document.querySelector("#section-support")
        element.scrollIntoView()
    }

    return (
        <div data-aos="fade-up" className='bg-[#000]  relative rounded-t-[40px] md:rounded-t-[70px] overflow-hidden'>
            <div className='img-box w-full h-[80vh] md:h-[100vh]'><img src={sectionBg} alt="section-bg" /></div>
            <div className='container'>
                <div className='text-[#fff] absolute top-[50%]  -translate-y-[50%] '>
                    <div data-aos="fade-right">
                        <h2 className='text-[28px] leading-[1.2] md:text-[40px] lg:text-[60px] mb-[34px]'>
                            {t("digital")}
                            <p className='text-green font-semibold'>{t("new-and-durable")}</p>
                            {t("it-solutions")}
                        </h2>
                        <p className='mb-[34px] w-full md:w-1/2 lg:w-2/5'>
                            {t("main-banner-text")}
                        </p>
                        <a onClick={handlePassage} className='bg-green text-[#000]  border border-transparent transition-all btn2 rounded-[20px]   py-[8px] px-[26px] font-semibold'>{t("why-do-they-choose-us")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSectionBanner