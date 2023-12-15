import React from 'react'
import Arrow from "../../../public/img/arrow-right.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function VacancyCard({ id, title, description }) {
  const { t, i18n } = useTranslation()

  return (
    <div className='hover:-translate-y-[10px] transition-all w-full lg:w-[calc((100%-30px)/2)]'>
      <Link data-aos="fade-up" to={`/vacancy/${id}`} className='bg-[#F7F8F9] inline-block w-full drop-shadow-md rounded vacancy-card p-[36px]'>

        <div className='flex-between mb-[12px]'>
          <h3 className='text-[20px] font-bold'>{title[i18n.language]}</h3>
          <div className='flex gap-[11px]  items-center'>
            <span>{t("detailed")}</span>
            <img src={Arrow} alt="arrow-right" />
          </div>
        </div>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default VacancyCard