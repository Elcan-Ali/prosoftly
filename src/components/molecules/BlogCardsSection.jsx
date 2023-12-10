import React, { useLayoutEffect, useState } from 'react'
import BlogsCategoryBtns from '../atoms/BlogsCategoryBtns'
import BlogCard from '../atoms/BlogCard'
import ArrowDown from "../../../public/img/arrow-down.svg"
import { getData } from '../../service/getData'
import { nanoid } from '@reduxjs/toolkit'
import BlogCardSkeleton from '../skeleton/BlogCardSkeleton'
import CatBtnsSkeleton from '../skeleton/CatBtnsSkeleton'
import { useTranslation } from 'react-i18next'

function BlogCardsSection({ activeCat, setActiveCat, search }) {

    const [loading, setLoading] = useState(true)
    const [blogsCategories, setBlogsCategories] = useState([])
    const { t, i18n } = useTranslation()
    const [slice, setSlice] = useState(4)

    const renderBlogs = () => {
        const filter = blogsCategories.filter(item => activeCat === "All" ? item : item.category_name.az === activeCat)

        const control1 = filter?.filter(item => item?.blog.some(blogItem => blogItem?.blog_content[0].blog_title[i18n.language].split(" ").some(item => item.toLowerCase().startsWith(search.toLowerCase()))))
        const includes = control1.length > 0
            ? control1
            : filter?.filter(item => item?.blog.some(blogItem => blogItem?.blog_content[0].blog_title[i18n.language].toLowerCase().includes(search.toLowerCase())))

        const control2 = includes.flatMap(item => item.blog).filter(item => item.blog_content[0].blog_title[i18n.language].split(' ').some(item => item.toLowerCase().startsWith(search.toLowerCase())))
        const result = control2.length > 0
            ? control2
            : includes.flatMap(item => item.blog).filter(item => item.blog_content[0].blog_title[i18n.language].toLowerCase().includes(search.toLowerCase()))



        return result
    }




    useLayoutEffect(() => {
        (async () => {
            const data = await getData("/blogs")
            setBlogsCategories(data.data)
            setLoading(false)
        })()
    }, [i18n])




    return (
        <section className='container'>
            <div className='mb-[30px]'>
                {loading ? <CatBtnsSkeleton /> : <BlogsCategoryBtns activeCat={activeCat} setActiveCat={setActiveCat} blogsCategories={blogsCategories} />}
            </div>
            <div className=' md:flex-row flex-col gap-y-[70px] md:gap-x-[50px] lg:gap-x-[122px] min-h-[50vh] flex pb-[5w0px] items-start justify-center md:justify-normal flex-wrap'>
                {loading ?
                    Array.from({ length: 4 }).map(_ => <BlogCardSkeleton key={nanoid()} />) :
                    (!loading && renderBlogs().length === 0 && search.trim() !== "") ? <div className='min-h-[50vh] w-full flex-center'>
                        <h1 className='text-center  py-[100px] w-full text-[20px] font-semibold'>{t("not-blogs")}</h1>
                    </div> :
                        (!loading && renderBlogs().length === 0) ?
                            <div className='min-h-[50vh] w-full flex-center'>
                                <h1 className='text-center py-[100px] w-full text-[20px] font-semibold'>{t("not-blogs-cat")}</h1>
                            </div> :
                            renderBlogs().map(item => <BlogCard blogsCategories={blogsCategories} key={nanoid()} {...item} />)
                }

            </div>
            {/* {(!loading && renderBlogs().length >= 4) && <div className='flex justify-center pt-[50px] md:pt-[100px] '>
                <button
                    onClick={() => { setSlice(prev => prev + 4) }}
                    className='flex items-center gap-[6px] bg-[#000] text-green px-[16px] py-[8px] rounded-[6px]'>Daha çox məqalə <img src={ArrowDown} alt='arrow down' /></button>
            </div>} */}
        </section>
    )
}

export default BlogCardsSection