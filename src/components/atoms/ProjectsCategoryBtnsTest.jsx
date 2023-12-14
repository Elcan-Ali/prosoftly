import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ProjectsCategoryBtnsTest({ activeCat, setActiveCat }) {

    const handleClick = (arg) => {
        window.scrollTo(0, 150)
        setActiveCat(arg)
    }
    const { t } = useTranslation()
    console.log(activeCat);

    const projectsCategories = ["CRM", 'Texnologiya']

    return (
        <ul data-aos="fade-left" className='gap-[15px] pt-[20px] flex flex-wrap'>
            <li
                onClick={() => handleClick("All")}
                className={`
                    ${activeCat === "All" && "active"} 
                    text-[14px] category-button hover:bg-[#D2D7F0] transition-all font-bold px-[16px] py-[8px] rounded-[6px]`
                }>
                {t("all-categories")}
            </li>
            {projectsCategories.map(item =>
            (<li onClick={() => handleClick(item)}
                className={` ${activeCat === item && "active"}  hover:bg-[#D2D7F0] transition-all text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`}>
                {item}
            </li>)
            )}
        </ul>
    )
}

export default ProjectsCategoryBtnsTest