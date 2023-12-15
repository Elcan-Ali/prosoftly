import React, { useLayoutEffect, useState } from 'react'
import TeamMateCard from '../atoms/TeamMateCard'
import { getData } from '../../service/getData'
import { useTranslation } from 'react-i18next'
import OurTeamSkeleton from '../skeleton/OurTeamSkeleton'
import { nanoid } from '@reduxjs/toolkit'

function AboutOurTeams() {
    const [ourTeams, setOurTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()

    useLayoutEffect(() => {
        (async () => {
            const data = await getData("ourteam")
            setOurTeams(data.data)
            setLoading(false)
            console.log(data);
        })()
    }, [])

    return (
        <section data-aos="fade-right" className='pt-[60px] md:pt-[100px]'>
            <h4 className='text-[24px] text-center mb-[40px] md:mb-[50px] md:text-[35px] font-semibold'>{t("our-professional-team")}</h4>
            <div className='flex gap-x-[20px] gap-y-[30px] flex-wrap'>
                {
                    loading ? Array.from({ length: 4 }).map(_ => <OurTeamSkeleton key={nanoid()} />)
                        : (!loading && ourTeams.length === 0) ?
                            <div className='min-h-[45vh] pb-[5vh] w-full flex-center'>
                                <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>{t("not-teammate")}</h1>
                            </div>
                            : ourTeams?.map(item => <TeamMateCard {...item} />)
                }
            </div>
        </section>
    )
}

export default AboutOurTeams