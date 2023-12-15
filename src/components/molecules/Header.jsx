import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../public/img/logo.svg'
import HamburgerMenu from "../../../public/img/Menu.svg"
import { useDispatch } from 'react-redux'
import { setHamburgerMenu, setModal } from '../../store/slices/layoutSlice'
import Language from '../atoms/Language'
import { useTranslation } from 'react-i18next'
import { getData } from '../../service/getData'
import { Skeleton } from '@mui/material'

function Header() {

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



    const { t } = useTranslation()

    const dispatch = useDispatch()
    const openModal = () => {
        dispatch(setModal(true))
    }
    const openMenu = () => {
        dispatch(setHamburgerMenu(true))
    }

    return (
        <header className='container' >
            <nav className='py-[26px] flex-between'>
                <Link to="/"> <img src={Logo} alt="logo" /></Link>
                <ul className='hidden lg:flex items-center   text-[14px] xl:text-[16px] gap-[15px] xl:gap-[30px]'>
                    <li><NavLink className={"navbar-link"} to={"/about"}>{t("about")}</NavLink></li>
                    <li><NavLink className={"navbar-link"} to={"/services"}>{t("services")}</NavLink></li>
                    <li><NavLink className={"navbar-link"} to={"/projects"}>{t("projects")}</NavLink></li>
                    <li><NavLink className={"navbar-link"} to={"/blogs"}>{t("blogs")}</NavLink></li>
                    <li><NavLink className={"navbar-link"} to={"/contact"}>{t("contact")}</NavLink></li>
                </ul>
                <div className=' hidden lg:flex items-center text-[14px] gap-[15px] xl:text-[16px] xl:gap-[30px]'>
                    {
                        loading ?
                            <Skeleton variant='rounded' width={"130px"} height={"20px"} />
                            : <Link className='hover:opacity-70' to={`tel:${settings?.phone}`}>{settings?.phone}</Link>
                    }

                    <button onClick={openModal} className='transition-all btn1 px-[33px] py-[8px]'>{t("to-apply")}</button>
                    <Language />
                </div>
                <div onClick={openMenu} className='block lg:hidden'>
                    <img src={HamburgerMenu} alt="hamburger" />
                </div>
            </nav>
        </header>
    )
}

export default Header