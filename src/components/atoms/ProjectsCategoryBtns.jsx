import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ProjectsCategoryBtns({ activeCat, setActiveCat, projectsCategories }) {

    const handleClick = (arg) => {
        window.scrollTo(0, 150)
        setActiveCat(arg)
    }
    const { i18n, t } = useTranslation()

    return (
        <ul data-aos="fade-left" className='gap-[15px]  pt-[20px] md:pt-0 flex flex-wrap'>
            <li
                onClick={() => handleClick("All")}
                className={`
                    ${activeCat === "All" && "active"} 
                    text-[14px] category-button hover:bg-[#afff2c] transition-all font-bold px-[16px] py-[8px] rounded-[6px]`
                }>
                {t("all-categories")}
            </li>
            {projectsCategories?.map(item =>
            (<li onClick={() => handleClick(item.name.az)}
                className={` ${activeCat === item.name.az && "active"}  hover:bg-[#afff2c] transition-all text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`}>
                {item.name[i18n.language]}
            </li>)
            )}
        </ul>
    )
}

export default ProjectsCategoryBtns