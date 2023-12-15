import React from 'react'
import Img from "../../public/img/errorImg.png"
import ImgShadow from "../../public/img/errorImgShadow.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function ErrorPageContainer() {
    const {t} = useTranslation()

    return (
        <div className='container  text-center  pt-[40px] pb-[100px]'>
            <div className='flex-center min-h-[500px] relative'>
                <img className='absolute bottom-0 '  src={ImgShadow} alt="" />
                <img className='absolute '  src={Img} alt="" />
            </div>
            <h4 className='pt-[30px] text-[17px] font-semibold'>{t("upps")}</h4>
            <h1 className='py-[30px] text-[28px] md:text-[35px] lg:text-[45px] font-semibold'>{t("not-found")}</h1>
            <Link to={"/"} className='rounded-[25px] font-medium bg-green py-[16px] px-[35px]'>{t("back-to-home")}</Link>
        </div>
    )
}

export default ErrorPageContainer