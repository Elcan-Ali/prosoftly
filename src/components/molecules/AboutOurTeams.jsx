import React, { useLayoutEffect, useState } from 'react'
import TeamMateCard from '../atoms/TeamMateCard'
import { getData } from '../../service/getData'
import { useTranslation } from 'react-i18next'

function AboutOurTeams() {
    const [ourTeams, setOurTeams] = useState([])
    const { t } = useTranslation()

    useLayoutEffect(() => {
        (async () => {
            const data = await getData("ourteam")
            setOurTeams(data.data)
            console.log(data);
        })()
    }, [])

    return (
        <section data-aos="fade-right" className='pt-[60px] md:pt-[100px]'>
            <h4 className='text-[24px] text-center mb-[40px] md:mb-[50px] md:text-[35px] font-semibold'>{t("our-professional-team")}</h4>
            <div className='flex gap-x-[20px] gap-y-[30px] flex-wrap'>
                {ourTeams.map(item => <TeamMateCard {...item} />)}
            </div>
        </section>
    )
}

export default AboutOurTeams