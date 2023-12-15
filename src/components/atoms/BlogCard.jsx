import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BlogCard({ blogsCategories, media, id, blog_content, blog_category_id, item, created_at }) {
    const { t, i18n } = useTranslation()
    console.log(blog_category_id);
    const time = created_at.split("T")[0].split("-")

    const category = blogsCategories?.find(item => item.id === blog_category_id)?.category_name[i18n.language]
    console.log(category);

    return (
        <div data-aos="fade-up" className='w-full md:w-[calc((100%-50px)/2)] lg:w-[calc((100%-122px)/2)]'>
            <Link to={`/blog/${blog_category_id}/${id}`} className='blog-card inline-block w-full hover:-translate-y-[10px] transition-all h-full cursor-pointer'>
                <div className='card-top box-shadow rounded-[6px] overflow-hidden '>
                    <img className=' h-[312px] w-full object-cover' src={media[0]?.original_url} alt="blog-img" />
                </div>
                <div className='card-bottom pt-[24px]'>
                    <span className='rounded-[36px] bg-green font-medium text-[12px] px-[12px] py-[4px]'>{category}</span>
                    <p className='font-medium py-[16px]'>{time[2]} {t(`month-${time[1]}`)} {time[0]} </p>
                    <h3 className='text-[30px] font-bold'>{blog_content[0]?.blog_title[i18n.language] ?? t("nothing")}</h3>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard