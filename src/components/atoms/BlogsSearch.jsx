import React from 'react'
import Search from "../../../public/img/search-blog.svg"
import { useTranslation } from 'react-i18next'

function BlogsSearch({ setSearch, search }) {
    const {t} = useTranslation()
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleFocus=()=>{
        window.scrollTo(0,250)
    }
    return (
        <div  data-aos="fade-up" data-aos-delay={50} className='items-center shrink-0 mt-[30px] mb-[50px] gap-[8px] flex max-w-[350px] mx-auto border rounded-[8px] px-[14px] py-[10px] border-[#D5DAE1]'>
            <img src={Search}  alt="search" />
            <input value={search} onFocus={handleFocus}  onChange={handleSearch} className='outline-none pl-[4px]' placeholder={`${t('search')}`} type="text" />
        </div>
    )
}

export default BlogsSearch