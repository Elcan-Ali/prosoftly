import React, { useEffect, useState } from 'react'
import Logo from "../../../public/img/white-logo.svg"
import { Link } from 'react-router-dom'
import facebook from "../../../public/img/fb.svg"
import instagram from "../../../public/img/instagram.svg"
import linkedin from "../../../public/img/linkedin.svg"
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@mui/material'
import { getData } from "../../service/getData"
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";



function Footer() {

    const { i18n, t } = useTranslation()
    const handleLang = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("language", lang)
    }


    const [settings, setSettings] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = await getData('contactinfo')
            setSettings(data.data[0])
            setLoading(false)
            console.log(data.data[0]);
        })()
    }, [])


    return (
        <footer className='bg-[#000] text-[#fff]'>
            <nav className='flex flex-wrap items-start container py-[70px] gap-[30px] lg:gap-[15px] xl:gap-[30px]'>
                <div className=' w-full md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] flex flex-col items-start gap-[6px] '>
                    <div className='mb-[30px]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    {
                        loading ? <>
                            <Skeleton variant='rounded' width={"130px"} height={"18px"} className='!bg-[#aaa]' />
                            <Skeleton variant='rounded' width={"70%"} height={"18px"} className='!bg-[#aaa]' />
                            <Skeleton variant='rounded' width={"80%"} height={"18px"} className='!bg-[#aaa]' />
                        </>
                            : <div className='flex flex-col gap-[10px]'>
                                <Link className="inline-block hover:text-[#afff2c]" to={`tel:${settings?.phone}`}>{settings?.phone}</Link>
                                <Link className="inline-block hover:text-[#afff2c]" to={`mailto:${settings?.email_addres}`}>{settings?.email_addres}</Link>
                                <a className="inline-block hover:text-[#afff2c]" href='/contact#map'>{settings?.addres}</a>
                            </div>
                    }
                    <ul className='flex items-center mt-[16px] gap-[8px]'>
                        <Link className='hover:text-[#afff2c]' to={`${settings?.facebook_link}`}><FaFacebook size={20} className='rounded-full overflow-hidden'  /></Link>
                        <Link className='hover:text-[#afff2c]' to={`${settings?.instagram_link}`}><RiInstagramFill size={21} className='mt-[1px] rounded-full overflow-hidden'  /></Link>
                        <Link className='hover:text-[#afff2c]' to={`${settings?.linkedin_link}`}><FaLinkedin size={20} className='rounded-full overflow-hidden' /></Link>
                    </ul>
                </div >
                <div className='w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>{t("main")}</h3>
                    <ul>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("about")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("services")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("projects")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("comments")}</Link></li>
                    </ul>
                </div>
                <div className=' w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>{t("news")}</h3>
                    <ul>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("blogs")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("contact")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("career")}</Link></li>
                        <li><Link className='text-[14px] hover:text-[#afff2c] inline-block py-[8px]'>{t("news")}</Link></li>
                    </ul>
                </div>
                <div className=' w-[calc((100%-30px)/2)] md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] '>
                    <h3 className='text-[20px] font-semibold mb-[20px]'>{t("language-selection")}</h3>
                    <ul>
                        <li onClick={() => handleLang('az')} className={` ${i18n.language === "az" && "active"} hover:text-[#afff2c] py-[8px] footer-lang text-[14px]`}>Azərbaycanca</li>
                        <li onClick={() => handleLang("en")} className={` ${i18n.language === "en" && "active"} hover:text-[#afff2c] py-[8px] footer-lang text-[14px]`}>English</li>
                        <li onClick={() => handleLang("ru")} className={`${i18n.language === "ru" && "active"} hover:text-[#afff2c] py-[8px] footer-lang text-[14px]`}>Русский</li>
                    </ul>
                </div>
            </nav >
            <div></div>
        </footer >
    )
}

export default Footer