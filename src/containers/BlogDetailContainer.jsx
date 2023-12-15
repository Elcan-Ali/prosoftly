import React, { useEffect, useState } from 'react'
import blogImg from "../../public/img/blog-detail.png"
import Copy from "../../public/img/copy.svg"
import fb from '../../public/img/teammate-icon-fb.svg'
import linkedin from '../../public/img/teammate-icon-linkedin.svg'
import tweet from '../../public/img/teammate-icon-twitter.svg'
import blogImg2 from "../../public/img/blog-detail2.png"
import { Link, useParams } from 'react-router-dom'
import { getData } from "../service/getData"
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@mui/material'
import parser from 'html-react-parser'

function BlogDetailContainer() {
    const [blog, setBlog] = useState({})
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    const { blogCatId, blogId } = useParams()
    const { t, i18n } = useTranslation()

    const category_name = blogs?.find(item => item.id === blog.blog_category_id)?.category_name[i18n.language]


    useEffect(() => {
        (async () => {
            const data = await getData("blogs")
            const blog = data.data?.find(item => item.id.toString() === blogCatId).blog
                .find(item => item.id.toString() === blogId)
            setBlog(blog)
            setBlogs(data.data)
            setLoading(false)
            console.log(blog);
        })()
    }, [i18n])
    console.log(blogs);

    const time = blog?.created_at?.split("T")[0]?.split("-")

    return (
        <section className='rounded-t-[40px] bg-[#000] md:rounded-t-[70px]  mt-[40px] md:mt-[70px] '>
            <div className='rounded-[40px] pb-[70px] pt-[65px] min-h-[100vh] bg-[#fff] md:rounded-[70px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h4 data-aos="fade-up" className='mb-[20px] font-medium justify-center flex leading-[1] gap-[10px] text-[#000] opacity-[.5]'>
                            <Link to={"/"} className='leading-[1]'>{t("main-page")}</Link> —
                            <p className='leading-[1] pr-[2px]'>{t("blogs")}</p>
                            {!loading && <p className='border-l-[2px] leading-[1] border-[#00000080]  pl-[12px]'>{time[2]} {t(`month-${time[1]}`)} {time[0]} </p>}
                        </h4>
                        {blog.hasOwnProperty('blog_content') ?
                            <h2 data-aos="fade-up" data-aos-delay={50} className=' font-bold  leading-[1.2] lg:text-[36px]  text-[28px]'>
                                {blog?.blog_content[0]?.blog_title[i18n?.language] ?? t("nothing")}
                            </h2>
                            : <Skeleton data-aos="fade-up" variant='rounded' width={"200px"} height={"30px"} className='mx-auto' />}

                        {category_name &&
                            <span data-aos="fade-up" data-aos-delay={100} className='shadow inline-block mt-[30px] bg-[#000] rounded-[36px] text-green text-[12px] font-medium px-[12px] py-[4px]'>
                                {category_name}
                            </span>}
                    </div>
                    {
                        blog.hasOwnProperty('media') ?
                            <div className='flex justify-center  my-[50px] max-w-[1140px] mx-auto'>
                                <img data-aos="fade-up" data-aos-delay="50" className='rounded-[6px] min-h-[400px] w-full object-cover box-shadow' src={blog?.media[0]?.original_url} alt="blog-img" />
                            </div>
                            : <div className='py-[50px] max-w-[1140px] mx-auto' data-aos="fade-up"><Skeleton variant='rounded' width={"100%"} height={"500px"} /></div>
                    }
                    <div className=' max-w-[750px] mx-auto'>
                        {
                            blog.hasOwnProperty('blog_content') && <div data-aos="fade-up">
                                {parser(`${blog?.blog_content[0].blog_content[i18n.language]}`)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailContainer