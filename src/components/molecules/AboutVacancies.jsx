import React, { useEffect, useState } from 'react'
import VacancyCard from '../atoms/VacancyCard'
import { nanoid } from '@reduxjs/toolkit'
import { getData } from '../../service/getData'
import { Skeleton } from '@mui/material'
import { useTranslation } from 'react-i18next'

function AboutVacancies() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {t} = useTranslation()

    useEffect(() => {
        (async () => {
            const data = await getData('vacancies')
            setData(data.data);
            setLoading(false);
            console.log(data.data);
        })()
    }, [])

    return (
        <section id='vacancies-section' className=' bg-[#fff] py-[80px]'>
            <div className='flex container lg:px-[90px] flex-wrap gap-[30px]'>
                {loading ?
                    Array.from({ length: 4 }).map(_ => <div key={nanoid()} className=' w-full lg:w-[calc((100%-30px)/2)]'>
                        <Skeleton variant='rounded' width={"100%"} height={"160px"} />
                    </div>) :
                    (data.length == 0 && !loading) ?
                        <div className='min-h-[50vh] w-full flex-center'>
                            <h1 className='text-center  py-[100px] w-full text-[20px] font-semibold'>{t("not-vacancy")}</h1>
                        </div> :
                        data.map(item => <VacancyCard key={nanoid()} {...item} />)
                }
            </div>
        </section>
    )
}
export default AboutVacancies