import React, { useEffect, useState } from 'react'
import TechnologyItem from '../atoms/TechnologyItem'
import { nanoid } from '@reduxjs/toolkit'
import { getData } from '../../service/getData'
import TehcİtemSkeleton from '../skeleton/TehcItemSkeleton'
import { useTranslation } from 'react-i18next'

function ServicesTechSection() {
    const [loading, setLoading] = useState(true)
    const [tech, setTech] = useState([])
    const { t } = useTranslation()
    useEffect(() => {
        (async () => {
            const data = await getData("servicesTag")
            setTech(data.data);
            setLoading(false)
            console.log(data.data);
        })()

    }, [])



    return (
        <div className='container pt-[70px] font-semibold md:pt-[100px] text-center'>
            <h3 data-aos="fade-up" className='text-[28px] md:text-[36px]'>
                {t("techs")}
            </h3>
            <hr data-aos="fade-up" className='border-0 mb-[40px] mt-[10px] h-[11px] mx-auto bg-green w-[70%] md:w-[20%]' />
            <div className='text-left gap-[26px] flex flex-col items-center'>
                {
                    loading ?
                        Array.from({ length: 3 }).map(_ => <TehcİtemSkeleton />) :
                        (!loading && tech.length === 0) ?
                            <div className='min-h-[50vh] w-full flex-center'>
                                <h1 className='text-center py-[100px]  text-[20px] font-semibold'>Texnologiyalar hal hazırda əlavə olunmayıb ...</h1>
                            </div> :
                            tech.map(item => <TechnologyItem key={nanoid()} {...item} />)
                }
            </div>
        </div>

    )
}

export default ServicesTechSection