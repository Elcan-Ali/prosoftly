import React, { useEffect, useState } from 'react'
import ServiceCard from '../components/atoms/ServiceCard'
import { nanoid } from '@reduxjs/toolkit'
import TechnologyItem from '../components/atoms/TechnologyItem'
import ServicesTechSection from '../components/molecules/ServicesTechSection'
import { getData } from '../service/getData'
import { useTranslation } from 'react-i18next'
import ServicesCardSkeleton from '../components/skeleton/ServicesCardSkeleton'
import { Link } from 'react-router-dom'
function ServiceContainer() {

    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const { t, i18n } = useTranslation()

    useEffect(() => {
        (async () => {
            const data = await getData('services')
            setServices(data.data);
            setLoading(false);
            console.log(data.data);
        })()
    }, [])



    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 data-aos="fade-up" className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><Link to="/">{t("main-page")}</Link>  —  <p>{t("our-services")}</p></h4>
                <h2 data-aos="fade-up" data-aos-delay={20} className='text-center font-bold xl:text-[48px] lg:text-[38px]  text-[28px]'>
                    {t('our-services')}
                </h2>
                <h4 data-aos="fade-up" data-aos-delay={90} className='text-center text-[16px] lg:text-[20px] font-medium'>
                    {/* <p>Çox sayda inteqrasiya, rol və proses olan mürəkkəb layihələrdə ixtisaslaşmışıq.</p>
                    <p>Buna görə mikro xidmət həllərini, yüklənmiş sistemləri və omnichannel platformalarını</p>
                    <p>inkişaf etdirmək üçün seçilirik.</p> */}
                    {t("our-services-title-text").split("\n").map(item => <p key={nanoid()}>{item}</p>)}
                </h4>
                <div className='flex container pt-[60px] flex-wrap gap-[20px]'>



                    {
                        loading ?
                            Array.from({ length: 6 }).map(_ => <ServicesCardSkeleton key={nanoid()} />) :
                            (!loading && services.length === 0) ?
                                <div className='min-h-[50vh] flex-center w-full'>
                                    <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>{t("not-services")}</h1>
                                </div> : services.map(item => <ServiceCard {...item} key={nanoid()} />)
                    }

                </div>
                <ServicesTechSection />
            </div>
        </section>
    )
}

export default ServiceContainer