import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getData } from '../service/getData'
import Copy from "../../public/img/copy.svg"
import fb from '../../public/img/teammate-icon-fb.svg'
import linkedin from '../../public/img/teammate-icon-linkedin.svg'
import tweet from '../../public/img/teammate-icon-twitter.svg'
import parser from 'html-react-parser'
import VacancyInfoSkeleton from '../components/skeleton/VacancyInfoSkeleton'
import { Skeleton } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

function VacancyDetailContainer() {
  const { t, i18n } = useTranslation()
  const { id } = useParams()

  const [vacancy, setVacancy] = useState({})
  const [settings, setSettings] = useState({})

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    (async () => {

      const data = await getData(`/vacancies`)
      
      const setdata = await getData(`/contactinfo`)
      setVacancy(data.data.find(item => item.id.toString() === id))
      setSettings(setdata.data[0])
      setLoading(false)
      console.log(data.data.find(item => item.id.toString() === id))
      console.log(setdata.data[0]);
    })()
  }, [])


  return (

    <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>

      <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
        <h4 data-aos="fade-up" className='justify-center  mb-[10px] flex gap-[10px] text-[#00000080]'><Link to="/">{t("main-page")}</Link>  —  <Link to="/about">{t("about")}</Link>-  <p>{t('career')}</p></h4>
        <h2 className='text-center font-bold xl:text-[48px] lg:text-[38px]  text-[28px]'>
          {
            loading ?
              <div data-aos="fade-up" data-aos-delay={50} className='py-[20px]'>
                <Skeleton variant='rounded' width={"270px"} height={"34px"} className='mx-auto' />
              </div>
              : <span data-aos="fade-up" data-aos-delay={50} >{vacancy?.title[i18n.language]}</span>

          }
        </h2>
        <hr data-aos="fade-up" data-aos-delay={100} className='w-[20%] border-0 bg-[#afff2c] h-[11px] mx-auto' />
        <div className='container'>



          <div className='max-w-[750px] pt-[60px] mx-auto'>
            {
              !loading ?
                <div>{parser(`${vacancy?.content}`)}</div>
                // <>
                //   <div data-aos="fade-up" className='pb-[20px]'>
                //     <h3 className='text-[20px] my-[15px] font-bold'>{t("regime")}:</h3>
                //     {parser(`${vacancy?.operating_mode[i18n.language]}`)}
                //   </div>
                //   <div data-aos="fade-up" className='pb-[20px]'>
                //     <h3 className='text-[20px] my-[15px] font-bold'>{t("responsibilities")}:</h3>
                //     {parser(`${vacancy?.responsib[i18n.language]}`)}
                //   </div>
                //   <div data-aos="fade-up" className='pb-[20px]'>
                //     <h3 className='text-[20px] my-[15px] font-bold'>{t("requirements")}:</h3>
                //     {parser(`${vacancy?.requirements[i18n.language]}`)}
                //   </div>
                // </>
                : <div data-aos="fade-up">
                  {Array.from({ length: 3 }).map(_ => <VacancyInfoSkeleton key={nanoid()} />)}
                </div>
            }

            {loading ? <Skeleton variant='rounded' className='mr-[24px]' width={"150px"} height={"30px"} /> :
              <p data-aos="fade-up" className='text-[20px] my-[15px] font-bold'>{t("salary")}: {vacancy?.salary + " AZN"} </p>
            }
            <div className='flex flex-wrap gap-y-[16px] items-center mt-[30px]'>
              {
                loading ? <Skeleton variant='rounded' className='mr-[24px]' width={"200px"} height={"50px"} />
                  : <button data-aos="fade-up" className='bg-[#afff2c] mr-[24px] px-[35px] py-[15px] rounded-[25px] flex items-center text-[15px] font-semibold'>
                    {t("online-apply")}:   <p className='font-bold ml-[3px] '>{settings?.email_addres ?? t("nothing")} </p>
                  </button>
              }
              <div data-aos="fade-up" className='text-[#556987] text-[14px] rounded-[6px] mr-[16px] gap-[6px] px-[15px] py-[8px] border-dotted border inline-flex border-[#556987]'>
                <img src={Copy} alt="copy" />
                <span>Copy Link</span>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-[8px]'>
                <Link to={`${settings?.facebook_link}`} className="w-[37px] border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                  <img className='w-[15px]' src={fb} alt="social" />
                </Link>
                <Link to={`${settings?.twitter_link}`} className="w-[37px]  border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                  <img className='w-[15px]' src={tweet} alt="social" />
                </Link>
                <Link to={`${settings?.linkedin_link}`} className="w-[37px]  border-dotted border-[#556987] border h-[37px] rounded-[6px] flex-center bg-[#fff]">
                  <img className='w-[15px]' src={linkedin} alt="social" />
                </Link>
              </div>
            </div>
          </div>


        </div >
      </div>
    </section>
  )
}

export default VacancyDetailContainer