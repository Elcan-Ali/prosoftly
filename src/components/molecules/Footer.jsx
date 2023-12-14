import React from 'react'
import Logo from "../../../public/img/white-logo.svg"
import { Link } from 'react-router-dom'
import facebook from "../../../public/img/fb.svg"
import instagram from "../../../public/img/instagram.svg"
import linkedin from "../../../public/img/linkedin.svg"
import { useTranslation } from 'react-i18next'

function Footer() {

    const { i18n, t } = useTranslation()
    const handleLang = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("language", lang)
    }

    return (
        <footer className='bg-[#000] text-[#fff]'>
            <nav className='flex flex-wrap items-start container py-[70px] gap-[30px] lg:gap-[15px] xl:gap-[30px]'>
                <div className=' w-full md:w-[calc((100%-60px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-90px)/4)] flex flex-col items-start gap-[6px] '>
                    <div className='mb-[30px]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Link className="inline-block hover:text-[#afff2c]" to={"tel:+994503119865"}>+994 (50) 311-98-65</Link>
                    <Link className="inline-block hover:text-[#afff2c]" to={"mailto:office@prosofly.com"}>office@prosofly.com</Link>
                    <Link className="inline-block hover:text-[#afff2c]" target='_blank' to={"https://www.google.com/maps/place/Vurgun+Residence/@40.3842828,49.8359237,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d9f915bf741:0x7e38e72dd9a2ba4c!8m2!3d40.3842828!4d49.838504!16s%2Fg%2F11f3_gwjbs?entry=ttu"}>Səməd Vurğun küçəsi 110 Baku, Azerbaijan</Link>

                    <ul className='flex items-center mt-[16px] gap-[8px]'>
                        <Link to="/"><img src={facebook} alt="facebook" /></Link>
                        <Link to="/"><img src={instagram} alt="instagram" /></Link>
                        <Link to="/"><img src={linkedin} alt="linkedin" /></Link>
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
                        <li li onClick={() => handleLang("ru")} className={`${i18n.language === "ru" && "active"} hover:text-[#afff2c] py-[8px] footer-lang text-[14px]`}>Русский</li>
                    </ul>
                </div>
            </nav >
            <div></div>
        </footer >
    )
}

export default Footer