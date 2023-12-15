import React, { useEffect, useState } from 'react'
import { projectItems } from '../../const/projectItems'
import ProjectItem from '../atoms/ProjectItem'
import { Link } from 'react-router-dom'
import Arrow from "../../../public/img/long-arrow.svg"

import { getData } from '../../service/getData'
import { useTranslation } from 'react-i18next'
import { nanoid } from '@reduxjs/toolkit'
import ProjectItemSkeletonComponent from '../skeleton/ProjectItemSkeletonComponent'
import ProjectItemTest from '../atoms/ProjectItemTest'

function SectionProject() {

    const { t } = useTranslation()

    const [loading, setLoading] = useState(true)
    const [projectsCategories, setProjectsCategories] = useState([])
    const commonData = projectsCategories?.flatMap(item => item.projects)

    useEffect(() => {
        (async () => {
            const data = await getData("/projects")
            setProjectsCategories(data)
            setLoading(false)
        })()
    }, [])



    return (
        <div className='container py-[50px]'>
            {/* {projectItems.slice(0, 4).map(item => <ProjectItemTest key={nanoid()} {...item} />)} */}
            {loading ? Array.from({ length: 3 }).map(_ => <ProjectItemSkeletonComponent key={nanoid()} />) :
                commonData.map(item => <ProjectItem key={item.id} {...item} />)}
            <Link data-aos="fade-right" to='/projects' className="flex-center  group text-[24px]"> <p>{t('all-projects')} </p> <img className='pl-[20px] group-hover:pl-[30px] transition-all' src={Arrow} alt='arrow' /></Link>
        </div>
    )
}

export default SectionProject