import React from 'react'
import Arrow from "../../../public/img/long-arrow2.svg"
import { Link } from 'react-router-dom'
import { generatePath } from '../../utils/generatePath'


function ProjectItemTest({ img, title, text }) {
    return (
        <Link data-aos="fade-up" to={`/project/1/1`} className='flex flex-wrap py-[50px]'>
            <div className='w-full lg:w-1/2 xl:w-7/12 2xl:w-2/3'>
                <div className="img-box w-full h-[515px]">
                    <img src={img} alt="project-img" />
                </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-5/12 2xl:w-1/3 flex flex-col justify-between p-[60px] bg-[#fff]'>
                <div className='pb-[60px]'>
                    <h2 className='text-[48px] font-semibold leading-[1] mb-[30px]'>{title}</h2>
                    <p>{text}</p>
                </div>
                <p className='flex gap-[40px]'> <p>Layihə analizi</p> <img src={Arrow} /></p>
            </div>
        </Link>
    )
}

export default ProjectItemTest