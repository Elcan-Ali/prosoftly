import { nanoid } from '@reduxjs/toolkit'
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

function BlogsCategoryBtns({ activeCat, setActiveCat, blogsCategories }) {

    const handleClick = (arg) => {
        window.scrollTo(0, 531)
        setActiveCat(arg)
    }
    const { i18n } = useTranslation()


    return (
        <ul className='gap-[15px] pt-[20px] flex flex-wrap'>
            <li
                onClick={() => handleClick("All")}
                className={`
                    ${activeCat === "All" && "active"} 
                    text-[14px] hover:bg-[#afff2c] transition-all category-button font-bold px-[16px] py-[8px] rounded-[6px]`
                }>
                Bütün kateqoriyalar
            </li>
            {blogsCategories.map(item =>
            (<li key={nanoid()} onClick={() => handleClick(item.category_name.az)}
                className={` ${activeCat === item?.category_name.az && "active"} hover:bg-[#afff2c] transition-all category-button  text-[14px] category-button font-bold px-[16px] py-[8px] rounded-[6px]`}>
                {item.category_name[i18n.language]}
            </li>)
            )}
        </ul>
    )
}

export default BlogsCategoryBtns