import React from 'react'
import { Link } from 'react-router-dom'
import NoteBlack from "../../../public/img/note-black.png"
import NoteWhite from "../../../public/img/note-white.png"
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/slices/layoutSlice'
import { useTranslation } from 'react-i18next'
import parser from "html-react-parser"

function ServiceCard({ media, services_lang }) {
    const dispatch = useDispatch()
    const handleApply = () => {
        dispatch(setModal(true))
    }
    const { t, i18n } = useTranslation()

    return (
        <div className='hover:-translate-y-[10px] transition-all w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]' >
            <div data-aos="fade-up" data-aos-delay={100} className='service-card h-full group cursor-pointer p-[50px]  rounded-[5px] '>
                <div className='pb-[25px]'>
                    <img className="service-icon w-[45px] h-[45px] object-cover" src={media[0]?.original_url ?? NoteBlack} alt="" />

                </div>
                <div className='pb-[25px]'>
                    <h3 className='group-hover:text-[#fff] text-[25px] pb-[14px] font-semibold'>{services_lang[0]?.service_title[`${i18n.language}`] ?? t("nothing")}</h3>
                    <p className='group-hover:text-[#fff]  line-clamp-3'>{services_lang[0]?.service_content[`${i18n.language}`] ?
                        parser(`${services_lang[0]?.service_content[`${i18n.language}`]}`)
                        : t("nothing")}
                    </p>
                </div>
                <button onClick={handleApply} className='btn2 font-medium  rounded-[25px]  px-[30px] py-[10px]' >{t("to-apply")}</button>
            </div>
        </div>
    )
}

export default ServiceCard