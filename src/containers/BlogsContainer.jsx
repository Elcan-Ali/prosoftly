import React, { useState } from 'react'
import BlogsSearch from '../components/atoms/BlogsSearch'

import BlogCardsSection from '../components/molecules/BlogCardsSection'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

function BlogsContainer() {

    const [activeCat, setActiveCat] = useState("All")
    const [search, setSearch] = useState("")
    const { t } = useTranslation()

    return (
        <section className='bg-[#000] mt-[40px]  md:mt-[70px] rounded-t-[40px] md:rounded-t-[70px]'>
            <div className='bg-[#fff] pt-[60px] pb-[60px] md:pb-[100px]  rounded-[40px] md:rounded-[70px]'>
                <h4 data-aos="fade-up" className='justify-center  mb-[20px] flex gap-[10px] text-[#00000080]'><Link to="/">{t("main-page")}</Link>  —  <p>{t("blogs")}</p></h4>
                <h2 data-aos-delay={20} data-aos="fade-up" className='text-center font-bold xl:text-[48px] lg:text-[38px] text-[28px]'>
                    {t('blog-title-text').split("\n").map(item => <p key={nanoid()}>{item}</p>)}
                </h2>
                <BlogsSearch
                    setSearch={setSearch}
                    search={search} />
                <BlogCardsSection
                    activeCat={activeCat}
                    search={search}
                    setActiveCat={setActiveCat}
                />
            </div>
        </section>
    )
}

export default BlogsContainer