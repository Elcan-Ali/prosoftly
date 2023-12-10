import React, { useEffect, useState } from 'react'
import Back from "../../public/img/back-to-home-.svg"
import { Link, useParams } from 'react-router-dom'
import ProjectDetailCard from '../components/atoms/ProjectDetailCard'
import Arrow from "../../public/img/long-arrow.svg"
import ProjectImg from "../../public/img/project-inner-card.png"
import ProjectImg2 from "../../public/img/project-inner-card2.png"

import ProjectItem from '../components/atoms/ProjectItem'
import { getData } from '../service/getData'
import { generatePath } from '../utils/generatePath'
import { useTranslation } from 'react-i18next'
import ProjectTask from '../components/molecules/ProjectTask'
import CustomerComment from '../components/atoms/CustomerComment'
import ProjectDetailCardTest from '../components/atoms/ProjectDetailCardTest'
import ProjectTaskTest from '../components/molecules/ProjectTaskTest'
import CustomerCommentTest from '../components/atoms/CustomerCommentTest'

function ProjectDetailContainer() {
    const { t, i18n } = useTranslation()


    const { catId, projectName } = useParams()
    const [category, setCategory] = useState({})

    const project = category?.projects?.find(item => generatePath(`${item.project_name}`) === projectName)
    console.log(project);


    useEffect(() => {
        (async () => {
            const data = await getData(`/projects/${catId}`)
            setCategory(data);
            console.log(data);
        })()
    }, [])

    return (
        <section className=' mt-[40px] text-left  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>
            <div className='flex justify-between  container  items-start'>
                <div>
                    <h4 data-aos="fade-right" className='mb-[20px] flex gap-[10px] text-[#00000080]'><p>{t("main-page")}</p>  —  <p>{t("our-projects")}</p></h4>
                    <h2 data-aos="fade-right" className=' font-bold  leading-[1.2] lg:text-[36px]  text-[28px]'>
                        <p className='md:w-2/3'>SABIS® SUN International School
                            üçün CRM hazırlanması</p>
                        {/* <p className='md:w-2/3'>{project?.projects_lang[0]?.title[i18n.language] ?? t("nothing")}</p> */}
                    </h2>
                </div>
                <Link data-aos="fade-left" to="/projects" className='hidden lg:flex items-center gap-[13px]'>
                    <span className='md:block text-[24px]'>{t("back")}</span>
                    <img className='w-[40p] h-[40px] object-cover' src={Back} alt="" />
                </Link>
            </div>
            <div data-aos="fade-up" className='container py-[60px]'>
                <ProjectDetailCardTest />
                {/* <ProjectDetailCard project={project} /> */}
            </div>
            <div className='bg-[#000]'>
                <div className='bg-[#fff] rounded-b-[40px] pb-[100px] md:rounded-b-[70px] min-h-[50vh]'>
                    {/* <ProjectTask project={project} /> */}
                    <ProjectTaskTest project={project} />
                    <div className='container'>


                        <div className='flex flex-wrap gap-[24px]'>
                            <div data-aos="fade-up" className='w-full lg:w-[calc((100%-24px)/2)]'>
                                <img src={ProjectImg} alt="" />
                            </div>
                            <div data-aos="fade-up" className='w-full lg:w-[calc((100%-24px)/2)]'>
                                <img src={ProjectImg2} alt="" />
                            </div>
                        </div>

                        {/* <div className='flex flex-wrap gap-[24px]'>
                            <div data-aos="fade-up" className='w-full lg:w-[calc((100%-24px)/2)]'>
                                <img src={import.meta.env.VITE_API_BASE_URL+ "storage/"+ project?.project_taskImg} alt="" />
                            </div>
                            <div data-aos="fade-up" className='w-full lg:w-[calc((100%-24px)/2)]'>
                                <img src={import.meta.env.VITE_API_BASE_URL+ "storage/"+ project?.project_customerImg} alt="" />
                            </div>
                        </div> */}


                        {/* <CustomerComment project={project} /> */}
                        <CustomerCommentTest project={project} />
                    </div>
                </div>
            </div>
            {/* <div className='container py-[50px]'> */}
            {/* <Link data-aos="fade-right" to={"/"} className='text-[24px] gap-[34px] flex items-center'> Növbəti layihə <img src={Arrow} alt='arrow' /></Link> */}
            {/* {project && <ProjectItem {...project} />} */}
            {/* </div> */}

        </section>
    )
}

export default ProjectDetailContainer