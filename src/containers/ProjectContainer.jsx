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



function ProjectContainer() {
    
    const { t } = useTranslation()
    const [projectsCategories, setProjectsCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCat, setActiveCat] = useState("All")


    const handleProjects = () => {
        const commonData = projectsCategories?.flatMap(item => item.projects)
        const filteredData = projectsCategories?.find(item => item?.name?.az === activeCat)?.projects
        return activeCat === "All" ? commonData : filteredData
    }

    const renderUI = () => {
        return (handleProjects()?.length === 0)
        ?
            <div className='min-h-[50vh] w-full flex-center'>
                <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>{t("not-projects-cat")}</h1>
            </div>
            : handleProjects()
            .map(item => <ProjectItem key={item.id} {...item} />)
    }

    
    console.log(handleProjects());
    useEffect(() => {
        (async () => {
            const data = await getData("/projects")
            setProjectsCategories(data)
            setLoading(false)
            console.log(data);
        })()
    }, [])

    return (
        <>
            <div className='container pt-[40px] md:pt-[70px]'>
                <h4 data-aos="fade-right" className='flex gap-[10px] text-[#00000080]'><Link to="/" >{t("main-page")}</Link>  —  <p>{t("our-projects")}</p></h4>
                <div className='flex-between flex-wrap overflow-hidden'>
                    <h2 data-aos="fade-right" className='text-[28px] md:text-[38px] lg:text-[48px] font-bold'>{t("our-projects")}</h2>
                    {loading ?
                        <CatBtnsSkeleton page="projects" />
                        : <ProjectsCategoryBtns
                            loading={loading}
                            setLoading={setLoading}
                            activeCat={activeCat}
                            setActiveCat={setActiveCat}
                            projectsCategories={projectsCategories} />}
                </div>
            </div>
            <section id='projects'>
                <div className='container pb-[100px] pt-[10px]'>
                    {
                        (loading)
                            ? Array.from({ length: 3 }).map(_ => <ProjectItemSkeletonComponent key={nanoid()} />)
                            : (!loading && handleProjects()?.length >= 0) ? renderUI() : null
                    }
                    {
                        handleProjects()?.length > 4 && (
                            <div className='flex justify-center pt-[50px] '>
                                <button className='flex items-center gap-[6px] bg-[#000] text-green px-[16px] py-[8px] rounded-[6px]'>Daha çox layihə <img src={ArrowDown} alt='arrow down' /></button>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectContainer