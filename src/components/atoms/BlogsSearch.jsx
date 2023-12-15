import React from 'react'
import Search from "../../../public/img/search-blog.svg"
import { useTranslation } from 'react-i18next'

function BlogsSearch({ setSearch, search }) {
    const { t } = useTranslation()
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleFocus = () => {
        const input= document.querySelector("#blog-search")
        input.scrollIntoView()
        input.firstElementChild.classList.add("box-shadow")
    }
    const handleBlur = () => {
        const input= document.querySelector("#blog-search")
        input.firstElementChild.classList.remove("box-shadow")
    }

    return (
        <div id='blog-search' className='pt-[30px] pb-[50px]'>
            <div  data-aos="fade-up" data-aos-delay={50} className='items-center shrink-0  gap-[8px] flex max-w-[350px] mx-auto border rounded-[8px] px-[14px] py-[10px] border-[#D5DAE1]'>
                <img src={Search} alt="search" />
                <input value={search} onBlur={handleBlur} onFocus={handleFocus} onChange={handleSearch} className='outline-none pl-[4px]' placeholder={`${t('search')}`} type="text" />
            </div>
        </div>
    )
}

export default BlogsSearch