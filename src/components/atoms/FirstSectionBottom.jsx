import React from 'react'
import ServiceItem from './ServiceItem'
import { serviceItems } from '../../const/serviceItems'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
function FirstSectionBottom() {
    const { t } = useTranslation()
    return (
        <section id='section-support' className='py-[100px]  rounded-b-[40px] md:rounded-b-[70px]  bg-[#fff]'>
            <div className='container flex-wrap gap-[40px]  flex items-start'>
                <div data-aos="fade-right" className='xl:w-[calc((100%-40px)/6*2)] mb-[73px] '>
                    <h2 className='underline-border pb-[10px] inline-block mb-[30px] leading-[1.4] text-[28px] md:text-[36px] font-semibold'>{t("main-business-support1")} <br /> {t("main-business-support2")}</h2>
                    <ul  className='sevices-list flex gap-y-[12px]  gap-x-[30px] flex-wrap items-start mb-[40px]'>
                        <li className='w-full hover:translate-x-[15px] cursor-pointer transition-all md:w-[calc((100%-30px)/2)] xl:w-full text-[16px] md:text-[18px] pl-[10px]'> {t("main-business-support-item1")} </li>
                        <li className='w-full hover:translate-x-[15px] cursor-pointer transition-all md:w-[calc((100%-30px)/2)] xl:w-full text-[16px] md:text-[18px] pl-[10px]'> {t("main-business-support-item2")} </li>
                        <li className='w-full hover:translate-x-[15px] cursor-pointer transition-all md:w-[calc((100%-30px)/2)] xl:w-full text-[16px] md:text-[18px] pl-[10px]'> {t("main-business-support-item3")} </li>
                        <li className='w-full hover:translate-x-[15px] cursor-pointer transition-all md:w-[calc((100%-30px)/2)] xl:w-full text-[16px] md:text-[18px] pl-[10px]'> {t("main-business-support-item4")} </li>
                    </ul>
                    <Link to="/services" className=' rounded-[20px] btn1 px-[31px] py-[8px] '>{t("all-services")}</Link>
                </div>
                <div className='flex gap-[73px]  flex-wrap items-start w-full xl:w-[calc((100%-40px)/6*4)]'>
                    {serviceItems.map(item => <ServiceItem key={item.id} {...item} />)}
                </div>
            </div>
        </section>
    )
}

export default FirstSectionBottom