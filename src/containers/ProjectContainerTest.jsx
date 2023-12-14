import React, { useEffect, useState } from 'react'
import ProjectItem from '../components/atoms/ProjectItem'
import ArrowDown from "../../public/img/arrow-down.svg"
import ProjectsCategoryBtns from '../components/atoms/ProjectsCategoryBtns'
import { getData } from '../service/getData'
import { nanoid } from '@reduxjs/toolkit'
import CatBtnsSkeleton from '../components/skeleton/CatBtnsSkeleton'
import ProjectItemSkeletonComponent from '../components/skeleton/ProjectItemSkeletonComponent'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectItems } from '../const/projectItems'
import ProjectItemTest from '../components/atoms/ProjectItemTest'
import ProjectsCategoryBtnsTest from '../components/atoms/ProjectsCategoryBtnsTest'



function ProjectContainerTest() {

    const { t } = useTranslation()
    const [loading, setLoading] = useState(true)
    const [activeCat, setActiveCat] = useState("All")

    const data = () => {
        return projectItems
            .filter(item => activeCat === "All" ? item : item.category === activeCat)
            .map(item => <ProjectItemTest key={nanoid()} {...item} />)
    }

    useEffect(() => {
        setTimeout(() => setLoading(false)
            , 1000)
    }, [])

    return (
        <>
            <div className='container pt-[40px] md:pt-[70px]'>
                <h4 data-aos="fade-right" className='flex gap-[10px] text-[#00000080]'><Link to="/" >{t("main-page")}</Link>  —  <p>{t("our-projects")}</p></h4>
                <div className='flex-between flex-wrap overflow-hidden'>
                    <h2 data-aos="fade-right" className='text-[28px] md:text-[38px] lg:text-[48px] font-bold'>{t("our-projects")}</h2>
                    {loading ?
                        <CatBtnsSkeleton page="projects" />
                        : <ProjectsCategoryBtnsTest activeCat={activeCat} setActiveCat={setActiveCat} />}
                </div>
            </div>
            <section id='projects'>
                <div className='container pb-[100px] pt-[10px]'>
                    {
                        loading ? Array.from({ length: 3 }).map(item => <ProjectItemSkeletonComponent />) :
                            data()
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectContainerTest