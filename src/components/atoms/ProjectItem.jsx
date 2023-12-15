import React from 'react'
import Arrow from "../../../public/img/long-arrow2.svg"
import { Link } from 'react-router-dom'
import { generatePath } from '../../utils/generatePath'
import { useTranslation } from 'react-i18next';


function ProjectItem({ project_name, project_titleImg, projects_lang,  project_category_id }) {
    
    const { t, i18n } = useTranslation()
    return (
        <div className='hover:-translate-y-[10px] transition-all'>
            <Link data-aos="fade-up" to={`/project/${project_category_id}/${generatePath(project_name)}`} className='flex project-item  group flex-wrap my-[50px]'>
                <div className='w-full lg:w-1/2 xl:w-7/12 2xl:w-2/3'>
                    <div className="img-box box-shadow w-full h-[515px]">
                        <img src={project_titleImg} className='h-full w-full object-cover' alt="project-img" />
                    </div>
                </div>
                <div className='w-full relative lg:w-1/2 xl:w-5/12 2xl:w-1/3 flex flex-col justify-between p-[60px] bg-[#fff]'>
                    <div className='pb-[60px]'>
                        <h2 className='text-[28px] md:text-[38px] lg:text-[48px] font-semibold leading-[1] mb-[30px]'>{project_name}</h2>
                        <div className='line-clamp-6'>{projects_lang[0]?.customer_info[i18n.language]}</div>
                    </div>
                    <div className='flex gap-x-[30px] gap-y-[10px] flex-wrap '> <p className='shrink-0 font-medium'>{t("project-analysis")}</p> <img src={Arrow} /></div>
                    <div className='h-[10px] absolute bottom-0 left-0 w-0  group-hover:w-full transition-all bg-[#afff2c]'></div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem
