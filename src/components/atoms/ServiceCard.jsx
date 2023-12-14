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
        <div data-aos="fade-up" data-aos-delay={100} className='service-card group cursor-pointer p-[50px]  rounded-[5px] w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]'>
            <div className='pb-[25px]'>
                <img  className="service-icon" src={media[0]?.original_url ?? NoteBlack} alt="" />
                    {/* <img className='hidden group-hover:block' src={NoteWhite} alt="note" />
                    <img className='group-hover:hidden' src={NoteBlack} alt="note" /> */}
            </div>
            <div className='pb-[25px]'>
                <h3 className='group-hover:text-[#fff] text-[25px] pb-[14px] font-semibold'>{services_lang[0]?.service_title[`${i18n.language}`] ?? t("nothing")}</h3>
                <p className='group-hover:text-[#fff]  line-clamp-4'>{services_lang[0]?.service_content[`${i18n.language}`] ?
                    parser(`${services_lang[0]?.service_content[`${i18n.language}`]}`)
                    : t("nothing")}
                </p>
            </div>
            <button onClick={handleApply} className='btn2 font-medium  rounded-[25px]  px-[30px] py-[10px]' >{t("to-apply")}</button>
        </div>
    )
}

export default ServiceCard