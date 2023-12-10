import React, { memo } from 'react'
import BlogImg from '../../../public/img/blog-card.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BlogCard({ blogsCategories, media, id, blog_content, blog_category_id, item }) {
    const { t, i18n } = useTranslation()

    const category = blogsCategories?.find(item => item?.id?.toString() === blog_category_id).category_name[i18n.language]
    return (
        <Link data-aos="fade-up" to={`/blog/${blog_category_id}/${id}`} className='blog-card cursor-pointer w-full md:w-[calc((100%-50px)/2)] lg:w-[calc((100%-122px)/2)]'>
            <div className='card-top rounded-[6px] overflow-hidden '>
                <img className='h-[312px] w-full object-cover' src={media[0]?.original_url} alt="blog-img" />
            </div>
            <div className='card-bottom pt-[24px]'>
                <span className='rounded-[36px] bg-green font-medium text-[12px] px-[12px] py-[4px]'>{category}</span>
                <p className='font-medium py-[16px]'>22 oktyabr 2023</p>
                <h3 className='text-[30px] font-bold'>{blog_content[0]?.blog_title[i18n.language] ?? t("nothing")}</h3>
            </div>
        </Link>
    )
}

export default memo(BlogCard)