import React from 'react'
import Arrow from "../../../public/img/long-arrow2.svg"
import { Link } from 'react-router-dom'
import { generatePath } from '../../utils/generatePath'
import { useTranslation } from 'react-i18next';


function ProjectItem({ project_name, project_titleImg, projects_lang, media, project_category_id }) {
    console.log(media);
    const { t } = useTranslation()
    return (
        <Link data-aos="fade-up" to={`/project/${project_category_id}/${generatePath(project_name)}`} className='flex project-item group flex-wrap my-[50px]'>
            <div className='w-full lg:w-1/2 xl:w-7/12 2xl:w-2/3'>
                <div className="img-box w-full h-[515px]">
                    <img src={project_titleImg} alt="project-img" />
                </div>
            </div>
            <div className='w-full relative lg:w-1/2 xl:w-5/12 2xl:w-1/3 flex flex-col justify-between p-[60px] bg-[#fff]'>
                <div className='pb-[60px]'>
                    <h2 className='text-[48px] font-semibold leading-[1] mb-[30px]'>{project_name}</h2>
                    <p>{projects_lang[0]?.content?.az}</p>
                </div>
                <p className='flex gap-[40px]'> <p className='shrink-0 font-medium'>{t("project-analysis")}</p> <img src={Arrow} /></p>
                <div  className='h-[10px] absolute bottom-0 left-0 w-0  group-hover:w-full transition-all bg-[#afff2c]'></div>
            </div>
        </Link>
    )
}

export default ProjectItem