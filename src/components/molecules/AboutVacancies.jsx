import React, { useEffect, useState } from 'react'
import VacancyCard from '../atoms/VacancyCard'
import { nanoid } from '@reduxjs/toolkit'
import { getData } from '../../service/getData'
import { Skeleton } from '@mui/material'

function AboutVacancies() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data = await getData('vacancies')
            setData(data.data);
            setLoading(false);
            console.log(data.data);
        })()
    }, [])

    return (
        <section className='bg-[#fff] py-[80px]'>
            <div className='flex container lg:px-[90px] flex-wrap gap-[30px]'>
                {!loading ? data.map(item => <VacancyCard key={nanoid()} {...item} />)
                    : Array.from({ length: 4 }).map(_ => <div key={nanoid()} className=' w-full lg:w-[calc((100%-30px)/2)]'>
                        <Skeleton variant='rounded' width={"100%"} height={"160px"} />
                    </div>)

                }
            </div>
        </section>
    )
}
export default AboutVacancies