import { Skeleton } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next'

function ProjectDetailCard({ project, loading }) {
    console.log(project);


    const { t, i18n } = useTranslation()
    return (
        <div className='project-detail-card bg-[#fff]  rounded-[70px]'>
            <div className='card-top rounded-[70px] overflow-hidden '>
                {
                    loading ? <Skeleton variant='rounded' width={"100%"} height={"300px"} />
                        : <img className='min-h-[300px] max-h-[500px] w-full object-cover' src={`${import.meta.env.VITE_API_BASE_URL + "storage/" + project?.project_titleImg}`} alt="card-img" />
                }
            </div>
            <div className='flex items-center gap-y-[40px] gap-x-[100px] flex-wrap p-[50px]'>
                <div data-aos="fade-up" className='w-full lg:w-[calc((100%-100px)/12*9)]'>
                    <h3 className='text-[28px] font-medium mb-[16px]'>{t("customer-info")}</h3>
                    <p>{project?.projects_lang[0]?.customer_info[i18n.language] ?? t("nothing")}</p>
                </div>
                <div className='w-full  lg:w-[calc((100%-100px)/12*3)]'>
                    <img src={import.meta.env.VITE_API_BASE_URL + "storage/" + project?.project_customerLogoImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailCard
