import React from 'react'
import Author from "../../../public/img/acun.png"
import quote from "../../../public/img/quote.svg"
import { useTranslation } from 'react-i18next'

function CustomerComment({ project }) {
    const { t, i18n } = useTranslation()

    return (
        <div className='pt-[66px]'>
            <h3 data-aos="fade-right" className='text-[28px] pb-[23px] font-semibold md:text-[36px]'>{t("customer-comment")}</h3>
            <div data-aos="fade-right" className='bg-[#000]  relative gap-[50px] flex items-center flex-col md:flex-row p-[52px] text-[#fff]'>
                <p>
                    {project?.projects_lang[0]?.customer_comment[i18n.language] ?? t("nothing")}
                </p>
                <div className='w-[136px] shrink-0 h-[45px]'></div>
                <img className='shrink-0 absolute -bottom-[20px] right-[20px]' src={quote} alt="" />
            </div>

            <div data-aos="fade-right" className='flex items-center pt-[28px] gap-[24px]'>
                <img className='w-[60px] h-[60px] object-cover  rounded-full' src={import.meta.env.VITE_API_BASE_URL + "storage/" + project?.project_customerImg} alt="" />
                <div>

                    <h3 className='font-semibold text-[20px] leading-[1]'>
                        {project?.projects_lang[0]?.customer_name[i18n.language] ?? t("nothing")}
                    </h3>
                    <p>
                        {project?.projects_lang[0]?.customer_position[i18n.language] ?? t("nothing")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerComment