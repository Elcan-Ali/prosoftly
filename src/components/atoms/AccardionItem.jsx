import React, { useState } from 'react'
import icon from "../../../public/img/accardion-icon.png"
import { useTranslation } from 'react-i18next'

function AccardionItem({ index, question, answers }) {

    const [active, setActive] = useState(false)
    const { t } = useTranslation()
    return (
        <div onClick={() => setActive(!active)} data-aos="fade-right" className=' cursor-pointer'>
            <div className='flex-between px-[60px] hover:font-semibold  py-[10px] border-b  text-[#000] '>
                <h3 className={`${active && "font-semibold"}`}>{index + 1}. {t(`${question}`)}</h3>
                <img className={`h-[40px] w-[40px] shrink-0  rounded-full ${active ? "rotate-[225deg]" : ""} transition-all`} src={icon} alt="icon" />
            </div>
            <div onClick={(e) => e.stopPropagation()} className={`dropdown-body box-shadow ${active ? "!py-[20px] !h-max !border " : ""}  h-0  transition-all overflow-hidden border-t-[0] rounded-b-[20px]  text-[#000]   px-[60px]`}>
                <p>{index + 1}.1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptatibus facere nobis ea veritatis nostrum necessitatibus eligendi eveniet consequuntur illo laboriosam hic cumque dolore magni. Fuga labore voluptates voluptate aliquam.</p>
            </div>
        </div>
    )
}

export default AccardionItem