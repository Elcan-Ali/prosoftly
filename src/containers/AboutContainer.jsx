import React from 'react'

import AboutBanner from '../components/atoms/AboutBanner'
import AboutInfo from '../components/atoms/AbouInfo'
import AboutOurTeams from '../components/molecules/AboutOurTeams'
import AboutVacancies from '../components/molecules/AboutVacancies'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



function AboutContainer() {

    const { t } = useTranslation()
    const showVacancies = () => {
        const element = document.querySelector("#vacancies-section")
        element.scrollIntoView()
    }

    return (
        <div className='mt-[40px] md:mt-[70px]'>
            <div className='bg-[#fff] rounded-t-[40px] md:rounded-t-[70px]'>
                <AboutBanner />
                <div className='pt-[70px] sm:pt-[150px] lg:pt-[90px] xl:pt-[100px] pb-[80px]  container'>
                    <AboutInfo />
                    <AboutOurTeams />
                </div>
            </div>
            <div className='about-banner  '>
                <div className='container overflow-hidden flex justify-between md:items-center  flex-col items-start  md:flex-row  py-[100px]'>
                    <h3 data-aos="fade-right" className='text-[28px] mb-[30px] md:text-[35px] lg:text-[45px] text-[#fff] leading-[1.3] font-semibold'>
                        {t("about-banner2-text-part1")} <br />
                        {t("about-banner2-text-part2")}
                    </h3>
                    <button onClick={showVacancies} data-aos="fade-left" className='rounded-[25px] btn2 px-[35px] py-[16px] inline-flex items-center font-medium'>{t("open-see-position")}</button>
                </div>
            </div>
            <AboutVacancies />
        </div>
    )
}

export default AboutContainer