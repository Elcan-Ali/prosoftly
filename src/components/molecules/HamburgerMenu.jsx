import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../../public/img/white-logo.svg"
import close from "../../../public/img/hamburger-close.svg"
import phone from "../../../public/img/mobile-menu-phone.png"
import { useDispatch, useSelector } from 'react-redux'
import { setHamburgerMenu, setModal } from '../../store/slices/layoutSlice'
import { useTranslation } from 'react-i18next'

function HamburgerMenu() {
    const dispatch = useDispatch()
    const { hamburgerMenu } = useSelector(store => store["layout"])
    const { t, i18n } = useTranslation()

    const closeMenu = () => {
        dispatch(setHamburgerMenu(false))
    }

    const handleLang = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("language", lang)
    }

    return (
        <div onClick={closeMenu} className={`lg:hidden block overlay fixed top-0 bottom-0 transition-all ${hamburgerMenu ? "right-0 left-0" : "left-auto -right-[100%] "}`}>
            <div onClick={(e) => e.stopPropagation()} className={`w-full md:w-[400px] py-[30px]  text-[#fff] overflow-y-auto h-full absolute ${hamburgerMenu ? "right-0 " : "-right-[100%] "} duration-[.3s] transition-all bg-[#181819]`}>
                <div className='flex-between  pb-[26px] px-[20px]' >
                    <Link><img src={logo} alt="logo" /></Link>
                    <img onClick={closeMenu} className='w-[16px] cursor-pointer' src={close} alt="close" />
                </div>
                <div>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>Menu</h4>
                    </div>
                    <ul className='px-[63px] pt-[20px] flex flex-col gap-[16px]'>
                        <li ><NavLink to="/about" className="navlink-mobile text-[20px]">{t("about")}</NavLink></li>
                        <li ><NavLink to="/services" className="navlink-mobile text-[20px]">{t("services")}</NavLink></li>
                        <li ><NavLink to="/projects" className="navlink-mobile text-[20px]">{t('projects')}</NavLink></li>
                        <li ><NavLink to="/blogs" className="navlink-mobile text-[20px]">{t("blogs")}</NavLink></li>
                        <li ><NavLink to="/contact" className="navlink-mobile text-[20px]">{t("contact")}</NavLink></li>
                    </ul>
                </div>
                <div className='pt-[30px]'>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>{t("contact-us")}</h4>
                    </div>
                    <div className='px-[63px] flex  flex-col gap-[20px] pt-[24px] '>
                        <Link to={"tel:+994708314376"} className='flex items-center  gap-[14px]'><img src={phone} alt="phone" /> +994 (70) 831 43 76</Link>
                        <button onClick={() => {
                            dispatch(setModal(true))
                            dispatch(setHamburgerMenu(false))

                        }} className='w-[100%] h-[40px] bg-green rounded-[20px] text-[20px] text-[#181819] font-medium'>{t('to-apply')}</button>
                    </div>
                </div>
                <div className='pt-[30px]'>
                    <div className='flex pt-[10px] gap-[35px] items-center'>
                        <span className='w-[28px] h-[1px] bg-[#5B5B5B]'></span>
                        <h4 className='leading-[1] text-[#5B5B5B] text-[14px] uppercase font-medium tracking-[.4px]'>{t("language-selection")}</h4>
                    </div>
                    <ul className='px-[63px] flex items-center text-[20px] gap-[26px] pb-[50px] pt-[24px] '>
                        <li onClick={() => handleLang('az')} className={`${i18n.language === "az" &&  "!border-[#Afff2c]"}  border-b-[3px] border-[transparent] hover:border-b-[#afff2c]   cursor-pointer `}>Az</li>
                        <li onClick={() => handleLang('en')} className={`${i18n.language === "en" &&  "!border-[#Afff2c]"}  border-b-[3px] border-[transparent] hover:border-b-[#afff2c]  cursor-pointer `}>En</li>
                        <li onClick={() => handleLang('ru')} className={`${i18n.language === "ru" &&  "!border-[#Afff2c]"}  border-b-[3px] border-[transparent] hover:border-b-[#afff2c]  cursor-pointer `}>Ru</li>

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default HamburgerMenu