import React from 'react'
import Arrow from "../../../public/img/arrow-right.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function VacancyCard({id,title}) {
  const {i18n} =useTranslation()
  
  return (
    <Link data-aos="fade-up" to={`/vacancy/${id}`} className='bg-[#F7F8F9] rounded vacancy-card p-[36px] w-full lg:w-[calc((100%-30px)/2)]'>

        <div className='flex-between mb-[12px]'>
            <h3 className='text-[20px] font-bold'>{title[i18n.language]}</h3>
            <div className='flex gap-[11px]  items-center'>
                <span>Ətraflı</span>
                <img src={Arrow} alt="arrow-right" />
            </div>
        </div>
        <p>We’re looking for a mid-level Front-end Developer to join our team.</p>
    </Link>
  )
}

export default VacancyCard